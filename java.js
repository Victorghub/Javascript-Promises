//API we want to hit - you have to wrap it in a fetch

// fetch("https://jsonplaceholder.typicode.com/users/1"))

// 1. "Then" method
/***
 * then method gives us a callback
 * inside the argument is where we get the response from the backend server.
 * in order to make the backend compatible with the front we have to add .json()
 * response.json() is what makes the backend compatible with the frontend
 * now this is giving us the data but its giving it to locked still inside the promise,
 *  to unlock the promise you have to use response.json().then
 * inside of .then() is a callback
 *
 * the first promise is what we are fetching from the backend
 * and then in order to make it compatible with the frontend so you can use
 * with javscript you have to use response.json
 * response.json() is a promise within itself
 * .then method is used to unlock the promise
 */

/**
 * fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
  });
 * 
 * 
 * */ 

//when you return a promise inside of a .then - the WHOLE fetch becomes a response.json()
// therefore we need to unlock the entire thing frm there and we do that by using .then and a callback


// Async/Await method //

/***
 * Instead of writing .then all you have to do is await the promise
 * In order to have an await, you have to use an Async function
 * in  order to create an async function you just have to write async //
 * in order to get the response you have to store it  in a varible
 * then yo console.log that response from the variable but it cannot understand it
 * in order to make the frontend understand it you just add .json() 
 * then you have to unlock the data to be able to be used.
 * so you use await again and put it in another variable inside the async function and console.log it
 * 
 * 
 *  */ 

async function main() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
   const data = await response.json()
  // console.log(response.json()) //
  console.log(data) 
}

main()

// how to create a promise // 

/**
 * Create a function,
 * return a new promise by return ''new '' followed by promise with capital P
 * () beside promise accepts a callback
 * inside this specific argument it accepts resolve or reject
 * add resolve and reject (if the promise is succesful resolve, if it fails reject it)
 * once you create your promise if you want to unlock it you use async method
 */


/**
 * function getSubcriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}

async function sub() {
    console.log(await getSubcriptionStatus())
}

sub();

 * 
 * */

/**
 * create a function named get video
 * accept a parameter called subscription status
 * return a new promise inside the function that:
 * if vip resolve show video
 * if free resolve show trailer
 * otherwise reject no video
 * consoe.the result of getvideo() in main()
 */


function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("Show Video")
        }
        else if (subscriptionStatus === "Free") {
            resolve("Show Trailer")
        }
        else {
            reject("No Video")
        }
    })
}

async function vid() {
    const status = await getSubsciptionStatus();
    console.log(getVideo(status))
}

vid();