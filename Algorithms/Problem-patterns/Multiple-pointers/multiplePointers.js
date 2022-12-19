/**
 * This solution is o(n^2)
 * We are essentially creating a pointer on the next index but this is dependant on the first loop so this will run quadratically.
 */
const sumZeroBadSolution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

/**
 *
 * time complexity: o(n)
 *
 * How does this work?
 * We create a pointer at the end of the array and one at the beggining
 * [-3,-2,-1,0,1,2,3]
 *  ^              ^
 * starting        ending
 *
 * then we run a loop while the ending pointer index is bigger than the starting pointer index which they should meet if nothing appears.
 * if the sum equals to 0 we will just return the array
 * if the current sum is bigger than one we know that this is sorted so we can move the ending point down to check if that works
 * else we move the starting point one up and check again.
 *
 */

const sumZero = (arr) => {
  const endingPointer = arr.length - 1;
  const startingPointer = 0;

  while (startingPointer < endingPointer) {
    let sum = arr[startingPointer] + arr[endingPointer];
    if (sum === 0) {
      return [arr[startingPointer], arr[endingPointer]];
    } else if (sum > 0) {
      endingPointer--;
    } else {
      startingPointer++;
    }
  }
};

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};
