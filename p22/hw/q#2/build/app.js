var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var quickSort = function (array) {
    if (array.length === 1) {
        return array;
    }
    var pivot = array[array.length - 1];
    var leftArr = [];
    var rightArr = [];
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftArr.push(array[i]);
        }
        else {
            rightArr.push(array[i]);
        }
    }
    //shavim beereh
    //
    //
    if (leftArr.length > 0 && rightArr.length > 0) {
        return __spreadArray(__spreadArray(__spreadArray([], quickSort(leftArr), true), [pivot], false), quickSort(rightArr), true);
    }
    else if (leftArr.length > 0) {
        return __spreadArray(__spreadArray([], quickSort(leftArr), true), [pivot], false);
    }
    else {
        return __spreadArray([pivot], quickSort(rightArr), true);
    }
};
var res = quickSort([5, 9, 7, 0, 4]);
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
