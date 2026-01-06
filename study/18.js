const jumpAndStepSearch = {
    'jump-search': {
        title: 'Jump Search',
        tags: ["Linear datastructure", "Block Search", "Comparison based"],
        description: `
            <h2>Problem Description</h2>
            <p>Search for a target by jumping forward by fixed steps of √n and then performing a linear search within the block.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [0, 1, 1, 2, 3, 5, 8, 13, 21], target = 5
Output: 5</code></pre>
            <h3>Constraints:</h3>
            <ul><li>Array must be sorted.</li></ul>
        `,
        starterCode: `function jumpSearch(arr, target) {\n    // Your code here\n}`
    },
    'exponential-search': {
        title: 'Exponential Search',
        tags: ["Linear datastructure", "Infinite Search", "Comparison based"],
        description: `
            <h2>Problem Description</h2>
            <p>Useful for searching in unbounded or infinite lists. Find the range where the target resides by doubling the index, then binary search.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [1, 2, 4, 8, 16, 32, 64], target = 16
Output: 4</code></pre>
            <h3>Constraints:</h3>
            <ul><li>Array must be sorted.</li></ul>
        `,
        starterCode: `function exponentialSearch(arr, target) {\n    // Your code here\n}`
    },
    // ... 8 more (Fibonacci Search, Meta Binary Search, etc.)
};