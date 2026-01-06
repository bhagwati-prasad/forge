/**
 * 1. CONVERGING POINTERS (OPPOSITE ENDS)
 * Start at 0 and n-1, move toward center.
 */
const convergingPointers = {
    'two-sum-ii': {
        title: 'Two Sum II - Input Array Is Sorted',
        description: `<h2>Problem</h2><p>Given a 1-indexed array of integers <code>numbers</code> that is already sorted, find two numbers such that they add up to a specific <code>target</code>.</p><h3>Example</h3><pre>Input: numbers = [2,7,11,15], target = 9\nOutput: [1,2]</pre><h3>Constraints</h3><ul><li>2 <= numbers.length <= 3 * 10^4</li></ul>`,
        starterCode: `function twoSum(numbers, target) {\n    let left = 0, right = numbers.length - 1;\n    while(left < right) {\n        let sum = numbers[left] + numbers[right];\n        if(sum === target) return [left + 1, right + 1];\n        sum < target ? left++ : right--;\n    }\n}`
    },
    'valid-palindrome': {
        title: 'Valid Palindrome',
        description: `<h2>Problem</h2><p>A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.</p>`,
        starterCode: `function isPalindrome(s) {\n    s = s.replace(/[^a-z0-0]/gi, "").toLowerCase();\n    let l = 0, r = s.length - 1;\n    while(l < r) {\n        if(s[l++] !== s[r--]) return false;\n    }\n    return true;\n}`
    },
    'container-water': { title: 'Container With Most Water', description: `<p>Find two lines that together with the x-axis forms a container, such that the container contains the most water.</p>`, starterCode: `function maxArea(height) {}` },
    'reverse-string': { title: 'Reverse String', description: `<p>Write a function that reverses a string in-place.</p>`, starterCode: `function reverseString(s) {}` },
    '3sum': { title: '3Sum', description: `<p>Find all unique triplets in the array which gives the sum of zero.</p>`, starterCode: `function threeSum(nums) {}` },
    'bag-tokens': { title: 'Bag of Tokens', description: `<p>Maximize your score by playing tokens face up or face down.</p>`, starterCode: `function bagOfTokensScore(tokens, power) {}` },
    'reverse-vowels': { title: 'Reverse Vowels of a String', description: `<p>Reverse only all the vowels in the string and return it.</p>`, starterCode: `function reverseVowels(s) {}` },
    'valid-palindrome-ii': { title: 'Valid Palindrome II', description: `<p>Return true if the s can be palindrome after deleting at most one character.</p>`, starterCode: `function validPalindrome(s) {}` },
    'sorted-squares': { title: 'Squares of a Sorted Array', description: `<p>Return an array of the squares of each number sorted in non-decreasing order.</p>`, starterCode: `function sortedSquares(nums) {}` },
    'trapping-rain-water-converging': { title: 'Trapping Rain Water (Converging)', description: `<p>Compute how much water it can trap after raining using two pointers.</p>`, starterCode: `function trap(height) {}` }
};

/**
 * 2. SLOW-FAST POINTERS (TORTOISE AND HARE)
 */
const slowFastPointers = {
    'linked-list-cycle': {
        title: 'Linked List Cycle',
        description: `<h2>Problem</h2><p>Given head, the head of a linked list, determine if the linked list has a cycle in it.</p>`,
        starterCode: `function hasCycle(head) {\n    let slow = head, fast = head;\n    while(fast && fast.next) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if(slow === fast) return true;\n    }\n    return false;\n}`
    },
    'middle-list': { title: 'Middle of the Linked List', description: `<p>Return the middle node of the linked list.</p>`, starterCode: `function middleNode(head) {}` },
    'happy-number': { title: 'Happy Number', description: `<p>Determine if a number n is happy (ends in 1).</p>`, starterCode: `function isHappy(n) {}` },
    'find-duplicate': { title: 'Find the Duplicate Number', description: `<p>Find the one duplicate number in an array of n+1 integers.</p>`, starterCode: `function findDuplicate(nums) {}` },
    'cycle-ii': { title: 'Linked List Cycle II', description: `<p>Return the node where the cycle begins.</p>`, starterCode: `function detectCycle(head) {}` },
    'palindrome-list': { title: 'Palindrome Linked List', description: `<p>Check if a singly linked list is a palindrome.</p>`, starterCode: `function isPalindrome(head) {}` },
    'remove-nth-node': { title: 'Remove Nth Node From End', description: `<p>Remove the nth node from the end of the list.</p>`, starterCode: `function removeNthFromEnd(head, n) {}` },
    'reorder-list': { title: 'Reorder List', description: `<p>Reorder the list to L0 → Ln → L1 → Ln-1...</p>`, starterCode: `function reorderList(head) {}` },
    'circular-array-loop': { title: 'Circular Array Loop', description: `<p>Determine if there is a cycle in a circular array.</p>`, starterCode: `function circularArrayLoop(nums) {}` },
    'delete-middle': { title: 'Delete the Middle Node', description: `<p>Delete the middle node and return the head.</p>`, starterCode: `function deleteMiddle(head) {}` }
};

