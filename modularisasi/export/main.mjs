import { name, email, age } from './user.mjs';
import sayHi, { sayGoodBye } from './anotherfile.mjs';

console.log(name, email, age);

sayHi(); // Hai, ini default export dari anotherfile.mjs
sayGoodBye(); // Bye, ini named export dari anotherfile.mjs