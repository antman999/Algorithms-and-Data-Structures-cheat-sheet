### What is a multiple pointer approach

Creating pointers or values that match to a certain index or value and move toward the ending, start or middle.

### When to use a multiple pointers

When you have a linear structure such as arrays and they are !sorted!

### General approach

You have one pointer <- or variable and we work towards each other or side by side.

### Keywords to look for

- Sorted array of nums

### Example Question

Write a function called Sum zero, which accepts a sorted array of integers. The function should find the first pair where adding both nums equal to 0. Return undefined if none.

```
sumZero([-3,-2,-1,0,1,2,3]) -> [-3,3]
sumZero([-2,0,1,3]) -> undefined
```
