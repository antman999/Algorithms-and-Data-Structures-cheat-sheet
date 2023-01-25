const minSubarray = (arr, s) => {
  let min = Infinity;
  let temp = 0;
  let slider = 0;
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
    while (temp >= s) {
      min = Math.min(min, i - slider + 1);
      temp -= arr[slider];
      slider += 1;
    }
  }
  if (min === Infinity) {
    return 0;
  }
  return min;
};
