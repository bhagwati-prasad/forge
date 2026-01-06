const stringMatchingSecondary = {
    'z-algorithm': {
        title: 'Z-Algorithm',
        tags: ["String matching", "Linear datastructure", "Pre-processing"],
        description: `
            <h2>Problem Description</h2>
            <p>Construct a Z-array where Z[i] is the length of the longest common prefix between S and the suffix of S starting at i.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: S = "aabcaabx"
Output: [0, 1, 0, 0, 3, 1, 0, 0]</code></pre>
        `,
        starterCode: `function zAlgorithm(S) {\n    // Your code here\n}`
    },
    'aho-corasick': {
        title: 'Aho-Corasick (Multi-Pattern)',
        tags: ["String matching", "Trie based", "Automata based", "Non linear datastructure"],
        description: `
            <h2>Problem Description</h2>
            <p>Find all occurrences of multiple patterns in a text simultaneously using a finite-state machine.</p>
        `,
        starterCode: `function ahoCorasick(text, patterns) {\n    // Your code here\n}`
    },
    // ... 8 more (Manacher's, Suffix Array Search, etc.)
};