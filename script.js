
// Scenario 1: Weather Dashboard with Error Handling
// Build a small weather dashboard that fetches current weather data from any pulic weather API(such as openWeatherMap).
// You must be make API requet asynchronusly using fetech anync/await.

// if the API request fails(for example,due to an invalid city name),you must handle the error using try/catch.
// Additionally, create and throw custom errors based on weather conditions.
// For Example:
// if the temperature is extremly high or extremely low, throw a custom error and handle it properly in your code.


// let apikey=`30d6baadc779c24402f7399a8705efd8`
// function getWeather(city){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&
// onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${apikey}`)
//   .then((raw)=> raw.json())
//   .then((result) => {
//     console.log(result)
//   })
// }
// getWeather("siwan")



// use async await
// let apikey=`30d6baadc779c24402f7399a8705efd8`
//  async function getWeather(city){
// try{
//  let raw=  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
// if(!raw.ok){
//     throw new Error("City not found or something went wrong")
// }

// let realdata=await raw.json();
// if(realdata.main.temp < 0){
//     console.warn(`To cold out there... ${realdata.main.temp}°C`)
// }
// else if(realdata.main.temp > 40){
//     console.warn("Too Hot out there...")
// }
// else{
//     console.log()
// }
// console.log(realdata)


// }
// catch(err){
//     console.log(err.message)

// }
 
// }
// getWeather("Leh")


// Scenario 2: Bulk Email sending simulation with Parallel promises and Error Handling
// Think of a scenario where you must simulate sending bulk emails to 5 users.
// Treat each email-sending operation as a promise (you may simulate it using setTimput).
// All email fails(for example,due to a random failure condtion),you must catch the error and clearly show which specific email faild.

// In addition,use a finally block to display a message indicating that "Email process is complete"


const users=[
    "sonu@male.com",
    "soni@female.com",
    "aman@male.com",
    "chandan@male.com",
];

function sendEmail(email){
    return new Promise((resolve,reject)=>{
        let time=Math.floor(Math.random() * 5);
        setTimeout(() => {
            let porbability= Math.floor(Math.random() * 10);
            if(porbability <= 5) resolve("Email successfully sent.");
            else reject("Email not sent ..")
            
        }, time * 1000);
    });
};

async function sendEmails(userlist){
   let allrespones= userlist.map(function(email){
        return sendEmail(email)
        .then(function(data){
            console.log(data)
        })
        .catch(function(err){
            console.log(err);
        });
        
    });
    let ans= await Promise.all(allrespones);
    ans.forEach(function (status){
        console.log(status)
    });
}
sendEmails(users)