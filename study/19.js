const mathematicalSearch = {
    'interpolation-search': {
        title: 'Interpolation Search',
        tags: ["Linear datastructure", "Non counting based", "Arithmetic based", "Probabilistic"],
        description: `
            <h2>Problem Description</h2>
            <p>Estimate the position of the target based on the values at the bounds. Best for uniformly distributed sorted data.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [10, 20, 30, 40, 50], target = 40
Output: 3</code></pre>
            <h3>Constraints:</h3>
            <ul><li>Data should be uniformly distributed for O(log log n) performance.</li></ul>
        `,
        starterCode: `function interpolationSearch(arr, target) {\n    // Your code here\n}`
    },
    'ternary-search': {
        title: 'Ternary Search',
        tags: ["Linear datastructure", "Divide and Conquer", "Unimodal Search"],
        description: `
            <h2>Problem Description</h2>
            <p>Divide the array into three parts instead of two. Often used to find the maximum or minimum of a unimodal function.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: f(x) = -x^2 + 4x, Range [0, 4]
Output: 2 (The maximum)</code></pre>
        `,
        starterCode: `function ternarySearch(low, high) {\n    // Your code here\n}`
    },
    // ... 8 more (Golden Section Search, Search on Unimodal, etc.)
};