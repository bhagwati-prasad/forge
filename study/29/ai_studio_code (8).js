const treeBasedSearch = {
    'bst-search': {
        title: 'BST Search',
        tags: ["Tree Search", "Divide and Conquer", "Comparison based"],
        description: `<h2>Problem Description</h2><p>Find a value in a Binary Search Tree.</p>`,
        starterCode: `function searchBST(root, val) {}`
    },
    'bst-range-search': {
        title: 'BST Range Search',
        tags: ["Tree Search", "Boundary Search", "Comparison based"],
        description: `<h2>Problem Description</h2><p>Find all nodes in a BST within the range [low, high].</p>`,
        starterCode: `function rangeSearch(root, low, high) {}`
    },
    'lca-bst-search': {
        title: 'Lowest Common Ancestor (BST)',
        tags: ["Tree Search", "Comparison based", "Recursive"],
        description: `<h2>Problem Description</h2><p>Find the lowest common ancestor of two nodes in a BST.</p>`,
        starterCode: `function lowestCommonAncestor(root, p, q) {}`
    },
    'trie-search': {
        title: 'Trie Word Search',
        tags: ["Non linear datastructure", "String matching", "Prefix based"],
        description: `<h2>Problem Description</h2><p>Determine if a full word exists in a Trie.</p>`,
        starterCode: `function searchTrie(root, word) {}`
    },
    'trie-prefix-search': {
        title: 'Trie Prefix Search',
        tags: ["Non linear datastructure", "Prefix based", "Comparison based"],
        description: `<h2>Problem Description</h2><p>Check if any word in the Trie starts with a given prefix.</p>`,
        starterCode: `function startsWith(root, prefix) {}`
    },
    'avl-search': {
        title: 'AVL Tree Search',
        tags: ["Tree Search", "Self-balancing", "Logarithmic"],
        description: `<h2>Problem Description</h2><p>Search for a value in a balanced AVL tree.</p>`,
        starterCode: `function searchAVL(root, key) {}`
    },
    'b-tree-search': {
        title: 'B-Tree Search',
        tags: ["Tree Search", "Multi-way", "Disk-optimized"],
        description: `<h2>Problem Description</h2><p>Search for a key in a multi-way B-tree structure.</p>`,
        starterCode: `function searchBTree(root, k) {}`
    },
    'red-black-tree-search': {
        title: 'Red-Black Tree Search',
        tags: ["Tree Search", "Self-balancing", "Logarithmic"],
        description: `<h2>Problem Description</h2><p>Search for a key in a Red-Black tree.</p>`,
        starterCode: `function searchRB(root, key) {}`
    },
    'segment-tree-point-search': {
        title: 'Segment Tree Point Query',
        tags: ["Non linear datastructure", "Range Query logic", "Divide and Conquer"],
        description: `<h2>Problem Description</h2><p>Retrieve the value or aggregate for a single index in a segment tree.</p>`,
        starterCode: `function pointQuery(tree, idx) {}`
    },
    'fenwick-tree-search': {
        title: 'Fenwick Tree (BIT) Prefix Search',
        tags: ["Non linear datastructure", "Arithmetic based", "Bit manipulation based"],
        description: `<h2>Problem Description</h2><p>Calculate the prefix sum up to index <code>i</code> using a Binary Indexed Tree.</p>`,
        starterCode: `function getPrefixSum(bit, i) {}`
    }
};