// Exercise 1 (very easy - warming up)
// Ek function banao afterDelay
// Requirements:
// Ye funtion 2 cheezein lega:
// time (milliseconds)
// callback function 
// Given time ke baad callback call kare
// Callback ke andar "Callback executed" print hona chahiye
// Use case socho:
// "2 second baad lek kam karna hai"
// Goal:
// Samjhna ki callback delay ke baad kaise execute hota hai
// Ye setTimeout + callback connection hai

// function afterDelay(time,cb){
//     setTimeout(()=>{
//         cb();
//     },time)
// }
// afterDelay(3000,function(){
//     console.log("callback executed")
// });

// Exercise 2 (Intermediate -data flow)
// Ek function banao getUser
// Requirements :
// 1 second ke baad callback ko ek object de:
// id
// username
// Then
// Callback ke ander ek aur function call karo getUserPosts
// userId lega
// 1 second ke baad callback to posts ka array de
// Final output:
// User ka username print ho
// fir uske posts print ho 
// Goal:
// Samajhna ki ek async ka result next ko kasie milta hai.

// function getUser(username,cb){
//     console.log("getting user details...")
//     setTimeout(()=>{
//         console.log("geting user details...")
//         cb({id:1, username:"Manish"})
//     },1000)
// }

// function getUserPosts(id,cb){
//     setTimeout(()=>{
//         cb(["helo","good da", "fack you"]);
//     },2000)
// }
//  getUser("Manhsi",function(data){
//     getUserPosts(data.id, function(allposts){
//         console.log(data.username, allposts)
//     });
//  });

//2. 👈

// function instagramSeDataLaao(username,cb){
//     setTimeout(()=>{
//         cb({uniquenum: 1234, username: "Manish"});
//     },2000)
// }

// function metaPeJaaoDataLaao(uniqunum,cb){
//     setTimeout(()=>{
//         cb(["img1","img2"]);
//     },4000)
// }
// instagramSeDataLaao("Manish",function(data){
//     metaPeJaaoDataLaao(data.uniqunum,function(imges){
//         console.log(imges)
//     })
// })


// Exercise 3 (Intermediate - callback dependency, thoda painful)📢
// Teen functions banao:
// loginUser
// 1 second baad callback to user object de fetchPermissions
// userId lega
// 1 second baad callback ko permissions array de
// loadDashboard
// permission lega
// 1 second baad callback to "Dashboard loaded" bole 
// Flow:
// Pehle loginUser
// Uske andar fetchPermissions
// Uske andar loadDashboard
// Final output console mein print ho 
// Gaol:
// Callback nesting ko feel karna
// Yhi structure baad mein callback hell bante hai.

function loginUser(username, cb){
     console.log("logging in user...")
    setTimeout(()=>{
        cb({id:12, username:"manish"});
    },1000)
}

function fetchPermissions(id,cb){
   console.log("fetching permission...")
    setTimeout(()=>{
        cb(["read","write","delete"])
    },2000)
}
function loadDashboard(permission,cb){
    console.log("loading dashboard...")
    setTimeout(()=>{
        cb();
    },2000)
}

loginUser("Manish",function(userdata){
    fetchPermissions(userdata.id, function(permission){
        loadDashboard(permission,function(){
            console.log("😚🤑dashboard loaded")
        })
    })
})