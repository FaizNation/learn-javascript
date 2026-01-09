// Harus meng-import function/method tersebut.
// Function/method tersebut sudah di-export (export akan dibahas di materi selanjutnya).

import myFunction from "./anotherfile.mjs"; // Jika export default
// import result from "./anotherfile.mjs"; // Jika export default
// import { myFunction } from "./anotherfile.mjs"; // Jika export named
import { name, email, age } from './anotherfile.mjs';
import * as variable from './anotherfile.mjs';

import { myFunction as userFunction } from './user.mjs';
import { myFunction as customerFunction } from './customer.mjs';

myFunction();
// result();


console.log(name);
console.log(email);
console.log(age);

console.log(variable.name);
console.log(variable.email);
console.log(variable.age);

userFunction();
customerFunction();