let familyTree ={
    name: "babudada",
    age:86,
    child:[
        {
            id:100,
            name:"kishorbhai",
            age:55,
            occupation:"zonal-markting manager",
            vehicle:[
               {
                name:"creta",
                number:6108,
               },
               {
                name:"kia",
                number:2022,
               }
            ],
            child: [
                {
                    name:"vrunda",
                    age:28,
                },
                {
                    name:"ishan",
                    age:25,
                },
            ],
        },
    {
        id:101,
        name:"rameshbhai",
        age:50,
        occupation:"job",
        vehicle:[
           {
            name:"thar",
            number:3040,
           },
           {
            name:"activa",
            number:2011,
           },

        ],
        child:[
            {
                name:"mansi",
                age:21,
            },
            {
                name:"kirtan",
                age:22,
            },
        ],
    },
    {
        id:103,
        name:"jaysukh",
        age:54,
        occupation:"farmer",
        vehicle:[
            {
                name:"honda",
                number:3060,
            },
            {
                name:"sckoda",
                number:2011,
            },
        ],
        child:[
            {
                name:"tisha",
                age:20,
            },
            {
                name:"harsh",
                age:26,
            },
        ],
    },

    
    ],
}


// with map 
// second child vehicle name
// console.log("------second child vehicle name-------");
// let vname= family.child[1].vehicle.map((e)=>{
//     return e.name
// })

// console.log(vname);

// sum of third child sons age 
  
// console.log("--------sum of third child sons age--------");
// let age1= family.child[2].child.map((e)=>{
//     return e.age
// })

//     console.log("age", age1)
//     let total=age1.reduce((lastev,e)=>{
//         return lastev+e
//     },0)
//     console.log("total of age=",total);
 
// vehicle details of each family member
let vehicleNames = [];

for (let i = 0; i < family.child.length; i++) {
  for (let j = 0; j < family.child[i].vehicle.length; j++) {
    vehicleNames.push(family.child[i].vehicle[j]);
  }
}

console.log(vehicleNames);

console.log("vehicle details of each family member");
function fun() {
    let vee=family.child.filter((e)=>{
            // console.log(e);
            return e?.vehicle
    })
    // console.log("fun ~ vee:", vee)
      let soo =vee.filter((e)=>{
        console.log(e?.vehicle);
      })
}

 fun()

// -> all son of your dada name only
let sonNames = [];

for (let i = 0; i < family.child.length; i++) {
  sonNames.push(family.child[i].name);
}

console.log(sonNames);
             
// -> all son of father/uncle's
let sonNames1 = [];

for (let i = 0; i < family.child.length; i++) {
  for (let j = 0; j < family.child[i].child.length; j++) {
    sonNames1.push(family.child[i].child[j].name);
  }
}

console.log(sonNames1);







  


