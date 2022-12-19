### What is a frequency counter and why use it?

This approach is using object / sets to collect values or frequencies of values

We should use this approach to avoid nested loops **o(n^2)**, this approach could bring us down to **o(n)**.

### When to use a frequency counter

We could use this approach when we need to compare multiple pieces of data / inputs.

- Anagrams
- Two sum
- Value is contained in another object

### Keywords to look for in challenge

- Compare these two inputs.
- Does this first one match to the second one?

### Example

Write a function called `same` that takes 2 arrays and returns true if all values in one array are the squared value in the other array.

```
same([1,2,4],[4,8,1]) => true
same([1,2,4],[4,8]) => false, we are missing the one
same([1,2,4],[4,8,6]) => false, wrong value in the second array

```
