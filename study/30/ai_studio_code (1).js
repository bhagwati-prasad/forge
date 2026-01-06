/**
 * I. SEQUENTIAL & INTERVAL SEARCH ALGORITHMS
 * Focus: Searching within linear structures, primarily arrays.
 */
const sequentialIntervalProblems = {
    'linear-search': {
        title: 'Linear Search',
        tags: ["Array", "Linked List", "Linear datastructure", "Non counting based", "Comparison based"],
        description: `
            <h3>Problem Description</h3>
            <p>Iterate through the collection one element at a time from start to finish until the target is found.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [10, 20, 30, 40], target = 30\nOutput: 2</code></pre>
            <h3>Constraints:</h3>
            <ul><li>1 <= arr.length <= 10^5</li></ul>
        `,
        starterCode: `function linearSearch(arr, target) {}`
    },
    'binary-search': {
        title: 'Binary Search',
        tags: ["Array", "Sorted Array", "Linear datastructure", "Divide and Conquer", "Logarithmic"],
        description: `
            <h3>Problem Description</h3>
            <p>Repeatedly divide the search interval in half on a sorted array.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1, 3, 5, 7, 9], target = 3\nOutput: 1</code></pre>
            <h3>Constraints:</h3>
            <ul><li>Input must be sorted.</li></ul>
        `,
        starterCode: `function binarySearch(nums, target) {}`
    },
    'jump-search': {
        title: 'Jump Search',
        tags: ["Array", "Sorted Array", "Linear datastructure", "Block Search"],
        description: `
            <h3>Problem Description</h3>
            <p>Jump ahead by fixed steps (√n) to find the block where the target resides.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], target = 8\nOutput: 7</code></pre>
        `,
        starterCode: `function jumpSearch(arr, target) {}`
    },
    'interpolation-search': {
        title: 'Interpolation Search',
        tags: ["Array", "Sorted Array", "Linear datastructure", "Arithmetic based", "Probabilistic"],
        description: `
            <h3>Problem Description</h3>
            <p>Estimate position based on value relative to endpoints (best for uniform distribution).</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [10, 20, 30, 40, 50], target = 40\nOutput: 3</code></pre>
        `,
        starterCode: `function interpolationSearch(arr, target) {}`
    },
    'exponential-search': {
        title: 'Exponential Search',
        tags: ["Array", "Sorted Array", "Linear datastructure", "Infinite Search"],
        description: `
            <h3>Problem Description</h3>
            <p>Find range by doubling index (1, 2, 4, 8...), then perform binary search.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [1, 2, 4, 8, 16, 32], target = 16\nOutput: 4</code></pre>
        `,
        starterCode: `function exponentialSearch(arr, target) {}`
    },
    'fibonacci-search': {
        title: 'Fibonacci Search',
        tags: ["Array", "Sorted Array", "Linear datastructure", "Arithmetic based"],
        description: `
            <h3>Problem Description</h3>
            <p>Divide the array into ranges using Fibonacci numbers to avoid division operators.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [10, 22, 35, 40, 45], target = 40\nOutput: 3</code></pre>
        `,
        starterCode: `function fibonacciSearch(arr, target) {}`
    },
    'ternary-search-array': {
        title: 'Ternary Search (Array)',
        tags: ["Array", "Sorted Array", "Linear datastructure", "Divide and Conquer"],
        description: `
            <h3>Problem Description</h3>
            <p>Divide sorted array into three parts using two midpoints.</p>
        `,
        starterCode: `function ternarySearch(arr, target) {}`
    },
    'search-insert-position': {
        title: 'Search Insert Position',
        tags: ["Array", "Sorted Array", "Boundary Search"],
        description: `
            <h3>Problem Description</h3>
            <p>Find index of target or where it would be inserted in order.</p>
        `,
        starterCode: `function searchInsert(nums, target) {}`
    },
    'find-peak-element': {
        title: 'Find Peak Element',
        tags: ["Array", "Linear datastructure", "Comparison based"],
        description: `
            <h3>Problem Description</h3>
            <p>Find an element strictly greater than its neighbors in O(log n).</p>
        `,
        starterCode: `function findPeak(nums) {}`
    },
    'search-in-rotated': {
        title: 'Search in Rotated Sorted Array',
        tags: ["Array", "Sorted Rotated Array", "Linear datastructure"],
        description: `
            <h3>Problem Description</h3>
            <p>Search target in a sorted array that was rotated at an unknown pivot.</p>
        `,
        starterCode: `function search(nums, target) {}`
    }
};

