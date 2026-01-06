/**
 * 1. CONVERGING POINTERS (OPPOSITE ENDS)
 * Start at both ends and move toward each other (left++ and right--).
 */
const convergingPointers = {
    'two-sum-ii': {
        title: 'Two Sum II - Input Array Is Sorted',
        description: `
            <h2>Problem Description</h2>
            <p>Given a 1-indexed array of integers <code>numbers</code> that is already sorted in non-decreasing order, find two numbers such that they add up to a specific <code>target</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2.</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: numbers = [2,3,4], target = 6
Output: [1,3]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>2 <= numbers.length <= 3 * 10^4</li>
                <li>-1000 <= numbers[i] <= 1000</li>
                <li>-1000 <= target <= 1000</li>
            </ul>
        `,
        starterCode: `function twoSum(numbers, target) {\n    // Implementation\n}`
    },
    'valid-palindrome': {
        title: 'Valid Palindrome',
        description: `
            <h2>Problem Description</h2>
            <p>A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "A man, a plan, a canal: Panama"
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "race a car"
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s.length <= 2 * 10^5</li>
                <li>s consists only of printable ASCII characters.</li>
            </ul>
        `,
        starterCode: `function isPalindrome(s) {\n    // Implementation\n}`
    },
    'container-with-most-water': {
        title: 'Container With Most Water',
        description: `
            <h2>Problem Description</h2>
            <p>Find two lines that together with the x-axis forms a container, such that the container contains the most water.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: height = [1,1]
Output: 1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>n == height.length</li>
                <li>2 <= n <= 10^5</li>
            </ul>
        `,
        starterCode: `function maxArea(height) {\n    // Implementation\n}`
    },
    'three-sum': {
        title: '3Sum',
        description: `
            <h2>Problem Description</h2>
            <p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [0,1,1]
Output: []</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>3 <= nums.length <= 3000</li>
                <li>-10^5 <= nums[i] <= 10^5</li>
            </ul>
        `,
        starterCode: `function threeSum(nums) {\n    // Implementation\n}`
    },
    'reverse-string': {
        title: 'Reverse String',
        description: `
            <h2>Problem Description</h2>
            <p>Write a function that reverses a string. The input string is given as an array of characters <code>s</code>. You must do this by modifying the input array in-place.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s.length <= 10^5</li>
                <li>s[i] is a printable ASCII character.</li>
            </ul>
        `,
        starterCode: `function reverseString(s) {\n    // Implementation\n}`
    },
    'four-sum': {
        title: '4Sum',
        description: `
            <h2>Problem Description</h2>
            <p>Given an array nums of n integers, return an array of all unique quadruplets <code>[nums[a], nums[b], nums[c], nums[d]]</code> such that their sum is <code>target</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 200</li>
                <li>-10^9 <= nums[i] <= 10^9</li>
            </ul>
        `,
        starterCode: `function fourSum(nums, target) {\n    // Implementation\n}`
    },
    'k-diff-pairs': {
        title: 'K-diff Pairs in an Array',
        description: `
            <h2>Problem Description</h2>
            <p>Given an array of integers <code>nums</code> and an integer <code>k</code>, return the number of unique pairs (nums[i], nums[j]) such that <code>|nums[i] - nums[j]| == k</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [3,1,4,1,5], k = 2
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [1,2,3,4,5], k = 1
Output: 4</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 10^4</li>
                <li>0 <= k <= 10^7</li>
            </ul>
        `,
        starterCode: `function findPairs(nums, k) {\n    // Implementation\n}`
    },
    'palindrome-number': {
        title: 'Palindrome Number',
        description: `
            <h2>Problem Description</h2>
            <p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: x = 121
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: x = -121
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>-2^31 <= x <= 2^31 - 1</li>
            </ul>
        `,
        starterCode: `function isPalindrome(x) {\n    // Implementation\n}`
    },
    'trapping-rain-water-converging': {
        title: 'Trapping Rain Water (Two Pointer)',
        description: `
            <h2>Problem Description</h2>
            <p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: height = [4,2,0,3,2,5]
Output: 9</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>n == height.length</li>
                <li>1 <= n <= 2 * 10^4</li>
                <li>0 <= height[i] <= 10^5</li>
            </ul>
        `,
        starterCode: `function trap(height) {\n    // Implementation\n}`
    },
    'sorted-squares': {
        title: 'Squares of a Sorted Array',
        description: `
            <h2>Problem Description</h2>
            <p>Given an integer array <code>nums</code> sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 10^4</li>
                <li>-10^4 <= nums[i] <= 10^4</li>
                <li>nums is sorted in non-decreasing order.</li>
            </ul>
        `,
        starterCode: `function sortedSquares(nums) {\n    // Implementation\n}`
    }
};

/**
 * 2. SLOW-FAST POINTERS (TORTOISE AND HARE)
 * Detect cycles and midpoints.
 */
