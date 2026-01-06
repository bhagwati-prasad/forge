const basicLinearSearch = {
    'standard-linear-search': {
        title: 'Standard Linear Search',
        tags: ["Linear datastructure", "Non counting based", "Comparison based", "Iterative"],
        description: `
            <h2>Problem Description</h2>
            <p>Given an array <code>arr</code> and a <code>target</code> value, find the index of the first occurrence of <code>target</code>. Return -1 if not found.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [10, 50, 30, 70, 80], target = 30
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: arr = [1, 2, 3], target = 5
Output: -1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= arr.length <= 10^5</li>
                <li>-10^9 <= arr[i], target <= 10^9</li>
            </ul>
        `,
        starterCode: `function linearSearch(arr, target) {\n    // Your code here\n}`
    },
    'sentinel-linear-search': {
        title: 'Sentinel Linear Search',
        tags: ["Linear datastructure", "Optimization", "Comparison based"],
        description: `
            <h2>Problem Description</h2>
            <p>Implement linear search using a <strong>sentinel</strong> to reduce the number of comparisons in the loop boundary.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [4, 1, 8, 2], target = 8
Output: 2</code></pre>
            <h3>Constraints:</h3>
            <ul><li>Array is not necessarily sorted.</li></ul>
        `,
        starterCode: `function sentinelSearch(arr, target) {\n    // Your code here\n}`
    },
    // ... 8 more problems (Recursive Linear, Global Search, Last Occurrence, etc.)
};