//1.● Write a program to Show an alert

function f1(params) {
    alert:"hello user"
}
f1();

//2.● What will be the result for these expressions?

//1. 5 > 4

let a=5;
let b=4;
 const c= a>b;
 console.log("🚀 ~ file: assignment .js:15 ~ c:", c);
 
 //A=true

 //2. "apple" > "pineapple"

 let a1="apple";
 let a2="pineapple";
 const c1=a1>a2;
 console.log("🚀 ~ file: assignment .js:24 ~ c1:", c1);
 
//3. "2" > "12"

let d="2";
let e="12";
let a3=d>e;
console.log("🚀 ~ file: assignment .js:31 ~ a3:", a3);

//4. undefined == null

let a4=undefined;
let a5=null;

let a6=a4==a5;
console.log("🚀 ~ file: assignment .js:39 ~ a6:", a6);

//5. undefined === null

let a7=undefined;
let a8=null;
let a9=a7===a8;
console.log("🚀 ~ file: assignment .js:46 ~ a9:", a9);

//6. null == "\n0\n"

let b1=null;
let b2="\n0\n";
let b3=b1 == b2;
console.log("🚀 ~ file: assignment .js:53 ~ b3:", b3);

//7.  null === +"\n0\n";

let b4=null;
let b5="\n0\n";
let b6=b4 === +b5;
console.log("🚀 ~ file: assignment .js:60 ~ b6:", b6);



//3.● Will alert be shown?
//if ("0") { alert( 'Hello'); }
function fun3(params) {
    if ("0") { alert( 'Hello'); }
 }  
//  fun3()  
//result :hello


//4.● What is the code below going to output? 
// alert( null || 2 || undefined );
function fun2(params) {
    alert( null || 2 || undefined );
 }
//  fun2()  
//result:2


//5.● The following function returns true if the parameter age is greater than
//18. Otherwise it asks for a confirmation and returns its result:

// function
// checkAge(age)
// {
// else {
// }
// }
// if (age> 18) { return true; }

// function checkAge(age) {
    
//     if (age>18){
//         return true;
//     }
//     else {
//        return confirm("‘did parents allow you?")
//     }
// }
// let x= checkAge(17)
// console.log("🚀 ~ file: assignment .js:103 ~ x:", x);

//6● Replace Function Expressions with arrow functions in the code below:
Function 
// ask(question, yes,no)
//   { if (confirm(question))yes();
//     else
//     no();
//     }
//     ask("Do you agree?", function()
//     { alert("You agreed."); },
//     function() {
//         alert("You canceled the execution.");
//      })
    
     
     //7.● Is array copied?
//let fruits = ["Apples", "Pear", "Orange"]; // push a new value into the "copy" let
//shoppingCart = fruits; shoppingCart.push("Banana"); // what's in fruits?
//alert( fruits.length ); // ?

let fruits = ["Apples", "Pear", "Orange"]; 
let shoppingCart = fruits;
shoppingCart.push("Banana")
// console.log("shoppingCart:", shoppingCart)

console.log("fruits:", fruits)

// alert(fruits.length)  result :4
 
     //8.● Map to names
// let john = { name: "John", age: 25 }; let pete = { name: "Pete", age: 30 }; let mary =
// { name: "Mary", age: 28 }; let users = [ john, pete, mary ]; let names = /* ... your
// code */ alert( names ); // John, Pete, Mary


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary ={ name: "Mary", age: 28 };
let users = [ john, pete, mary ];
usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
    ]
    //alert( usersMapped[0].id ) 
    // 1 alert( usersMapped[0].fullName ) // John Smith


    //9.● Sum the properties There is a salaries object with arbitrary number of salaries. Write
// the function sumSalaries(salaries) that returns the sum of all salaries using
// Object.values and the for..of loop.If salaries is empty, then the result must be 0.
// let salaries = {
// "John": 100,
// "Pete": 300,
// "Mary": 250
// };
// alert( sumSalaries(salaries) ); 
// 650
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
  };
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
    return sum;
  }  

 let x= sumSalaries(salaries)
  console.log("🚀 ~ file: assignment .js:176 ~ x:", x);
//   alert(sumSalaries(salaries));


//10.● Destructuring assignment We have an object: Write the Destructuring assignment that
//reads:
//a) Name property into the variable name.
//b) Year’s property into the variable age.
//c) isAdmin property into the variable isAdmin (false, if no such property)
//d) let user = { name: "John", years: 30};

let user1 = { name: "John", years: 30};

let {name,age,Admin}=user1
    console.log("name:", name)
    console.log("age:", age)
    console.log("admin:",Admin);

//11.● Turn the object into JSON and back Turn the user into JSON and then read it back
//into another variable.
// user = { name: "John Smith", age: 35};

user = { name: "John Smith", age: 35};

// Turn the object into JSON
let userJSON = JSON.stringify(user);

// Read it back into another variable
let newUser = JSON.parse(userJSON);







/// new request//

//1.● What is JSON?

// JSON stands for JavaScript Object Notation

// JSON is a lightweight format for storing and transporting data

// JSON is often used when data is sent from a server to a web page

// JSON is "self-describing" and easy to understand.


//2.● What is promises?
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. 
// Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.



//3.● Write a program of promises and handle that promises also.

const m1=new Promise((resolve,reject)=>{
  const arr=[1,2,3,4,5];
  let exist=arr.includes(5);
  //throw new Error("menually gerated error");
  if (exist) {
      resolve("5 is avalible");
  }
  else{
      reject("5 is not in array");
  }
     console.log("🚀 ~ file: promise.js:4 ~ newPromise ~ exist:", exist);
  });
  m1.then((res)=>{
      console.log("res",res);
      return[1,2,3];
  })
  .then((res1) => {
      console.log("🚀 ~ file: promise.js:37 ~ .then ~ res1:", res1);
  
    
  })
  .catch((error)=>{
      console.log("error",error.message);
       
  })

  const p2=new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve("-----resolve---")
      })
  })
  console.log(p2);