/**
 * II. UNINFORMED (BLIND) GRAPH SEARCH ALGORITHMS
 * Focus: Exploring graphs/trees without cost estimation.
 */
const uninformedGraphProblems = {
    'breadth-first-search': {
        title: 'Breadth-First Search (BFS)',
        tags: ["Graph", "Adjacency List", "Queue", "Non linear datastructure", "Shortest Path"],
        description: `
            <h3>Problem Description</h3>
            <p>Explore neighbors level by level using a Queue (FIFO).</p>
            <h3>Example 1:</h3>
            <pre><code>Input: adj = [[1,2],[0,3],[0,3],[1,2]], start = 0\nOutput: [0, 1, 2, 3]</code></pre>
        `,
        starterCode: `function bfs(graph, start) {}`
    },
    'depth-first-search': {
        title: 'Depth-First Search (DFS)',
        tags: ["Graph", "Adjacency Matrix", "Stack", "Recursion", "Non linear datastructure"],
        description: `
            <h3>Problem Description</h3>
            <p>Explore deep into branches before backtracking using a Stack (LIFO).</p>
        `,
        starterCode: `function dfs(graph, start) {}`
    },
    'iterative-deepening-dfs': {
        title: 'Iterative Deepening DFS',
        tags: ["Graph", "Tree", "Stack", "Recursion", "Memory efficient"],
        description: `
            <h3>Problem Description</h3>
            <p>Run DFS repeatedly with increasing depth limits to mimic BFS memory/optimality.</p>
        `,
        starterCode: `function iddfs(root, target, maxDepth) {}`
    },
    'uniform-cost-search': {
        title: 'Uniform Cost Search',
        tags: ["Graph", "Weighted Graph", "Priority Queue", "Comparison based"],
        description: `
            <h3>Problem Description</h3>
            <p>Expands the least-cost node using a Priority Queue. Shortest path for weighted graphs.</p>
        `,
        starterCode: `function ucs(graph, start, goal) {}`
    },
    'bidirectional-search': {
        title: 'Bidirectional Search',
        tags: ["Graph", "Queue", "Two Queues", "Optimization"],
        description: `
            <h3>Problem Description</h3>
            <p>Run two simultaneous BFS searches from start and goal until they meet.</p>
        `,
        starterCode: `function bidirectionalSearch(graph, start, goal) {}`
    },
    'flood-fill': {
        title: 'Flood Fill',
        tags: ["Matrix", "2D Array", "Graph", "Recursive"],
        description: `
            <h3>Problem Description</h3>
            <p>Explore connected cells in a grid to change colors (similar to paint bucket tool).</p>
        `,
        starterCode: `function floodFill(image, sr, sc, newColor) {}`
    },
    'number-of-islands': {
        title: 'Number of Islands',
        tags: ["Matrix", "2D Array", "Graph", "DFS based"],
        description: `
            <h3>Problem Description</h3>
            <p>Count connected '1's in a grid of '1's (land) and '0's (water).</p>
        `,
        starterCode: `function numIslands(grid) {}`
    },
    'topological-sort': {
        title: 'Topological Sort',
        tags: ["Graph", "DAG", "Stack", "Directed Acyclic Graph"],
        description: `
            <h3>Problem Description</h3>
            <p>Search and order nodes in a DAG so u comes before v for every edge u->v.</p>
        `,
        starterCode: `function findOrder(numCourses, prerequisites) {}`
    },
    'cycle-detection': {
        title: 'Cycle Detection (Directed)',
        tags: ["Graph", "Adjacency List", "Recursion", "Set"],
        description: `
            <h3>Problem Description</h3>
            <p>Detect if a directed graph contains a cycle using recursion stacks.</p>
        `,
        starterCode: `function hasCycle(graph) {}`
    },
    'depth-limited-search': {
        title: 'Depth Limited Search',
        tags: ["Graph", "Tree", "Recursion", "Stack"],
        description: `
            <h3>Problem Description</h3>
            <p>Perform DFS search but terminate once a specified depth limit is reached.</p>
        `,
        starterCode: `function dls(node, target, limit) {}`
    }
};

