# Insertion sort

![Insertionsort](https://www.studytonight.com/data-structures/images/basic-insertion-sort.png)

## What is an insertion sort?

> A sorting algorithm which builds up the sort br gradually creating a larger left which is sorted

## Big O?

A - Worst case is O(n^2) since we do have that double loop that will always check if the one before is larger.

### Steps for creating an insertion sort

1. Start by looking at the second element in the array.
2. Then we compare the second element to the first one and see which is larger. If the first is larger we swap.
3. Continue to the next element and if it is in the incorrect order we iterate through the sorted portion to place it in the correct spot
4. Repeat until done.
