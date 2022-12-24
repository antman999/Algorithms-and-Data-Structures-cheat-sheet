### Bubble sort

![Bubble Sort](https://www.programmingsimplified.com/images/c/bubble-sort.gif)

### How does it work

Bubble sort works by bubbling numbers on each pass for example

```
 [5,3,1]
 It will compare 5 and 3 since 3 is smaller it is moved in the place of the 5 then since 5 is bigger that 1 it will take that place

 on the first loop it should look like this
 [3,1,5]

 Then it will compare 3 and 1 and swap them and since 3 and 5 are correct we stop here
 [1,3,5]
```

### When to use bubble sort

Since time complexity is not great o(n^2) we should avoid this unless the data is almost sorted.

### Bubble sort high level code walkthrough

- Start looping the array from the end
- Create an inner loop that goes until i -1
- if arr[j] is bigger than arr[j+1] we swap
- continue this until array is sorted
