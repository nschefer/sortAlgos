describe('Split Helper', function () {
  it('splits an array into two halves', function () {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
  it('splits odd array where second half contains extra value', function () {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  });
})

describe('Merge Helper', function () {
  it('merges and sorts two sorted arrays', function () {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 4], [2, 3])).toEqual([1, 2, 3, 4]);
  });
  it('handles duplicates', function () {
    expect(merge([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 2, 3, 3, 4]);
  });
})

describe('Merge Sort', function () {
  // beforeEach(function () {
  //   spyOn(window, 'swap').and.callThrough();
  // });
  it('handles an empty array', function () {
    expect(mergeSort([])).toEqual([]);
  });
  it('handles array of length 1', function () {
    expect(mergeSort([1])).toEqual([1]);
  });
  it('handles and sorts array of length n', function () {
    expect(mergeSort([2, 3, 1])).toEqual([1, 2, 3]);
    expect(mergeSort([4, 5, 6, 3, 2, 1, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it('handles duplicates', function () {
    expect(mergeSort([2, 2, 3, 3, 1])).toEqual([1, 2, 2, 3, 3]);
  });
  // it('calls swap the correct number of times', function () {
  //   mergeSort([1, 2, 4, 3]);
  //   expect(window.swap.calls.count()).toEqual(1);
  // });
});
