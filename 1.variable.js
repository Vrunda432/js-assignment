// 1. Want to re-use variable name so which variable declare method should i use?
// ans=using var variable.//

// 2.-> give the list which variable name not works in js
// 1. let a=0
// 2. let "a"=0
// 3. let 'a'=0
// 4. let `10`=0
// 5. let 1=0

// ans=2,3,5,4

3.let x = 100
// var y = 100
// const z = 100
// const m
{
      x= 90
    //   y= 90
    //   z= 90
      console.log(x) --------90-------point-x1
    //   console.log(y) _______90____________ point-y1
    //   console.log(z) _____100______________ point-z1
    //   console.log(m) ___m is not defined________________ 
} 

console.log(x) __________90_________ point-x2
// console.log(y) _________90__________ point-y2
// console.log(z) ___________100________ point-z2

what will print at x1-___90____
// what will print at y1-__90_____
// what will print at z1-____100___
// what will print at x2-___90____
// what will print at y2-_____90__
// what will print at z2-___100____


-> task-2

console.log(x) _____can't_ access 'x' before intialization_____________ point-x2
console.log(y) ___undefinded________________ point-y2
console.log(z) ___________________ point-z2

{
      let x = 100
      var y = 100
      const z = 100
}

console.log(x) _______100____________ point-x1
console.log(y) _________100__________ point-y1
console.log(z) ___________________ point-z1


what will print at x1-___100____
what will print at y1-___100____
what will print at z1-____100___
what will print at x2-___can't access 'x' before intialization____
what will print at y2-____undefined___
what will print at z2-__z is not defined_____

------------------------------------------------------------------------------------------

*/