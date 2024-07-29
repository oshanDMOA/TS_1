

// // let greet : Function ;
// // greet = () =>{
// //     console.log("Hello, World");
// // }

// // const add = (a:number,b:number,c:number | string = 10) => {
// //     console.log(a+b);
// //     console.log(c);
// // }

// // add(5,10,'20');



// // const minus = (a:number,b:number) : number=>{
// //     return a+b;
// // }

// // let results = minus(3,5);


//Type Aliases_____________________

// type StringOrNum = string|number;
// type objWithName = {name: string , uid: StringOrNum };

// const logDetails = (uid : StringOrNum , item : string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }

//  const greet = (user: objWithName) =>{
//      console.log(`${user.name} says hello`);
//  }

//  const greetName = (user: objWithName) =>{
//     console.log(`${user.name} says hello`);
// }



// TypeScript Tutorial #10 - Function Signatures
// example 1

let greet : (a:string , b : string) => void;

greet = (name : string , greeting : string ) =>{
    console.log(`${name} says ${greeting}`)
}

// example 2

let calc : (a:number,b:number,c:string) => number;

calc = (numOne:number,numTwo:number,action:string) => {
    if (action === 'add') {
        return numOne + numTwo;
    }else {
        return numOne - numTwo;
    }
}

//example 3

let logDetails:(obj:{name:string,age :number}) => void;

type person = {name:string,age:number};

logDetails = (ninja:person)=>{
    console.log(`${ninja.name} is ${ninja.age} year old`);
}