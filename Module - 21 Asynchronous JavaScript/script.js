// 👉 What is Synchronous in JavaScript ?

// Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction wait for the previous instruction to complete its execution.

// Example:

/*
console.log("Task 1 completed");
console.log("Task 2 completed");
console.log("Task 3 completed");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("Task 4 completed");
*/

// We should note here that the browser effectively steps through the program one line at a time, in the order we wrote it. At each point, the browser waits for the line to finish its work before going on to the next line.

// =======================================================================================================================

// 👉 What is Asynchronous in JavaScript ?

// Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

/*
console.log("Task 1 completed");
console.log("Task 2 completed");

console.log("Fetching data from API...");

setTimeout(() => {
  console.log("Data fetched successfully.");
}, 2000);

console.log("Task 3 completed");
*/

// The setTimeout function is asynchronous and schedules the task to run after 2 seconds. Meanwhile, the program continues executing the next instructions (Task 2 completed).

// =======================================================================================================================

// 👉 Callback

// A callback is a function passed as an argument to another function.

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Callback function-
function calculator(a, b, taskCallback) {
  return taskCallback(a, b);
}

const result = calculator(10, 20, sum);
// console.log(result);

// =======================================================================================================================

// 👉 Callback Hell

// Callback Hell: Nested callbacks staked below one another forming a pyramid structure. (Pyramid of Doom)

// This style of programming becomes difficult to understand & manage.

// Let's understand:-

// Let's suppose we have created a website that brings some data from database. In database, there are millions of user's data. Whenever the user enters his username and password, JavaScript will have to check the username whether they exists and password if exists, then finally login with account.

// So whenever we retrieve anything from the database there may be some delay in it, because of network, size of data of database.

// Let's take this example and understand:-

// 🤔 Imagine: A copy of that database

// This function simply return data based on id. And take some delay...

/*
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log(`Data of Id: ${dataId}`);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
*/

// For example:-

// We have to write a code First we have to fetch data1, One the data1 comes to us then we get the data2 and then data3 and so on....

// data1
// data2
// data3.....

/*
getData(10, () => {
  console.log("Getting data 2....");
  getData(20, () => {
    console.log("Getting data 3....");
    getData(30, () => {
      console.log("Getting data 4....");
      getData(40);
    });
  });
});
*/

// 👆 This is what we called Callback Hell. To solve we come up with a concept in JavaScript called "Promises".

// =======================================================================================================================

// 👉 Promises

// Promises is for "eventual" complition of task. It is an object in JavaScript. It is a solution to callback hell.

// Syntax: let promise = new Promise((revolve, reject) => {...})

// "resolve" and "reject" are callbacks provided by JavaScript.

// "resolve(value)": If the job is finished successfully. with result value.

// "reject(error)": If an error has occurred, error is in the error object.

let promise = new Promise((resolve, reject) => {
  console.log("I am a promise in javascipt.");
  resolve("Success");
  // reject("Some error occured");
});

// 👉 Promise has some states:-

// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: Meaning that the operation completed successfully.
// 3. Rejected: Meaningn the operation failed.

// 👉 Let's suppose we have an api which return data. Generally API returns data in form of promises

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data of Id: ${dataId}`);
      resolve("Success");
    }, 3000);
  });
}

// 👉 Now let's see how to use Promises, generally we don't create promises, someone else create promises for us and we use it.

// 1. promise.then((result) => {...}) - Use when promise is being fullfilled.
// 2. promise.catch((error) => {...}) - Use when promise is being rejected.

/*
const gePromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I'm a promise");
    resolve("Success");
    // reject("Some error occured");
  });
};

let p1 = gePromise();
p1.then((res) => {
  console.log("Promise fulfilled", res);
});

p1.catch((err) => {
  console.log("Rejected", err);
});
*/

// 👉 Promise Chaining

// Let's take an example: We have async function which return some data:

/*
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some data 1");
      resolve("Success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some data 2");
      resolve("Success");
    }, 4000);
  });
}

console.log("Fetching data 1...");
asyncFunc1().then((res) => {
  console.log(res);

  console.log("Fetching data 2...");
  asyncFunc2().then((res) => {
    console.log(res);
  });
});
*/

// Let's take previous example

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//   });
// });

// Simplify above code:

/*
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    return getData(4);
  })
  .then((res) => {
    console.log(res);
  });
*/

// =======================================================================================================================

// 👉 Async-Await

// Async function always returns a promise.

// Syntax: async function myFunc() {...}

// Await pauses the execution of the surrounding of async function until the promise is settled.

async function getAllData() {
  await getData(11);
  await getData(12);
  await getData(13);
  await getData(14);
  await getData(15);
}
