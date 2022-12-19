const states = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

// Linear Searching / time-complexity -> O(n)

const linearSearch = (arr, value) => {
  if (arr.length === 0) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    const arrValue = arr[i];
    if (arrValue === value) {
      console.log(i);
      return i;
    }
  }
  return -1;
};

linearSearch(states, "New York");

// Binary Search!

/**
 * - Create a function that takes a sorted array and value
 * - Create a left pointer at the start of the array and right pointer at the end
 * - While the left pointer comes before the right pointer:
 *   - Create a pointer in the middle.
 *   - If the value is correct return the index
 *   - If too small move the left pointer up
 *   - if too large move the right pointer down
 * - If not found return -1
 */

const binarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);
  while (arr[middle] !== value && left <= right) {
    if (value < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((right + left) / 2);
  }
  if (arr[middle] == value) {
    console.log(arr[middle]);
    return middle;
  }
  return 1;
};

binarySearch(states, "New York");

// String Search (naive)

// find how many times a given value appears in a string
// Example -> 'omgzsomg' 'omg' -> 2

const stringSearch = (sentence, value) => {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    for (let k = 0; k < value.length; k++) {
      if (value[k] !== sentence[i + k]) {
        break;
      }
      if (k === value.length - 1) {
        count++;
      }
    }
  }
  return count;
};