/**
 * 3. SLIDING WINDOW
 */
const slidingWindow = {
    'longest-substring': { title: 'Longest Substring Without Repeating Characters', description: `<p>Find the length of the longest substring without repeating characters.</p>`, starterCode: `function lengthOfLongestSubstring(s) {}` },
    'min-size-subarray': { title: 'Minimum Size Subarray Sum', description: `<p>Find the minimal length of a contiguous subarray of which the sum ≥ target.</p>`, starterCode: `function minSubArrayLen(target, nums) {}` },
    'max-sum-k': { title: 'Maximum Sum Subarray of size K', description: `<p>Find the maximum sum of any contiguous subarray of size k.</p>`, starterCode: `function maxSum(nums, k) {}` },
    'repeating-char-replace': { title: 'Longest Repeating Character Replacement', description: `<p>Find the length of the longest substring containing the same letter after k replacements.</p>`, starterCode: `function characterReplacement(s, k) {}` },
    'permutation-string': { title: 'Permutation in String', description: `<p>Return true if s2 contains a permutation of s1.</p>`, starterCode: `function checkInclusion(s1, s2) {}` },
    'subarray-product': { title: 'Subarray Product Less Than K', description: `<p>Count subarrays where the product of elements is strictly less than k.</p>`, starterCode: `function numSubarrayProductLessThanK(nums, k) {}` },
    'sliding-window-max': { title: 'Sliding Window Maximum', description: `<p>Return the max sliding window.</p>`, starterCode: `function maxSlidingWindow(nums, k) {}` },
    'fruit-baskets': { title: 'Fruit Into Baskets', description: `<p>Find the maximum number of fruits you can collect in two baskets.</p>`, starterCode: `function totalFruit(fruits) {}` },
    'min-window-substring': { title: 'Minimum Window Substring', description: `<p>Find the smallest substring of s that contains all chars in t.</p>`, starterCode: `function minWindow(s, t) {}` },
    'k-distinct-subarray': { title: 'Subarrays with K Different Integers', description: `<p>Count good subarrays with k distinct integers.</p>`, starterCode: `function subarraysWithKDistinct(nums, k) {}` }
};

/**
 * 4. DIVERGING POINTERS (EXPAND FROM CENTER)
 */
const divergingPointers = {
    'longest-palindromic-substring': { title: 'Longest Palindromic Substring', description: `<p>Find the longest palindromic substring in s.</p>`, starterCode: `function longestPalindrome(s) {}` },
    'palindromic-substrings-count': { title: 'Palindromic Substrings', description: `<p>Count how many palindromic substrings in this string.</p>`, starterCode: `function countSubstrings(s) {}` },
    'shortest-palindrome': { title: 'Shortest Palindrome', description: `<p>Find the shortest palindrome by adding characters in front.</p>`, starterCode: `function shortestPalindrome(s) {}` },
    'strobogrammatic-number': { title: 'Strobogrammatic Number', description: `<p>Check if a number looks the same when rotated 180 degrees.</p>`, starterCode: `function isStrobogrammatic(num) {}` },
    'expand-around-pivot': { title: 'Find Central Symmetry', description: `<p>Identify the largest symmetric block around a given index.</p>`, starterCode: `function findSymmetry(arr, pivot) {}` },
    'mirror-tree': { title: 'Symmetric Tree', description: `<p>Check if a binary tree is a mirror of itself.</p>`, starterCode: `function isSymmetric(root) {}` },
    'isomorphic-strings': { title: 'Isomorphic Strings', description: `<p>Determine if two strings s and t are isomorphic.</p>`, starterCode: `function isIsomorphic(s, t) {}` },
    'valid-word-abbreviation': { title: 'Valid Word Abbreviation', description: `<p>Check if an abbreviation matches a string.</p>`, starterCode: `function validWordAbbreviation(word, abbr) {}` },
    'zigzag-conversion': { title: 'ZigZag Conversion', description: `<p>Read a string in a zigzag pattern.</p>`, starterCode: `function convert(s, numRows) {}` },
    'longest-happy-string': { title: 'Longest Happy String', description: `<p>Generate the longest string without 'aaa', 'bbb', or 'ccc'.</p>`, starterCode: `function longestDiverseString(a, b, c) {}` }
};

