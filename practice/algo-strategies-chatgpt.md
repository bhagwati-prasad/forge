Here’s a **comprehensive list of programming problem-solving strategies and techniques**, grouped by **concept and use case** — ideal for algorithmic thinking, interviews, and competitive programming.

---

## 🧭 **Array / Sequence Techniques**

### 1. **Two Pointers**

* Use two indices moving at different speeds or directions.
* **Common use:** Sorted arrays, linked lists, partitioning, palindrome check.
* **Examples:**

  * Pair sum in sorted array (`i++`, `j--`)
  * Remove duplicates in-place
  * Merge sorted arrays

### 2. **Sliding Window**

* Use a moving subarray or substring over a sequence.
* **Common use:** Contiguous subarray problems, substring with conditions.
* **Examples:**

  * Longest substring without repeating chars
  * Max sum subarray of size `k`
  * Minimum window substring

### 3. **Prefix Sum / Difference Array**

* Precompute cumulative sums to answer range queries quickly.
* **Common use:** Subarray sums, range updates, cumulative frequencies.
* **Examples:**

  * Range sum queries
  * Finding subarray with target sum
  * 2D prefix sums for matrices

### 4. **Kadane’s Algorithm**

* Dynamic window for max subarray sum (variation of sliding window).
* **Example:** Largest contiguous subarray sum in O(n).

### 5. **Sorting + Binary Search Combo**

* Sort data first, then use binary search to make decisions.
* **Example:**

  * Find closest elements
  * Allocate resources (e.g. boats, weights)

---

## 🔁 **Dynamic Programming (DP) Techniques**

### 6. **Top-Down (Memoization)**

* Recursive approach + cache previously computed results.

### 7. **Bottom-Up (Tabulation)**

* Iterative table-based approach.

### 8. **State Compression**

* Use bitmasks or modulo to reduce memory/state space.

### 9. **Prefix DP / Suffix DP**

* Use precomputed partial DP results to accelerate computation.

### 10. **Knapsack Patterns**

* Core DP template for subset, partition, and optimization problems.

### 11. **Digit DP**

* Count numbers within a range satisfying certain digit properties.

### 12. **Interval DP**

* Solve problems defined over ranges (like merging stones, matrix chain).

---

## 🧩 **Search & Optimization Techniques**

### 13. **Binary Search (on value)**

* Search over an answer range (not indices).
* **Examples:**

  * Minimize/maximize value (e.g. smallest possible max weight)
  * “Can we achieve X?” type problems

### 14. **Ternary Search**

* Used to find minima/maxima in unimodal functions.

### 15. **Meet in the Middle**

* Split data into halves and combine partial results efficiently.
* **Example:** Subset sum for large `n`.

---

## 🔄 **Graph & Tree Techniques**

### 16. **DFS / BFS**

* Basic traversal and search.

### 17. **Topological Sort**

* Order nodes respecting dependencies (DAG).

### 18. **Union-Find (Disjoint Set Union - DSU)**

* Track connected components efficiently.
* **Use:** Kruskal’s algorithm, dynamic connectivity.

### 19. **Dijkstra / Bellman-Ford / Floyd-Warshall**

* Shortest path algorithms.

### 20. **Dynamic Programming on Trees**

* Post-order traversal with memoized subtree results.

### 21. **Lowest Common Ancestor (LCA)**

* Binary lifting / Euler tour to find ancestor relationships efficiently.

### 22. **Tarjan’s / Kosaraju’s**

* Strongly connected components, articulation points, bridges.

---

## 🧠 **Mathematical & Number-Theoretic Techniques**

### 23. **Sieve of Eratosthenes**

* Efficient prime generation.

### 24. **Modular Arithmetic**

* Handle large numbers or cyclic operations.

### 25. **Fast Exponentiation / Binary Exponentiation**

* Compute powers efficiently.

### 26. **Prefix GCD / LCM**

* Precompute GCD/LCM prefixes for range queries.

### 27. **Combinatorics + DP**

* nCr, Pascal’s triangle, counting problems.

---

## ⚙️ **Data Structure–Based Strategies**

### 28. **Monotonic Stack / Queue**

* Maintain ordered structures for next greater/smaller elements.
* **Example:**

  * Stock span problem
  * Largest rectangle in histogram

### 29. **Heap / Priority Queue**

* Greedy optimization or event scheduling.

### 30. **Segment Tree / Fenwick Tree (BIT)**

* Range queries and updates (sum, min, max).

### 31. **Trie**

* Prefix-based searching for strings.

### 32. **Hashing**

* Fast lookups; detect duplicates, anagrams, subarrays.

---

## 🧩 **String / Pattern Matching Techniques**

### 33. **KMP Algorithm**

* Pattern searching in linear time.

### 34. **Rabin-Karp**

* Rolling hash–based substring search.

### 35. **Z-Algorithm / Prefix Function (KMP variant)**

* Used in pattern matching and string preprocessing.

### 36. **Manacher’s Algorithm**

* Finds longest palindromic substring in O(n).

---

