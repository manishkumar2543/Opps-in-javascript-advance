// class Sketch{
//     constructor(){
//         this.character="doremon";
//         this.color="blue";
//         this.someFnc = function () {};

//     }
// }
// Sketch.prototype.speak = function () {};
// Sketch.prototype.walk = function () {};
// let Sketch1=new Sketch();

// prototype- is a shared memory


//   this Keyword  -📢✍✍

// global  ->  window
// function -> window
// es5 function inside object -> object
// es5 function inside es5 function inside object -> window
// es6 function inside es5 function inside object -> object


// console.log(this)
// output- window👈


// function abcd (){
//     console.log(this)
// }
// abcd():
// output - window👈



// let obj= {
//     name: "manish",
//     fnc: function(){
//         console.log(this)
//     }
// }
// obj.fnc();
// output - Object  👈👈


// let obj={
//     name:"maisn",
//     fnc:()=>{
//         console.log(this);
//     },
// };

// obj.fnc();
// Output - window👈👈


// es5 function inside es5 function inside object -> window

// let obj={
//     name:"manish",
//     fnc: function(){
//         function abcd(){
//             console.log(this)
//         }
//         abcd();
//     },
    
// };
// obj.fnc();


// Call , apply, bind 📢✍

// ek function me (this ) ki vlaue window hoti hai, agr app chaahte ho ki  vlaue window naa ho ki wo value window naa ho 
// par koe aur object ho tb app use kr skte ho call apply bind ka.

// call✍💡
// let obj={
//     name:"manish",
// };
// function abcd(){
//     console.log(this);
// }
// abcd.call(obj);

// apply💡✍
// let obj={
//     name:"manish",
// }
// function abcd(a,b,c){
//     console.log(this,a,b,c)
// };
// abcd.apply(obj,[1,2,3])


// bind

// let obj={
//     name:'manish',
// }
// function abcd(a,b,c){
//     console.log(this,a,b,c);
// }
// let newfnc= abcd.bind(obj,1,2,3);
// newfnc();

// call -> fnc chaltata hai and this ki vlaue set karta hai .
// apply -> wahi karta hai jo call karta hai and arguments main pahli vluae this ki and doosri vlaue arry hot hai .👈
// bind -> wahi krta hai jo call krta hai and apko nya fnc deta hai👈