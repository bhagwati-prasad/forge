const classicBinarySearch = {
    'standard-binary-search': {
        title: 'Binary Search',
        tags: ["Linear datastructure", "Divide and Conquer", "Comparison based", "Logarithmic"],
        description: `<h2>Problem Description</h2><p>Search for target in a sorted array.</p><h3>Example 1:</h3><pre><code>Input: nums = [1, 2, 3], target = 2\nOutput: 1</code></pre><h3>Constraints:</h3><ul><li>Input array must be sorted.</li></ul>`,
        starterCode: `function binarySearch(nums, target) {}`
    },
    'lower-bound-search': {
        title: 'Binary Search: Lower Bound',
        tags: ["Linear datastructure", "Boundary Search", "Sorted"],
        description: `<h2>Problem Description</h2><p>Find the first index where <code>arr[i] >= target</code>.</p><h3>Example 1:</h3><pre><code>Input: arr = [1, 2, 4, 4, 5], target = 4\nOutput: 2</code></pre><h3>Constraints:</h3><ul><li>Returns length if target > max.</li></ul>`,
        starterCode: `function lowerBound(arr, target) {}`
    },
    'upper-bound-search': {
        title: 'Binary Search: Upper Bound',
        tags: ["Linear datastructure", "Boundary Search", "Sorted"],
        description: `<h2>Problem Description</h2><p>Find the first index where <code>arr[i] > target</code>.</p><h3>Example 1:</h3><pre><code>Input: arr = [1, 2, 4, 4, 5], target = 4\nOutput: 4</code></pre>`,
        starterCode: `function upperBound(arr, target) {}`
    },
    'search-in-rotated-array': {
        title: 'Search in Rotated Sorted Array',
        tags: ["Linear datastructure", "Divide and Conquer", "Sorted Rotated"],
        description: `<h2>Problem Description</h2><p>Find target in an array that was rotated at a pivot.</p><h3>Example 1:</h3><pre><code>Input: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4</code></pre>`,
        starterCode: `function searchRotated(nums, target) {}`
    },
    'find-peak-element': {
        title: 'Find Peak Element',
        tags: ["Linear datastructure", "Logarithmic", "Binary Search logic"],
        description: `<h2>Problem Description</h2><p>Find an element that is strictly greater than its neighbors.</p><h3>Example 1:</h3><pre><code>Input: nums = [1, 2, 3, 1]\nOutput: 2</code></pre>`,
        starterCode: `function findPeak(nums) {}`
    },
    'sqrt-binary-search': {
        title: 'Integer Square Root',
        tags: ["Arithmetic based", "Binary Search on Answer", "Logarithmic"],
        description: `<h2>Problem Description</h2><p>Find the square root of <code>x</code> using binary search, truncated to integer.</p><h3>Example 1:</h3><pre><code>Input: x = 8\nOutput: 2</code></pre>`,
        starterCode: `function mySqrt(x) {}`
    },
    'search-2d-matrix': {
        title: 'Binary Search 2D Matrix',
        tags: ["Matrix", "Linear datastructure mapping", "Sorted"],
        description: `<h2>Problem Description</h2><p>Search a matrix where each row is sorted and the first integer of a row is greater than the last of the previous row.</p><h3>Example 1:</h3><pre><code>Input: matrix = [[1,3],[5,7]], target = 3\nOutput: true</code></pre>`,
        starterCode: `function searchMatrix(matrix, target) {}`
    },
    'find-min-rotated': {
        title: 'Find Minimum in Rotated Sorted Array',
        tags: ["Linear datastructure", "Boundary Search", "Logarithmic"],
        description: `<h2>Problem Description</h2><p>Identify the smallest element in a rotated sorted array.</p><h3>Example 1:</h3><pre><code>Input: nums = [3,4,5,1,2]\nOutput: 1</code></pre>`,
        starterCode: `function findMin(nums) {}`
    },
    'h-index-ii': {
        title: 'H-Index II',
        tags: ["Linear datastructure", "Optimization", "Sorted"],
        description: `<h2>Problem Description</h2><p>Find the H-index from a sorted array of citations.</p><h3>Example 1:</h3><pre><code>Input: citations = [0,1,3,5,6]\nOutput: 3</code></pre>`,
        starterCode: `function hIndex(citations) {}`
    },
    'split-array-largest-sum': {
        title: 'Split Array Largest Sum',
        tags: ["Binary Search on Answer", "Greedy", "Hard"],
        description: `<h2>Problem Description</h2><p>Split array into <code>k</code> subarrays such that the maximum sum among them is minimized.</p><h3>Example 1:</h3><pre><code>Input: nums = [7,2,5,10,8], k = 2\nOutput: 18</code></pre>`,
        starterCode: `function splitArray(nums, k) {}`
    }
};