/**
 * 5. MULTI-STRUCTURE POINTERS
 */
const multiStructurePointers = {
    'merge-sorted-array': { title: 'Merge Sorted Array', description: `<p>Merge nums2 into nums1 as one sorted array.</p>`, starterCode: `function merge(nums1, m, nums2, n) {}` },
    'intersection-two-arrays': { title: 'Intersection of Two Arrays II', description: `<p>Find the intersection of two integer arrays.</p>`, starterCode: `function intersect(nums1, nums2) {}` },
    'is-subsequence': { title: 'Is Subsequence', description: `<p>Check if s is a subsequence of t.</p>`, starterCode: `function isSubsequence(s, t) {}` },
    'compare-versions': { title: 'Compare Version Numbers', description: `<p>Compare version1 and version2.</p>`, starterCode: `function compareVersion(version1, version2) {}` },
    'backspace-compare': { title: 'Backspace String Compare', description: `<p>Check if two strings are equal when typed into text editors.</p>`, starterCode: `function backspaceCompare(s, t) {}` },
    'longest-word-deleting': { title: 'Longest Word in Dictionary through Deleting', description: `<p>Find the longest string in the dictionary that is a subsequence of s.</p>`, starterCode: `function findLongestWord(s, d) {}` },
    'interval-intersection': { title: 'Interval List Intersections', description: `<p>Find the intersection of two closed interval lists.</p>`, starterCode: `function intervalIntersection(firstList, secondList) {}` },
    'find-k-closest': { title: 'Find K Closest Elements', description: `<p>Find k closest elements to x in a sorted array.</p>`, starterCode: `function findClosestElements(arr, k, x) {}` },
    'merge-lists': { title: 'Merge Two Sorted Lists', description: `<p>Merge two sorted linked lists.</p>`, starterCode: `function mergeTwoLists(list1, list2) {}` },
    'valid-palindrome-sub': { title: 'Palindrome via Deletion', description: `<p>Compare if word A can become word B by deleting characters.</p>`, starterCode: `function canTransform(s1, s2) {}` }
};

/**
 * 6. READ-WRITE POINTERS
 */
const readWritePointers = {
    'remove-duplicates': { title: 'Remove Duplicates from Sorted Array', description: `<p>Remove duplicates in-place such that each unique element appears only once.</p>`, starterCode: `function removeDuplicates(nums) {}` },
    'remove-element': { title: 'Remove Element', description: `<p>Remove all occurrences of val in nums in-place.</p>`, starterCode: `function removeElement(nums, val) {}` },
    'move-zeroes': { title: 'Move Zeroes', description: `<p>Move all 0's to the end of the array while maintaining order.</p>`, starterCode: `function moveZeroes(nums) {}` },
    'remove-duplicates-ii': { title: 'Remove Duplicates II', description: `<p>Remove duplicates such that unique elements appear at most twice.</p>`, starterCode: `function removeDuplicates(nums) {}` },
    'string-compression': { title: 'String Compression', description: `<p>Compress an array of characters in-place.</p>`, starterCode: `function compress(chars) {}` },
    'summary-ranges': { title: 'Summary Ranges', description: `<p>Return the smallest sorted list of ranges that cover all numbers.</p>`, starterCode: `function summaryRanges(nums) {}` },
    'sort-array-parity': { title: 'Sort Array By Parity', description: `<p>Move all even integers to the beginning followed by odd.</p>`, starterCode: `function sortArrayByParity(nums) {}` },
    'reverse-words-iii': { title: 'Reverse Words in a String III', description: `<p>Reverse the order of characters in each word within a sentence.</p>`, starterCode: `function reverseWords(s) {}` },
    'duplicate-zeros': { title: 'Duplicate Zeros', description: `<p>Duplicate each occurrence of zero, shifting elements to the right.</p>`, starterCode: `function duplicateZeros(arr) {}` },
    'apply-operations': { title: 'Apply Operations to an Array', description: `<p>Apply operations then move zeros to end.</p>`, starterCode: `function applyOperations(nums) {}` }
};

