const stringMatchingPrimary = {
    'kmp-search': {
        title: 'Knuth-Morris-Pratt (KMP)',
        tags: ["String matching", "Linear datastructure", "Pre-processing based", "Non comparison based"],
        description: `
            <h2>Problem Description</h2>
            <p>Find the first occurrence of a pattern in a text using a Partial Match Table (LPS) to avoid redundant comparisons.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: text = "abcxabcdabcdabcy", pattern = "abcdabcy"
Output: 8</code></pre>
            <h3>Constraints:</h3>
            <ul><li>Time complexity must be O(N + M).</li></ul>
        `,
        starterCode: `function kmpSearch(text, pattern) {\n    // Your code here\n}`
    },
    'rabin-karp': {
        title: 'Rabin-Karp (Rolling Hash)',
        tags: ["String matching", "Hashing based", "Rolling Hash", "Probabilistic"],
        description: `
            <h2>Problem Description</h2>
            <p>Use hashing to find any one of a set of pattern strings in a text.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: text = "GEEKS FOR GEEKS", pattern = "GEEKS"
Output: [0, 10]</code></pre>
        `,
        starterCode: `function rabinKarp(text, pattern) {\n    // Your code here\n}`
    },
    // ... 8 more (Naive String, Boyer-Moore, Sunday, etc.)
};