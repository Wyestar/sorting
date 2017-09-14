function bubbleSort(arr) {
  var orderArray = arr;
  var check = true;

  if (arr.length <= 1) {
    return arr;
  }

  // while (!check) {
  //   check = false;
  for (var j = 1; j < arr.length; j++) {
    for (var i = 0; i < arr.length - 1; i++) {
      var tempArr = swapper(orderArray.slice(i, i+2));
      // console.log(tempArr ,"tempArr");
      // console.log(orderArray.slice(i, i+2) ,"chunks of arr");
      if (tempArr[0] !== orderArray.slice(i, i+2)[0]) {
        console.log(check ,"this is check");
        check = true;
      }
      orderArray = ( orderArray.slice(0, i).concat(tempArr) ).concat(orderArray.slice(i+2));

      //console.log(orderArray ,"this is orderArray at end of for loop");
    }
    // console.log(check ."this is check");
  //}
  }
  return orderArray;
}

function swapper(arr) {
  if (arr[1] === undefined) {
    return [arr[0]];
  }
  var properArr = arr[0] > arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]];
  return properArr;
}
