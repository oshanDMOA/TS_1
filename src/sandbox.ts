

// let greet : Function ;
// greet = () =>{
//     console.log("Hello, World");
// }

// const add = (a:number,b:number,c:number | string = 10) => {
//     console.log(a+b);
//     console.log(c);
// }

// add(5,10,'20');



// const minus = (a:number,b:number) : number=>{
//     return a+b;
// }

// let results = minus(3,5);


//Type Aliases

type StringOrNum = string|number;
type objWithName = {name: string , uid: StringOrNum };

const logDetails = (uid : StringOrNum , item : string) => {
    console.log(`${item} has a uid of ${uid}`);
}

 const greet = (user: objWithName) =>{
     console.log(`${user.name} says hello`);
 }

 const greetName = (user: objWithName) =>{
    console.log(`${user.name} says hello`);
}
