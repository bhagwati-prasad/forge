/**
 * I. SEQUENTIAL & INTERVAL SEARCH ALGORITHMS
 * Focus: Linear and sorted array exploration.
 */
const sequentialIntervalProblems = {
    'linear-search': {
        title: 'Linear Search',
        tags: ["Linear datastructure", "Non counting based", "Comparison based", "Iterative"],
        description: `
            <h2>Problem Description</h2>
            <p>Given an array <code>arr</code> and a <code>target</code>, return the index of the first occurrence of the target. Return -1 if the target is not found.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [10, 20, 30, 40, 50], target = 30
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
    'binary-search': {
        title: 'Binary Search',
        tags: ["Linear datastructure", "Comparison based", "Divide and Conquer", "Logarithmic"],
        description: `
            <h2>Problem Description</h2>
            <p>Search for a <code>target</code> in a sorted array. In each step, divide the search interval in half.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>nums is sorted in ascending order.</li>
                <li>1 <= nums.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function binarySearch(nums, target) {\n    // Your code here\n}`
    },
    'jump-search': {
        title: 'Jump Search',
        tags: ["Linear datastructure", "Comparison based", "Block based", "Sorted"],
        description: `
            <h2>Problem Description</h2>
            <p>Jumps ahead by fixed steps (√n) to find the block containing the target, then performs linear search within that block.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], target = 5
Output: 5</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Array must be sorted.</li>
                <li>Time Complexity: O(√n)</li>
            </ul>
        `,
        starterCode: `function jumpSearch(arr, target) {\n    // Your code here\n}`
    },
    'interpolation-search': {
        title: 'Interpolation Search',
        tags: ["Linear datastructure", "Arithmetic based", "Probabilistic", "Sorted"],
        description: `
            <h2>Problem Description</h2>
            <p>An improvement over Binary Search for uniformly distributed data. It estimates the target's position based on its value.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33], target = 18
Output: 4</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Data should be sorted and uniformly distributed for O(log log n).</li>
            </ul>
        `,
        starterCode: `function interpolationSearch(arr, target) {\n    // Your code here\n}`
    },
    'exponential-search': {
        title: 'Exponential Search',
        tags: ["Linear datastructure", "Comparison based", "Infinite Search", "Sorted"],
        description: `
            <h2>Problem Description</h2>
            <p>Find the range where target exists by doubling indices (1, 2, 4, 8...), then perform binary search.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [1, 2, 4, 8, 16, 32, 64], target = 16
Output: 4</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Useful for unbounded or infinite arrays.</li>
            </ul>
        `,
        starterCode: `function exponentialSearch(arr, target) {\n    // Your code here\n}`
    },
    'fibonacci-search': {
        title: 'Fibonacci Search',
        tags: ["Linear datastructure", "Arithmetic based", "Comparison based", "Sorted"],
        description: `
            <h2>Problem Description</h2>
            <p>Divide the array into smaller ranges using Fibonacci numbers instead of division.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [10, 22, 35, 40, 45, 50, 80], target = 80
Output: 6</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Array must be sorted.</li>
            </ul>
        `,
        starterCode: `function fibonacciSearch(arr, target) {\n    // Your code here\n}`
    },
    'ternary-search-array': {
        title: 'Ternary Search (Array)',
        tags: ["Linear datastructure", "Divide and Conquer", "Comparison based"],
        description: `
            <h2>Problem Description</h2>
            <p>Divide the sorted array into three parts using two midpoints to find the target.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [1, 2, 3, 4, 5, 6], target = 5
Output: 4</code></pre>
        `,
        starterCode: `function ternarySearch(arr, target) {\n    // Your code here\n}`
    },
    'search-insert-position': {
        title: 'Search Insert Position',
        tags: ["Linear datastructure", "Boundary Search", "Comparison based"],
        description: `
            <h2>Problem Description</h2>
            <p>Given a sorted array, find the index of target. If not found, return where it would be inserted.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,3,5,6], target = 2
Output: 1</code></pre>
        `,
        starterCode: `function searchInsert(nums, target) {\n    // Your code here\n}`
    },
    'find-peak-element': {
        title: 'Find Peak Element',
        tags: ["Linear datastructure", "Binary Search logic", "Comparison based"],
        description: `
            <h2>Problem Description</h2>
            <p>Find a peak element (strictly greater than its neighbors) in logarithmic time.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,2,3,1]
Output: 2</code></pre>
        `,
        starterCode: `function findPeakElement(nums) {\n    // Your code here\n}`
    },
    'search-in-rotated-sorted': {
        title: 'Search in Rotated Sorted Array',
        tags: ["Linear datastructure", "Sorted Rotated", "Divide and Conquer"],
        description: `
            <h2>Problem Description</h2>
            <p>Search for a target in an array that was rotated at an unknown pivot point.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4</code></pre>
        `,
        starterCode: `function search(nums, target) {\n    // Your code here\n}`
    }
};

/**
 * II. UNINFORMED (BLIND) GRAPH SEARCH ALGORITHMS
 * Focus: Exploring graphs without heuristics or cost estimates.
 */
const uninformedGraphProblems = {
    'breadth-first-search': {
        title: 'Breadth-First Search (BFS)',
        tags: ["Non linear datastructure", "Graph Search", "Queue based", "Shortest Path"],
        description: `
            <h2>Problem Description</h2>
            <p>Explore neighbor nodes level by level. Ideal for finding the shortest path in unweighted graphs.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: adj = [[1,2],[0,3],[0,3],[1,2]], start = 0
Output: [0, 1, 2, 3]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Graph can be directed or undirected.</li>
            </ul>
        `,
        starterCode: `function bfs(adj, startNode) {\n    // Your code here\n}`
    },
    'depth-first-search': {
        title: 'Depth-First Search (DFS)',
        tags: ["Non linear datastructure", "Graph Search", "Stack based", "Recursive"],
        description: `
            <h2>Problem Description</h2>
            <p>Explore as far as possible along each branch before backtracking.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: adj = [[1,2],[0],[0]], start = 0
Output: [0, 2, 1] (order may vary)</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Use recursion or a stack.</li>
            </ul>
        `,
        starterCode: `function dfs(adj, startNode) {\n    // Your code here\n}`
    },
    'iterative-deepening-dfs': {
        title: 'Iterative Deepening DFS (IDDFS)',
        tags: ["Non linear datastructure", "Graph Search", "Memory efficient", "Recursive"],
        description: `
            <h2>Problem Description</h2>
            <p>Repeatedly run DFS with an increasing depth limit until the goal is found.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: graph, target = 7, maxDepth = 3
Output: true</code></pre>
        `,
        starterCode: `function iddfs(root, target, maxDepth) {\n    // Your code here\n}`
    },
    'uniform-cost-search': {
        title: 'Uniform Cost Search (UCS)',
        tags: ["Non linear datastructure", "Graph Search", "Priority Queue based", "Shortest Path"],
        description: `
            <h2>Problem Description</h2>
            <p>Expands the least-cost node. Guarantees the shortest path in weighted graphs.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: graph, start = "A", goal = "F"
Output: 12 (Minimum Path Cost)</code></pre>
        `,
        starterCode: `function ucs(graph, start, goal) {\n    // Your code here\n}`
    },
    'bidirectional-search': {
        title: 'Bidirectional Search',
        tags: ["Non linear datastructure", "Graph Search", "Optimization", "Queue based"],
        description: `
            <h2>Problem Description</h2>
            <p>Run two simultaneous BFS searches: one forward from start and one backward from goal.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: graph, start = 1, goal = 10
Output: [1, 5, 10]</code></pre>
        `,
        starterCode: `function bidirectionalSearch(graph, start, goal) {\n    // Your code here\n}`
    },
    'flood-fill': {
        title: 'Flood Fill',
        tags: ["Matrix", "Graph Search", "DFS/BFS based"],
        description: `
            <h2>Problem Description</h2>
            <p>Navigate a grid to change the color of all connected pixels of the same initial color.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]</code></pre>
        `,
        starterCode: `function floodFill(image, sr, sc, newColor) {\n    // Your code here\n}`
    },
    'cycle-detection-graph': {
        title: 'Cycle Detection (DFS)',
        tags: ["Non linear datastructure", "Graph Search", "DFS based"],
        description: `
            <h2>Problem Description</h2>
            <p>Determine if a directed graph contains at least one cycle.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: n = 3, edges = [[0,1],[1,2],[2,0]]
Output: true</code></pre>
        `,
        starterCode: `function hasCycle(n, edges) {\n    // Your code here\n}`
    },
    'topological-sort-search': {
        title: 'Topological Sort',
        tags: ["Non linear datastructure", "DAG", "DFS/BFS based"],
        description: `
            <h2>Problem Description</h2>
            <p>Search and order nodes in a Directed Acyclic Graph such that for every edge u->v, u comes before v.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: n = 4, edges = [[1,0],[2,0],[3,1],[3,2]]
Output: [3, 1, 2, 0]</code></pre>
        `,
        starterCode: `function findOrder(numTasks, prerequisites) {\n    // Your code here\n}`
    },
    'number-of-islands': {
        title: 'Number of Islands',
        tags: ["Matrix", "Graph Search", "DFS/BFS based"],
        description: `
            <h2>Problem Description</h2>
            <p>Given a grid of '1's (land) and '0's (water), count the number of islands.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: grid = [["1","1","0"],["1","1","0"],["0","0","1"]]
Output: 2</code></pre>
        `,
        starterCode: `function numIslands(grid) {\n    // Your code here\n}`
    },
    'depth-limited-search': {
        title: 'Depth-Limited Search (DLS)',
        tags: ["Non linear datastructure", "Graph Search", "Recursive"],
        description: `
            <h2>Problem Description</h2>
            <p>Perform DFS but terminate once a specific depth limit is reached.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: root, target = 5, limit = 2
Output: Node or Null</code></pre>
        `,
        starterCode: `function dls(node, target, limit) {\n    // Your code here\n}`
    }
};

/**
 * III. INFORMED (HEURISTIC) SEARCH ALGORITHMS
 * Focus: AI-driven search using cost estimates (heuristics).
 */
const informedHeuristicProblems = {
    'greedy-best-first-search': {
        title: 'Best-First Search (Greedy)',
        tags: ["Heuristic", "Priority Queue based", "AI Search", "Greedy"],
        description: `
            <h2>Problem Description</h2>
            <p>Selects the path that appears best at the moment based solely on a heuristic function <code>h(n)</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: graph, start = "A", goal = "B", heuristicTable
Output: Path [A, C, B]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>May not find the shortest path, but is very fast.</li>
            </ul>
        `,
        starterCode: `function greedySearch(graph, start, goal, h) {\n    // Your code here\n}`
    },
    'a-star-search': {
        title: 'A* Search',
        tags: ["Heuristic", "Priority Queue based", "AI Search", "Shortest Path"],
        description: `
            <h2>Problem Description</h2>
            <p>Find the shortest path using <code>f(n) = g(n) + h(n)</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: grid, start = [0,0], goal = [5,5]
Output: Shortest Path Array</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Heuristic h(n) must be admissible (never overestimates).</li>
            </ul>
        `,
        starterCode: `function aStar(grid, start, goal) {\n    // Your code here\n}`
    },
    'ida-star': {
        title: 'Iterative Deepening A* (IDA*)',
        tags: ["Heuristic", "Memory efficient", "Recursive", "AI Search"],
        description: `
            <h2>Problem Description</h2>
            <p>Memory-efficient version of A* that uses iterative deepening based on f-costs.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: 8-puzzle board, targetState
Output: Minimum moves</code></pre>
        `,
        starterCode: `function idaStar(root, goal) {\n    // Your code here\n}`
    },
    'beam-search': {
        title: 'Beam Search',
        tags: ["Heuristic", "Optimization", "Limited Memory", "Greedy"],
        description: `
            <h2>Problem Description</h2>
            <p>An optimization of Best-First Search that only keeps <code>W</code> best candidates at each level.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: stateSpace, beamWidth = 2
Output: Best path found</code></pre>
        `,
        starterCode: `function beamSearch(graph, start, W) {\n    // Your code here\n}`
    },
    'hill-climbing': {
        title: 'Hill Climbing Search',
        tags: ["Heuristic", "Optimization", "Greedy", "Local Search"],
        description: `
            <h2>Problem Description</h2>
            <p>Continually moves in the direction of increasing value until a peak is reached.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: initialConfig, objectiveFunction
Output: Local/Global Maximum</code></pre>
        `,
        starterCode: `function hillClimbing(initialState) {\n    // Your code here\n}`
    },
    'simulated-annealing': {
        title: 'Simulated Annealing Search',
        tags: ["Heuristic", "Probabilistic", "Optimization", "Global Search"],
        description: `
            <h2>Problem Description</h2>
            <p>An optimization search that allows 'worse' moves with a decreasing probability to escape local optima.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: travelingSalesmanProblem, temp, coolingRate
Output: Optimized Route</code></pre>
        `,
        starterCode: `function simulatedAnnealing(problem, T) {\n    // Your code here\n}`
    },
    'jump-point-search': {
        title: 'Jump Point Search (JPS)',
        tags: ["Heuristic", "Grid Search", "Optimization", "A* variant"],
        description: `
            <h2>Problem Description</h2>
            <p>An optimization for A* on uniform grids that skips nodes that don't change the direction of the path.</p>
        `,
        starterCode: `function jps(grid, start, goal) {\n    // Your code here\n}`
    },
    'sma-star': {
        title: 'SMA* (Simplified Memory-bounded A*)',
        tags: ["Heuristic", "Memory efficient", "AI Search"],
        description: `
            <h2>Problem Description</h2>
            <p>A* search that stays within a specific memory limit by pruning the highest f-cost nodes.</p>
        `,
        starterCode: `function smaStar(graph, start, goal, memoryLimit) {\n    // Your code here\n}`
    },
    'rbfs': {
        title: 'Recursive Best-First Search (RBFS)',
        tags: ["Heuristic", "Linear Space", "AI Search"],
        description: `
            <h2>Problem Description</h2>
            <p>An informed search that uses linear space by keeping track of the f-value of the best alternative path.</p>
        `,
        starterCode: `function rbfs(node, f_limit) {\n    // Your code here\n}`
    },
    'weighted-a-star': {
        title: 'Weighted A*',
        tags: ["Heuristic", "Optimization", "Approximation"],
        description: `
            <h2>Problem Description</h2>
            <p>Speeds up A* by multiplying the heuristic by a weight <code>W > 1</code>.</p>
        `,
        starterCode: `function weightedAStar(graph, start, goal, W) {\n    // Your code here\n}`
    }
};

/**
 * IV. STRING SEARCH ALGORITHMS
 * Focus: Pattern matching and substring discovery.
 */
const stringSearchProblems = {
    'naive-string-search': {
        title: 'Naive String Search',
        tags: ["String matching", "Linear datastructure", "Brute force"],
        description: `
            <h2>Problem Description</h2>
            <p>Slide the pattern over the text and check for matches at every possible index.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: text = "ABCABCD", pattern = "ABCD"
Output: 3</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Time Complexity: O(n * m)</li>
            </ul>
        `,
        starterCode: `function naiveSearch(text, pattern) {\n    // Your code here\n}`
    },
    'kmp-search': {
        title: 'Knuth-Morris-Pratt (KMP)',
        tags: ["String matching", "Pre-processing based", "Linear datastructure"],
        description: `
            <h2>Problem Description</h2>
            <p>Search using a 'Longest Prefix Suffix' (LPS) array to skip redundant comparisons.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: text = "onionions", pattern = "onions"
Output: 3</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Time Complexity: O(n + m)</li>
            </ul>
        `,
        starterCode: `function kmpSearch(text, pattern) {\n    // Your code here\n}`
    },
    'rabin-karp': {
        title: 'Rabin-Karp',
        tags: ["String matching", "Hashing based", "Rolling Hash", "Probabilistic"],
        description: `
            <h2>Problem Description</h2>
            <p>Search using a rolling hash to compare the pattern with substrings of the text.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: text = "GEEKS FOR GEEKS", pattern = "GEEKS"
Output: [0, 10]</code></pre>
        `,
        starterCode: `function rabinKarp(text, pattern) {\n    // Your code here\n}`
    },
    'boyer-moore': {
        title: 'Boyer-Moore',
        tags: ["String matching", "Heuristic", "Optimization"],
        description: `
            <h2>Problem Description</h2>
            <p>Match from right to left. Use 'Bad Character' and 'Good Suffix' shifts to skip text.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: text = "HERE IS A SIMPLE EXAMPLE", pattern = "EXAMPLE"
Output: 17</code></pre>
        `,
        starterCode: `function boyerMoore(text, pattern) {\n    // Your code here\n}`
    },
    'z-algorithm': {
        title: 'Z-Algorithm',
        tags: ["String matching", "Pre-processing", "Linear datastructure"],
        description: `
            <h2>Problem Description</h2>
            <p>Construct a Z-array where Z[i] is the length of the longest common prefix between text and suffix starting at i.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: text = "aabcaabx", pattern = "aab"
Output: [0, 4]</code></pre>
        `,
        starterCode: `function zAlgorithmSearch(text, pattern) {\n    // Your code here\n}`
    },
    'aho-corasick': {
        title: 'Aho-Corasick',
        tags: ["Multi-pattern matching", "Trie based", "Automata based"],
        description: `
            <h2>Problem Description</h2>
            <p>Find all occurrences of multiple patterns in a text simultaneously using a Trie with failure links.</p>
        `,
        starterCode: `function ahoCorasick(text, patterns) {\n    // Your code here\n}`
    },
    'manachers-algorithm': {
        title: 'Manacher\'s Algorithm',
        tags: ["String matching", "Palindromes", "Linear time"],
        description: `
            <h2>Problem Description</h2>
            <p>Find the longest palindromic substring in linear time.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "babad"
Output: "bab"</code></pre>
        `,
        starterCode: `function manachers(s) {\n    // Your code here\n}`
    },
    'wildcard-matching': {
        title: 'Wildcard Matching',
        tags: ["String matching", "Pattern matching", "Dynamic Programming"],
        description: `
            <h2>Problem Description</h2>
            <p>Search text using a pattern that supports '?' (one char) and '*' (zero or more chars).</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "aa", p = "*"
Output: true</code></pre>
        `,
        starterCode: `function isMatch(s, p) {\n    // Your code here\n}`
    },
    'regex-search': {
        title: 'Regex Search (Basic)',
        tags: ["String matching", "Automata based", "Recursive"],
        description: `
            <h2>Problem Description</h2>
            <p>Implement basic regular expression matching with support for '.' and '*'.</p>
        `,
        starterCode: `function regexMatch(s, p) {\n    // Your code here\n}`
    },
    'sunday-algorithm': {
        title: 'Sunday Algorithm',
        tags: ["String matching", "Heuristic", "Optimization"],
        description: `
            <h2>Problem Description</h2>
            <p>An optimization of Boyer-Moore that looks at the character immediately after the current window.</p>
        `,
        starterCode: `function sundaySearch(text, pattern) {\n    // Your code here\n}`
    }
};

/**
 * V. HASHING AND SYMBOL TABLE SEARCH
 * Focus: Constant and logarithmic time key-value retrieval.
 */
const hashingTreeProblems = {
    'hash-map-search': {
        title: 'Hash Table Search',
        tags: ["Hashing based", "Constant time", "Non comparison based"],
        description: `
            <h2>Problem Description</h2>
            <p>Map keys to indices using a hash function. Ideally provides O(1) search time.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: map.put("key1", "val1"), map.get("key1")
Output: "val1"</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Handle collisions via Chaining or Open Addressing.</li>
            </ul>
        `,
        starterCode: `function hashTableSearch(table, key) {\n    // Your code here\n}`
    },
    'bst-search': {
        title: 'Binary Search Tree (BST) Search',
        tags: ["Non linear datastructure", "Tree Search", "Comparison based", "Logarithmic"],
        description: `
            <h2>Problem Description</h2>
            <p>Find a value in a BST by moving left or right based on value comparison.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Time complexity: O(h) where h is height.</li>
            </ul>
        `,
        starterCode: `function searchBST(root, val) {\n    // Your code here\n}`
    },
    'avl-tree-search': {
        title: 'AVL Tree Search',
        tags: ["Non linear datastructure", "Self-balancing", "Comparison based", "Tree Search"],
        description: `
            <h2>Problem Description</h2>
            <p>Search in an AVL tree, which guarantees O(log n) height via rotations.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: balancedRoot, key = 15
Output: Node or Null</code></pre>
        `,
        starterCode: `function searchAVL(root, key) {\n    // Your code here\n}`
    },
    'red-black-tree-search': {
        title: 'Red-Black Tree Search',
        tags: ["Non linear datastructure", "Self-balancing", "Comparison based", "Tree Search"],
        description: `
            <h2>Problem Description</h2>
            <p>Search in a Red-Black tree, which ensures logarithmic search time through coloring rules.</p>
        `,
        starterCode: `function searchRB(root, key) {\n    // Your code here\n}`
    },
    'trie-search': {
        title: 'Trie Word Search',
        tags: ["Non linear datastructure", "Prefix based", "String matching"],
        description: `
            <h2>Problem Description</h2>
            <p>Search for an exact word in a Prefix Tree (Trie).</p>
            <h3>Example 1:</h3>
            <pre><code>Input: trie.insert("apple"), trie.search("apple")
Output: true</code></pre>
        `,
        starterCode: `function searchTrie(root, word) {\n    // Your code here\n}`
    },
    'bloom-filter-search': {
        title: 'Bloom Filter Membership',
        tags: ["Probabilistic", "Hashing based", "Space efficient", "Non counting based"],
        description: `
            <h2>Problem Description</h2>
            <p>Test if an element is a member of a set using a bit-array and multiple hash functions.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: filter.add("data"), filter.exists("data")
Output: true (possibly)</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>No false negatives, but false positives are possible.</li>
            </ul>
        `,
        starterCode: `function bloomTest(item) {\n    // Your code here\n}`
    },
    'splay-tree-search': {
        title: 'Splay Tree Search',
        tags: ["Non linear datastructure", "Self-adjusting", "Tree Search"],
        description: `
            <h2>Problem Description</h2>
            <p>A self-adjusting BST where the searched element is moved to the root via splaying.</p>
        `,
        starterCode: `function searchSplay(root, key) {\n    // Your code here\n}`
    },
    'b-tree-search': {
        title: 'B-Tree Search',
        tags: ["Non linear datastructure", "Multi-way", "Disk-optimized"],
        description: `
            <h2>Problem Description</h2>
            <p>Search in a multi-way tree structure optimized for storage systems and databases.</p>
        `,
        starterCode: `function searchBTree(root, key) {\n    // Your code here\n}`
    },
    'fenwick-tree-query': {
        title: 'Fenwick Tree (BIT) Prefix Search',
        tags: ["Non linear datastructure", "Arithmetic based", "Bit manipulation based"],
        description: `
            <h2>Problem Description</h2>
            <p>Perform a prefix sum search in O(log n) time using a Binary Indexed Tree.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: bitArr, index = 5
Output: sum(arr[0...5])</code></pre>
        `,
        starterCode: `function getPrefixSum(bit, i) {\n    // Your code here\n}`
    },
    'segment-tree-search': {
        title: 'Segment Tree Range Search',
        tags: ["Non linear datastructure", "Range Query logic", "Divide and Conquer"],
        description: `
            <h2>Problem Description</h2>
            <p>Find the minimum/maximum/sum in a specific range [L, R] of an array in logarithmic time.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: tree, queryRange = [1, 3]
Output: RangeSum</code></pre>
        `,
        starterCode: `function rangeQuery(tree, L, R) {\n    // Your code here\n}`
    }
};