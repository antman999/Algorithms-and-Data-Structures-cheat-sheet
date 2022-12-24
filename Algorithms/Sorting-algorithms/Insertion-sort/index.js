const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};

/*
We start with a for loop that will loop through the array. We want to start it at the first index rather 0th since we are going to check if the one before it can be swapped. 
we set a variable called current value which will keep track of
the number at that index. 
I decided to do a while loop so I can scope j outside of the loop since we manually control it rather than using a var in a for loop and having j as a global variable. 
This loop will check that j which is the number before our index is bigger or equal to 0 and bigger than our current number because if j is bigger that means they are in the wrong place.
   -If it is we can swap in our loop and keep checking
   -If it is not theres no need to run this loop anymore 
    **Im going to try and draw a diagram below **
      [1,3,9,2]
           ^ ^
      i = 2 
      j = 9 
      j > 0 && j > i === 9 > 2 - we can run the loop 
        [j+1] = j 
        j + 1 which is 2 in this case will become 9 so 9 will take that last place
        j--
        then we decrement j which now will equal 3 [3,9]
      after the loop ran once we set the next value of j which is 9 now to i which is 2 
      leaving us with [1,3,2,9]
      the loop will run again and swap 
*/