/**
 * III. INFORMED (HEURISTIC) SEARCH ALGORITHMS
 * Focus: Guiding search with heuristic knowledge.
 */
const informedHeuristicProblems = {
    'greedy-best-first': {
        title: 'Best-First Search (Greedy)',
        tags: ["Graph", "Priority Queue", "Heuristic", "Greedy"],
        description: `
            <h3>Problem Description</h3>
            <p>Select path based on estimated cost to goal h(n), ignoring cost traveled g(n).</p>
        `,
        starterCode: `function greedySearch(graph, start, goal, h) {}`
    },
    'a-star-search': {
        title: 'A* Search',
        tags: ["Graph", "Grid", "Priority Queue", "Heuristic", "Shortest Path"],
        description: `
            <h3>Problem Description</h3>
            <p>Find shortest path using f(n) = g(n) + h(n) where g is cost and h is estimate.</p>
        `,
        starterCode: `function aStar(grid, start, goal) {}`
    },
    'ida-star': {
        title: 'IDA* (Iterative Deepening A*)',
        tags: ["Graph", "Stack", "Recursion", "Heuristic", "Memory efficient"],
        description: `
            <h3>Problem Description</h3>
            <p>Memory-efficient A* using f-cost as the cutoff for iterative deepening DFS.</p>
        `,
        starterCode: `function idaStar(root, goal, h) {}`
    },
    'beam-search': {
        title: 'Beam Search',
        tags: ["Graph", "Priority Queue", "Heuristic", "Bounded Priority Queue"],
        description: `
            <h3>Problem Description</h3>
            <p>Optimization of Best-First Search that only keeps top 'W' candidates at each level.</p>
        `,
        starterCode: `function beamSearch(graph, start, goal, beamWidth) {}`
    },
    'hill-climbing': {
        title: 'Hill Climbing',
        tags: ["Graph", "State Space", "Implicit Graph", "Heuristic", "Local Search"],
        description: `
            <h3>Problem Description</h3>
            <p>Iteratively move to neighbor with better value until a local peak is reached.</p>
        `,
        starterCode: `function hillClimb(initialState, h) {}`
    },
    'simulated-annealing': {
        title: 'Simulated Annealing',
        tags: ["Graph", "State Space", "Implicit Graph", "Probabilistic", "Heuristic"],
        description: `
            <h3>Problem Description</h3>
            <p>Local search that allows "worse" moves with decreasing probability to escape local optima.</p>
        `,
        starterCode: `function simulatedAnnealing(problem, T) {}`
    },
    'recursive-best-first': {
        title: 'Recursive Best-First Search',
        tags: ["Graph", "Recursion", "Stack", "Heuristic", "Linear Space"],
        description: `
            <h3>Problem Description</h3>
            <p>Informed search using linear space by tracking f-values of alternative paths.</p>
        `,
        starterCode: `function rbfs(node, f_limit) {}`
    },
    'weighted-a-star': {
        title: 'Weighted A*',
        tags: ["Graph", "Priority Queue", "Heuristic", "Optimization"],
        description: `
            <h3>Problem Description</h3>
            <p>Accelerate A* by multiplying the heuristic by a weight factor W > 1.</p>
        `,
        starterCode: `function weightedAStar(graph, start, goal, W) {}`
    },
    'jump-point-search': {
        title: 'Jump Point Search',
        tags: ["Grid", "Matrix", "Priority Queue", "Heuristic", "A* variant"],
        description: `
            <h3>Problem Description</h3>
            <p>Optimize A* on uniform grids by skipping nodes that don't change path direction.</p>
        `,
        starterCode: `function jps(grid, start, goal) {}`
    },
    'sma-star': {
        title: 'SMA* (Memory-bounded A*)',
        tags: ["Graph", "Priority Queue", "Heuristic", "Memory constrained"],
        description: `
            <h3>Problem Description</h3>
            <p>Simplified Memory-bounded A* that prunes nodes once memory limit is hit.</p>
        `,
        starterCode: `function smaStar(graph, start, goal, limit) {}`
    }
};

