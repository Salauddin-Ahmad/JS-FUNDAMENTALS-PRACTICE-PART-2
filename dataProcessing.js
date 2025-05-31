class DataProcessor {
    constructor(config = {}) {
        // Initialize config with default values and override with provided ones
        this.config = {
            batchSize: config.batchSize || 1000,
            cacheEnabled: config.cacheEnabled !== false, // default true
            cacheDuration: config.cacheDuration || 3600000, // default 1 hour
            ...config
        };

        // Initialize cache structures
        this.cache = new Map();                // Store cached results
        this.cacheTimestamps = new Map();      // Track timestamps for each cache entry
    }

    /**
     * Main method to process the entire dataset in batches
     */
    async processDataBatch(data) {
        try {
            // Clean up any expired cache entries
            this._cleanCache();

            // Split large dataset into smaller batches
            const batches = this._createBatches(data);
            const results = [];

            let processedCount = 0;

            // Process each batch sequentially
            for (const batch of batches) {
                const batchResult = await this._processBatch(batch);
                results.push(...batchResult);
                processedCount += batch.length;

                // Optionally report progress via callback
                if (this.config.onProgress) {
                    const progress = (processedCount / data.length) * 100;
                    this.config.onProgress(progress);
                }
            }

            // Aggregate and return final result
            return this._aggregateResults(results);
        } catch (error) {
            console.error('Error processing data:', error);
            throw error;
        }
    }

    /**
     * Splits input data into batches of configured size
     */
    _createBatches(data) {
        const batches = [];
        for (let i = 0; i < data.length; i += this.config.batchSize) {
            batches.push(data.slice(i, i + this.config.batchSize));
        }
        return batches;
    }

    /**
     * Processes a single batch by processing each item in parallel
     */
    async _processBatch(batch) {
        const results = await Promise.all(
            batch.map(item => this._processItem(item))
        );
        // Filter out null values (e.g., from cache expiration)
        return results.filter(result => result !== null);
    }

    /**
     * Processes a single item with caching support
     */
    async _processItem(item) {
        const cacheKey = this._generateCacheKey(item);

        // Return cached result if available and valid
        if (this.config.cacheEnabled) {
            const cachedResult = this._getFromCache(cacheKey);
            if (cachedResult) return cachedResult;
        }

        // Compute the result if not cached
        const result = await this._computeResult(item);

        // Store in cache for future use
        if (this.config.cacheEnabled) {
            this._addToCache(cacheKey, result);
        }

        return result;
    }

    /**
     * Simulates computation or transformation logic for an item
     * Replace this with your actual business logic
     */
    async _computeResult(item) {
        return new Promise(resolve => {
            const result = {
                id: item.id,
                value: item.value * 2,   // Sample transformation
                processed: true,
                timestamp: Date.now()
            };

            // Simulate async work
            setTimeout(() => resolve(result), 10);
        });
    }

    /**
     * Generates a unique cache key for a given item
     */
    _generateCacheKey(item) {
        return `${item.id}-${JSON.stringify(item.value)}`;
    }

    /**
     * Retrieves a cached result if it hasn't expired
     */
    _getFromCache(key) {
        if (!this.cache.has(key)) return null;

        const timestamp = this.cacheTimestamps.get(key);
        if (Date.now() - timestamp > this.config.cacheDuration) {
            // Cache expired - remove entry
            this.cache.delete(key);
            this.cacheTimestamps.delete(key);
            return null;
        }

        return this.cache.get(key);
    }

    /**
     * Adds an entry to the cache and tracks its timestamp
     */
    _addToCache(key, value) {
        this.cache.set(key, value);
        this.cacheTimestamps.set(key, Date.now());

        // If cache exceeds limit, evict the oldest entry (LRU logic)
        if (this.cache.size > this.config.maxCacheSize) {
            const oldestKey = this.cacheTimestamps.entries().next().value[0];
            this.cache.delete(oldestKey);
            this.cacheTimestamps.delete(oldestKey);
        }
    }

    /**
     * Periodically removes expired cache entries
     */
    _cleanCache() {
        const now = Date.now();
        for (const [key, timestamp] of this.cacheTimestamps) {
            if (now - timestamp > this.config.cacheDuration) {
                this.cache.delete(key);
                this.cacheTimestamps.delete(key);
            }
        }
    }

    /**
     * Aggregates final results: total count, summary stats, etc.
     */
    _aggregateResults(results) {
        return {
            items: results,
            totalCount: results.length,
            timestamp: Date.now(),
            summary: {
                totalValue: results.reduce((sum, item) => sum + item.value, 0),
                averageValue: results.reduce((sum, item) => sum + item.value, 0) / results.length
            }
        };
    }
}

// Example usage
const processor = new DataProcessor({
    batchSize: 500,                          // Size of each processing batch
    cacheEnabled: true,                      // Enable caching
    cacheDuration: 3600000,                  // Cache duration: 1 hour
    maxCacheSize: 1000,                      // Max items in cache before eviction
    onProgress: (progress) => console.log(`Processing: ${progress.toFixed(1)}%`)
});

// Generate sample input data
const data = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    value: Math.random() * 100
}));

// Process the data and handle result
processor.processDataBatch(data)
    .then(result => console.log('Processing complete:', result))
    .catch(error => console.error('Processing failed:', error));
