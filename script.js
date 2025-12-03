//  Understanding 'classes' and 'object' in Javascript.

// Rule Number
// -jab bhi hm class bnyege to class bad vla leter cpaital later me hi likhe pahila later
// EX--  class BiscuitMaker{};

// 2. jab constructor chlta hai to (this) ki value ek nya object hota hai.


// constructor✍💡
// class BiscuitMaker {
//     constructor (){
//         this.name='ParleG';
//         this.price =5;

//     }
// }
// ab class ko chlayenge ✍
// new- ka mtlb blank object✍
// let biscuit- iska mtlb jo (this) ek blank tha usko rakhne ke liye isko bnye hai>✍

//  let biscuit=new BiscuitMaker();



//  Class bnnate hai taaki hme har baar ek naya object mil jaye

// classes object ki factory hai

// har baar new word ke saath class run karoge to ek nya object milega.

// constuctor-- ek function hota hai.
// class ChooleChaat{
//     constructor(){
//         this.price=55;
//         this.oil="5ml";
//         this.oilBrand="Saffola";
//         this.mashala=['dhaniya', 'pudina', 'mirch'];
//     }

//     pack(){
//         console.log('aalo chaat packed');
//     }
//     unpack(){
//         console.log('aalo chaat unpacked')
//     }
// }
// class AlooChaat{
//     constructor(){
//         this.price=55;
//         this.oil="5ml";
//         this.oilBrand="Saffola";
//         this.mashala=['dhaniya', 'pudina', 'mirch'];
//     }

//     pack(){
//         console.log('aalo chaat packed');
//     }
//     unpack(){
//         console.log('aalo chaat unpacked')
//     }
// }
// // New- jab bhi (new) ke sath koe object bnyange to constructor chl jayega💡✍✍✍
//  let ac1=new AlooChaat() 
//  ac1.pack();



// class Kitaab{
//     constructor(name, price,author,colro ){
//         this.name=name;
//         this.price=price;
//         this.author=author;
//         this.colro=colro;
//     }
//     pannaPalto(){
//         console.log("")
//     }
//     bookmarkLagao(){}
//     padhlo(){}
// }
// let k1=new Kitaab("Gk",200,'manish','white');
// let k2=new Kitaab('computer',240,'sonu','red');
// let k3=new Kitaab('Maths', 350, 'Rk singh','blue');


// Constructor ->  Ek function jo automatic chalta hai jaise hi class se naya instance bnaya jata hai✍
// instance - ka mtlb ek sacha 
// ex- k1 ek instance hai mtlb class ki ek copy. and agr hm (new.Kitaab likhe to direct chl jaye usi time)
// let k1 = new Kitaab(); 

// Prototypes - [this keyword, call, apply, bind]📢📢📢

class Human {
    constructor(){
        this.name='Manish';
        this.age=23;
    }
}
Human.prototype.saasLo = function(){
    console.log("hey");
}
Human.prototype.khaanaKhao = function(){
    console.log("hey")
}
let h1=new Human();
let h2=new Human();