/**
 * 7. SADDLEBACK SEARCH (2D POINTERS)
 */
const saddlebackSearch = {
    'search-matrix-ii': { title: 'Search a 2D Matrix II', description: `<p>Search for a value in an m x n matrix sorted row-wise and col-wise.</p>`, starterCode: `function searchMatrix(matrix, target) {}` },
    'count-negatives': { title: 'Count Negative Numbers', description: `<p>Count negative numbers in a sorted matrix.</p>`, starterCode: `function countNegatives(grid) {}` },
    'find-saddle-point': { title: 'Find Saddle Point', description: `<p>Find element which is min in its row and max in its column.</p>`, starterCode: `function findSaddlePoint(matrix) {}` },
    'kth-smallest-matrix': { title: 'Kth Smallest Element in Sorted Matrix', description: `<p>Find the kth smallest element in the matrix.</p>`, starterCode: `function kthSmallest(matrix, k) {}` },
    'diagonal-traverse': { title: 'Diagonal Traverse', description: `<p>Return all elements of the matrix in diagonal order.</p>`, starterCode: `function findDiagonalOrder(mat) {}` },
    'spiral-matrix': { title: 'Spiral Matrix', description: `<p>Return all elements of the matrix in spiral order.</p>`, starterCode: `function spiralOrder(matrix) {}` },
    'young-tableau-search': { title: 'Young Tableau Target', description: `<p>Determine if target exists in Young Tableau matrix.</p>`, starterCode: `function isPresent(matrix, target) {}` },
    'matrix-boundary-sum': { title: 'Matrix Boundary Sum', description: `<p>Sum all elements on the matrix boundaries.</p>`, starterCode: `function boundarySum(matrix) {}` },
    'reshape-matrix': { title: 'Reshape the Matrix', description: `<p>Reshape an m x n matrix into r x c.</p>`, starterCode: `function matrixReshape(mat, r, c) {}` },
    'row-max-ones': { title: 'Row with Maximum Ones', description: `<p>Find the row index with the maximum number of ones.</p>`, starterCode: `function rowAndMaximumOnes(mat) {}` }
};

/**
 * 8. BINARY SEARCH (LOGARITHMIC POINTERS)
 */
const binarySearch = {
    'binary-search': { title: 'Binary Search', description: `<p>Search target in a sorted array.</p>`, starterCode: `function search(nums, target) {}` },
    'search-rotated': { title: 'Search in Rotated Sorted Array', description: `<p>Find target in a rotated sorted array.</p>`, starterCode: `function search(nums, target) {}` },
    'find-peak': { title: 'Find Peak Element', description: `<p>Find any peak element (greater than neighbors).</p>`, starterCode: `function findPeakElement(nums) {}` },
    'first-last-pos': { title: 'First and Last Position', description: `<p>Find the starting and ending position of a given target value.</p>`, starterCode: `function searchRange(nums, target) {}` },
    'search-insert': { title: 'Search Insert Position', description: `<p>Return the index if the target is found. If not, return insert index.</p>`, starterCode: `function searchInsert(nums, target) {}` },
    'koko-bananas': { title: 'Koko Eating Bananas', description: `<p>Find minimum integer speed k to eat all bananas within h hours.</p>`, starterCode: `function minEatingSpeed(piles, h) {}` },
    'min-rotated': { title: 'Minimum in Rotated Array', description: `<p>Find the minimum element in a rotated sorted array.</p>`, starterCode: `function findMin(nums) {}` },
    'sqrt-x': { title: 'Sqrt(x)', description: `<p>Compute and return the square root of x.</p>`, starterCode: `function mySqrt(x) {}` },
    'h-index-ii': { title: 'H-Index II', description: `<p>Find h-index in a sorted citations array.</p>`, starterCode: `function hIndex(citations) {}` },
    'capacity-to-ship': { title: 'Capacity To Ship Packages', description: `<p>Find the least weight capacity to ship within days.</p>`, starterCode: `function shipWithinDays(weights, days) {}` }
};

