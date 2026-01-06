const basicLinearSearch = {
    'standard-linear-search': {
        title: 'Standard Linear Search',
        tags: ["Linear datastructure", "Non counting based", "Comparison based", "Iterative"],
        description: `<h2>Problem Description</h2><p>Find the index of the first occurrence of <code>target</code> in <code>arr</code>.</p><h3>Example 1:</h3><pre><code>Input: arr = [10, 20, 30], target = 20\nOutput: 1</code></pre><h3>Constraints:</h3><ul><li>1 <= arr.length <= 10^5</li></ul>`,
        starterCode: `function linearSearch(arr, target) {}`
    },
    'sentinel-linear-search': {
        title: 'Sentinel Linear Search',
        tags: ["Linear datastructure", "Optimization", "Comparison based"],
        description: `<h2>Problem Description</h2><p>Search using a sentinel value at the end to eliminate the need for a boundary check in the loop.</p><h3>Example 1:</h3><pre><code>Input: arr = [4, 1, 8], target = 8\nOutput: 2</code></pre><h3>Constraints:</h3><ul><li>In-place modification of array allowed.</li></ul>`,
        starterCode: `function sentinelSearch(arr, target) {}`
    },
    'recursive-linear-search': {
        title: 'Recursive Linear Search',
        tags: ["Linear datastructure", "Recursive", "Non counting based"],
        description: `<h2>Problem Description</h2><p>Search for a target value using recursion instead of iterative loops.</p><h3>Example 1:</h3><pre><code>Input: arr = [1, 2, 3], target = 3\nOutput: 2</code></pre><h3>Constraints:</h3><ul><li>Max recursion depth is N.</li></ul>`,
        starterCode: `function recursiveSearch(arr, target, index = 0) {}`
    },
    'global-linear-search': {
        title: 'Global Linear Search',
        tags: ["Linear datastructure", "Counting based", "Multi-result"],
        description: `<h2>Problem Description</h2><p>Find ALL indices where the target occurs in the array.</p><h3>Example 1:</h3><pre><code>Input: arr = [1, 2, 1, 3], target = 1\nOutput: [0, 2]</code></pre><h3>Constraints:</h3><ul><li>Return an empty array if not found.</li></ul>`,
        starterCode: `function globalSearch(arr, target) {}`
    },
    'linear-search-last-occurrence': {
        title: 'Search Last Occurrence',
        tags: ["Linear datastructure", "Comparison based", "Reverse traversal"],
        description: `<h2>Problem Description</h2><p>Find the index of the last occurrence of a target value.</p><h3>Example 1:</h3><pre><code>Input: arr = [1, 2, 3, 2], target = 2\nOutput: 3</code></pre><h3>Constraints:</h3><ul><li>Traverse from end to start for optimization.</li></ul>`,
        starterCode: `function lastOccurrence(arr, target) {}`
    },
    'search-in-2d-array-linear': {
        title: 'Linear Search in 2D Array',
        tags: ["Matrix", "Non linear datastructure", "Iterative"],
        description: `<h2>Problem Description</h2><p>Find coordinates [row, col] of target in an unsorted 2D grid.</p><h3>Example 1:</h3><pre><code>Input: grid = [[1,2],[3,4]], target = 3\nOutput: [1, 0]</code></pre><h3>Constraints:</h3><ul><li>Grid may not be square.</li></ul>`,
        starterCode: `function search2D(grid, target) {}`
    },
    'search-in-string': {
        title: 'Linear Search in String',
        tags: ["String", "Linear datastructure", "Character based"],
        description: `<h2>Problem Description</h2><p>Check if a specific character exists in a string and return its index.</p><h3>Example 1:</h3><pre><code>Input: s = "hello", char = "e"\nOutput: 1</code></pre><h3>Constraints:</h3><ul><li>String is case-sensitive.</li></ul>`,
        starterCode: `function searchString(s, char) {}`
    },
    'search-min-max': {
        title: 'Find Minimum and Maximum',
        tags: ["Linear datastructure", "Comparison based", "Optimization"],
        description: `<h2>Problem Description</h2><p>Find both the minimum and maximum value in one pass.</p><h3>Example 1:</h3><pre><code>Input: [3, 1, 9, 4]\nOutput: {min: 1, max: 9}</code></pre><h3>Constraints:</h3><ul><li>Limit comparisons to 1.5 * N.</li></ul>`,
        starterCode: `function findMinMax(arr) {}`
    },
    'linear-search-transposition': {
        title: 'Search with Transposition',
        tags: ["Linear datastructure", "Self-organizing", "Heuristic"],
        description: `<h2>Problem Description</h2><p>Perform linear search. When target is found, swap it with the element before it to speed up future searches.</p><h3>Example 1:</h3><pre><code>Input: arr = [1, 2, 3], target = 3\nOutput: 2, arr becomes [1, 3, 2]</code></pre>`,
        starterCode: `function transpositionSearch(arr, target) {}`
    },
    'linear-search-move-to-front': {
        title: 'Move-to-Front Search',
        tags: ["Linear datastructure", "Self-organizing", "Optimization"],
        description: `<h2>Problem Description</h2><p>Search for target. When found, move it to index 0 of the array.</p><h3>Example 1:</h3><pre><code>Input: arr = [1, 2, 3], target = 3\nOutput: 0, arr becomes [3, 1, 2]</code></pre>`,
        starterCode: `function moveToFrontSearch(arr, target) {}`
    }
};