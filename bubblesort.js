const helper = {};
helper.swap = (arg1, arg2, array) => {
  const holder = array[arg1];
  array[arg1] = array[arg2];
  array[arg2] = holder;
};

const bubbleSort = array => {
  let totalSwitches = 1;

  while (totalSwitches !== 0) {
    totalSwitches = 0;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        helper.swap(i, i + 1, array);
        console.log(totalSwitches);
        totalSwitches++;
      }
    }
  }
  return array;
};

const bubbleRecursive = array => {
  // base case
  if (swaps === 0) return array;

  let swaps = 1;
};
