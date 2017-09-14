function merge(arr1, arr2) {
  var result = [];
  function wrapper(arr1, arr2) {
    if (arr1.length === 0) {
      result = result.concat(arr2);
    }
    else if (arr2.length === 0) {
      result = result.concat(arr1);
    }
    else {
      if (arr1[0] < arr2[0]) {
        result.push(arr1[0]);
        result.concat(wrapper(arr1.slice(1), arr2));
      }
      else {
        result.push(arr2[0]);
        result.concat(wrapper(arr1, arr2.slice(1)));
      }
    }
  }
  wrapper(arr1, arr2);
  return result;
}

function split(arr) {
  var firstHalf;
  if (arr.length % 2 !== 0) {
    var oddEnd = Math.floor(1 + (arr.length / 2));
    firstHalf = arr.slice(0, oddEnd);
  }
  else {
    firstHalf = arr.slice(0, arr.length / 2);
  }
  var secondHalf = arr.slice(arr.length - Math.floor(arr.length / 2));
  return [firstHalf, secondHalf];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var splitted = split(arr);
  var leftHalf = splitted[0];
  var rightHalf = splitted[1];
  return merge( mergeSort(leftHalf), mergeSort(rightHalf));
}
