// promises
// async await
// settimeout and setinterval


// facebook -> mera data 
// resolve -> data aya to resolve
// reject -> data nhi aya to reject

// const prm=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve();
//     },3000)
// })
// prm.then(function(){
//     console.log("resolved")
// })
// .catch(function (){
//     console.log("rejected")
// })


// let prm=new Promise((resolve,reject)=>{
//     // logic to go to meta and get data
//     // if data aaya -> resolve
//     // else reject

// })
// prm.then(function(){

// })


// fetch se kisi bhi url par jaa skte hai
// fetch(`https://randomuser.me/api/`)
// .then((raw)=> raw.json ())
// .then((data)=>{
//     console.log(data.results[0].name.first);
// })
// .catch((err)=>{
//     console.log(err)
// })



// fetch ka data readable nhi hota 
// useee json banake readble karte hai
// iske baad jo data milt hai wo readable hota hai
//



// async await📢📢

// async function abcd() {
//     let raw= await fetch (`https://randomuser.me/api/`);
//     let data=await raw.json();
//     console.log(data)
// }
// abcd();


function getNum(){
    return new Promise((resolve,reject)=>{
 setTimeout(()=>{
      let num= Math.floor(Math.random()*10);
   if(num < 5){
    resolve(true);
   }
   else reject(false)
 },3000)
});
}
async function abcd() {
    let v=await getNum();
    console.log(v)
}
abcd();