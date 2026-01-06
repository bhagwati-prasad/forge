const stringMatchingSecondary = {
    'z-algorithm': {
        title: 'Z-Algorithm',
        tags: ["String matching", "Pre-processing", "Linear datastructure"],
        description: `<h2>Problem Description</h2><p>Construct a Z-array where Z[i] is the length of the longest common prefix between S and S[i..].</p><h3>Example 1:</h3><pre><code>Input: "aabcaabx"\nOutput: [0, 1, 0, 0, 3, 1, 0, 0]</code></pre>`,
        starterCode: `function zAlgorithm(s) {}`
    },
    'aho-corasick': {
        title: 'Aho-Corasick',
        tags: ["Multi-pattern matching", "Trie based", "Automata based"],
        description: `<h2>Problem Description</h2><p>Find all occurrences of multiple patterns in a text simultaneously using a Trie with failure links.</p>`,
        starterCode: `function ahoCorasick(text, patterns) {}`
    },
    'manachers-algorithm': {
        title: 'Manacher\'s Algorithm',
        tags: ["String matching", "Palindromes", "Linear time"],
        description: `<h2>Problem Description</h2><p>Find the longest palindromic substring in linear time.</p><h3>Example 1:</h3><pre><code>Input: "babad"\nOutput: "bab"</code></pre>`,
        starterCode: `function longestPalindrome(s) {}`
    },
    'suffix-array-search': {
        title: 'Suffix Array Search',
        tags: ["String matching", "Suffix based", "Sorted"],
        description: `<h2>Problem Description</h2><p>Search for a pattern by binary searching through a pre-calculated Suffix Array.</p>`,
        starterCode: `function searchSuffixArray(text, suffixArr, pattern) {}`
    },
    'levenshtein-search': {
        title: 'Fuzzy Search (Edit Distance)',
        tags: ["Fuzzy matching", "Dynamic Programming", "String"],
        description: `<h2>Problem Description</h2><p>Find the best match for a pattern within a text given a maximum edit distance K.</p>`,
        starterCode: `function fuzzySearch(text, pattern, k) {}`
    },
    'soundex-search': {
        title: 'Soundex (Phonetic Search)',
        tags: ["Phonetic matching", "String", "Hashing based"],
        description: `<h2>Problem Description</h2><p>Search for words that sound similar by encoding them into phonetic codes.</p>`,
        starterCode: `function soundexMatch(word1, word2) {}`
    },
    'wildcard-matching': {
        title: 'Wildcard Matching Search',
        tags: ["String matching", "Pattern matching", "Dynamic Programming"],
        description: `<h2>Problem Description</h2><p>Search for a pattern containing '*' (any sequence) and '?' (any single character).</p>`,
        starterCode: `function isMatch(s, p) {}`
    },
    'regular-expression-search': {
        title: 'Regex Search (Basic)',
        tags: ["String matching", "Automata based", "Recursive"],
        description: `<h2>Problem Description</h2><p>Search for a pattern containing '.' and '*'.</p>`,
        starterCode: `function regexMatch(s, p) {}`
    },
    'suffix-automaton-search': {
        title: 'Suffix Automaton Search',
        tags: ["String matching", "Automata based", "Advanced"],
        description: `<h2>Problem Description</h2><p>Determine if a pattern exists in a text using a Suffix Automaton (SAM).</p>`,
        starterCode: `function samSearch(text, pattern) {}`
    },
    'commentz-walter-search': {
        title: 'Commentz-Walter Algorithm',
        tags: ["Multi-pattern matching", "Aho-Corasick variation", "Boyer-Moore variation"],
        description: `<h2>Problem Description</h2><p>A multi-pattern matching algorithm that combines Aho-Corasick with Boyer-Moore shifting.</p>`,
        starterCode: `function commentzWalter(text, patterns) {}`
    }
};