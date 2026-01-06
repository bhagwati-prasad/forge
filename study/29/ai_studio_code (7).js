const informedGraphSearch = {
    'greedy-best-first-search': {
        title: 'Greedy Best-First Search',
        tags: ["Heuristic", "Graph Search", "Greedy"],
        description: `<h2>Problem Description</h2><p>Explore the node that appears closest to the goal according to a heuristic.</p>`,
        starterCode: `function greedyBestFirst(graph, start, goal, h) {}`
    },
    'a-star-search': {
        title: 'A* Search',
        tags: ["Heuristic", "Priority Queue based", "Shortest Path"],
        description: `<h2>Problem Description</h2><p>Search using f(n) = g(n) + h(n) to find the optimal path.</p>`,
        starterCode: `function aStar(graph, start, goal, h) {}`
    },
    'ida-star': {
        title: 'Iterative Deepening A*',
        tags: ["Heuristic", "Memory efficient", "Graph Search"],
        description: `<h2>Problem Description</h2><p>Iterative deepening DFS using A*'s f-score as the limit.</p>`,
        starterCode: `function idaStar(graph, start, goal, h) {}`
    },
    'beam-search': {
        title: 'Beam Search',
        tags: ["Heuristic", "Optimization", "Greedy"],
        description: `<h2>Problem Description</h2><p>A limited-width BFS that only keeps the 'B' best partial solutions.</p>`,
        starterCode: `function beamSearch(graph, start, b, h) {}`
    },
    'hill-climbing-search': {
        title: 'Hill Climbing',
        tags: ["Optimization", "Heuristic", "Greedy"],
        description: `<h2>Problem Description</h2><p>Move iteratively to the best neighboring state until no better neighbors exist.</p>`,
        starterCode: `function hillClimbing(startState, h) {}`
    },
    'simulated-annealing-search': {
        title: 'Simulated Annealing',
        tags: ["Optimization", "Probabilistic", "Heuristic"],
        description: `<h2>Problem Description</h2><p>Search for an optimum by allowing 'bad' moves with a decreasing probability to escape local maxima.</p>`,
        starterCode: `function simulatedAnnealing(startState, temp, coolingRate) {}`
    },
    'sma-star': {
        title: 'SMA* (Simplified Memory-bounded A*)',
        tags: ["Heuristic", "Memory-constrained", "Graph Search"],
        description: `<h2>Problem Description</h2><p>A* variant that stays within a specific memory limit by pruning nodes.</p>`,
        starterCode: `function smaStar(graph, start, goal, memoryLimit) {}`
    },
    'recursive-best-first-search': {
        title: 'Recursive Best-First Search (RBFS)',
        tags: ["Heuristic", "Linear Space", "Graph Search"],
        description: `<h2>Problem Description</h2><p>An informed search that uses only linear space by tracking f-values of alternative paths.</p>`,
        starterCode: `function rbfs(node, f_limit) {}`
    },
    'weighted-a-star': {
        title: 'Weighted A*',
        tags: ["Heuristic", "Optimization", "Inconsistent"],
        description: `<h2>Problem Description</h2><p>Search using f(n) = g(n) + W * h(n) to find solutions faster (possibly sub-optimal).</p>`,
        starterCode: `function weightedAStar(graph, start, goal, w, h) {}`
    },
    'fringe-search': {
        title: 'Fringe Search',
        tags: ["Heuristic", "Optimization", "Graph Search"],
        description: `<h2>Problem Description</h2><p>A middle ground between IDA* and A* that uses a doubly linked list for the search frontier.</p>`,
        starterCode: `function fringeSearch(graph, start, goal) {}`
    }
};