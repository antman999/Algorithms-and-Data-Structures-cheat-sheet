### What is Recursion

A process (function) that calls itself until a value is met or not.

### Why should we care?

We use it everywhere! JSON.stringify -> calls itself to turn an object into a JSON string object

We also use it when grabbing elements from the DOM. Such as `getElementById`.

### The call stack

The JS call stack is FIFO - First in First Out.

Think of it as a pile of books, as we add them we add them on top of eachother and we remove the top ones first.

### Example Recursive function

Every recursive function needs these 2 cases

- Base case
  This means this is a default return / if it doesnt find the solution we can resort to return the base case

- input list
  This is the meat of a recursive function. We want to change these as we dont meet the solution until we get it.

```
const countDown = (num) => {
    if(num <= 0){ <- BASE CASE
        console.log('we are at 0!!')
        return
    }
    console.log(num)
    num-- <- NEW INPUT TO USE
    countDown(num) <- RECURSIVE CALL
}

```

### When things go wrong!

1. We forget a base case! We always need an end to avoid an infinite loop!
2. We forget to update our next test case.

### Helper functions

```
const getOddValues = (arr) => {
    let results = [];
    function helper(helperInput){ <- added to callstack but not called
     if(helperInput === 0){ <- base case
        return
     }
     if(helperInput[0] % 2 !== 0){
        results.push(helperInput[0])
     }
     helper(helperInput.slice(1)) <- recursive call and updating input
    }

    helper(arr) <- called
    return results
}
```
