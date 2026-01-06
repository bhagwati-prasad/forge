const probabilisticSearch = {
    'hash-table-search': {
        title: 'Hash Table Search',
        tags: ["Hashing based", "Constant time", "Non comparison based"],
        description: `<h2>Problem Description</h2><p>Retrieve a value by key using a hash function.</p>`,
        starterCode: `function hashGet(table, key) {}`
    },
    'bloom-filter-search': {
        title: 'Bloom Filter Search',
        tags: ["Probabilistic", "Bit manipulation based", "Space efficient"],
        description: `<h2>Problem Description</h2><p>Test for set membership. Return <code>false</code> (definitely not in set) or <code>true</code> (possibly in set).</p>`,
        starterCode: `function isMember(filter, item) {}`
    },
    'cuckoo-hash-search': {
        title: 'Cuckoo Hashing Search',
        tags: ["Hashing based", "Constant time", "Multi-hash"],
        description: `<h2>Problem Description</h2><p>Search using two hash functions and two potential locations for ogni key.</p>`,
        starterCode: `function cuckooSearch(t1, t2, key) {}`
    },
    'linear-probing-search': {
        title: 'Linear Probing Search',
        tags: ["Hashing based", "Open Addressing", "Iterative"],
        description: `<h2>Problem Description</h2><p>Search in a hash table that uses linear probing to resolve collisions.</p>`,
        starterCode: `function searchLinearProbing(table, key) {}`
    },
    'quadratic-probing-search': {
        title: 'Quadratic Probing Search',
        tags: ["Hashing based", "Open Addressing", "Arithmetic based"],
        description: `<h2>Problem Description</h2><p>Search using quadratic increments (1, 4, 9...) to resolve collisions.</p>`,
        starterCode: `function searchQuadraticProbing(table, key) {}`
    },
    'double-hashing-search': {
        title: 'Double Hashing Search',
        tags: ["Hashing based", "Open Addressing", "Multi-hash"],
        description: `<h2>Problem Description</h2><p>Search using a second hash function to determine the step size for collision resolution.</p>`,
        starterCode: `function searchDoubleHash(table, key) {}`
    },
    'perfect-hashing-search': {
        title: 'Perfect Hashing Search',
        tags: ["Hashing based", "Constant time", "Static data"],
        description: `<h2>Problem Description</h2><p>Search in a table guaranteed to have zero collisions (pre-calculated).</p>`,
        starterCode: `function perfectHashGet(table, key) {}`
    },
    'distributed-hash-search': {
        title: 'DHT (Distributed Hash Table) Search',
        tags: ["Distributed systems", "Hashing based", "Network based"],
        description: `<h2>Problem Description</h2><p>Search for a key in a network-distributed hash table (e.g., Chord logic).</p>`,
        starterCode: `function dhtLookup(node, key) {}`
    },
    'quotient-filter-search': {
        title: 'Quotient Filter Search',
        tags: ["Probabilistic", "Hashing based", "Space efficient"],
        description: `<h2>Problem Description</h2><p>An alternative to Bloom Filters that supports deletions and better cache locality.</p>`,
        starterCode: `function quotientFilterSearch(filter, key) {}`
    },
    'count-min-sketch-search': {
        title: 'Count-Min Sketch (Frequency Search)',
        tags: ["Probabilistic", "Hashing based", "Counting based"],
        description: `<h2>Problem Description</h2><p>Estimate the frequency of an element in a stream.</p>`,
        starterCode: `function estimateFrequency(sketch, item) {}`
    }
};