// debouncing and throttling📢

// function debounce(fn,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer=setTimeout(fn,delay);
        
//     };
// }
// document.querySelector("#search").addEventListener("input",
//     debounce(function(){
//         console.log("chala")
//     },400)
// );

// throttling📢

// function throttle(fn,delay){
//     let last=0;
//     return function(){
//         const now= Date.now();
//         if(now-last >= delay){
//             last = now;
//             fn();
//         }
//     };
// }

// window.addEventListener("mousemove",
//     throttle(function(){
//         console.log("Manish")
//     },2000)
// );


// json parse ->  json  se object banate ho
// json stringify -> json stringify ke throu hm json bnate hai

console.log(JSON.stringify({name:"manish", age:22, city:'siwan'}))