## 🧮 **Greedy & Optimization Patterns**

### 37. **Greedy by Sorting / Ratio / Difference**

* Pick locally optimal choices based on sorted order or cost-benefit ratio.

### 38. **Activity Selection / Interval Scheduling**

* Select non-overlapping intervals.

### 39. **Huffman Encoding**

* Optimal prefix code generation.

### 40. **Minimum Spanning Tree (Kruskal / Prim)**

* Greedy edge selection for connected graphs.

---

## 🔢 **Bit Manipulation Strategies**

### 41. **Mask Enumeration**

* Iterate over all subsets via bitmasks.

### 42. **Bit DP**

* Use bit states for subset-related optimizations.

### 43. **XOR Tricks**

* Parity checks, subarray XORs, unique number detection.

---

## 🔍 **Miscellaneous Strategies**

### 44. **Backtracking**

* Recursive search through all possibilities.
* **Use:** N-Queens, subset generation, permutations.

### 45. **Recursion + Divide and Conquer**

* Merge sort, quicksort, binary tree traversals.

### 46. **Graph Coloring / Constraint Propagation**

* Used in puzzles, scheduling, constraint satisfaction.

### 47. **Simulation**

* Directly simulate the process if constraints are small.

### 48. **Matrix Exponentiation**

* Compute recurrence relations quickly (e.g. Fibonacci).

### 49. **Dynamic Sliding Window**

* Variable-size window adjusted by constraints.

### 50. **Offline Query Processing (Mo’s Algorithm)**

* Optimize large query sets on arrays.

---

Perfect ✅

Here’s a **structured visual-style reference table** (like a cheat sheet) of **programming problem-solving strategies**, grouped by **concept**, with columns for:

* **Technique Name**
* **When to Use**
* **Typical Complexity**
* **Example Problem Types**

---

# 🧭 **Array / Sequence Techniques**

| Technique                         | When to Use                                                 | Complexity | Example Problems                                            |
| --------------------------------- | ----------------------------------------------------------- | ---------- | ----------------------------------------------------------- |
| **Two Pointers**                  | Comparing elements in sorted arrays or searching pairs      | O(n)       | Pair sum, palindrome check, remove duplicates               |
| **Sliding Window**                | Fixed or variable-length subarray/substring with conditions | O(n)       | Longest substring without repeating chars, max sum subarray |
| **Prefix Sum / Difference Array** | Range sum or update queries                                 | O(n + q)   | Range sum query, subarray with target sum                   |
| **Kadane’s Algorithm**            | Maximum subarray sum                                        | O(n)       | Largest contiguous sum                                      |
| **Sorting + Binary Search Combo** | Search on sorted array or optimize allocations              | O(n log n) | Resource allocation, pair difference problems               |

---

# 🔁 **Dynamic Programming (DP)**

| Technique                  | When to Use                          | Complexity      | Example Problems                            |
| -------------------------- | ------------------------------------ | --------------- | ------------------------------------------- |
| **Top-Down (Memoization)** | Recursive overlapping subproblems    | O(n·m)          | Fibonacci, grid paths                       |
| **Bottom-Up (Tabulation)** | Iterative DP table                   | O(n·m)          | Knapsack, LIS                               |
| **State Compression**      | DP state too large                   | O(n·2ⁿ)         | Traveling Salesman, subset optimization     |
| **Prefix / Suffix DP**     | Dependencies on earlier/later states | O(n)            | Partition arrays, max subarray with skips   |
| **Knapsack DP**            | Optimization over capacity or subset | O(n·W)          | Subset sum, bounded/unbounded knapsack      |
| **Digit DP**               | Count numbers with digit constraints | O(d·tight·mask) | Count numbers without consecutive digits    |
| **Interval DP**            | DP over ranges                       | O(n³)           | Matrix chain multiplication, merging stones |

---

# ⚙️ **Search & Optimization**

| Technique                  | When to Use                         | Complexity | Example Problems                      |
| -------------------------- | ----------------------------------- | ---------- | ------------------------------------- |
| **Binary Search on Value** | Monotonic property in result space  | O(n log M) | Minimize max distance, allocate pages |
| **Ternary Search**         | Find max/min of unimodal function   | O(log n)   | Optimize functions, find minimum time |
| **Meet in the Middle**     | Divide into halves, combine results | O(2^(n/2)) | Subset sum for large n                |

---

# 🌲 **Graph & Tree Algorithms**

| Technique                                    | When to Use                    | Complexity         | Example Problems                            |
| -------------------------------------------- | ------------------------------ | ------------------ | ------------------------------------------- |
| **DFS / BFS**                                | Traverse or search graphs      | O(V + E)           | Connected components, path existence        |
| **Topological Sort**                         | Dependency ordering (DAG)      | O(V + E)           | Task scheduling                             |
| **Union-Find (DSU)**                         | Track connected components     | ~O(α(n))           | Kruskal’s MST, dynamic connectivity         |
| **Dijkstra / Bellman-Ford / Floyd-Warshall** | Shortest path finding          | O(E log V) / O(V³) | Route optimization                          |
| **Tree DP**                                  | Optimize over subtrees         | O(n)               | Max independent set in tree                 |
| **Lowest Common Ancestor (LCA)**             | Find common ancestors in trees | O(log n)           | Query distance between nodes                |
| **Tarjan / Kosaraju**                        | Strongly connected components  | O(V + E)           | SCC detection, bridges, articulation points |

