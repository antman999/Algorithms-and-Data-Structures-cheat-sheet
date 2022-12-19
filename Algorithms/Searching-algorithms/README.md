### Linear searching

![linear vs binary](https://blog.penjee.com/wp-content/uploads/2015/04/binary-and-linear-search-animations.gif)

#### Problem

lets say we have an array of 50 states all ordered and the user enters a state how do we find it?

#### Solution

look through all the values in the array until it matches. O(n) time!

#### This is not a terrible solution

We would do this if our data is not sorted. We use it all the time in JS (indexOf, find, includes)

### Binary search

### Note - binary search only works on SORTED data.

#### Problem

lets say we have an array of 50 states all ordered and the user enters a state how do we find it?

#### Solution

Look at the half point and see if the value is less or more and move accordingly. log(n)

- Create a function that takes a sorted array
- Create a left pointer at the start of the array and right pointer at the end
- While the left pointer comes before the right pointer:
  - Create a pointer in the middle.
  - If the value is correct return the index
  - If too small move the left pointer up
  - if too large move the right pointer down
- If not found return -1
