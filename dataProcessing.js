class DataProcessor {
    constructor(config = {}) {
        this.config = {
            batchSize: config.batchSize || 1000,
            cacheEnabled: config.cacheEnabled || true,
            cacheDuration: config.cacheDuration || 3600000, // 1 hour in ms
            ...config
        };
        
        // Initialize LRU cache
        this.cache = new Map();
        this.cacheTimestamps = new Map();
    }

    async processDataBatch(data) {
        try {
            // Clean expired cache entries
            this._cleanCache();
            
            // Break data into batches for better performance
            const batches = this._createBatches(data);
            const results = [];
            
            // Process batches with progress tracking
            let processedCount = 0;
            for (const batch of batches) {
                const batchResult = await this._processBatch(batch);
                results.push(...batchResult);
                processedCount += batch.length;
                
                // Report progress
                if (this.config.onProgress) {
                    const progress = (processedCount / data.length) * 100;
                    this.config.onProgress(progress);
                }
            }
            
            return this._aggregateResults(results);
        } catch (error) {
            console.error('Error processing data:', error);
            throw error;
        }
    }

    _createBatches(data) {
        const batches = [];
        for (let i = 0; i < data.length; i += this.config.batchSize) {
            batches.push(data.slice(i, i + this.config.batchSize));
        }
        return batches;
    }

    async _processBatch(batch) {
        const results = await Promise.all(
            batch.map(item => this._processItem(item))
        );
        return results.filter(result => result !== null);
    }

    async _processItem(item) {
        const cacheKey = this._generateCacheKey(item);
        
        // Try to get from cache
        if (this.config.cacheEnabled) {
            const cachedResult = this._getFromCache(cacheKey);
            if (cachedResult) return cachedResult;
        }
        
        // Process item
        const result = await this._computeResult(item);
        
        // Cache result
        if (this.config.cacheEnabled) {
            this._addToCache(cacheKey, result);
        }
        
        return result;
    }

    async _computeResult(item) {
        // Example computation - replace with actual processing logic
        return new Promise(resolve => {
            const result = {
                id: item.id,
                value: item.value * 2,
                processed: true,
                timestamp: Date.now()
            };
            
            // Simulate async processing
            setTimeout(() => resolve(result), 10);
        });
    }

    _generateCacheKey(item) {
        // Generate unique cache key based on item properties
        return `${item.id}-${JSON.stringify(item.value)}`;
    }

    _getFromCache(key) {
        if (!this.cache.has(key)) return null;
        
        const timestamp = this.cacheTimestamps.get(key);
        if (Date.now() - timestamp > this.config.cacheDuration) {
            // Cache expired
            this.cache.delete(key);
            this.cacheTimestamps.delete(key);
            return null;
        }
        
        return this.cache.get(key);
    }

    _addToCache(key, value) {
        this.cache.set(key, value);
        this.cacheTimestamps.set(key, Date.now());
        
        // Implement LRU eviction if cache gets too large
        if (this.cache.size > this.config.maxCacheSize) {
            const oldestKey = this.cacheTimestamps.entries().next().value[0];
            this.cache.delete(oldestKey);
            this.cacheTimestamps.delete(oldestKey);
        }
    }

    _cleanCache() {
        const now = Date.now();
        for (const [key, timestamp] of this.cacheTimestamps) {
            if (now - timestamp > this.config.cacheDuration) {
                this.cache.delete(key);
                this.cacheTimestamps.delete(key);
            }
        }
    }

    _aggregateResults(results) {
        // Example aggregation - customize based on needs
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

// Example usage:
const processor = new DataProcessor({
    batchSize: 500,
    cacheEnabled: true,
    cacheDuration: 3600000, // 1 hour
    maxCacheSize: 1000,
    onProgress: (progress) => console.log(`Processing: ${progress.toFixed(1)}%`)
});

// Sample data
const data = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    value: Math.random() * 100
}));

// Process data
processor.processDataBatch(data)
    .then(result => console.log('Processing complete:', result))
    .catch(error => console.error('Processing failed:', error));
