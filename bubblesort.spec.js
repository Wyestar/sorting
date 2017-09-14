describe('swapper', function() {
  var swapArray = [2, 1];
  it('takes an array of length 2 and returns a sorted array of length 2', function() {
    expect( swapper(swapArray).length ).toEqual(2);
    expect( swapper(swapArray) ).toEqual( [1, 2] );
  });
});


describe('Bubble Sort', function(){
  var singleArray = [1];
  var multipleArray = [4, 3, 1, 2];

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });


  it('handles an array with one element', function() {
    expect( bubbleSort(singleArray) ).toEqual( singleArray );
  });

  it('handles an array with multiple elements', function() {
    expect( bubbleSort(multipleArray) ).toEqual( [1, 2, 3, 4] );
  });
});
