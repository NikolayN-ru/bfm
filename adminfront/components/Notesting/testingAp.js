"use strict";
exports.__esModule = true;
var a = [1, 2, 3];
var b = a;
// const c: number[] = b;
function arraySum(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        sum += num;
    }
    return sum;
}
function printTriangles(n) {
    var nums = [];
    for (var i = 0; i < n; i++) {
        nums.push(i);
        console.log(nums);
    }
}
printTriangles(5);
