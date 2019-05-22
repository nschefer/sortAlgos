describe('Bubble Sort', function() {
  beforeEach(function() {
    spyOn(helper, 'swap').and.callThrough();
  });
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles array of length 1', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it('handles and sorts array of length n', function() {
    expect(bubbleSort([2, 3, 1])).toEqual([1, 2, 3]);
    expect(bubbleSort([4, 5, 6, 3, 2, 1, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it('handles duplicates', function() {
    expect(bubbleSort([2, 2, 3, 3, 1])).toEqual([1, 2, 2, 3, 3]);
  });
  it('calls swap the correct number of times', function() {
    bubbleSort([1, 2, 4, 3]);
    expect(helper.swap.calls.count()).toEqual(1);
  });
});
