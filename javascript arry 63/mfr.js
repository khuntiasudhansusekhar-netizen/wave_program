let arr = [1,3,4,55,6,7,66]
// let newArr =[]
// for(let index =0;index<arr.length;index++){
//     const element = arr[index];
//     newArr.push(element**2)
// }
// console.log(newArr)
let newArr = arr.map((e,index,arr)=>{
    return e**2;

})
console.log(newArr)
const greaterThanseven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanseven))