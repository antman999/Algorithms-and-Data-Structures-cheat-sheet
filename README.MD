### What is this repo for?

This github page is where I will document all my progress on Algorithms, Data structures and leetcode problems/solutions with details on the solutions.

### What is Big O

<blockquote>
“Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. It is a member of a family of notations invented by Paul Bachmann, Edmund Landau, and others, collectively called Bachmann–Landau notation or asymptotic notation.”

— Wikipedia’s definition of Big O notation

</blockquote>

In simpler terms this is how we describe the complexity of our code.

### What does Big O look like

![big O graph](https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg)

### Examples of Big O

#### O(1)

This function below will always have 3 operations no matter the input 1 or 10000.

```
function addUpTo(n){
    return n * (n+1) / 2;
}
```

#### O(n)

Number of operations is bounded my mutiple of n.

```
function addUpTo(n){
   let total = 0;
   for(let i = 1; i <=n; i++){
    total += i;
   }
   return total
}
```