---

# 🧮 **Mathematical / Number Theory**

| Technique                 | When to Use                          | Complexity     | Example Problems                     |
| ------------------------- | ------------------------------------ | -------------- | ------------------------------------ |
| **Sieve of Eratosthenes** | Generate primes up to n              | O(n log log n) | Prime counting, factorization        |
| **Modular Arithmetic**    | Prevent overflow / cyclic operations | O(1)           | (a+b)%m, modular inverses            |
| **Fast Exponentiation**   | Compute powers efficiently           | O(log n)       | Power mod M                          |
| **Prefix GCD / LCM**      | Range GCD queries                    | O(n)           | Minimize gcd difference              |
| **Combinatorics DP**      | Counting with constraints            | O(n²)          | Paths, combinations, Catalan numbers |

---

# 📊 **Data Structure–Based Techniques**

| Technique                   | When to Use                                 | Complexity | Example Problems                   |
| --------------------------- | ------------------------------------------- | ---------- | ---------------------------------- |
| **Monotonic Stack / Queue** | Next greater/smaller element tracking       | O(n)       | Largest rectangle, stock span      |
| **Heap / Priority Queue**   | Process smallest/largest element repeatedly | O(n log n) | Merge k-sorted lists, scheduling   |
| **Segment Tree / BIT**      | Range queries & updates                     | O(log n)   | Range sum/min/max, inversion count |
| **Trie**                    | String prefix searching                     | O(L)       | Word dictionary, autocomplete      |
| **Hashing**                 | Fast lookup / frequency count               | O(1) avg   | Subarray sums, anagram groups      |

---

# ✂️ **String Algorithms**

| Technique                         | When to Use                  | Complexity   | Example Problems         |
| --------------------------------- | ---------------------------- | ------------ | ------------------------ |
| **KMP Algorithm**                 | Pattern matching             | O(n + m)     | Find substring positions |
| **Rabin-Karp**                    | Hash-based matching          | O(n + m) avg | Multiple pattern search  |
| **Z-Algorithm / Prefix Function** | Pattern preprocessing        | O(n)         | String matching, borders |
| **Manacher’s Algorithm**          | Longest palindrome substring | O(n)         | Palindrome problems      |

---

# 💡 **Greedy Strategies**

| Technique                                    | When to Use                   | Complexity | Example Problems                    |
| -------------------------------------------- | ----------------------------- | ---------- | ----------------------------------- |
| **Greedy by Sorting / Ratio**                | Local choice optimal → global | O(n log n) | Job scheduling, fractional knapsack |
| **Activity Selection / Interval Scheduling** | Non-overlapping intervals     | O(n log n) | Meeting room allocation             |
| **Huffman Encoding**                         | Optimal prefix coding         | O(n log n) | Data compression                    |
| **Minimum Spanning Tree (Kruskal / Prim)**   | Connect graph with min weight | O(E log V) | Network design                      |

---

# ⚡ **Bit Manipulation**

| Technique            | When to Use                     | Complexity | Example Problems                 |
| -------------------- | ------------------------------- | ---------- | -------------------------------- |
| **Mask Enumeration** | Subset operations               | O(2ⁿ)      | All subsets sum                  |
| **Bit DP**           | Subset optimization with DP     | O(2ⁿ·n)    | Traveling salesman               |
| **XOR Tricks**       | Unique number / parity problems | O(n)       | Find single number, subarray XOR |

---

# 🧩 **Miscellaneous Strategies**

| Technique                               | When to Use                             | Complexity         | Example Problems                        |
| --------------------------------------- | --------------------------------------- | ------------------ | --------------------------------------- |
| **Backtracking**                        | Explore all configurations with pruning | Exponential        | N-Queens, permutations                  |
| **Divide and Conquer**                  | Split into subproblems                  | O(n log n) typical | Merge sort, quicksort                   |
| **Graph Coloring / Constraint Solving** | Assign states under restrictions        | O(kⁿ) worst        | Sudoku, map coloring                    |
| **Simulation**                          | Directly simulate process               | Depends            | Game of Life, queue operations          |
| **Matrix Exponentiation**               | Linear recurrence optimization          | O(log n)           | Fibonacci nth term                      |
| **Dynamic Sliding Window**              | Variable window with condition check    | O(n)               | Longest substring satisfying constraint |
| **Mo’s Algorithm (Offline Queries)**    | Process queries efficiently             | O((n + q)√n)       | Range frequency queries                 |

---

Would you like me to generate this as a **printable visual PDF cheat sheet** (with sections, icons, and colors for quick reference)?
It can look like a one-page “Algorithm Strategy Map” — great for interview or study prep.