const slowFastPointers = {
    'linked-list-cycle': {
        title: 'Linked List Cycle',
        description: `
            <h2>Problem Description</h2>
            <p>Given head, the head of a linked list, determine if the linked list has a cycle in it.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: head = [3,2,0,-4], pos = 1
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: head = [1,2], pos = 0
Output: true</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>The number of nodes in the list is in the range [0, 10^4].</li>
                <li>-10^5 <= Node.val <= 10^5</li>
            </ul>
        `,
        starterCode: `function hasCycle(head) {\n    // Implementation\n}`
    },
    'middle-of-linked-list': {
        title: 'Middle of the Linked List',
        description: `
            <h2>Problem Description</h2>
            <p>Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: head = [1,2,3,4,5]
Output: [3,4,5]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: head = [1,2,3,4,5,6]
Output: [4,5,6]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>The number of nodes in the list is in the range [1, 100].</li>
            </ul>
        `,
        starterCode: `function middleNode(head) {\n    // Implementation\n}`
    },
    'happy-number': {
        title: 'Happy Number',
        description: `
            <h2>Problem Description</h2>
            <p>Determine if a number <code>n</code> is happy. A happy number is defined by a process of replacing the number by the sum of the squares of its digits.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: n = 19
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: n = 2
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= n <= 2^31 - 1</li>
            </ul>
        `,
        starterCode: `function isHappy(n) {\n    // Implementation\n}`
    },
    'find-the-duplicate-number': {
        title: 'Find the Duplicate Number',
        description: `
            <h2>Problem Description</h2>
            <p>Given an array <code>nums</code> containing <code>n + 1</code> integers where each integer is in the range <code>[1, n]</code>, find the duplicate number.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,3,4,2,2]
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [3,1,3,4,2]
Output: 3</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= n <= 10^5</li>
                <li>nums.length == n + 1</li>
            </ul>
        `,
        starterCode: `function findDuplicate(nums) {\n    // Implementation\n}`
    },
    'linked-list-cycle-ii': {
        title: 'Linked List Cycle II',
        description: `
            <h2>Problem Description</h2>
            <p>Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: head = [1,2], pos = 0
Output: tail connects to node index 0</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Number of nodes is in range [0, 10^4].</li>
            </ul>
        `,
        starterCode: `function detectCycle(head) {\n    // Implementation\n}`
    },
    'palindrome-linked-list': {
        title: 'Palindrome Linked List',
        description: `
            <h2>Problem Description</h2>
            <p>Given the head of a singly linked list, return <code>true</code> if it is a palindrome or <code>false</code> otherwise.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: head = [1,2,2,1]
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: head = [1,2]
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Number of nodes is in range [1, 10^5].</li>
            </ul>
        `,
        starterCode: `function isPalindrome(head) {\n    // Implementation\n}`
    },
    'remove-nth-node-from-end': {
        title: 'Remove Nth Node From End of List',
        description: `
            <h2>Problem Description</h2>
            <p>Given the head of a linked list, remove the nth node from the end of the list and return its head.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: head = [1], n = 1
Output: []</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>The number of nodes in the list is n.</li>
                <li>1 <= n <= 30</li>
            </ul>
        `,
        starterCode: `function removeNthFromEnd(head, n) {\n    // Implementation\n}`
    },
    'reorder-list': {
        title: 'Reorder List',
        description: `
            <h2>Problem Description</h2>
            <p>Reorder the list to follow: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …</p>
            <h3>Example 1:</h3>
            <pre><code>Input: head = [1,2,3,4]
Output: [1,4,2,3]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Number of nodes is in range [1, 5 * 10^4].</li>
            </ul>
        `,
        starterCode: `function reorderList(head) {\n    // Implementation\n}`
    },
    'circular-array-loop': {
        title: 'Circular Array Loop',
        description: `
            <h2>Problem Description</h2>
            <p>Determine if there is a cycle in a circular array of non-zero integers.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [2,-1,1,2,2]
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [-1,2]
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 5000</li>
                <li>-1000 <= nums[i] <= 1000</li>
            </ul>
        `,
        starterCode: `function circularArrayLoop(nums) {\n    // Implementation\n}`
    },
    'delete-middle-node': {
        title: 'Delete the Middle Node of a Linked List',
        description: `
            <h2>Problem Description</h2>
            <p>Remove the middle node and return the head of the modified list.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: head = [1,2,3,4]
Output: [1,2,4]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>The number of nodes is in range [1, 10^5].</li>
            </ul>
        `,
        starterCode: `function deleteMiddle(head) {\n    // Implementation\n}`
    }
};

/**
 * 3. SLIDING WINDOW
 * Contiguous sub-segments tracking.
 */
const slidingWindowProblems = {
    'longest-substring-without-repeating': {
        title: 'Longest Substring Without Repeating Characters',
        description: `
            <h2>Problem Description</h2>
            <p>Given a string <code>s</code>, find the length of the longest substring without repeating characters.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "abcabcbb"
Output: 3</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "bbbbb"
Output: 1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>0 <= s.length <= 5 * 10^4</li>
                <li>s consists of English letters, digits, symbols and spaces.</li>
            </ul>
        `,
        starterCode: `function lengthOfLongestSubstring(s) {\n    // Implementation\n}`
    },
    'minimum-size-subarray-sum': {
        title: 'Minimum Size Subarray Sum',
        description: `
            <h2>Problem Description</h2>
            <p>Find the minimal length of a contiguous subarray of which the sum is ≥ <code>target</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: target = 4, nums = [1,4,4]
Output: 1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= target <= 10^9</li>
                <li>1 <= nums.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function minSubArrayLen(target, nums) {\n    // Implementation\n}`
    },
    'sliding-window-maximum': {
        title: 'Sliding Window Maximum',
        description: `
            <h2>Problem Description</h2>
            <p>You are given an array of integers <code>nums</code>, there is a sliding window of size <code>k</code> which is moving from the very left of the array to the very right.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [1], k = 1
Output: [1]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 10^5</li>
                <li>1 <= k <= nums.length</li>
            </ul>
        `,
        starterCode: `function maxSlidingWindow(nums, k) {\n    // Implementation\n}`
    },
    'permutation-in-string': {
        title: 'Permutation in String',
        description: `
            <h2>Problem Description</h2>
            <p>Given two strings <code>s1</code> and <code>s2</code>, return true if <code>s2</code> contains a permutation of <code>s1</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s1 = "ab", s2 = "eidbaooo"
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s1 = "ab", s2 = "eidboaoo"
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s1.length, s2.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function checkInclusion(s1, s2) {\n    // Implementation\n}`
    },
    'maximum-average-subarray-i': {
        title: 'Maximum Average Subarray I',
        description: `
            <h2>Problem Description</h2>
            <p>Find a contiguous subarray whose length is equal to <code>k</code> that has the maximum average value.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [5], k = 1
Output: 5.0</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>n == nums.length</li>
                <li>1 <= k <= n <= 10^5</li>
            </ul>
        `,
        starterCode: `function findMaxAverage(nums, k) {\n    // Implementation\n}`
    },
    'find-all-anagrams-in-a-string': {
        title: 'Find All Anagrams in a String',
        description: `
            <h2>Problem Description</h2>
            <p>Given two strings <code>s</code> and <code>p</code>, return an array of all the start indices of <code>p</code>'s anagrams in <code>s</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "cbaebabacd", p = "abc"
Output: [0,6]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "abab", p = "ab"
Output: [0,1,2]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s.length, p.length <= 3 * 10^4</li>
            </ul>
        `,
        starterCode: `function findAnagrams(s, p) {\n    // Implementation\n}`
    },
    'subarrays-with-k-different-integers': {
        title: 'Subarrays with K Different Integers',
        description: `
            <h2>Problem Description</h2>
            <p>Given an integer array <code>nums</code> and an integer <code>k</code>, return the number of good subarrays of <code>nums</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,2,1,2,3], k = 2
Output: 7</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [1,2,1,3,4], k = 3
Output: 3</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 2 * 10^4</li>
                <li>1 <= k <= nums.length</li>
            </ul>
        `,
        starterCode: `function subarraysWithKDistinct(nums, k) {\n    // Implementation\n}`
    },
    'fruit-into-baskets': {
        title: 'Fruit Into Baskets',
        description: `
            <h2>Problem Description</h2>
            <p>Find the maximum number of fruits you can collect in two baskets.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: fruits = [1,2,1]
Output: 3</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: fruits = [0,1,2,2]
Output: 3</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= fruits.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function totalFruit(fruits) {\n    // Implementation\n}`
    },
    'max-consecutive-ones-iii': {
        title: 'Max Consecutive Ones III',
        description: `
            <h2>Problem Description</h2>
            <p>Given a binary array <code>nums</code> and an integer <code>k</code>, return the maximum number of consecutive 1's in the array if you can flip at most <code>k</code> 0's.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 10^5</li>
                <li>0 <= k <= nums.length</li>
            </ul>
        `,
        starterCode: `function longestOnes(nums, k) {\n    // Implementation\n}`
    },
    'subarray-product-less-than-k': {
        title: 'Subarray Product Less Than K',
        description: `
            <h2>Problem Description</h2>
            <p>Given an array of integers <code>nums</code> and an integer <code>k</code>, return the number of contiguous subarrays where the product of all elements is strictly less than <code>k</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [10,5,2,6], k = 100
Output: 8</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [1,2,3], k = 0
Output: 0</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 3 * 10^4</li>
                <li>1 <= nums[i] <= 1000</li>
                <li>0 <= k <= 10^6</li>
            </ul>
        `,
        starterCode: `function numSubarrayProductLessThanK(nums, k) {\n    // Implementation\n}`
    }
};