/**
 * 9. INTERVAL POINTERS (SWEEP LINE)
 */
const intervalPointers = {
    'meeting-rooms-ii': { title: 'Meeting Rooms II', description: `<p>Find the minimum number of conference rooms required.</p>`, starterCode: `function minMeetingRooms(intervals) {}` },
    'merge-intervals': { title: 'Merge Intervals', description: `<p>Merge all overlapping intervals.</p>`, starterCode: `function merge(intervals) {}` },
    'insert-interval': { title: 'Insert Interval', description: `<p>Insert a new interval into sorted intervals and merge if needed.</p>`, starterCode: `function insert(intervals, newInterval) {}` },
    'employee-free-time': { title: 'Employee Free Time', description: `<p>Find the free time common to all employees.</p>`, starterCode: `function employeeFreeTime(schedule) {}` },
    'non-overlapping': { title: 'Non-overlapping Intervals', description: `<p>Find minimum number of intervals to remove to make the rest non-overlapping.</p>`, starterCode: `function eraseOverlapIntervals(intervals) {}` },
    'partition-labels': { title: 'Partition Labels', description: `<p>Partition string into as many parts as possible so each letter appears in at most one part.</p>`, starterCode: `function partitionLabels(s) {}` },
    'burst-balloons': { title: 'Minimum Arrows to Burst Balloons', description: `<p>Find minimum arrows to burst all balloons.</p>`, starterCode: `function findMinArrowShots(points) {}` },
    'video-stitching': { title: 'Video Stitching', description: `<p>Find minimum clips needed to cover the range [0, T].</p>`, starterCode: `function videoStitching(clips, time) {}` },
    'teemo-attacking': { title: 'Teemo Attacking', description: `<p>Find total time poisoned.</p>`, starterCode: `function findPoisonedDuration(timeSeries, duration) {}` },
    'car-pooling': { title: 'Car Pooling', description: `<p>Return true if it is possible to pick up and drop off all passengers.</p>`, starterCode: `function carPooling(trips, capacity) {}` }
};

/**
 * 10. TRIPLE POINTERS (PARTITIONING)
 */
const triplePointers = {
    'sort-colors': { title: 'Sort Colors (75)', description: `<p>Sort an array of 0s, 1s, and 2s (Dutch National Flag).</p>`, starterCode: `function sortColors(nums) {}` },
    'sort-parity-ii': { title: 'Sort Array By Parity II', description: `<p>Sort such that even indices have even values and odd indices have odd.</p>`, starterCode: `function sortArrayByParityII(nums) {}` },
    'quick-sort-3-way': { title: '3-Way QuickSort Partition', description: `<p>Implement a partition function that handles many duplicate keys.</p>`, starterCode: `function partition(nums, low, high) {}` },
    'move-even-odd-zero': { title: 'Move Even, Odd, and Zero', description: `<p>Partition array into [Evens, Zeros, Odds].</p>`, starterCode: `function partition(nums) {}` },
    'wiggle-sort': { title: 'Wiggle Sort', description: `<p>Rearrange array such that nums[0] <= nums[1] >= nums[2] <= nums[3]...</p>`, starterCode: `function wiggleSort(nums) {}` },
    'kth-largest': { title: 'Kth Largest Element', description: `<p>Find the kth largest element in an unsorted array.</p>`, starterCode: `function findKthLargest(nums, k) {}` },
    'partition-three-equal': { title: 'Partition Array Into Three Parts With Equal Sum', description: `<p>Check if array can be partitioned into 3 parts with equal sum.</p>`, starterCode: `function canThreePartsEqualSum(arr) {}` },
    'rearrange-sign': { title: 'Rearrange Array Elements by Sign', description: `<p>Rearrange elements such that every consecutive pair has opposite signs.</p>`, starterCode: `function rearrangeArray(nums) {}` },
    'sort-transformed': { title: 'Sort Transformed Array', description: `<p>Given sorted nums, return sorted array after applying f(x) = ax^2 + bx + c.</p>`, starterCode: `function sortTransformedArray(nums, a, b, c) {}` },
    'three-way-split': { title: 'Three Way Split', description: `<p>Split array such that sum(part1) = sum(part3) is maximized.</p>`, starterCode: `function threeWaySplit(nums) {}` }
};

