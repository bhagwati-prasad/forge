const uninformedGraphSearch = {
    'breadth-first-search': {
        title: 'Breadth-First Search (BFS)',
        tags: ["Non linear datastructure", "Graph Search", "Queue based", "Level order"],
        description: `
            <h2>Problem Description</h2>
            <p>Explore a graph level by level from a source node to find the shortest path in an unweighted graph.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: adj = [[1,2],[0,3],[0,3],[1,2]], start = 0
Output: [0, 1, 2, 3]</code></pre>
        `,
        starterCode: `function bfs(adj, startNode) {\n    // Your code here\n}`
    },
    'depth-first-search': {
        title: 'Depth-First Search (DFS)',
        tags: ["Non linear datastructure", "Graph Search", "Stack based", "Recursive"],
        description: `
            <h2>Problem Description</h2>
            <p>Explore as far as possible along each branch before backtracking.</p>
        `,
        starterCode: `function dfs(adj, startNode) {\n    // Your code here\n}`
    },
    // ... 8 more (Bidirectional Search, IDDFS, etc.)
};