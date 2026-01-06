const informedGraphSearch = {
    'a-star-search': {
        title: 'A* Search Algorithm',
        tags: ["Non linear datastructure", "Heuristic", "Greedy", "Best First"],
        description: `
            <h2>Problem Description</h2>
            <p>Find the shortest path from start to goal using f(n) = g(n) + h(n), where h is a heuristic.</p>
        `,
        starterCode: `function aStar(graph, start, goal, h) {\n    // Your code here\n}`
    },
    'greedy-best-first': {
        title: 'Greedy Best-First Search',
        tags: ["Non linear datastructure", "Heuristic", "Greedy"],
        description: `
            <h2>Problem Description</h2>
            <p>Explore nodes that are closest to the goal based on the heuristic function alone.</p>
        `,
        starterCode: `function bestFirstSearch(graph, start, goal, h) {\n    // Your code here\n}`
    },
    // ... 8 more (IDA*, Beam Search, Hill Climbing, etc.)
};