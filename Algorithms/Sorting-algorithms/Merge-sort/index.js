const merge = (arr1, arr2) => {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  // [3,5], [2]
  //  ^      ^
  // only check these 2
  // the remaining `5` can be solved below
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // these are to check if there are leftovers in a singular array
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const half = Math.floor(arr.length / 2);
  const firstHalf = mergeSort(arr.slice(0, half));
  const secondHalf = mergeSort(arr.slice(half));
  console.log(merge(firstHalf, secondHalf));
  return merge(firstHalf, secondHalf);
};

mergeSort([10, 5, 3, 27, 15]);
