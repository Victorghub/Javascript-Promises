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