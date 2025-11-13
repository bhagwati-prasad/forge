Here's a comprehensive list of algorithms commonly implemented in JavaScript, categorized by type. These are useful for interviews, competitive programming, or building efficient applications.

---

## 🔢 Math Algorithms

These algorithms perform mathematical computations or number theory operations.

### Number Theory
- Factorial (iterative & recursive)
- Fibonacci sequence (iterative, recursive, memoized)
- Prime number test (trial division, Sieve of Eratosthenes)
- Greatest Common Divisor (Euclidean algorithm)
- Least Common Multiple
- Power/exponentiation (recursive, fast exponentiation)
- Modular arithmetic (modular exponentiation, inverse)
- Integer square root
- Sum of digits
- Palindrome number check
- Armstrong number check

### Combinatorics
- Permutations
- Combinations
- Pascal’s Triangle
- Binomial Coefficient
- Catalan Numbers

### Geometry
- Distance between two points
- Area of triangle (Heron’s formula)
- Convex Hull (Graham scan, Jarvis march)
- Line intersection
- Point-in-polygon test

---

## 🔍 Search Algorithms

Used to find elements in arrays, trees, graphs, or other data structures.

### Array Search
- Linear Search
- Binary Search (iterative & recursive)
- Jump Search
- Interpolation Search
- Exponential Search

### Graph Search
- Breadth-First Search (BFS)
- Depth-First Search (DFS)
- Dijkstra’s Algorithm
- A* Search
- Bellman-Ford Algorithm
- Floyd-Warshall Algorithm
- Bidirectional Search
- Greedy Best-First Search

### Tree Search
- Binary Search Tree (BST) Search
- AVL Tree Search
- Trie Search
- Segment Tree Query
- B-Tree Search

---

## 🔃 Sorting Algorithms

Used to arrange data in a particular order.

### Comparison-Based Sorting
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort
- Shell Sort
- Cocktail Shaker Sort
- Comb Sort
- Gnome Sort
- Tim Sort (used in JS engines)

### Non-Comparison Sorting
- Counting Sort
- Radix Sort
- Bucket Sort
- Pigeonhole Sort

---

## 🧠 Recursion & Backtracking

Useful for solving problems with decision trees or permutations.

- Tower of Hanoi
- N-Queens Problem
- Sudoku Solver
- Maze Solver
- Subset Generation
- Permutation Generator
- Combination Generator
- Word Break Problem
- Palindrome Partitioning

---

## 📊 Dynamic Programming

Optimizes recursive problems by storing subproblem results.

- Fibonacci (DP)
- Longest Common Subsequence
- Longest Increasing Subsequence
- Knapsack Problem (0/1, fractional)
- Coin Change Problem
- Matrix Chain Multiplication
- Edit Distance
- Rod Cutting
- Subset Sum
- Partition Problem

---

## 📚 String Algorithms

Efficient string manipulation and pattern matching.

- Reverse a string
- Palindrome check
- Anagram check
- Longest Palindromic Substring
- Rabin-Karp Algorithm
- Knuth-Morris-Pratt (KMP) Algorithm
- Boyer-Moore Algorithm
- Z Algorithm
- Trie construction
- Suffix Array
- Suffix Tree

---

## 🧮 Bit Manipulation

Efficient operations using binary representations.

- Check if number is even/odd
- Count set bits (Brian Kernighan’s algorithm)
- Bitwise AND, OR, XOR
- Swap numbers without temp variable
- Detect power of two
- Find unique element in array
- Bitmasking for subsets

---

## 🧩 Miscellaneous Algorithms

- Reservoir Sampling
- Fisher-Yates Shuffle
- Union-Find (Disjoint Set)
- Topological Sort
- Kahn’s Algorithm
- Cycle Detection (DFS, Union-Find)
- Sliding Window Maximum
- Two Pointer Technique
- Fast Fourier Transform (FFT)
- Convex Hull
- Segment Tree
- Fenwick Tree (Binary Indexed Tree)

---

Here’s a categorized cheat sheet of essential algorithms in JavaScript, perfect for quick reference during coding, interviews, or study sessions:

---

## 🔢 Math Algorithms

