const jumpAndStepSearch = {
    'jump-search': {
        title: 'Jump Search',
        tags: ["Linear datastructure", "Block Search", "Comparison based"],
        description: `<h2>Problem Description</h2><p>Search by jumping blocks of fixed size √n.</p><h3>Example 1:</h3><pre><code>Input: arr = [1, 2, 3, 5, 8], target = 5\nOutput: 3</code></pre>`,
        starterCode: `function jumpSearch(arr, target) {}`
    },
    'exponential-search': {
        title: 'Exponential Search',
        tags: ["Linear datastructure", "Infinite Search", "Sorted"],
        description: `<h2>Problem Description</h2><p>Find range by doubling indices (1, 2, 4...), then binary search.</p><h3>Example 1:</h3><pre><code>Input: arr = [1, 2, 10, 20], target = 10\nOutput: 2</code></pre>`,
        starterCode: `function exponentialSearch(arr, target) {}`
    },
    'fibonacci-search': {
        title: 'Fibonacci Search',
        tags: ["Linear datastructure", "Divide and Conquer", "Arithmetic based"],
        description: `<h2>Problem Description</h2><p>Divide array using Fibonacci numbers as split points.</p><h3>Example 1:</h3><pre><code>Input: arr = [10, 22, 35, 40, 45], target = 40\nOutput: 3</code></pre>`,
        starterCode: `function fibonacciSearch(arr, target) {}`
    },
    'meta-binary-search': {
        title: 'Meta Binary Search (One-Sided)',
        tags: ["Linear datastructure", "Bit manipulation based", "Logarithmic"],
        description: `<h2>Problem Description</h2><p>Perform binary search by constructing the index bit by bit from most significant.</p><h3>Example 1:</h3><pre><code>Input: arr = [1, 2, 5, 10], target = 5\nOutput: 2</code></pre>`,
        starterCode: `function metaBinarySearch(arr, target) {}`
    },
    'block-search-variable': {
        title: 'Variable Block Search',
        tags: ["Linear datastructure", "Optimization", "Block Search"],
        description: `<h2>Problem Description</h2><p>Search using blocks whose sizes decrease as we approach the target.</p><h3>Example 1:</h3><pre><code>Input: arr = [1, 5, 10, 15, 20], target = 15\nOutput: 3</code></pre>`,
        starterCode: `function variableBlockSearch(arr, target) {}`
    },
    'linear-skip-search': {
        title: 'Linear Skip Search',
        tags: ["Linear datastructure", "Skip-list logic", "Iterative"],
        description: `<h2>Problem Description</h2><p>Search using a secondary 'express' lane of pointers that skip multiple elements.</p>`,
        starterCode: `function skipSearch(list, target) {}`
    },
    'two-step-search': {
        title: 'Two-Step Linear Search',
        tags: ["Linear datastructure", "Optimization", "Comparison based"],
        description: `<h2>Problem Description</h2><p>Compare two elements at a time (index i and n-i-1) to find the target faster.</p>`,
        starterCode: `function twoStepSearch(arr, target) {}`
    },
    'fixed-step-unbounded': {
        title: 'Fixed-Step Unbounded Search',
        tags: ["Infinite Search", "Linear datastructure", "Iterative"],
        description: `<h2>Problem Description</h2><p>Search in a sorted array of unknown size by stepping forward by a constant K until an upper bound is found.</p>`,
        starterCode: `function unboundedStepSearch(arr, target, k) {}`
    },
    'binary-step-search': {
        title: 'Binary Step Search',
        tags: ["Linear datastructure", "Logarithmic", "Step-based"],
        description: `<h2>Problem Description</h2><p>A hybrid of jump search and binary search where the jump size is a power of 2.</p>`,
        starterCode: `function binaryStepSearch(arr, target) {}`
    },
    'square-root-decomposition-search': {
        title: 'Sqrt Decomposition Search',
        tags: ["Block Search", "Linear datastructure", "Optimization"],
        description: `<h2>Problem Description</h2><p>Search using pre-calculated block metadata (like min/max of each √n block).</p>`,
        starterCode: `function sqrtDecompositionSearch(arr, target) {}`
    }
};