const stringMatchingPrimary = {
    'naive-string-search': {
        title: 'Naive String Search',
        tags: ["String matching", "Linear datastructure", "Brute force"],
        description: `<h2>Problem Description</h2><p>Check every possible position in the text for the pattern.</p><h3>Example 1:</h3><pre><code>Input: text = "hello", pattern = "ell"\nOutput: 1</code></pre>`,
        starterCode: `function naiveSearch(text, pattern) {}`
    },
    'kmp-search': {
        title: 'Knuth-Morris-Pratt (KMP)',
        tags: ["String matching", "Pre-processing based", "Non counting based"],
        description: `<h2>Problem Description</h2><p>Search using a Longest Prefix Suffix (LPS) array to skip redundant comparisons.</p><h3>Example 1:</h3><pre><code>Input: text = "ababc", pattern = "abc"\nOutput: 2</code></pre>`,
        starterCode: `function kmpSearch(text, pattern) {}`
    },
    'rabin-karp': {
        title: 'Rabin-Karp Search',
        tags: ["String matching", "Hashing based", "Rolling Hash"],
        description: `<h2>Problem Description</h2><p>Search using a rolling hash function to compare pattern and text windows.</p><h3>Example 1:</h3><pre><code>Input: text = "banana", pattern = "ana"\nOutput: [1, 3]</code></pre>`,
        starterCode: `function rabinKarp(text, pattern) {}`
    },
    'boyer-moore-bad-char': {
        title: 'Boyer-Moore (Bad Character)',
        tags: ["String matching", "Heuristic", "Optimization"],
        description: `<h2>Problem Description</h2><p>Skip characters using the Bad Character heuristic table.</p>`,
        starterCode: `function boyerMooreBadChar(text, pattern) {}`
    },
    'horspool-algorithm': {
        title: 'Boyer-Moore-Horspool',
        tags: ["String matching", "Simplified Boyer-Moore", "Comparison based"],
        description: `<h2>Problem Description</h2><p>A simplified version of Boyer-Moore using only the bad character shift table.</p>`,
        starterCode: `function horspoolSearch(text, pattern) {}`
    },
    'sunday-algorithm': {
        title: 'Sunday Algorithm',
        tags: ["String matching", "Heuristic", "Optimization"],
        description: `<h2>Problem Description</h2><p>Similar to Boyer-Moore but uses the character immediately following the current window to determine shifts.</p>`,
        starterCode: `function sundaySearch(text, pattern) {}`
    },
    'bitap-search': {
        title: 'Bitap (Baeza-Yates–Gonnet)',
        tags: ["String matching", "Bit manipulation based", "Fuzzy search"],
        description: `<h2>Problem Description</h2><p>Search using bitwise operations. Highly efficient for small patterns.</p>`,
        starterCode: `function bitapSearch(text, pattern) {}`
    },
    'finite-automata-search': {
        title: 'Finite Automata Matching',
        tags: ["String matching", "Automata based", "Pre-processing"],
        description: `<h2>Problem Description</h2><p>Build a state machine transition table for the pattern and process text characters one by one.</p>`,
        starterCode: `function automataSearch(text, pattern) {}`
    },
    'two-way-string-search': {
        title: 'Two-Way Algorithm',
        tags: ["String matching", "Memory efficient", "Comparison based"],
        description: `<h2>Problem Description</h2><p>A string matching algorithm that uses constant extra space and linear time.</p>`,
        starterCode: `function twoWaySearch(text, pattern) {}`
    },
    'not-so-naive-search': {
        title: 'Not So Naive Search',
        tags: ["String matching", "Optimization", "Comparison based"],
        description: `<h2>Problem Description</h2><p>A simple improvement over Naive search by comparing two characters at a time.</p>`,
        starterCode: `function notSoNaive(text, pattern) {}`
    }
};