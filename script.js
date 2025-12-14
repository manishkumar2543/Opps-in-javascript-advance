// - Introduction to Error Handling
// - Common types of errors in Javascript- [`Syntax error`, Runtime errors`, Logical, errors]
// - Understanding the Error object -[ message,name,stack]
// - Handling exceptions using `try-catch, try-catch-finally`
// -How to Throw Errors in Javascript
// - Error Handling in Asynchronous Code


// syntax error -> aapne code mein likhte wakt glti kardi

// a let=12;
// console.log(a)

// runtime error -> code likhte waqt error nhi hai chalte waqt error hai

// function abcd(){
//     let a=12;
//     console.log(a.name.first);
// }
// abcd();

// logical errors -> apke code ko kuch chahiye tha par wo kar kcuh aur raha hai.

// function add(a,b){
//     return a-b;
// }
// console.log(add(1,2))


// Try and catch =>  agr error aa bhi gya  to chlega.


// - Understanding the Error object -[ message,name,stack]📢

// try{
//     let a=12;
//     console.log(a.name.message);
// }
// catch(err){
//     console.log(err)
    
// }
// finally{
//     console.log("helololo")
// }

// -How to Throw Errors in Javascript📢

try{
    let a=12;
    console.log(a.name.age)
}
catch (err){
    // throw new Error("Something went from our side, please wait for some time")
    console.error(  new Error("Something went from our side, please wait for some time"))

}