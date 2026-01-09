// Cara untuk mengekspor function tak berbeda jauh dengan cara mengekspor variable.

export const name = 'John';
export const favoriteFood = ['pizza', 'pasta', 'sushi'];
 
export function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

// Agar tidak perlu menulis kata kunci export di setiap nilai yang ingin diekspor, Anda dapat mengekspor di akhir berkas seperti berikut.

const name = 'John';
const favoriteFood = ['pizza', 'pasta', 'sushi'];
 
function sayHi(name) {
  console.log(`Hi, ${name}!`);
}
     
export { name, favoriteFood, sayHi };