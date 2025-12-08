// - Introduction to Asynchrony in Javascript.
// - Introduction to 'callbacks' and Problems in Callbacks
// - Understanding 'promises' - 'pending' 'resolved' , 



// js  -> single threaded hai
// ek kaam ek baar main kar paayegi

// synchronous approach
// asynchronous approach


// - Introduction to 'callbacks' and Problems in Callbacks
// callback -> ek function jo turnat nhi chalega ye chalega jab koe kam complete hoga.

// setTimeout(function(){
//     console.log("Hey")
// },2000)




// function abcd(fn){
//     fn(function (fn3){
//         fn3(function (fn5){
//             fn5()
//         });
//     })
// }
// abcd(function(fn2){
//    fn2(function(fn4){
//     console.log("holoel")
//    })
// })


function amintseDetailslao(address, cb){
    console.log("fetching details...")
    setTimeout(()=>{
        cb({lat:23.33, lang:234.444});
    },3000)
};
amintseDetailslao("siwan chock road",function(deatils){
    console.log(deatils)
})