const uninformedGraphSearch = {
    'breadth-first-search': {
        title: 'Breadth-First Search (BFS)',
        tags: ["Non linear datastructure", "Graph Search", "Queue based", "Shortest Path"],
        description: `<h2>Problem Description</h2><p>Explore a graph layer by layer.</p>`,
        starterCode: `function bfs(graph, start) {}`
    },
    'depth-first-search': {
        title: 'Depth-First Search (DFS)',
        tags: ["Non linear datastructure", "Graph Search", "Stack based", "Recursive"],
        description: `<h2>Problem Description</h2><p>Explore as deep as possible before backtracking.</p>`,
        starterCode: `function dfs(graph, start) {}`
    },
    'id-dfs': {
        title: 'Iterative Deepening DFS',
        tags: ["Non linear datastructure", "Graph Search", "Memory efficient"],
        description: `<h2>Problem Description</h2><p>Combine DFS's memory efficiency with BFS's optimality by increasing depth limits iteratively.</p>`,
        starterCode: `function iddfs(graph, start, target) {}`
    },
    'bidirectional-search': {
        title: 'Bidirectional Search',
        tags: ["Non linear datastructure", "Graph Search", "Optimization"],
        description: `<h2>Problem Description</h2><p>Search simultaneously from start and goal to meet in the middle.</p>`,
        starterCode: `function bidirectionalSearch(graph, start, goal) {}`
    },
    'uniform-cost-search': {
        title: 'Uniform Cost Search (Dijkstra logic)',
        tags: ["Non linear datastructure", "Graph Search", "Priority Queue based"],
        description: `<h2>Problem Description</h2><p>Explore nodes based on the lowest cumulative path cost.</p>`,
        starterCode: `function ucs(graph, start, goal) {}`
    },
    'dijkstra-search': {
        title: 'Dijkstra\'s Algorithm',
        tags: ["Graph Search", "Priority Queue based", "Shortest Path"],
        description: `<h2>Problem Description</h2><p>Find the shortest path from a source to all other nodes in a weighted graph.</p>`,
        starterCode: `function dijkstra(graph, source) {}`
    },
    'limited-depth-dfs': {
        title: 'Depth-Limited Search',
        tags: ["Graph Search", "DFS variation", "Recursive"],
        description: `<h2>Problem Description</h2><p>Perform DFS but stop at a specific depth limit.</p>`,
        starterCode: `function dls(node, target, limit) {}`
    },
    'level-order-tree-search': {
        title: 'Tree Level Order Search',
        tags: ["Non linear datastructure", "Tree Search", "Queue based"],
        description: `<h2>Problem Description</h2><p>Search for a value in a tree by visiting nodes level by level.</p>`,
        starterCode: `function levelOrder(root, target) {}`
    },
    'topological-search': {
        title: 'Topological Sort Search',
        tags: ["Non linear datastructure", "DAG", "DFS based"],
        description: `<h2>Problem Description</h2><p>Search in a Directed Acyclic Graph following dependencies.</p>`,
        starterCode: `function topoSearch(graph) {}`
    },
    'flood-fill-search': {
        title: 'Flood Fill Search',
        tags: ["Non linear datastructure", "DFS/BFS based", "Matrix"],
        description: `<h2>Problem Description</h2><p>Explore all connected nodes of the same color/value.</p>`,
        starterCode: `function floodFill(image, sr, sc, newColor) {}`
    }
};