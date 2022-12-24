const bubbleSort = (arr) => {
  let isDoneSorting;
  for (let i = arr.length; i > 0; i--) {
    isDoneSorting = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tempValue = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempValue;
        isDoneSorting = false;
      }
    }
    if (isDoneSorting) {
      break;
    }
  }
  console.log(arr);
  return arr;
};

bubbleSort([4, 1, 6, 8, 2, 3]);