/**
 * IV. STRING SEARCH ALGORITHMS
 * Focus: Pattern matching within text strings.
 */
const stringSearchProblems = {
    'naive-string-search': {
        title: 'Naive String Search',
        tags: ["String", "Array", "Linear datastructure", "Brute force"],
        description: `
            <h3>Problem Description</h3>
            <p>Check for pattern at every possible position in text (O(n*m)).</p>
        `,
        starterCode: `function naiveSearch(text, pattern) {}`
    },
    'kmp-search': {
        title: 'Knuth-Morris-Pratt (KMP)',
        tags: ["String", "Array", "Prefix Table", "Linear datastructure", "Pre-processing"],
        description: `
            <h3>Problem Description</h3>
            <p>Use a Longest Prefix Suffix (LPS) array to skip characters already matched.</p>
        `,
        starterCode: `function kmpSearch(text, pattern) {}`
    },
    'rabin-karp': {
        title: 'Rabin-Karp',
        tags: ["String", "Hash Function", "Rolling Hash", "Probabilistic"],
        description: `
            <h3>Problem Description</h3>
            <p>Use rolling hash to find patterns in text by comparing hash values.</p>
        `,
        starterCode: `function rabinKarp(text, pattern) {}`
    },
    'boyer-moore': {
        title: 'Boyer-Moore',
        tags: ["String", "Array", "Shift Tables", "Heuristic", "Optimization"],
        description: `
            <h3>Problem Description</h3>
            <p>Match from right-to-left. Use Bad Char and Good Suffix tables to skip text.</p>
        `,
        starterCode: `function boyerMoore(text, pattern) {}`
    },
    'z-algorithm': {
        title: 'Z-Algorithm',
        tags: ["String", "Array", "Z-Array", "Linear datastructure", "Pre-processing"],
        description: `
            <h3>Problem Description</h3>
            <p>Construct Z-array where Z[i] is LCP between text and suffix starting at i.</p>
        `,
        starterCode: `function zAlgorithm(s) {}`
    },
    'aho-corasick': {
        title: 'Aho-Corasick',
        tags: ["String", "Trie", "Automata", "Multi-pattern matching", "Prefix Tree"],
        description: `
            <h3>Problem Description</h3>
            <p>Multi-pattern search using a Trie with failure links to scan text in one pass.</p>
        `,
        starterCode: `function ahoCorasick(text, patterns) {}`
    },
    'manachers-algorithm': {
        title: 'Manacher\'s Algorithm',
        tags: ["String", "Array", "Linear time", "Palindromes"],
        description: `
            <h3>Problem Description</h3>
            <p>Find the longest palindromic substring in O(n) time.</p>
        `,
        starterCode: `function manachers(s) {}`
    },
    'wildcard-matching': {
        title: 'Wildcard Matching',
        tags: ["String", "Matrix", "2D Array", "Dynamic Programming"],
        description: `
            <h3>Problem Description</h3>
            <p>Search text with pattern supporting '?' (single char) and '*' (sequence).</p>
        `,
        starterCode: `function isMatch(s, p) {}`
    },
    'sunday-algorithm': {
        title: 'Sunday Algorithm',
        tags: ["String", "Array", "Shift Table", "Heuristic", "Optimization"],
        description: `
            <h3>Problem Description</h3>
            <p>Boyer-Moore variant looking at char following window to determine shift.</p>
        `,
        starterCode: `function sundaySearch(text, pattern) {}`
    },
    'suffix-array-search': {
        title: 'Suffix Array Search',
        tags: ["String", "Suffix Array", "Sorted Array", "Logarithmic Search"],
        description: `
            <h3>Problem Description</h3>
            <p>Search pattern in a pre-built Suffix Array using binary search.</p>
        `,
        starterCode: `function searchSuffix(text, sa, p) {}`
    }
};

