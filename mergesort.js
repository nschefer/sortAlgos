function split(wholeArray) {
  const mid = Math.floor((wholeArray.length / 2));
  const firstHalf = wholeArray.slice(0, mid);
  const secondHalf = wholeArray.slice(mid);

  return [firstHalf, secondHalf];
}

//noah and sri original solution
// function merge(arr1, arr2) {
//   const mergedArr = [];
//   const maxLength = arr1.length + arr2.length;

//   while (mergedArr.length !== maxLength) {
//     if (arr1[0] < arr2[0]) {
//       mergedArr.push(arr1.shift());
//     } else if (arr2[0] <= arr1[0]) {
//       mergedArr.push(arr2.shift());
//     } else {
//       mergedArr.push(arr1[0] ? arr1.shift() : arr2.shift());
//     }
//   }

//   return mergedArr;
// }

//solution w/pointers and not mutating array
function merge(leftArr, rightArr) {
  const mergedArr = [];
  let left = 0;
  let right = 0;

  while (left < leftArr.length && right < rightArr.length) {
    if (leftArr[left] < rightArr[right]) {
      mergedArr.push(leftArr[left]);
      left++;
    } else {
      mergedArr.push(rightArr[right]);
      right++;
    }
  }

  return mergedArr.concat(leftArr.slice(left)).concat(rightArr.slice(right));
}

function mergeSort(array) {
  if (array.length === 1 || !array.length) return array;
  const [firstHalf, secondHalf] = split(array);

  //noah and sri original solution
  // const mergedFirst = mergeSort(firstHalf);
  // const mergedSecond = mergeSort(secondHalf);
  // const mergedArr = merge(mergedFirst, mergedSecond);
  // return mergedArr;

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
