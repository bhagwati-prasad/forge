Here is a comprehensive list of sorting algorithms, categorized by their mechanism (comparison-based vs. non-comparison-based), along with the data structures they typically operate on and a brief implementation description.

### **I. Comparison-Based Sorting Algorithms**
These algorithms sort data by comparing elements to one another. They can handle various data types (integers, strings, objects) as long as a comparison rule (e.g., $<, >$) exists.

| Algorithm | Data Structure | Implementation Description |
| :--- | :--- | :--- |
| **Bubble Sort** | Array / Linked List | Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The largest unsorted element "bubbles up" to the end in each pass. |
| **Selection Sort** | Array / Linked List | Divides the list into a sorted and unsorted region. It repeatedly finds the minimum element from the unsorted region and swaps it with the first element of that region. |
| **Insertion Sort** | Array / Linked List | Builds the sorted array one item at a time. It takes an element from the unsorted portion and inserts it into its correct position within the already sorted portion. |
| **Merge Sort** | Array / Linked List | A divide-and-conquer algorithm. It recursively splits the array into halves until they contain one element, then merges the sorted halves back together to produce a sorted array. |
| **Quick Sort** | Array | A divide-and-conquer algorithm. It picks a "pivot" element and partitions the array so that all smaller elements are on the left and larger ones are on the right, then recursively sorts the sub-arrays. |
| **Heap Sort** | Array (Binary Heap) | Converts the array into a Max-Heap data structure. It repeatedly extracts the maximum element (root), moves it to the end of the array, and "heapifies" the remaining tree. |
| **Shell Sort** | Array | An optimized version of Insertion Sort. It sorts elements far apart first (using a gap sequence) and progressively reduces the gap, finishing with a standard Insertion Sort. |
| **Tree Sort** | Binary Search Tree | Inserts elements one by one into a Binary Search Tree (BST) and then performs an in-order traversal to retrieve the elements in sorted order. |
| **Tim Sort** | Array | A hybrid algorithm derived from Merge Sort and Insertion Sort. It divides the array into small "runs" which are sorted using Insertion Sort, and then merges these runs using Merge Sort. (Default in Python and Java). |





---

### **II. Non-Comparison Sorting Algorithms**
These algorithms do not compare elements directly. Instead, they exploit the internal structure of the data (usually integers or fixed-length strings). They can be faster ($O(n)$) but are often limited by memory or data type.

| Algorithm | Data Structure | Implementation Description |
| :--- | :--- | :--- |
| **Counting Sort** | Array (Integers) | Counts the number of objects having distinct key values. It uses an auxiliary array to store the frequency of each element and then reconstructs the sorted array using arithmetic. |
| **Radix Sort** | Array (Integers/Strings)| Bucket sort. Sorts numbers digit by digit, starting from the least significant digit to the most significant (LSD) or vice versa (MSD). It typically uses Counting Sort as a subroutine for sorting individual digits. https://www.youtube.com/watch?v=Y95a-8oNqps |
| **Bucket Sort** | Array (Uniform Dist.) | Distributes elements into several "buckets" based on their range. Each bucket is then sorted individually (using another sort like Insertion Sort), and the buckets are concatenated. |
| **Pigeonhole Sort** | Array | Similar to Counting Sort but typically used when the range of keys is approximately equal to the number of items. Items are moved into "holes" corresponding to their value and then gathered in order. |



---

### **III. Notable Mentions (Inefficient/Educational)**
These are rarely used in production but are famous for theoretical or educational reasons.

| Algorithm | Data Structure | Implementation Description |
| :--- | :--- | :--- |
| **Bogo Sort** | Array | A highly ineffective algorithm based on the generate-and-test paradigm. It randomly shuffles the array and checks if it is sorted. If not, it shuffles again. |
| **Stooge Sort** | Array | A recursive sorting algorithm that swaps the first and last elements if needed, then recursively sorts the first 2/3, the last 2/3, and the first 2/3 again. Extremely slow. |

---

### **Key Takeaways on Efficiency**

* **Best for Small Data:** Insertion Sort (Low overhead).
* **Best General Purpose:** Quick Sort (Average $O(n \log n)$) or Merge Sort (Stable $O(n \log n)$).
* **Best for Real-World Data:** Tim Sort (Handles pre-sorted runs efficiently).
* **Best for Integers/Fixed Ranges:** Radix Sort or Counting Sort (Can achieve linear time $O(n)$).
