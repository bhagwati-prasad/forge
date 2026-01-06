const classicBinarySearch = {
    'standard-binary-search': {
        title: 'Standard Binary Search',
        tags: ["Linear datastructure", "Divide and Conquer", "Comparison based", "Logarithmic"],
        description: `
            <h2>Problem Description</h2>
            <p>Find the index of <code>target</code> in a sorted array using the divide and conquer approach.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4</code></pre>
            <h3>Constraints:</h3>
            <ul><li>Array must be sorted in ascending order.</li></ul>
        `,
        starterCode: `function binarySearch(nums, target) {\n    // Your code here\n}`
    },
    'search-insert-position': {
        title: 'Search Insert Position',
        tags: ["Linear datastructure", "Comparison based", "Boundary Search"],
        description: `
            <h2>Problem Description</h2>
            <p>Return the index where <code>target</code> is found. If not, return the index where it would be if it were inserted in order.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,3,5,6], target = 2
Output: 1</code></pre>
            <h3>Constraints:</h3>
            <ul><li>nums is sorted in ascending order.</li></ul>
        `,
        starterCode: `function searchInsert(nums, target) {\n    // Your code here\n}`
    },
    // ... 8 more (Find First/Last, Search in Rotated, Find Peak, etc.)
};