/**
 * 4. DIVERGING POINTERS (EXPAND FROM CENTER)
 * Symmetry check from center outward.
 */
const divergingPointers = {
    'longest-palindromic-substring': {
        title: 'Longest Palindromic Substring',
        description: `
            <h2>Problem Description</h2>
            <p>Given a string <code>s</code>, return the longest palindromic substring in <code>s</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "babad"
Output: "bab"</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "cbbd"
Output: "bb"</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s.length <= 1000</li>
                <li>s consists of only digits and English letters.</li>
            </ul>
        `,
        starterCode: `function longestPalindrome(s) {\n    // Implementation\n}`
    },
    'palindromic-substrings-count': {
        title: 'Palindromic Substrings',
        description: `
            <h2>Problem Description</h2>
            <p>Given a string <code>s</code>, return the number of palindromic substrings in it.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "abc"
Output: 3</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "aaa"
Output: 6</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s.length <= 1000</li>
            </ul>
        `,
        starterCode: `function countSubstrings(s) {\n    // Implementation\n}`
    },
    'shortest-palindrome': {
        title: 'Shortest Palindrome',
        description: `
            <h2>Problem Description</h2>
            <p>Find the shortest palindrome by adding characters in front of a string <code>s</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "aacecaaa"
Output: "aaacecaaa"</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "abcd"
Output: "dcbabcd"</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>0 <= s.length <= 5 * 10^4</li>
            </ul>
        `,
        starterCode: `function shortestPalindrome(s) {\n    // Implementation\n}`
    },
    'symmetric-tree': {
        title: 'Symmetric Tree',
        description: `
            <h2>Problem Description</h2>
            <p>Given the root of a binary tree, check whether it is a mirror of itself.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: root = [1,2,2,3,4,4,3]
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: root = [1,2,2,null,3,null,3]
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>The number of nodes is in range [1, 1000].</li>
            </ul>
        `,
        starterCode: `function isSymmetric(root) {\n    // Implementation\n}`
    },
    'strobogrammatic-number': {
        title: 'Strobogrammatic Number',
        description: `
            <h2>Problem Description</h2>
            <p>Given a string <code>num</code> which represents an integer, return <code>true</code> if <code>num</code> is strobogrammatic (looks the same rotated 180 degrees).</p>
            <h3>Example 1:</h3>
            <pre><code>Input: num = "69"
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: num = "88"
Output: true</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= num.length <= 50</li>
            </ul>
        `,
        starterCode: `function isStrobogrammatic(num) {\n    // Implementation\n}`
    },
    'valid-palindrome-ii': {
        title: 'Valid Palindrome II',
        description: `
            <h2>Problem Description</h2>
            <p>Given a string <code>s</code>, return <code>true</code> if the <code>s</code> can be palindrome after deleting at most one character from it.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "aba"
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "abca"
Output: true</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function validPalindrome(s) {\n    // Implementation\n}`
    },
    'isomorphic-strings': {
        title: 'Isomorphic Strings',
        description: `
            <h2>Problem Description</h2>
            <p>Two strings <code>s</code> and <code>t</code> are isomorphic if the characters in <code>s</code> can be replaced to get <code>t</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "egg", t = "add"
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "foo", t = "bar"
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s.length <= 5 * 10^4</li>
            </ul>
        `,
        starterCode: `function isIsomorphic(s, t) {\n    // Implementation\n}`
    },
    'longest-happy-string': {
        title: 'Longest Happy String',
        description: `
            <h2>Problem Description</h2>
            <p>Generate the longest possible string s with given counts of 'a', 'b', and 'c' such that s does not contain "aaa", "bbb", or "ccc".</p>
            <h3>Example 1:</h3>
            <pre><code>Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: a = 7, b = 1, c = 0
Output: "aabaa"</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>0 <= a, b, c <= 100</li>
            </ul>
        `,
        starterCode: `function longestDiverseString(a, b, c) {\n    // Implementation\n}`
    },
    'mirror-reflection': {
        title: 'Mirror Reflection',
        description: `
            <h2>Problem Description</h2>
            <p>A ray of light is reflected in a square room. Find which receptor it hits.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: p = 2, q = 1
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: p = 3, q = 1
Output: 1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= p <= 1000</li>
                <li>0 <= q <= p</li>
            </ul>
        `,
        starterCode: `function mirrorReflection(p, q) {\n    // Implementation\n}`
    },
    'find-mirror-index': {
        title: 'Find Mirror Index in String',
        description: `
            <h2>Problem Description</h2>
            <p>Identify the central index from which the string extends symmetrically for the longest possible length.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "racecar"
Output: 3</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "abba"
Output: 1.5</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function findMirror(s) {\n    // Implementation\n}`
    }
};

/**
 * 5. MULTI-STRUCTURE POINTERS
 * Simultaneous traversal of two separate structures.
 */
