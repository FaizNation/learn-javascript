import { name, favoriteFood as food, sayHi } from './module.mjs';
 
console.log(name);
console.log(food);
sayHi(name);

//Karena kita mengimpor seluruh nilai yang ada di module tersebut, gunakanlah keyword * agar lebih ringkas.

import * as user from './module.mjs';
 
console.log(user.name);
console.log(user.favoriteFood);
user.sayHi(user.name);