# Patterns and techniques for algorithm
Here is a curated list of algorithmic problem-solving techniques and patterns, similar to the "Two Pointer" technique. These are standard patterns recognized in competitive programming and technical interviews (often categorized under "Grokking the Coding Interview" patterns).

### 1. Array & String Manipulation Patterns
These are direct siblings to the Two Pointer technique, used mostly for linear data structures.

*   **Sliding Window:**
    *   **Concept:** Instead of re-calculating a subarray from scratch, you "slide" a window (range) over the array by adding one element to the right and removing one from the left.
    *   **Best for:** Finding the longest/shortest substring, subarray, or sum value.
    *   **Example:** ```
    Find the maximum / minimum sum of a subarray of size K (mixed positive and -ve int).
    Find subarray with maximum / minimum sum, there must be at least one element (mixed positive and -ve int).
    Find contiguous subarray with a given sum.
    Smallest substring which contains all characters of string.
    Largest substring without repeating characters.
    Distinct elements in every window of size K.
    ```


*   **Two Pointers:**
    *   **Concept:** Using two pointers.
    *   **Example:**```
    Check if a string is palindrome.
    ```

*   **Fast & Slow Pointers (Tortoise and Hare):**
    *   **Concept:** Using two pointers that move at different speeds (usually 1 step vs 2 steps).
    *   **Best for:** Detecting cycles in a Linked List or Array, or finding the middle of a Linked List.
    *   **Example:** ```
    Determine if a Linked List contains a cycle.
    ```

*   **Prefix Sum:**
    *   **Concept:** Pre-calculating the sum of elements up to index `i` and storing it. This allows you to calculate the sum of any range `(i, j)` in O(1) time.
    *   **Best for:** Range sum queries or finding subarrays that sum to a specific target.
    *   **Example:** "Find the total number of subarrays whose sum equals K."

*   **Cyclic Sort:**
    *   **Concept:** Used when the array contains numbers in a given range (like 1 to N) and you need to find duplicates or missing numbers. You iterate and swap numbers to their correct indices (index 0 gets number 1, etc.).
    *   **Best for:** Finding missing/duplicate numbers in a distinct range.
    *   **Example:** "Find the missing number in an array containing 1 to 100."

### 2. Search & Traversal Patterns
Techniques used to navigate through search spaces, trees, or graphs.

*   **Binary Search (Divide and Conquer):**
    *   **Concept:** Repeatedly dividing the search interval in half.
    *   **Best for:** Searching in **sorted** arrays.
    *   **Example:** "Find the position of a specific integer in a sorted array."

*   **Breadth-First Search (BFS):**
    *   **Concept:** Exploring a tree/graph layer by layer (level by level) using a **Queue**.
    *   **Best for:** Finding the **shortest path** in an unweighted graph or level-order traversal.
    *   **Example:** "Find the shortest path out of a maze."

*   **Depth-First Search (DFS):**
    *   **Concept:** Exploring as far as possible along each branch before backtracking, usually using **Recursion** or a **Stack**.
    *   **Best for:** Pathfinding, checking if a path exists, or traversing distinct branches.
    *   **Example:** "Count the number of islands in a grid."

*   **Backtracking:**
    *   **Concept:** Building a solution incrementally and removing (backtracking) solutions that fail to satisfy the constraints.
    *   **Best for:** Generating all permutations, combinations, or solving puzzles like Sudoku.
    *   **Example:** "Generate all valid parentheses combinations."

### 3. Optimization & Data Structure Patterns
Techniques that rely on specific properties of data structures to optimize time complexity.

*   **Monotonic Stack:**
    *   **Concept:** Maintaining a stack where elements are always sorted (either increasing or decreasing). When a new element breaks the order, you pop elements from the stack.
    *   **Best for:** Finding the "Next Greater Element" or "Next Smaller Element."
    *   **Example:** "Find the next greater element for every element in an array."

*   **Top 'K' Elements (Heaps):**
    *   **Concept:** Using a Min-Heap or Max-Heap to keep track of the largest or smallest `K` elements seen so far.
    *   **Best for:** Finding the Kth largest/smallest/most frequent items without sorting the whole list.
    *   **Example:** "Find the top 3 trending hashtags."

*   **Merge Intervals:**
    *   **Concept:** Sorting intervals by their start time and then iterating through to merge overlapping ones.
    *   **Best for:** Scheduling problems or dealing with time ranges.
    *   **Example:** "Given a collection of intervals, merge all overlapping intervals."

*   **Dynamic Programming (DP):**
    *   **Concept:** Breaking a problem into simpler subproblems and storing the results (Memoization or Tabulation) so you don't have to calculate them again.
    *   **Best for:** Optimization problems asking for "maximum", "minimum", or "number of ways".
    *   **Example:** "The Fibonacci sequence" or "The Knapsack Problem."

*   **Bit Manipulation (XOR Trick):**
    *   **Concept:** Using Bitwise XOR properties (specifically that `A ^ A = 0` and `A ^ 0 = A`).
    *   **Best for:** Finding a unique number in an array of duplicates without using extra memory.
    *   **Example:** "Every number appears twice except for one. Find that single number."