const multiStructurePointers = {
    'merge-sorted-array': {
        title: 'Merge Sorted Array',
        description: `
            <h2>Problem Description</h2>
            <p>Merge two sorted arrays <code>nums1</code> and <code>nums2</code> into <code>nums1</code> as one sorted array.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>nums1.length == m + n</li>
                <li>nums2.length == n</li>
            </ul>
        `,
        starterCode: `function merge(nums1, m, nums2, n) {\n    // Implementation\n}`
    },
    'intersection-of-two-arrays-ii': {
        title: 'Intersection of Two Arrays II',
        description: `
            <h2>Problem Description</h2>
            <p>Given two integer arrays, return an array of their intersection.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums1.length, nums2.length <= 1000</li>
            </ul>
        `,
        starterCode: `function intersect(nums1, nums2) {\n    // Implementation\n}`
    },
    'is-subsequence': {
        title: 'Is Subsequence',
        description: `
            <h2>Problem Description</h2>
            <p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>s</code> is a subsequence of <code>t</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "abc", t = "ahbgdc"
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "axc", t = "ahbgdc"
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>0 <= s.length <= 100</li>
                <li>0 <= t.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function isSubsequence(s, t) {\n    // Implementation\n}`
    },
    'compare-version-numbers': {
        title: 'Compare Version Numbers',
        description: `
            <h2>Problem Description</h2>
            <p>Compare two version numbers <code>version1</code> and <code>version2</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: version1 = "1.01", version2 = "1.001"
Output: 0</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: version1 = "1.0", version2 = "1.0.0"
Output: 0</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= version1.length, version2.length <= 500</li>
            </ul>
        `,
        starterCode: `function compareVersion(version1, version2) {\n    // Implementation\n}`
    },
    'backspace-string-compare': {
        title: 'Backspace String Compare',
        description: `
            <h2>Problem Description</h2>
            <p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if they are equal when both are typed into empty text editors.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "ab#c", t = "ad#c"
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "ab##", t = "c#d#"
Output: true</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s.length, t.length <= 200</li>
            </ul>
        `,
        starterCode: `function backspaceCompare(s, t) {\n    // Implementation\n}`
    },
    'longest-word-in-dictionary': {
        title: 'Longest Word in Dictionary through Deleting',
        description: `
            <h2>Problem Description</h2>
            <p>Find the longest string in the dictionary that can be formed by deleting some characters of the given string <code>s</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
Output: "apple"</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "abpcplea", dictionary = ["a","b","c"]
Output: "a"</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s.length <= 1000</li>
                <li>1 <= dictionary.length <= 1000</li>
            </ul>
        `,
        starterCode: `function findLongestWord(s, dictionary) {\n    // Implementation\n}`
    },
    'interval-list-intersections': {
        title: 'Interval List Intersections',
        description: `
            <h2>Problem Description</h2>
            <p>Return the intersection of two closed interval lists.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: firstList = [[1,3],[5,9]], secondList = []
Output: []</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>0 <= firstList.length, secondList.length <= 1000</li>
            </ul>
        `,
        starterCode: `function intervalIntersection(firstList, secondList) {\n    // Implementation\n}`
    },
    'find-k-closest-elements': {
        title: 'Find K Closest Elements',
        description: `
            <h2>Problem Description</h2>
            <p>Given a sorted integer array <code>arr</code>, two integers <code>k</code> and <code>x</code>, return the <code>k</code> closest integers to <code>x</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= k <= arr.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function findClosestElements(arr, k, x) {\n    // Implementation\n}`
    },
    'merge-two-sorted-lists': {
        title: 'Merge Two Sorted Lists',
        description: `
            <h2>Problem Description</h2>
            <p>Merge two sorted linked lists and return it as a new sorted list.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: l1 = [], l2 = []
Output: []</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>Number of nodes in both lists is in range [0, 50].</li>
            </ul>
        `,
        starterCode: `function mergeTwoLists(l1, l2) {\n    // Implementation\n}`
    },
    'intersection-of-two-arrays': {
        title: 'Intersection of Two Arrays',
        description: `
            <h2>Problem Description</h2>
            <p>Given two integer arrays, return an array of their intersection. Each element in the result must be unique.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums1.length, nums2.length <= 1000</li>
            </ul>
        `,
        starterCode: `function intersection(nums1, nums2) {\n    // Implementation\n}`
    }
};

/**
 * 6. READ-WRITE POINTERS
 * In-place modification/filtering.
 */
const readWritePointers = {
    'remove-duplicates-from-sorted-array': {
        title: 'Remove Duplicates from Sorted Array',
        description: `
            <h2>Problem Description</h2>
            <p>Given an integer array <code>nums</code> sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 3 * 10^4</li>
                <li>-100 <= nums[i] <= 100</li>
            </ul>
        `,
        starterCode: `function removeDuplicates(nums) {\n    // Implementation\n}`
    },
    'remove-element': {
        title: 'Remove Element',
        description: `
            <h2>Problem Description</h2>
            <p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> in-place.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,3,0,4,_,_,_]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>0 <= nums.length <= 100</li>
                <li>0 <= nums[i] <= 50</li>
            </ul>
        `,
        starterCode: `function removeElement(nums, val) {\n    // Implementation\n}`
    },
    'move-zeroes': {
        title: 'Move Zeroes',
        description: `
            <h2>Problem Description</h2>
            <p>Given an integer array <code>nums</code>, move all 0's to the end of it while maintaining the relative order of the non-zero elements.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [0]
Output: [0]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function moveZeroes(nums) {\n    // Implementation\n}`
    },
    'string-compression': {
        title: 'String Compression',
        description: `
            <h2>Problem Description</h2>
            <p>Given an array of characters <code>chars</code>, compress it using the following algorithm: For each group of consecutive repeating characters in <code>chars</code>...</p>
            <h3>Example 1:</h3>
            <pre><code>Input: chars = ["a","a","b","b","c","c","c"]
Output: 6, chars = ["a","2","b","2","c","3"]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: chars = ["a"]
Output: 1, chars = ["a"]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= chars.length <= 2000</li>
            </ul>
        `,
        starterCode: `function compress(chars) {\n    // Implementation\n}`
    },
    'summary-ranges': {
        title: 'Summary Ranges',
        description: `
            <h2>Problem Description</h2>
            <p>Return the smallest sorted list of ranges that cover all the numbers in the array exactly.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>0 <= nums.length <= 20</li>
                <li>nums is sorted in ascending order.</li>
            </ul>
        `,
        starterCode: `function summaryRanges(nums) {\n    // Implementation\n}`
    },
    'sort-array-by-parity': {
        title: 'Sort Array By Parity',
        description: `
            <h2>Problem Description</h2>
            <p>Given an integer array <code>nums</code>, move all the even integers at the beginning of the array followed by all the odd integers.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [3,1,2,4]
Output: [2,4,3,1]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [0]
Output: [0]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 5000</li>
            </ul>
        `,
        starterCode: `function sortArrayByParity(nums) {\n    // Implementation\n}`
    },
    'reverse-words-in-a-string-iii': {
        title: 'Reverse Words in a String III',
        description: `
            <h2>Problem Description</h2>
            <p>Reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "God Ding"
Output: "doG gniD"</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s.length <= 5 * 10^4</li>
            </ul>
        `,
        starterCode: `function reverseWords(s) {\n    // Implementation\n}`
    },
    'duplicate-zeros': {
        title: 'Duplicate Zeros',
        description: `
            <h2>Problem Description</h2>
            <p>Given a fixed-length integer array <code>arr</code>, duplicate each occurrence of zero, shifting the remaining elements to the right.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: arr = [1,2,3]
Output: [1,2,3]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= arr.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function duplicateZeros(arr) {\n    // Implementation\n}`
    },
    'remove-duplicates-from-sorted-array-ii': {
        title: 'Remove Duplicates from Sorted Array II',
        description: `
            <h2>Problem Description</h2>
            <p>Remove duplicates such that each unique element appears at most twice.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 3 * 10^4</li>
            </ul>
        `,
        starterCode: `function removeDuplicates(nums) {\n    // Implementation\n}`
    },
    'apply-operations-to-an-array': {
        title: 'Apply Operations to an Array',
        description: `
            <h2>Problem Description</h2>
            <p>Apply <code>n - 1</code> operations on the array: if <code>nums[i] == nums[i + 1]</code>, double <code>nums[i]</code> and set <code>nums[i + 1]</code> to 0. Then shift all 0s to end.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,2,2,1,1,0]
Output: [1,4,2,0,0,0]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [0,1]
Output: [1,0]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>2 <= nums.length <= 2000</li>
            </ul>
        `,
        starterCode: `function applyOperations(nums) {\n    // Implementation\n}`
    }
};

