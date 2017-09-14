describe('split', function() {
  var arraySplit = [1, 2, 3, 4, 5];
  var arraySplitEven = [1, 2, 3, 4];
  it('splits an array', function() {
    expect( split(arraySplit) ).toEqual([[1, 2, 3], [4, 5]]);
  });

  it("", function() {
    expect( split(arraySplitEven) ).toEqual([[1, 2], [3, 4]]);
  });
});

describe('merge', function() {
  var arrA = [1];
  var arrB = [2];
  it("merges single element arrays", function() {
    expect( merge(arrA, arrB) ).toEqual([1, 2]);
  });
  var arrC = [3, 4, 6, 7, 8];
  var arrD = [1, 2, 5];
  it("merges longer arrays", function() {
    expect( merge(arrC, arrD) ).toEqual( [1, 2, 3, 4, 5, 6, 7, 8] );
  });
});

describe('mergeSort', function() {
  var finalArr = [7, 3, 1, 9, 8, 6, 5, 4, 2];
  it("splits and merges", function() {
    expect( mergeSort(finalArr) ).toEqual( [1, 2, 3, 4, 5, 6, 7, 8, 9] );
  });
});
