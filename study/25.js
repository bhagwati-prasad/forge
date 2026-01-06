const probabilisticSearch = {
    'hash-table-search': {
        title: 'Hash Table Search',
        tags: ["Non comparison based", "Hashing based", "Constant time"],
        description: `
            <h2>Problem Description</h2>
            <p>Search for a key in a Hash Table with collision resolution (Chaining or Open Addressing).</p>
        `,
        starterCode: `function hashSearch(hashTable, key) {\n    // Your code here\n}`
    },
    'bloom-filter-search': {
        title: 'Bloom Filter Membership Test',
        tags: ["Probabilistic", "Bit manipulation", "Space efficient", "Non counting based"],
        description: `
            <h2>Problem Description</h2>
            <p>Test if an element is a member of a set. False positives are possible, but false negatives are not.</p>
        `,
        starterCode: `function bloomTest(element) {\n    // Your code here\n}`
    },
    // ... 8 more (Cuckoo Hashing Search, Perfect Hashing, etc.)
};