/**
 * 7. SADDLEBACK SEARCH (2D POINTERS)
 * Efficient traversal of Row/Col sorted matrices.
 */
const saddlebackSearchProblems = {
    'search-a-2d-matrix-ii': {
        title: 'Search a 2D Matrix II',
        description: `
            <h2>Problem Description</h2>
            <p>Write an efficient algorithm that searches for a value <code>target</code> in an <code>m x n</code> integer matrix.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>m == matrix.length</li>
                <li>n == matrix[i].length</li>
                <li>-10^9 <= target <= 10^9</li>
            </ul>
        `,
        starterCode: `function searchMatrix(matrix, target) {\n    // Implementation\n}`
    },
    'count-negative-numbers-in-a-sorted-matrix': {
        title: 'Count Negative Numbers in a Sorted Matrix',
        description: `
            <h2>Problem Description</h2>
            <p>Given a <code>m x n</code> matrix <code>grid</code> which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in <code>grid</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: grid = [[3,2],[1,0]]
Output: 0</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>m == grid.length</li>
                <li>n == grid[i].length</li>
            </ul>
        `,
        starterCode: `function countNegatives(grid) {\n    // Implementation\n}`
    },
    'find-saddle-point': {
        title: 'Find Saddle Point',
        description: `
            <h2>Problem Description</h2>
            <p>A saddle point is an element of the matrix such that it is the minimum element in its row and maximum in its column.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [0, 2] (value 3)</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: matrix = [[3,8,7],[1,5,8],[2,6,9]]
Output: [2, 0] (value 2)</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= m, n <= 100</li>
            </ul>
        `,
        starterCode: `function findSaddlePoint(matrix) {\n    // Implementation\n}`
    },
    'kth-smallest-element-in-a-sorted-matrix': {
        title: 'Kth Smallest Element in a Sorted Matrix',
        description: `
            <h2>Problem Description</h2>
            <p>Given an <code>n x n</code> matrix where each of the rows and columns are sorted in ascending order, return the <code>k</code>-th smallest element in the matrix.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: matrix = [[-5]], k = 1
Output: -5</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>n == matrix.length</li>
                <li>1 <= k <= n^2</li>
            </ul>
        `,
        starterCode: `function kthSmallest(matrix, k) {\n    // Implementation\n}`
    },
    'diagonal-traverse': {
        title: 'Diagonal Traverse',
        description: `
            <h2>Problem Description</h2>
            <p>Given an <code>m x n</code> matrix <code>mat</code>, return an array of all the elements of the array in a diagonal order.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>m == mat.length</li>
                <li>n == mat[i].length</li>
            </ul>
        `,
        starterCode: `function findDiagonalOrder(mat) {\n    // Implementation\n}`
    },
    'spiral-matrix': {
        title: 'Spiral Matrix',
        description: `
            <h2>Problem Description</h2>
            <p>Given an <code>m x n</code> matrix, return all elements of the matrix in spiral order.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>m == matrix.length</li>
                <li>n == matrix[i].length</li>
            </ul>
        `,
        starterCode: `function spiralOrder(matrix) {\n    // Implementation\n}`
    },
    'young-tableau-search': {
        title: 'Young Tableau Search',
        description: `
            <h2>Problem Description</h2>
            <p>In a Young Tableau, every row and column is sorted. Search for a target.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: matrix = [[1,2],[3,4]], target = 3
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: matrix = [[1,2],[3,4]], target = 5
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= m, n <= 500</li>
            </ul>
        `,
        starterCode: `function searchTableau(matrix, target) {\n    // Implementation\n}`
    },
    'matrix-boundary-sum': {
        title: 'Matrix Boundary Sum',
        description: `
            <h2>Problem Description</h2>
            <p>Given a 2D matrix, calculate the sum of elements on its boundaries.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: 40 (1+2+3+6+9+8+7+4)</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: matrix = [[1,2],[3,4]]
Output: 10 (1+2+3+4)</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= m, n <= 100</li>
            </ul>
        `,
        starterCode: `function boundarySum(matrix) {\n    // Implementation\n}`
    },
    'reshape-the-matrix': {
        title: 'Reshape the Matrix',
        description: `
            <h2>Problem Description</h2>
            <p>Reshape an <code>m x n</code> matrix into a new one with <code>r</code> rows and <code>c</code> columns.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>m == mat.length</li>
                <li>n == mat[i].length</li>
            </ul>
        `,
        starterCode: `function matrixReshape(mat, r, c) {\n    // Implementation\n}`
    },
    'row-with-maximum-ones': {
        title: 'Row with Maximum Ones',
        description: `
            <h2>Problem Description</h2>
            <p>Find the 0-indexed index of the row with the maximum number of ones.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: mat = [[0,1],[1,0]]
Output: [0,1] (Row 0 has 1 one)</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: mat = [[0,0,0],[0,1,1]]
Output: [1,2] (Row 1 has 2 ones)</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= m, n <= 100</li>
            </ul>
        `,
        starterCode: `function rowAndMaximumOnes(mat) {\n    // Implementation\n}`
    }
};

/**
 * 8. BINARY SEARCH (LOGARITHMIC POINTERS)
 * Range halving.
 */
