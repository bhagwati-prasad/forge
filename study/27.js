const specializedSearch = {
    'unbounded-binary-search': {
        title: 'Unbounded Binary Search',
        tags: ["Linear datastructure", "Infinite Search", "Comparison based"],
        description: `
            <h2>Problem Description</h2>
            <p>Find the first positive integer <code>n</code> such that <code>f(n) > 0</code>, where <code>f</code> is a monotonically increasing function.</p>
        `,
        starterCode: `function findFirstPositive(f) {\n    // Your code here\n}`
    },
    'range-search-segment-tree': {
        title: 'Range Search (Segment Tree)',
        tags: ["Non linear datastructure", "Range based", "Divide and Conquer"],
        description: `
            <h2>Problem Description</h2>
            <p>Perform a range sum or range minimum query in a segment tree.</p>
        `,
        starterCode: `function rangeQuery(tree, l, r) {\n    // Your code here\n}`
    },
    // ... 8 more (Quantum Search Simulation, Parallel Search, etc.)
};