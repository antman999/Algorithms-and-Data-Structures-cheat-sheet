const maxSumSubarrayOfSizeK = (arr, k) => {
  let maxSum = 0;
  let tempSum = 0;
  let slider = 0;
  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, tempSum);
      tempSum = tempSum - arr[slider];
      slider++;
    }
  }
  return maxSum;
};
