// Deep sorting and filtering algorithm
function deepSortAndFilter(data, options) {
    // Destructure options with defaults
    const {
        sortBy = null,
        sortOrder = 'asc',  // 'asc' or 'desc'
        filterBy = null,
        filterValue = null,
        depth = 0
    } = options;

    // Helper function to compare values for sorting
    function compare(a, b) {
        if (typeof a === 'string' && typeof b === 'string') {
            return sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
        }
        if (typeof a === 'number' && typeof b === 'number') {
            return sortOrder === 'asc' ? a - b : b - a;
        }
        return 0;
    }

    // Helper function to filter elements
    function filterElement(item) {
        if (!filterBy || filterValue === undefined) return true;

        if (typeof item === 'object' && item !== null) {
            return item[filterBy] === filterValue;
        }
        return false;
    }

    // Function to recursively traverse and sort/filter the data
    function processData(item, currentDepth) {
        if (Array.isArray(item)) {
            return item
                .filter(filterElement)
                .map(subItem => processData(subItem, currentDepth + 1)) // Recurse through subitems
                .sort((a, b) => compare(a[sortBy], b[sortBy]));  // Sort items if sorting is enabled
        } else if (typeof item === 'object' && item !== null) {
            const sortedObject = {};
            Object.keys(item)
                .sort((a, b) => compare(a, b))  // Sort the keys of the object
                .forEach(key => {
                    if (filterElement(item[key])) {
                        sortedObject[key] = processData(item[key], currentDepth + 1);  // Recurse into object
                    }
                });
            return sortedObject;
        }
        return item;
    }

    // Start processing the data based on initial options
    return processData(data, depth);
}

// Example usage
const nestedData = [
    {
        id: 2,
        name: 'Zebra',
        details: { age: 5, species: 'Mammal' },
        tags: ['wild', 'striped'],
    },
    {
        id: 1,
        name: 'Elephant',
        details: { age: 10, species: 'Mammal' },
        tags: ['wild', 'large'],
    },
    {
        id: 3,
        name: 'Lion',
        details: { age: 7, species: 'Mammal' },
        tags: ['wild', 'feline'],
    }
];

// Sorting by 'name' and filtering where 'species' is 'Mammal'
const options = {
    sortBy: 'name',           // Sort by the 'name' key
    sortOrder: 'asc',         // Ascending order
    filterBy: 'species',     // Filter by 'species'
    filterValue: 'Mammal',    // Filter only 'Mammal' species
    depth: 0                  // Start from depth 0
};

console.log(JSON.stringify(deepSortAndFilter(nestedData, options), null, 2));
