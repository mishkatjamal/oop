// ## Exercise 1 — Very Easy (Warming up)

// **Task (Hindi):** Ek function banao `afterDelay`

// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

// ---

// ^ ans :-
// function afterDelay(time ,cb){
//     console.log("data fetch hora hai sabr kr...");
    
//     setTimeout(()=>{
//         cb();
//     },time)
// }

// afterDelay(3000,function(){
//     console.log("time ho gya cla do ");
    
// })

// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

// ---
// ^ans :-
// function getUser(username,cb){
//     console.log("get user data fetching ...");
    
// setTimeout(()=>{
//     cb({id:1234,username:"mishkat"})
// },1000)
// }
// function getUserPosts(userId,cb){
// setTimeout(() => {
//     cb(["post1","post2","post3"])
// }, 1000);
// }
// getUser("mishkat",function(user){
//     console.log(user.username);
//     getUserPosts(user,function(post){
//         console.log(post);
        
//     })
    
// })

// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai

// ---
// ^ ans :-
function loginUser(cb){
    console.log("login user data fetching...");
    
    setTimeout(() => {
        cb({username:"mishkat",id:123})
    }, 1000);
}

function fetchPermissions(userId,cb){
    console.log(userId);
    setTimeout(() => {
        cb(["permisson","permission2","permission3"]);
    }, 1000);
}

function loadDashboard(permisson,cb){
    console.log(permisson);
   setTimeout(() => {
     cb("dashboard loaded")
   }, 1000);
    
    
}


loginUser(function(user){
    console.log(user.username);
    fetchPermissions(user.id,function(permisson){
        
        loadDashboard(permisson,function(msg){
            console.log(msg);
            
        })
    })
})

// ### Notes
// - Practice in plain JavaScript using `setTimeout` and callbacks to understand the flow before converting to Promises/async–await.