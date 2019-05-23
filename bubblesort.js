// const helper = {};
function swap(arg1, arg2, array) {
  const holder = array[arg1];
  array[arg1] = array[arg2];
  array[arg2] = holder;
}

const bubbleSort = array => {
  let totalSwitches = 1;

  while (totalSwitches !== 0) {
    totalSwitches = 0;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        totalSwitches++;
      }
    }
  }
  return array;
};

const bubbleRecursive = (array, n = array.length - 1) => {
  if (n === 0) {
    return array;
  }
  for (let i = 0; i <= n; i++) {
    if (array[i] > array[i + 1]) {
      swap(i, i + 1, array);
    }
  }

  bubbleRecursive(array, n - 1);
};
