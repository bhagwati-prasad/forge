Here is a comprehensive list of search algorithms, categorized by their primary use cases, along with the data structures they rely on and a brief description of how they work.

### **I. Sequential & Interval Search Algorithms**
These are primarily used on linear data structures like arrays or lists to find specific elements.

| Algorithm | Data Structure | Description |
| :--- | :--- | :--- |
| **Linear Search** | Array / Linked List | Iterates through the collection one element at a time from start to finish until the target is found or the list ends. |
| **Binary Search** | Sorted Array | Repeatedly divides the search interval in half. It compares the target to the middle element and eliminates the half where the target cannot exist. |
| **Jump Search** | Sorted Array | Jumps ahead by fixed steps (e.g., $\sqrt{n}$ elements) to find a block where the target usually lies, then performs a linear search within that block. |
| **Interpolation Search** | Sorted Array (Uniform Dist.) | An improvement on Binary Search for uniformly distributed data. It estimates the position of the target based on its value relative to the endpoints. |
| **Exponential Search** | Sorted Array | Finds a range where the target exists by repeatedly doubling the index ($1, 2, 4, 8...$), then performs a Binary Search within that range. |
| **Fibonacci Search** | Sorted Array | Similar to Binary Search but uses Fibonacci numbers to divide the array into smaller ranges, avoiding the use of the division operator. |



---

### **II. Uninformed (Blind) Graph Search Algorithms**
These algorithms explore graphs or trees without any information about the cost to reach the goal or how close they are to it.

| Algorithm | Data Structure | Description |
| :--- | :--- | :--- |
| **Breadth-First Search (BFS)** | Queue (FIFO) | Explores all neighbor nodes at the present depth before moving on to nodes at the next depth level. Useful for finding the shortest path in unweighted graphs. |
| **Depth-First Search (DFS)** | Stack (LIFO) or Recursion | Explores as far as possible along each branch before backtracking. Useful for topological sorting and cycle detection. |
| **Iterative Deepening DFS** | Stack | Combines the space efficiency of DFS with the completeness of BFS by repeatedly running DFS with an increasing depth limit. |
| **Uniform Cost Search** | Priority Queue | Expands the least-cost node so far. It guarantees the shortest path in weighted graphs (essentially Dijkstra’s algorithm without a heuristic). |
| **Bidirectional Search** | Two Queues | Runs two simultaneous searches: one forward from the start and one backward from the goal, stopping when they meet. |



---

### **III. Informed (Heuristic) Search Algorithms**
These algorithms use specific knowledge (heuristics) to guide the search toward the goal more efficiently.

| Algorithm | Data Structure | Description |
| :--- | :--- | :--- |
| **Best-First Search (Greedy)** | Priority Queue | Selects the path that appears best at that moment based on a heuristic function $h(n)$ (estimated cost to goal), ignoring the cost already traveled. |
| **A* Search (A-Star)** | Priority Queue | Combines Uniform Cost and Greedy Best-First. It selects nodes based on $f(n) = g(n) + h(n)$, where $g(n)$ is the actual cost from start and $h(n)$ is the estimated cost to goal. |
| **IDA* (Iterative Deepening A*)** | Recursion / Stack | A memory-efficient version of A* that uses iterative deepening. It uses a cutoff for the $f$-cost rather than depth. |
| **Beam Search** | Priority Queue (Limited) | An optimization of Best-First Search that only keeps a limited number of best candidates (the "beam width") at each level to save memory. |



---

### **IV. String Search Algorithms**
Specialized algorithms designed to find a specific string pattern within a larger text.

| Algorithm | Data Structure | Description |
| :--- | :--- | :--- |
| **Naive String Search** | Array / String | Checks for the pattern at every possible position in the text. Simple but inefficient ($O(n \cdot m)$). |
| **Knuth-Morris-Pratt (KMP)** | Array (Prefix Table) | Preprocesses the pattern to create a "Longest Prefix Suffix" (LPS) array, allowing the search to skip characters that have already been matched. |
| **Rabin-Karp** | Hash Function | Uses hashing to find any one of a set of pattern strings in a text. It compares the hash value of the pattern with the hash value of current substring. |
| **Boyer-Moore** | Arrays (Bad Char/Good Suffix) | Skips sections of the text by matching the pattern from right to left. Uses pre-calculated tables to determine how far to shift on a mismatch. |

---

### **V. Hashing and Symbol Table Search**
Used for extremely fast retrieval of key-value pairs.

| Algorithm | Data Structure | Description |
| :--- | :--- | :--- |
| **Hashing** | Hash Table | Maps keys to specific indices in an array using a hash function. Ideally provides $O(1)$ search time. |
| **BST Search** | Binary Search Tree | Moves left or right down a tree depending on whether the target is smaller or larger than the current node. |
| **Red-Black / AVL Tree Search** | Balanced Search Tree | Variations of BSTs that self-balance to ensure the tree height remains logarithmic, guaranteeing $O(\log n)$ search time. |



### **Summary of Complexity**

* **Fastest General Purpose:** Hash Table ($O(1)$ average).
* **Fastest Sorted Array:** Binary Search ($O(\log n)$).
* **Shortest Path (Weighted):** Dijkstra / A*.
* **Shortest Path (Unweighted):** BFS.

Would you like me to explain the **time and space complexity** for a specific set of these algorithms, or provide a code implementation for one of them?