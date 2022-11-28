### What is this repo for?

This github page is where I will document all my progress on Algorithms, Data structures and leetcode problems/solutions with details on the solutions.

**note: This info is just for me but made public to track myself and based out of multiple courses and problems I will do. I will leave links for the courses and problems below. 🙏**

### What is Big O

<blockquote>
“Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. It is a member of a family of notations invented by Paul Bachmann, Edmund Landau, and others, collectively called Bachmann–Landau notation or asymptotic notation.”

— Wikipedia’s definition of Big O notation

</blockquote>

In simpler terms this is how we describe the complexity of our code.

### What does Big O look like

![big O graph](https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg)
![big O cheat sheet](https://www.bigocheatsheet.com/img/big-o-cheat-sheet-poster.png)

### Basic examples of Big O

#### O(1)

This function below will always have 3 operations no matter the input 1 or 10000 represented by n.

```
function addUpTo(n){
    return n * (n+1) / 2;
}
```

#### O(n)

Number of operations is bounded my mutiple of n. Looking at the loop below you can see this loop will run whatever many times n is. If n is two it will run twice but if n is a million thats how many times this will run.

```
function addUpTo(n){
   let total = 0;
   for(let i = 1; i <=n; i++){
    total += i;
   }
   return total
}
```

#### O(n^2)

Unlike the loop above this loop will be dependendant on the outer loop which in short is o(n) operation inside o(n)

Looking at the chart above we can see this is a no go territory and should be avoided.

```
function printPairs(n){
   for(let i = 0; i < n; i++){ o(n)
    for(let j = 0; j < n; j++){ o(n)
        console.log(j,i)
    }
   }
```

### Simplifying Big O

#### Constants don't matter

```
o(2n) -> o(n)
o(500) -> o(1)
o(13n^2) -> o(n^2)
```

#### Smaller terms don't matter

```
o(n + 10) -> o(n)
o(50n + 50) -> o(n)
o(n^2 + 8n + 100) -> o(n^2)
```

#### Handy guides

1. Math operations are constant = o(1)
2. Variable assigments are constant = o(1)
3. Variable lookups by index or key if an object are constant = o(1)
4. In loops, the complexity is the length of the loop = o(n)
5. If the loop has inner loops then the complexity is multiplied by the outer loop = possibly o(n^2)