### Summary Cheat Sheet
If you see... | Try this technique...
--- | ---
**Sorted Array** | Binary Search or Two Pointers
**Linked List** | Fast & Slow Pointers
**Top/Max/Min 'K' items** | Heap (Priority Queue)
**Permutations/Subsets** | Backtracking
**Subarray/Substring** | Sliding Window
**Shortest Path (Unweighted)** | BFS
**Tree Level Order** | BFS
**Common Prefix/Palindrome** | Two Pointers (Start & End)



Here is a list of advanced and specific problem-solving techniques not covered in the previous response. These are often the "secret weapons" in technical interviews and competitive programming.

### 1. Graph & Connectivity Patterns
Techniques used specifically for connecting components or managing dependencies.

*   **Union-Find (Disjoint Set Union - DSU):**
    *   **Concept:** A data structure that tracks elements partitioned into disjoint (non-overlapping) sets. It supports two primary operations: `Union` (merge two sets) and `Find` (determine which set an element belongs to).
    *   **Best for:** Counting connected components in a graph, cycle detection in undirected graphs, or grouping objects.
    *   **Example:** "Determine if two nodes in a network are connected."

*   **Topological Sort:**
    *   **Concept:** A linear ordering of vertices in a directed graph where for every edge `u -> v`, vertex `u` comes before `v`.
    *   **Best for:** Resolution of dependencies, task scheduling, or compiling build orders.
    *   **Example:** "Course Schedule: Find the order to take courses given prerequisites."

*   **Dijkstra’s Algorithm:**
    *   **Concept:** Uses a Priority Queue (Min-Heap) to find the shortest path from a starting node to all other nodes in a graph with non-negative weights.
    *   **Best for:** GPS navigation or network routing where "distance" or "cost" varies between connections.
    *   **Example:** "Find the cheapest flight path from City A to City B."

### 2. Advanced Range Query Patterns
Techniques for querying and updating ranges of data efficiently (better than O(n) loops).

*   **Segment Tree / Fenwick Tree (Binary Indexed Tree):**
    *   **Concept:** Tree-based data structures that allow you to query a range (like "sum of index 2 to 7") and update a value at an index, both in `O(log N)` time.
    *   **Best for:** Scenarios where data changes frequently, but you still need fast calculations over ranges.
    *   **Example:** "Calculate the sum of elements in a range `[L, R]` where elements are constantly being updated."

*   **Sparse Table:**
    *   **Concept:** A data structure that precomputes answers for ranges of size $2^k$.
    *   **Best for:** Range Minimum/Maximum Queries (RMQ) on static arrays (arrays that don't change).
    *   **Example:** "Find the minimum value in range `[L, R]` in O(1) time."

*   **Difference Array:**
    *   **Concept:** Instead of storing the array `A`, you store an array `D` where `D[i] = A[i] - A[i-1]`. This allows you to update a range `[L, R]` by adding a value `k` in `O(1)` time.
    *   **Best for:** Performing multiple range updates efficiently, then querying the final state once.
    *   **Example:** "Add K to all elements between index L and R (performed M times)."

### 3. String Processing Patterns
Specialized techniques for analyzing text and patterns.

*   **Trie (Prefix Tree):**
    *   **Concept:** A tree-like data structure where each node represents a character of a string.
    *   **Best for:** Autocomplete systems, spell checkers, or counting words with a common prefix.
    *   **Example:** "Implement a search bar that suggests words as you type."

*   **Rolling Hash (Rabin-Karp):**
    *   **Concept:** Generating a unique hash value for a sliding window of characters. When the window moves, you update the hash in `O(1)` rather than recalculating the whole string.
    *   **Best for:** Efficiently finding a pattern/substring within a large text.
    *   **Example:** "Find all occurrences of a pattern 'abc' in a large text document."

*   **KMP (Knuth-Morris-Pratt):**
    *   **Concept:** Uses a "prefix table" (LPS array) to skip comparisons when a mismatch occurs during string matching, avoiding the need to backtrack.
    *   **Best for:** Searching for a substring in a string in `O(N)` time without hashing collisions.

### 4. Mathematical & Streaming Patterns
Techniques for probability, geometry, and massive data streams.

*   **Reservoir Sampling:**
    *   **Concept:** A randomized algorithm to select `k` items from a list of `n` items, where `n` is unknown or too large to fit in memory.
    *   **Best for:** Sampling from a continuous stream of data.
    *   **Example:** "Select 5 random tweets from a live stream of millions."

*   **Line Sweep (Plane Sweep):**
    *   **Concept:** Imagining a vertical line sweeping across a plane. You process events (like the start or end of an interval) as the line "hits" them.
    *   **Best for:** Geometry problems, finding overlapping rectangles, or finding the point covered by the most intervals.
    *   **Example:** "Given a set of meeting times, find the time slot with the maximum number of concurrent meetings."

*   **Floyd’s Cycle Detection (Linked List specific):**
    *   *(Note: This is the formal name for the "Fast & Slow Pointers" mentioned previously, but often applied specifically to finding the entry point of a cycle).*
    *   **Concept:** Once a cycle is detected, resetting one pointer to the head allows you to find the exact node where the cycle begins.

*   **Moore’s Voting Algorithm:**
    *   **Concept:** An algorithm to find the majority element (an element appearing more than N/2 times) using `O(1)` space by cancelling out different elements.
    *   **Example:** "Find the candidate who won more than 50% of the votes in a single pass."