const binarySearchProblems = {
    'binary-search': {
        title: 'Binary Search',
        description: `
            <h2>Problem Description</h2>
            <p>Given a sorted array <code>nums</code> and a <code>target</code>, return the index if found, else -1.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 10^4</li>
                <li>Sorted in ascending order.</li>
            </ul>
        `,
        starterCode: `function search(nums, target) {\n    // Implementation\n}`
    },
    'search-in-rotated-sorted-array': {
        title: 'Search in Rotated Sorted Array',
        description: `
            <h2>Problem Description</h2>
            <p>Search for <code>target</code> in an array that was rotated at some pivot.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 5000</li>
            </ul>
        `,
        starterCode: `function search(nums, target) {\n    // Implementation\n}`
    },
    'find-peak-element': {
        title: 'Find Peak Element',
        description: `
            <h2>Problem Description</h2>
            <p>Find an element that is strictly greater than its neighbors.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,2,3,1]
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [1,2,1,3,5,6,4]
Output: 5</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 1000</li>
            </ul>
        `,
        starterCode: `function findPeakElement(nums) {\n    // Implementation\n}`
    },
    'find-first-and-last-position-of-element': {
        title: 'Find First and Last Position of Element in Sorted Array',
        description: `
            <h2>Problem Description</h2>
            <p>Find the starting and ending position of a given target value in O(log n).</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>0 <= nums.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function searchRange(nums, target) {\n    // Implementation\n}`
    },
    'search-insert-position': {
        title: 'Search Insert Position',
        description: `
            <h2>Problem Description</h2>
            <p>Return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,3,5,6], target = 5
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [1,3,5,6], target = 2
Output: 1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function searchInsert(nums, target) {\n    // Implementation\n}`
    },
    'koko-eating-bananas': {
        title: 'Koko Eating Bananas',
        description: `
            <h2>Problem Description</h2>
            <p>Find the minimum integer speed <code>k</code> such that Koko can eat all the bananas within <code>h</code> hours.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: piles = [3,6,7,11], h = 8
Output: 4</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: piles = [30,11,23,4,20], h = 5
Output: 30</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= piles.length <= 10^4</li>
                <li>piles.length <= h <= 10^9</li>
            </ul>
        `,
        starterCode: `function minEatingSpeed(piles, h) {\n    // Implementation\n}`
    },
    'find-minimum-in-rotated-sorted-array': {
        title: 'Find Minimum in Rotated Sorted Array',
        description: `
            <h2>Problem Description</h2>
            <p>Given the sorted rotated array <code>nums</code>, return the minimum element of this array.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [3,4,5,1,2]
Output: 1</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [4,5,6,7,0,1,2]
Output: 0</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>n == nums.length</li>
                <li>1 <= n <= 5000</li>
            </ul>
        `,
        starterCode: `function findMin(nums) {\n    // Implementation\n}`
    },
    'sqrt-x': {
        title: 'Sqrt(x)',
        description: `
            <h2>Problem Description</h2>
            <p>Compute and return the square root of <code>x</code>. Return only the integer part.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: x = 4
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: x = 8
Output: 2</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>0 <= x <= 2^31 - 1</li>
            </ul>
        `,
        starterCode: `function mySqrt(x) {\n    // Implementation\n}`
    },
    'h-index-ii': {
        title: 'H-Index II',
        description: `
            <h2>Problem Description</h2>
            <p>Given an array of citations sorted in ascending order, calculate the researcher's h-index.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: citations = [0,1,3,5,6]
Output: 3</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: citations = [1,2,100]
Output: 2</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>n == citations.length</li>
                <li>1 <= n <= 10^5</li>
            </ul>
        `,
        starterCode: `function hIndex(citations) {\n    // Implementation\n}`
    },
    'capacity-to-ship-packages-within-d-days': {
        title: 'Capacity To Ship Packages Within D Days',
        description: `
            <h2>Problem Description</h2>
            <p>Find the least weight capacity of a ship that will result in all packages being shipped within <code>days</code> days.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: weights = [3,2,2,4,1,4], days = 3
Output: 6</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= days <= weights.length <= 5 * 10^4</li>
            </ul>
        `,
        starterCode: `function shipWithinDays(weights, days) {\n    // Implementation\n}`
    }
};

/**
 * 9. INTERVAL POINTERS (SWEEP LINE)
 * Overlap and boundary event processing.
 */
const intervalPointers = {
    'meeting-rooms-ii': {
        title: 'Meeting Rooms II',
        description: `
            <h2>Problem Description</h2>
            <p>Given an array of meeting time intervals, find the minimum number of conference rooms required.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: intervals = [[7,10],[2,4]]
Output: 1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>0 <= intervals.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function minMeetingRooms(intervals) {\n    // Implementation\n}`
    },
    'merge-intervals': {
        title: 'Merge Intervals',
        description: `
            <h2>Problem Description</h2>
            <p>Given an array of <code>intervals</code>, merge all overlapping intervals.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= intervals.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function merge(intervals) {\n    // Implementation\n}`
    },
    'insert-interval': {
        title: 'Insert Interval',
        description: `
            <h2>Problem Description</h2>
            <p>Insert a <code>newInterval</code> into sorted <code>intervals</code> and merge if necessary.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,9]
Output: [[1,2],[3,10],[12,16]]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>0 <= intervals.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function insert(intervals, newInterval) {\n    // Implementation\n}`
    },
    'employee-free-time': {
        title: 'Employee Free Time',
        description: `
            <h2>Problem Description</h2>
            <p>Find the list of finite intervals representing common, positive-length free time for all employees.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
Output: [[3,4]]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
Output: [[5,6],[7,9]]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= schedule.length <= 50</li>
            </ul>
        `,
        starterCode: `function employeeFreeTime(schedule) {\n    // Implementation\n}`
    },
    'non-overlapping-intervals': {
        title: 'Non-overlapping Intervals',
        description: `
            <h2>Problem Description</h2>
            <p>Find the minimum number of intervals to remove to make the rest non-overlapping.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1 (Remove [1,3])</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= intervals.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function eraseOverlapIntervals(intervals) {\n    // Implementation\n}`
    },
    'partition-labels': {
        title: 'Partition Labels',
        description: `
            <h2>Problem Description</h2>
            <p>Partition <code>s</code> into as many parts as possible so that each letter appears in at most one part.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = "eccbbbbdec"
Output: [10]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= s.length <= 500</li>
            </ul>
        `,
        starterCode: `function partitionLabels(s) {\n    // Implementation\n}`
    },
    'minimum-number-of-arrows-to-burst-balloons': {
        title: 'Minimum Number of Arrows to Burst Balloons',
        description: `
            <h2>Problem Description</h2>
            <p>Find the minimum number of arrows that must be shot to burst all balloons.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= points.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function findMinArrowShots(points) {\n    // Implementation\n}`
    },
    'video-stitching': {
        title: 'Video Stitching',
        description: `
            <h2>Problem Description</h2>
            <p>Return the minimum number of clips needed so that we can cut the video into a [0, time] range.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], time = 10
Output: 3</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: clips = [[0,1],[1,2]], time = 5
Output: -1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= clips.length <= 100</li>
                <li>1 <= time <= 100</li>
            </ul>
        `,
        starterCode: `function videoStitching(clips, time) {\n    // Implementation\n}`
    },
    'teemo-attacking': {
        title: 'Teemo Attacking',
        description: `
            <h2>Problem Description</h2>
            <p>Given time series and duration, calculate the total seconds Teemo is in poisoned state.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: timeSeries = [1,4], duration = 2
Output: 4</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: timeSeries = [1,2], duration = 2
Output: 3</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= timeSeries.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function findPoisonedDuration(timeSeries, duration) {\n    // Implementation\n}`
    },
    'car-pooling': {
        title: 'Car Pooling',
        description: `
            <h2>Problem Description</h2>
            <p>Return true if it is possible to pick up and drop off all passengers for all the given trips.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= trips.length <= 1000</li>
                <li>1 <= capacity <= 10^5</li>
            </ul>
        `,
        starterCode: `function carPooling(trips, capacity) {\n    // Implementation\n}`
    }
};

/**
 * 10. TRIPLE POINTERS (PARTITIONING)
 * Category sorting and 3-way splits.
 */
