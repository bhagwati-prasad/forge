const specializedSearch = {
    'unbounded-binary-search': {
        title: 'Unbounded Binary Search',
        tags: ["Linear datastructure", "Divide and Conquer", "Infinite Search"],
        description: `<h2>Problem Description</h2><p>Find the first <code>i</code> such that <code>f(i) > 0</code> for a monotonically increasing function.</p>`,
        starterCode: `function findFirstPositive(f) {}`
    },
    'parallel-linear-search': {
        title: 'Parallel Linear Search',
        tags: ["Parallel processing", "Linear datastructure", "Multi-threaded logic"],
        description: `<h2>Problem Description</h2><p>Divide the array into <code>P</code> segments and search each segment in parallel.</p>`,
        starterCode: `function parallelSearch(arr, target, numThreads) {}`
    },
    'quantum-grover-simulation': {
        title: 'Grover\'s Algorithm Simulation',
        tags: ["Quantum computing", "Probabilistic", "Non comparison based"],
        description: `<h2>Problem Description</h2><p>Simulate a quantum search in an unsorted database with O(√N) amplitude amplification.</p>`,
        starterCode: `function groverSearch(n, target) {}`
    },
    'spatial-quadtree-search': {
        title: 'Spatial Search (QuadTree)',
        tags: ["Non linear datastructure", "Spatial Indexing", "Tree Search"],
        description: `<h2>Problem Description</h2><p>Search for points within a 2D bounding box using a QuadTree.</p>`,
        starterCode: `function queryRange(boundary) {}`
    },
    'cache-oblivious-search': {
        title: 'Cache-Oblivious Van Emde Boas Search',
        tags: ["Tree Search", "Optimization", "Cache-friendly"],
        description: `<h2>Problem Description</h2><p>Search in a layout that optimizes for cache performance regardless of cache size.</p>`,
        starterCode: `function vEB_Search(root, key) {}`
    },
    'simd-vector-search': {
        title: 'SIMD Vector Search',
        tags: ["Hardware optimization", "Linear datastructure", "Parallel processing"],
        description: `<h2>Problem Description</h2><p>Simulate a Single Instruction Multiple Data search that compares 4 elements at once.</p>`,
        starterCode: `function simdSearch(arr, target) {}`
    },
    'external-search-btree': {
        title: 'External Memory Search',
        tags: ["B-Tree", "Disk-optimized", "Non linear datastructure"],
        description: `<h2>Problem Description</h2><p>Search in a dataset too large for RAM using multi-way splits.</p>`,
        starterCode: `function externalSearch(file, target) {}`
    },
    'suffix-array-lcp-search': {
        title: 'Longest Common Prefix Search',
        tags: ["String matching", "Suffix based", "Sorted"],
        description: `<h2>Problem Description</h2><p>Find the LCP between two suffixes using a pre-computed LCP array.</p>`,
        starterCode: `function findLCP(suffixArr, lcpArr, i, j) {}`
    },
    'ball-tree-nearest-neighbor': {
        title: 'Ball Tree Search',
        tags: ["Spatial Indexing", "Non linear datastructure", "High-dimensional"],
        description: `<h2>Problem Description</h2><p>Search for the nearest neighbor in high-dimensional space using a hypersphere-based tree.</p>`,
        starterCode: `function ballTreeSearch(root, queryPoint) {}`
    },
    'locality-sensitive-hashing-search': {
        title: 'LSH (Locality Sensitive Hashing)',
        tags: ["Probabilistic", "Hashing based", "High-dimensional"],
        description: `<h2>Problem Description</h2><p>Search for similar items in high-dimensional space by hashing similar inputs to the same buckets.</p>`,
        starterCode: `function lshSearch(query) {}`
    }
};