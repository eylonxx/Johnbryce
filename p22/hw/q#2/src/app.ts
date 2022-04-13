const quickSort = (array: number[]): number[] => {
  if (array.length === 1) {
    return array;
  }
  let pivot = array[array.length - 1];
  const leftArr: number[] = [];
  const rightArr: number[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  //shavim beereh
  //
  //
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot];
  } else {
    return [pivot, ...quickSort(rightArr)];
  }
};

let res = quickSort([5, 9, 7, 0, 4]);
console.log(res);

// [5, 9, 7, 0, 4]

//pivot = 4
//leftarr = [0]
//rightarr = [5, 9, 7]
//newarr = [0,4,5,9,7]

//pivot=7
//leftarr=[0,4,5]
//rightarr=[9]
//newarr=[0,4,5,7,9]

//pivot=9
//left = [0,4,5,7]
//right= []

// [0, 2, 3, 4, 5, 6, 9]
