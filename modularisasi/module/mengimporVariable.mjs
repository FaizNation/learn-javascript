import { name, favoriteFood } from './module.mjs';

console.log(name);
console.log(favoriteFood);

//Selain mengimpor dengan named import, kita juga dapat mengimpornya menggunakan import alias. Tenang saja, hasilnya akan tetap sama.
import { name, favoriteFood as food } from './module.mjs';
 
console.log(name);
console.log(food);