const triplePointers = {
    'sort-colors': {
        title: 'Sort Colors (Dutch National Flag)',
        description: `
            <h2>Problem Description</h2>
            <p>Sort an array of 0s, 1s, and 2s in-place without using the library sort function.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [2,0,1]
Output: [0,1,2]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>n == nums.length</li>
                <li>1 <= n <= 300</li>
                <li>nums[i] is 0, 1, or 2.</li>
            </ul>
        `,
        starterCode: `function sortColors(nums) {\n    // Implementation\n}`
    },
    'sort-array-by-parity-ii': {
        title: 'Sort Array By Parity II',
        description: `
            <h2>Problem Description</h2>
            <p>Sort the array such that whenever <code>nums[i]</code> is odd, <code>i</code> is odd, and whenever <code>nums[i]</code> is even, <code>i</code> is even.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [4,2,5,7]
Output: [4,5,2,7]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [2,3]
Output: [2,3]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>2 <= nums.length <= 2 * 10^4</li>
                <li>nums.length is even.</li>
            </ul>
        `,
        starterCode: `function sortArrayByParityII(nums) {\n    // Implementation\n}`
    },
    'quick-sort-3-way-partition': {
        title: '3-Way QuickSort Partition',
        description: `
            <h2>Problem Description</h2>
            <p>Implement the 3-way partition function for QuickSort to handle duplicate keys.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [4,9,4,4,1,9,4,4,9,4,4,1,4], pivot = 4
Output: [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 9, 9, 9]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [2,0,1], pivot = 1
Output: [0, 1, 2]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function partition3Way(nums, pivot) {\n    // Implementation\n}`
    },
    'move-even-odd-zero': {
        title: 'Move Even, Odd, and Zero',
        description: `
            <h2>Problem Description</h2>
            <p>Rearrange the array such that all even numbers come first, followed by all zeros, followed by all odd numbers.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,0,2,3,0,4]
Output: [2,4,0,0,1,3]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [0,1,2]
Output: [2,0,1]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 1000</li>
            </ul>
        `,
        starterCode: `function partitionEvenOddZero(nums) {\n    // Implementation\n}`
    },
    'wiggle-sort': {
        title: 'Wiggle Sort',
        description: `
            <h2>Problem Description</h2>
            <p>Given an unsorted array <code>nums</code>, reorder it in-place such that <code>nums[0] <= nums[1] >= nums[2] <= nums[3]...</code></p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [3,5,2,1,6,4]
Output: [3,5,1,6,2,4]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [6,6,5,6,3,8]
Output: [6,6,5,6,3,8]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 5 * 10^4</li>
            </ul>
        `,
        starterCode: `function wiggleSort(nums) {\n    // Implementation\n}`
    },
    'kth-largest-element-in-an-array': {
        title: 'Kth Largest Element in an Array',
        description: `
            <h2>Problem Description</h2>
            <p>Find the <code>k</code>-th largest element in an unsorted array.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [3,2,1,5,6,4], k = 2
Output: 5</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= k <= nums.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function findKthLargest(nums, k) {\n    // Implementation\n}`
    },
    'partition-array-into-three-parts-with-equal-sum': {
        title: 'Partition Array Into Three Parts With Equal Sum',
        description: `
            <h2>Problem Description</h2>
            <p>Check if the array can be partitioned into three non-empty parts with equal sums.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>3 <= arr.length <= 5 * 10^4</li>
            </ul>
        `,
        starterCode: `function canThreePartsEqualSum(arr) {\n    // Implementation\n}`
    },
    'rearrange-array-elements-by-sign': {
        title: 'Rearrange Array Elements by Sign',
        description: `
            <h2>Problem Description</h2>
            <p>Rearrange elements such that positive and negative numbers alternate, starting with a positive number.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [-1,1]
Output: [1,-1]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>2 <= nums.length <= 2 * 10^5</li>
                <li>Equal number of positive and negative integers.</li>
            </ul>
        `,
        starterCode: `function rearrangeArray(nums) {\n    // Implementation\n}`
    },
    'sort-transformed-array': {
        title: 'Sort Transformed Array',
        description: `
            <h2>Problem Description</h2>
            <p>Apply <code>f(x) = ax^2 + bx + c</code> to sorted array <code>nums</code> and return sorted result.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [-4,-2,2,4], a = 1, b = 3, c = 5
Output: [3,9,15,33]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [-4,-2,2,4], a = -1, b = 3, c = 5
Output: [-23,-5,1,7]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>nums is sorted in ascending order.</li>
            </ul>
        `,
        starterCode: `function sortTransformedArray(nums, a, b, c) {\n    // Implementation\n}`
    },
    'three-way-split': {
        title: 'Three Way Split',
        description: `
            <h2>Problem Description</h2>
            <p>Split array such that <code>sum(part1) = sum(part3)</code> and the sum is maximized.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,3,1,1,4,1,5]
Output: 5 (part1: [1,3,1], part3: [5])</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [1,2]
Output: 0</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function threeWaySplit(nums) {\n    // Implementation\n}`
    }
};

/**
 * 11. CYCLIC POINTERS (INDEX AS POINTER)
 * In-place mapping of range-bound integers.
 */
const cyclicPointers = {
    'find-the-duplicate-number-cyclic': {
        title: 'Find the Duplicate Number (Cyclic Method)',
        description: `
            <h2>Problem Description</h2>
            <p>Find the duplicate number in an array of <code>n + 1</code> integers in range <code>[1, n]</code> without using extra space.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,3,4,2,2]
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [3,1,3,4,2]
Output: 3</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= n <= 10^5</li>
            </ul>
        `,
        starterCode: `function findDuplicate(nums) {\n    // Implementation\n}`
    },
    'first-missing-positive': {
        title: 'First Missing Positive',
        description: `
            <h2>Problem Description</h2>
            <p>Given an unsorted integer array <code>nums</code>, return the smallest missing positive integer in O(n) time.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,2,0]
Output: 3</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [3,4,-1,1]
Output: 2</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function firstMissingPositive(nums) {\n    // Implementation\n}`
    },
    'find-all-numbers-disappeared-in-an-array': {
        title: 'Find All Numbers Disappeared in an Array',
        description: `
            <h2>Problem Description</h2>
            <p>Find all the elements of <code>[1, n]</code> that do not appear in <code>nums</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [1,1]
Output: [2]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>n == nums.length</li>
                <li>1 <= n <= 10^5</li>
            </ul>
        `,
        starterCode: `function findDisappearedNumbers(nums) {\n    // Implementation\n}`
    },
    'find-all-duplicates-in-an-array': {
        title: 'Find All Duplicates in an Array',
        description: `
            <h2>Problem Description</h2>
            <p>Given an integer array <code>nums</code> of length <code>n</code> where each integer is in range <code>[1, n]</code>, return an array of all integers that appear twice.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [1,1,2]
Output: [1]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>n == nums.length</li>
                <li>1 <= n <= 10^5</li>
            </ul>
        `,
        starterCode: `function findDuplicates(nums) {\n    // Implementation\n}`
    },
    'set-mismatch': {
        title: 'Set Mismatch',
        description: `
            <h2>Problem Description</h2>
            <p>Find the number that occurs twice and the number that is missing in an array of <code>1</code> to <code>n</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,2,2,4]
Output: [2,3]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [1,1]
Output: [1,2]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>2 <= nums.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function findErrorNums(nums) {\n    // Implementation\n}`
    },
    'array-nesting': {
        title: 'Array Nesting',
        description: `
            <h2>Problem Description</h2>
            <p>Return the longest length of a set <code>S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [5,4,0,3,1,6,2]
Output: 4 (S[0] = {5, 2, 0, 0} is incorrect, S[0] = {5, 6, 2, 0})</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [0,1,2]
Output: 1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function arrayNesting(nums) {\n    // Implementation\n}`
    },
    'couples-holding-hands': {
        title: 'Couples Holding Hands',
        description: `
            <h2>Problem Description</h2>
            <p>Return the minimum number of swaps so that every couple is sitting side by side.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: row = [0,2,1,3]
Output: 1</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: row = [3,2,0,1]
Output: 0</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>row.length is even.</li>
            </ul>
        `,
        starterCode: `function minSwapsCouples(row) {\n    // Implementation\n}`
    },
    'missing-number': {
        title: 'Missing Number',
        description: `
            <h2>Problem Description</h2>
            <p>Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return the only number in the range that is missing.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [3,0,1]
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [0,1]
Output: 2</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>n == nums.length</li>
                <li>1 <= n <= 10^4</li>
            </ul>
        `,
        starterCode: `function missingNumber(nums) {\n    // Implementation\n}`
    },
    'cycle-sort-implementation': {
        title: 'Cycle Sort Implementation',
        description: `
            <h2>Problem Description</h2>
            <p>Sort an array of <code>n</code> distinct elements in range <code>[1, n]</code> in O(n) time.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [3,1,2]
Output: [1,2,3]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [5,4,3,2,1]
Output: [1,2,3,4,5]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= n <= 10^5</li>
            </ul>
        `,
        starterCode: `function cycleSort(nums) {\n    // Implementation\n}`
    },
    'kth-missing-positive-number': {
        title: 'Kth Missing Positive Number',
        description: `
            <h2>Problem Description</h2>
            <p>Find the <code>k</code>-th positive integer that is missing from a sorted array.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: arr = [2,3,4,7,11], k = 5
Output: 9</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: arr = [1,2,3,4], k = 2
Output: 6</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= arr.length <= 1000</li>
                <li>1 <= k <= 1000</li>
            </ul>
        `,
        starterCode: `function findKthPositive(arr, k) {\n    // Implementation\n}`
    }
};

