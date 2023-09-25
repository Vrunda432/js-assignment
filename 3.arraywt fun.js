let arr =[1,2,3,4,5,6,7,8,9,10]

// 1. print 9th and 10th index of array

function print1(arr) {
    let index = arr[9]
    
    return index
}
console.log(print1(arr));

function print2(arr) {
   let index1=arr[10]
   return index1
}
console.log(print2(arr));
// 2. print every element of array by map and for loop
//    in map
function print3(arr) {
    arr.map((e)=>{
        return e
    })
    return arr
}
console.log(print3(arr));
// for loop
function Print4(arr) {
arr.forEach((e) => {
    return e
})
return arr
}
console.log( Print4(arr))

// 3. change a value of 6th index with 100

function print5(arr) {
    
 arr.splice(5,1,100)

 return arr
}
console.log(print5(arr));
// 4. print a array till element value not grater then 100

function print6(arr) {
    let show1= arr.filter((e)=>{
        return e <100
    })
    return show1
}
console.log(print6(arr));
// 5. add 1 in every element of an array

function print7(arr) {
    let show2=arr.map((e)=>{
        return e+1
    })
    return show2
    
}
console.log(print7(arr));
// 6. add 0 in start of array
 function print8(arr) {
    arr.unshift(0)
    return arr
 }
 console.log( print8(arr));

 // 6. add 0 in start of array
 function print8(arr) {
    arr.unshift(0)
    return arr
 }
 console.log( print8(arr));
//  7. add  99 in end of array

function print9(arr) {
    arr.push(99)
    return arr
}
console.log(print9(arr));

// 8. remove 1 element from start of  array

function print10(arr) {
    arr.shift()
    return arr
}
console.log(print10(arr));

// 9. remove 1 element from end of array

function print11(arr) {
    arr.pop()
    return arr
}
console.log(print11(arr));


// 10. do sum of all value of an array with use of map, reduce and for-loop
// for loop
function print12() {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}
console.log(print12());
// map
function print13() {
    let sum=0;
    arr.map((e)=>{
       return sum+=e
    })
    return sum
}
console.log(print13());
// with reduce

function print14() {
    let show4=arr.reduce((last,e)=>{

        return last+e
    },0)
    return show4
}

console.log(print14());
// 11. sort a array in acending decending
// acending
function print15() {
    let show6= arr.sort((a,b)=>{
        return a-b
     })
     return show6
}

console.log(print15());
// decending

function print16() {
    let show5=arr.sort((a,b)=>{
        return b-a
        
    })
    return show5
}

console.log("decending", print16 ());


12. reverce an array with use of method

function print17() {
    arr.reverse()
    return arr
}
console.log("reverse", print17());

// 13. reverce an array with use of for-loop

function print18() {
    const reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}
return reversedArr
}

console.log("reverse with loop",print18());