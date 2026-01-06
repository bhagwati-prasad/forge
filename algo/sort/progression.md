```
Edge cases :
What if provided array already sorted.
What if provided array is sorted in reverse order.
What if provided array is sparsely sorted.
What if provided array is sparsely sorted in reverse order.
```


# Naive sort (Human sort)
## Smallest to Largest filling order. Smallest to Largest sort order.
1. Create an empty temp array (of maybe same size)
2. Find the samllest element in target array.
3. Put the element in *first empty location* in temp array.
4. Put null in target array at the location of smallest element.
5. Repeat till all elements in target array are null.

## Largest to Smallest filling order. Smallest to Largest sort order.
1. Create an empty temp array of same size.
2. Find the largest element in target array.
3. Put the element in *last empty location* in temp array.
4. Put null in target array of the location of largest element.
5. Repeat till all elements in target array are null.

Analysis
```
One element moves at a time, so it's extremely easy to visualize.
The number of iteration required (to find largest or smallest element in an array) is equal to number of elements in array. Doesn't matter if array is already sorted.
New array is required, so more space is required
```

Concern
```
We need to improve efficiency.
The temp array is not really needed, as we are emptying the target array. It feels like there is scope of using target array space itself.
```

# Naive in-place sort : Divide array in sorted and unsorted part.
## Smallest to Largest filling order. Smallest to Largest sort order. Initially index -1 to index -1 is sorted part and rest is unsorted
1. Find the smallest element.
2. Swap it with the first unsorted element.
3. Increment sorted index.
4. Repeat till sorted index reaches array length.

## Largest to Smallest filling order. Smallest to Largest sort order. Initially index n to index n is sorted rest is unsorted
1. Find the largest element.
2. Swap it with the last unsorted element.
3. Decrement the sorted index.
4. Repeat till sorted index reaches 0.

Analysis
```
Same as Naive sort, but there is lesser space requirement as no new array is created
```

Concern
```
We need to impreove efficiency.
We have reduced extra space required to 0. Only speed can be improved.
What if rather than trying to find largest number (or smallest number), we just move larger to right. This way within single pass the largest number is bound to reach the end of 'unsorted' part (as in Naive in-place sorting) and bigger ones would also move towards right.
```

## Bubble sort
1. Compare adjacent elements.
2. Move bigger one to right.
3. Move the comparision window to right.
4. Repeat till the end of array. This pass would ensure that the largest is at end of array, and larger elements have moved to right.
5. Repeat till all of the array is sorted.

Analysis
```
This requires n(n - 1) / 2 comparisions. And no extra space.
```