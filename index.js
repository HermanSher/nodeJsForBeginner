//Modules
//--> A module is an encapsulated and reusable chunk of code that has its own context
//--> In Node.js each file is treated as a seprate module

//----Types of Modules------
// 1. Local Modules => Modules that we create in our application
// 2. Built-in Modules => Modules that Node.js ships with out of the box
// 3. Third party Modules => Modules written by other developers that we can use in our application

//In this section I am learning  Local Modules
//Local Modules Summary
// 1. In node.js, each files is a module that is isolated by default
// 2. To load a module into another file, we use require function
// 3. When index.js is executed, the code in the module is also executed
// 4. If the file we are requiring is a javascript file, we can skip specifying the extension and node.js will infer it on our behalf

//CommonJs
//--> CommonJs is a standard that states how a module should be structured and shared
//--> Node.js adopted CommonJs when it started out and is what you will see in code bases

//To include add module into index.js we need to use a function which is require

//require("./add"); // require function loads the add module into index.js and also we don't have to specify fileName.js we can directly called by add
const addFn = require("./add");
console.log("Hello from index.js");
const sum = addFn(2, 3);
const sum2 = addFn(6, 4);
const sum3 = addFn(10, 5);
console.log(sum);
console.log(sum2);
console.log(sum3);