/**
 * V. HASHING AND SYMBOL TABLE SEARCH
 * Focus: High-speed key-value retrieval and balanced trees.
 */
const hashingSymbolTableProblems = {
    'hashing-search': {
        title: 'Hashing',
        tags: ["Hash Table", "Array", "Hash Function", "Constant time", "Non comparison based"],
        description: `
            <h3>Problem Description</h3>
            <p>Map keys to array indices using hash functions for O(1) search.</p>
        `,
        starterCode: `function hashSearch(table, key) {}`
    },
    'bst-search': {
        title: 'BST Search',
        tags: ["Binary Search Tree", "Tree", "Non linear datastructure", "Comparison based"],
        description: `
            <h3>Problem Description</h3>
            <p>Search value in a Binary Search Tree by moving left or right.</p>
        `,
        starterCode: `function searchBST(root, val) {}`
    },
    'avl-tree-search': {
        title: 'AVL Tree Search',
        tags: ["AVL Tree", "Balanced Tree", "Tree", "Logarithmic", "Self-balancing"],
        description: `
            <h3>Problem Description</h3>
            <p>Search in an AVL tree, which maintains logarithmic height via rotations.</p>
        `,
        starterCode: `function searchAVL(root, key) {}`
    },
    'red-black-tree-search': {
        title: 'Red-Black Tree Search',
        tags: ["Red-Black Tree", "Balanced Tree", "Tree", "Logarithmic", "Self-balancing"],
        description: `
            <h3>Problem Description</h3>
            <p>Search in a Red-Black tree, which ensures balance using coloring rules.</p>
        `,
        starterCode: `function searchRB(root, key) {}`
    },
    'trie-search': {
        title: 'Trie Search',
        tags: ["Trie", "Prefix Tree", "Tree", "String based", "Non comparison based"],
        description: `
            <h3>Problem Description</h3>
            <p>Search for exact word or prefix in a specialized character tree.</p>
        `,
        starterCode: `function searchTrie(root, word) {}`
    },
    'bloom-filter': {
        title: 'Bloom Filter',
        tags: ["Bit Array", "Hash Function", "Probabilistic", "Space efficient"],
        description: `
            <h3>Problem Description</h3>
            <p>Membership test: return false (definitely not in) or true (maybe in).</p>
        `,
        starterCode: `function isMember(filter, item) {}`
    },
    'fenwick-tree-search': {
        title: 'Fenwick Tree (BIT)',
        tags: ["Fenwick Tree", "Binary Indexed Tree", "Array", "Arithmetic based"],
        description: `
            <h3>Problem Description</h3>
            <p>Perform prefix sum search in O(log n) using bit manipulation on an array.</p>
        `,
        starterCode: `function getPrefixSum(bit, i) {}`
    },
    'segment-tree-search': {
        title: 'Segment Tree',
        tags: ["Segment Tree", "Array", "Tree", "Range Query", "Divide and Conquer"],
        description: `
            <h3>Problem Description</h3>
            <p>Search for sum/min/max in a range [L, R] of an array in O(log n).</p>
        `,
        starterCode: `function rangeQuery(tree, l, r) {}`
    },
    'splay-tree-search': {
        title: 'Splay Tree Search',
        tags: ["Splay Tree", "Tree", "Self-adjusting", "Logarithmic"],
        description: `
            <h3>Problem Description</h3>
            <p>Self-adjusting BST where searched element is moved to root via rotations.</p>
        `,
        starterCode: `function searchSplay(root, key) {}`
    },
    'b-tree-search': {
        title: 'B-Tree Search',
        tags: ["B-Tree", "Disk optimized", "Multi-way Tree", "Tree"],
        description: `
            <h3>Problem Description</h3>
            <p>Search in a multi-way tree used for massive data in database systems.</p>
        `,
        starterCode: `function searchBTree(root, key) {}`
    }
};