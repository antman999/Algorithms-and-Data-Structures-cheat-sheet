// Bad solution -> 2 loops o(n^2)
// We will first loop through the first array then go look for the index of arr2 which is essentially looping through the whole array again

const sameBadSolution = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};
// console.log(sameBadSolution([1, 2, 3], [1, 4, 9]), "o(n^2)");

// Good solution -> 2 separate loops o(n) each so o(2n) simplifies to o(n)

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    counter1[value] = counter1[value] + 1 || 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    counter2[value] = counter2[value] + 1 || 1;
  }

  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }
    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
  }

  return true;
};

// console.log("returns", same([1, 2, 3], [4, 9, 1]), "o(n)");
// console.log("returns", same([1, 2], [4, 9, 1]), "o(n)");
// console.log("returns", same([4, 8, 2], [16, 64, 4]), "o(n)");