/**
 * 12. TWO-PASS GREEDY POINTERS
 * Cumulative prefix/suffix constraints.
 */
const twoPassGreedyPointers = {
    'trapping-rain-water-two-pass': {
        title: 'Trapping Rain Water (Two Pass)',
        description: `
            <h2>Problem Description</h2>
            <p>Compute trapped water by calculating the maximum height to the left and right of each bar in two separate passes.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: height = [4,2,0,3,2,5]
Output: 9</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= n <= 2 * 10^4</li>
            </ul>
        `,
        starterCode: `function trap(height) {\n    // Implementation\n}`
    },
    'candy': {
        title: 'Candy',
        description: `
            <h2>Problem Description</h2>
            <p>Each child has a rating. Distribute candies such that children with higher ratings than neighbors get more candies. Return minimum candies.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: ratings = [1,0,2]
Output: 5</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: ratings = [1,2,2]
Output: 4</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= n <= 2 * 10^4</li>
            </ul>
        `,
        starterCode: `function candy(ratings) {\n    // Implementation\n}`
    },
    'product-of-array-except-self': {
        title: 'Product of Array Except Self',
        description: `
            <h2>Problem Description</h2>
            <p>Return an array <code>answer</code> such that <code>answer[i]</code> is the product of all elements of <code>nums</code> except <code>nums[i]</code>.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [1,2,3,4]
Output: [24,12,8,6]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>2 <= nums.length <= 10^5</li>
                <li>-30 <= nums[i] <= 30</li>
            </ul>
        `,
        starterCode: `function productExceptSelf(nums) {\n    // Implementation\n}`
    },
    'longest-valid-parentheses-two-pass': {
        title: 'Longest Valid Parentheses (Two Pass)',
        description: `
            <h2>Problem Description</h2>
            <p>Find the length of the longest valid parentheses substring using a left-to-right and right-to-left scan.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: s = "(()"
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: s = ")()())"
Output: 4</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>0 <= s.length <= 3 * 10^4</li>
            </ul>
        `,
        starterCode: `function longestValidParentheses(s) {\n    // Implementation\n}`
    },
    'gas-station': {
        title: 'Gas Station',
        description: `
            <h2>Problem Description</h2>
            <p>Find the starting gas station index that allows you to complete a circular tour.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: gas = [2,3,4], cost = [3,4,3]
Output: -1</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>n == gas.length == cost.length</li>
            </ul>
        `,
        starterCode: `function canCompleteCircuit(gas, cost) {\n    // Implementation\n}`
    },
    'daily-temperatures': {
        title: 'Daily Temperatures',
        description: `
            <h2>Problem Description</h2>
            <p>For each day, return the number of days until a warmer temperature occurs.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= temperatures.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function dailyTemperatures(temperatures) {\n    // Implementation\n}`
    },
    'maximum-product-subarray': {
        title: 'Maximum Product Subarray',
        description: `
            <h2>Problem Description</h2>
            <p>Find the contiguous subarray within an array (containing at least one number) which has the largest product.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [2,3,-2,4]
Output: 6</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [-2,0,-1]
Output: 0</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 2 * 10^4</li>
            </ul>
        `,
        starterCode: `function maxProduct(nums) {\n    // Implementation\n}`
    },
    'jump-game': {
        title: 'Jump Game',
        description: `
            <h2>Problem Description</h2>
            <p>Given an array of non-negative integers, you are initially at the first index. Determine if you can reach the last index.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: nums = [2,3,1,1,4]
Output: true</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: nums = [3,2,1,0,4]
Output: false</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= nums.length <= 10^4</li>
            </ul>
        `,
        starterCode: `function canJump(nums) {\n    // Implementation\n}`
    },
    'largest-rectangle-in-histogram': {
        title: 'Largest Rectangle in Histogram',
        description: `
            <h2>Problem Description</h2>
            <p>Given an array of integers representing the heights of histogram bars, find the area of the largest rectangle.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: heights = [2,1,5,6,2,3]
Output: 10</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: heights = [2,4]
Output: 4</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= heights.length <= 10^5</li>
            </ul>
        `,
        starterCode: `function largestRectangleArea(heights) {\n    // Implementation\n}`
    },
    'max-water-trapped-logic': {
        title: 'Max Water Trapped Logic',
        description: `
            <h2>Problem Description</h2>
            <p>Analyze an elevation map to identify the single largest block of water that can be trapped.</p>
            <h3>Example 1:</h3>
            <pre><code>Input: height = [0,1,0,2,1,0,1,3]
Output: 2</code></pre>
            <h3>Example 2:</h3>
            <pre><code>Input: height = [3,0,3]
Output: 3</code></pre>
            <h3>Constraints:</h3>
            <ul>
                <li>1 <= n <= 10^5</li>
            </ul>
        `,
        starterCode: `function maxWaterBlock(height) {\n    // Implementation\n}`
    }
};