| Algorithm                     | Description                                 |
|------------------------------|---------------------------------------------|
| Factorial                    | `n! = n × (n-1) × ... × 1`                  |
| Fibonacci                    | `F(n) = F(n-1) + F(n-2)`                    |
| Prime Test                   | Check if a number is prime                  |
| Sieve of Eratosthenes        | Efficient prime generation                  |
| GCD (Euclidean)              | Greatest common divisor                     |
| LCM                          | Least common multiple                       |
| Power (Exponentiation)       | Fast exponentiation                         |
| Modular Arithmetic           | Operations under modulo                     |
| Integer Square Root          | Floor of √n                                 |
| Sum of Digits                | Add all digits of a number                  |
| Palindrome Number            | Check if number reads same backward         |
| Armstrong Number             | Sum of digits raised to power = number      |

---

## 🔍 Search Algorithms

| Algorithm                    | Description                                 |
|-----------------------------|---------------------------------------------|
| Linear Search               | Scan each element                           |
| Binary Search               | Divide and conquer (sorted arrays)         |
| Jump Search                 | Fixed steps + linear scan                   |
| Interpolation Search        | Estimate position (uniform data)           |
| BFS (Breadth-First Search)  | Level-order traversal (graphs/trees)        |
| DFS (Depth-First Search)    | Deep traversal (graphs/trees)               |
| Dijkstra’s Algorithm        | Shortest path (weighted graph)              |
| A* Search                   | Heuristic-based pathfinding                 |
| Bellman-Ford                | Shortest path with negative weights         |
| Floyd-Warshall              | All-pairs shortest paths                    |

---

## 🔃 Sorting Algorithms

| Algorithm                    | Description                                 |
|-----------------------------|---------------------------------------------|
| Bubble Sort                 | Swap adjacent if out of order               |
| Selection Sort              | Select min and place                        |
| Insertion Sort              | Insert into sorted part                     |
| Merge Sort                  | Divide and merge                            |
| Quick Sort                  | Partition and sort                          |
| Heap Sort                   | Use heap structure                          |
| Counting Sort              | Count occurrences (non-comparison)          |
| Radix Sort                  | Sort by digit position                      |
| Bucket Sort                 | Distribute into buckets                     |

---

## 🧠 Recursion & Backtracking

| Algorithm                    | Description                                 |
|-----------------------------|---------------------------------------------|
| Tower of Hanoi              | Move disks recursively                      |
| N-Queens Problem            | Place queens without conflict               |
| Sudoku Solver               | Fill grid with valid numbers                |
| Maze Solver                 | Find path through maze                      |
| Subset/Permutation Generator| Generate all combinations                   |
| Word Break Problem          | Segment string using dictionary             |

---

## 📊 Dynamic Programming

| Algorithm                    | Description                                 |
|-----------------------------|---------------------------------------------|
| Fibonacci (DP)              | Memoized version                            |
| LCS (Longest Common Subseq) | Match characters in order                   |
| LIS (Longest Increasing Subseq)| Increasing sequence                       |
| Knapsack Problem            | Maximize value under weight                 |
| Coin Change                 | Min coins for amount                        |
| Edit Distance               | Min operations to convert strings           |
| Matrix Chain Multiplication| Optimal parenthesization                    |
| Rod Cutting                 | Max profit from cuts                        |

---

## 📚 String Algorithms

| Algorithm                    | Description                                 |
|-----------------------------|---------------------------------------------|
| Reverse String              | Flip characters                             |
| Palindrome Check            | Same forward and backward                   |
| Anagram Check               | Same letters, different order               |
| KMP Algorithm               | Pattern matching with prefix table          |
| Rabin-Karp                  | Hash-based pattern search                   |
| Trie                        | Prefix tree for fast lookup                 |
| Longest Palindromic Substr  | Expand around center                        |

---

## 🧮 Bit Manipulation

| Algorithm                    | Description                                 |
|-----------------------------|---------------------------------------------|
| Count Set Bits              | Count 1s in binary                         |
| Check Power of Two          | Only one bit set                           |
| XOR Swap                    | Swap without temp                          |
| Bitmasking                  | Represent subsets                          |
| Unique Element              | XOR all elements                           |

---

## 🧩 Miscellaneous Algorithms

| Algorithm                    | Description                                 |
|-----------------------------|---------------------------------------------|
| Fisher-Yates Shuffle        | Randomize array                            |
| Union-Find (Disjoint Set)   | Track connected components                 |
| Topological Sort            | Order DAG nodes                            |
| Cycle Detection             | Detect loops in graph                      |
| Sliding Window              | Fixed-size window optimization             |
| Two Pointer Technique       | Efficient pair search                      |
| Segment Tree                | Range queries                              |
| Fenwick Tree                | Efficient prefix sums                      |

---
