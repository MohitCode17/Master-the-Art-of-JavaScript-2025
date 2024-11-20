// 👉 Let's take a another example example:-

sayHello();

const username = "Mohit";
const age = 26;

function sayHello() {
  const a = 10;
  const b = 11;

  sum(10, 20);
}

function sum(x, y) {
  return x + y;
}

/*
                    | Global Execution Context (GEC) |
-----------------------------------   ------------------------------------ 
| Memory Creation Phase           |   | Code Execution Phase             |
|---------------------------------|   |----------------------------------|
| sayHello    : <function>        |   | sayHello      :  <function>      |
| sum         : <function>        |   | sum           :  <function>      |
| username    : undefined         |   | username      :   Mohit          |
| age         : undefined         |   | age           :   26             |
|                                 |   |                                  |  
|---------------------------------|   |----------------------------------|
| Invoke sayHello()               |-->| Execute sayHello()               |
|---------------------------------|   |----------------------------------|

When function `sayHello` is executed, it create a function(local) execution context.

                    | Local Execution Context (sayHello) |
-------------------------------------------    --------------------------------------
| Memory Creation Phase                    |   | Code Execution Phase               |
|------------------------------------------|   |------------------------------------|
| a            : undefined                 |   | a      :    10                     |                                           
| b            : undefined                 |   | b      :    11                     |
|------------------------------------------|   |------------------------------------|
| Invoke sum()                             |   | Execute sum()                      | <-------
|------------------------------------------|   |------------------------------------|         |
                                                                                              |
                    | Local Execution Context (sum) |                                         |
-------------------------------------------    --------------------------------------         |
| Memory Creation Phase                    |   | Code Execution Phase               |         |
|------------------------------------------|   |------------------------------------|         |
| x            : 10                        |   |  Return value: 30                  |  -------| This Return the value: 30 to caller.                                           
| y            : 20                        |   |                                    |
|------------------------------------------|   |------------------------------------|
| Invoke sum()                             |   | Execute sum()                      |
|------------------------------------------|   |------------------------------------|


 ---------     Call Stack     ----------
 -------------------------------------
 | Local Execution Context(sum)      | -----> Once the local execution context is executed, it will be pop out from callstack
 -------------------------------------  
--------------------------------------
| Local Execution Context (sayHello) | -----> Once the local execution context is executed, it will be pop out from callstack
--------------------------------------
--------------------------------------
| Global Execution Context           | -----> Once the Global execution context is executed, it will be pop out from callstack.
--------------------------------------
*/