/**
 * 11. CYCLIC POINTERS (INDEX AS POINTER)
 */
const cyclicPointers = {
    'duplicate-find': { title: 'Find the Duplicate Number (287)', description: `<p>Find duplicate using cyclic pointer logic.</p>`, starterCode: `function findDuplicate(nums) {}` },
    'first-missing-positive': { title: 'First Missing Positive (41)', description: `<p>Find the smallest missing positive integer in O(n) time.</p>`, starterCode: `function firstMissingPositive(nums) {}` },
    'disappeared-numbers': { title: 'Find All Numbers Disappeared', description: `<p>Find all elements of [1, n] that do not appear in nums.</p>`, starterCode: `function findDisappearedNumbers(nums) {}` },
    'all-duplicates': { title: 'Find All Duplicates in an Array', description: `<p>Find all elements that appear twice.</p>`, starterCode: `function findDuplicates(nums) {}` },
    'set-mismatch': { title: 'Set Mismatch', description: `<p>Find the number that occurs twice and the number that is missing.</p>`, starterCode: `function findErrorNums(nums) {}` },
    'array-nesting': { title: 'Array Nesting', description: `<p>Find the longest set S[i] = {A[i], A[A[i]], A[A[A[i]]], ...}.</p>`, starterCode: `function arrayNesting(nums) {}` },
    'couples-holding-hands': { title: 'Couples Holding Hands', description: `<p>Find minimum swaps so that every couple is sitting side by side.</p>`, starterCode: `function minSwapsCouples(row) {}` },
    'missing-number': { title: 'Missing Number', description: `<p>Find the one number in the range [0, n] that is missing.</p>`, starterCode: `function missingNumber(nums) {}` },
    'valid-permutation': { title: 'Cycle Sort', description: `<p>Implement cycle sort for an array of distinct elements.</p>`, starterCode: `function cycleSort(nums) {}` },
    'kth-missing-positive': { title: 'Kth Missing Positive Number', description: `<p>Find the kth positive integer that is missing from sorted array.</p>`, starterCode: `function findKthPositive(arr, k) {}` }
};

/**
 * 12. TWO-PASS GREEDY POINTERS
 */
const twoPassGreedyPointers = {
    'trapping-rain-water': { title: 'Trapping Rain Water (42)', description: `<p>Compute trapped water using two passes (LeftMax and RightMax).</p>`, starterCode: `function trap(height) {}` },
    'candy': { title: 'Candy (135)', description: `<p>Minimum candies needed so children with higher ratings get more than neighbors.</p>`, starterCode: `function candy(ratings) {}` },
    'product-except-self': { title: 'Product of Array Except Self', description: `<p>Return array where result[i] is product of all elements except nums[i].</p>`, starterCode: `function productExceptSelf(nums) {}` },
    'valid-parentheses-pass': { title: 'Longest Valid Parentheses (Two Pass)', description: `<p>Find length of longest valid parentheses using left and right counters.</p>`, starterCode: `function longestValidParentheses(s) {}` },
    'gas-station': { title: 'Gas Station', description: `<p>Find starting gas station index to complete the circuit.</p>`, starterCode: `function canCompleteCircuit(gas, cost) {}` },
    'daily-temperatures': { title: 'Daily Temperatures', description: `<p>Find how many days to wait for a warmer temperature.</p>`, starterCode: `function dailyTemperatures(temperatures) {}` },
    'max-product-subarray': { title: 'Maximum Product Subarray', description: `<p>Find the contiguous subarray with largest product (Two pass: Prefix/Suffix).</p>`, starterCode: `function maxProduct(nums) {}` },
    'jump-game': { title: 'Jump Game', description: `<p>Determine if you can reach the last index.</p>`, starterCode: `function canJump(nums) {}` },
    'largest-rectangle': { title: 'Largest Rectangle in Histogram', description: `<p>Find the area of largest rectangle (Two pass for boundaries).</p>`, starterCode: `function largestRectangleArea(heights) {}` },
    'min-stack-logic': { title: 'Min Stack Simulation', description: `<p>Simulate min stack retrieval using two-pass logic.</p>`, starterCode: `function getMinList(nums) {}` }
};