let arr =[1,2,3,4,5,7]
arr[0] = 5666;
arr[3] = 345667;
// console.log(arr , typeof arr);
// console.log(arr.length)
// console.log( arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString())
console.log(arr.join( " and " ))
// a=[1,3,2,4,5,6,7]
// (7) [1, 3, 2, 4, 5, 6, 7]
// a.pop
// ƒ pop() { [native code] }
// a.pop()
// 7
// 6
// 6
// a
// (6) [1, 3, 2, 4, 5, 6]
// a.pop
// ƒ pop() { [native code] }
// a.pop()
// 6
// a
// (5) [1, 3, 2, 4, 5]
// a.pop()
// 5
// a
// (4) [1, 3, 2, 4]
// arr.pop()
// 6
let a1 =[1,2,3]
let a2 =[4,5,6]
let a3 =[7,8,9]
console.log(a1. concat(a2,a3))
// let number=[1,2,3,4,5,56,6]
// number.splice( 1,3)
// number =[1,2,3,4,5,6,7]
// (7) [1, 2, 3, 4, 5, 6, 7]
// number.splice
// ƒ splice() { [native code] }
// number.splice(1,3)
// (3) [2, 3, 4]
// number
// (4) [1, 5, 6, 7]
// number.splicr(1,2,3,456,234)
// VM388:1 Uncaught TypeError: number.splicr is not a function
//     at <anonymous>:1:8
// (anonymous) @ VM388:1Understand this error
// number.splice(1,2,3,543,234)
// (2) [5, 6]
// number
// (5) [1, 3, 543, 234, 7]