// 3 cara membuat array

// 1. pake object constructor
const users = new Array();
const numbers = new Array(5);

// 2. menggunakan sintaks Array.form
const foo = Array.from('foo');
console.log(foo);

// ex
const user = new Array('jhon', 'jhony', 'jhono');
const custumer = Array.from(user);
console.log(custumer);

// pake array literal
const buah = ['apel', 'jeruk', 'anggur'];
console.log(buah);


// MENGAKSES ELEMEN ARRAY  
let myArray = [1, 2, 3];
console.log(myArray[1]);

// MANIPULASI NILAI ARRAY 
myArray[0] = 20;
console.log(myArray);

// nambahin array
myArray.push(32);
console.log(myArray);

// MEMGHAPUS ELEMENT ARRAY
delete myArray[2];
console.log(myArray);

// atau pake 
myArray.splice(3, 3);
console.log(myArray);
// jadi menghapus elemen ke berapa dan jumlahnya berapa

// shift (mengapus elemnt pertama)
myArray.shift();
// pop (menghapis element terakhir)
myArray.pop();


// ARRAY DESTRUCTURING
const introduction = ['Hello', 'Arsy'];
const [greeting, name] = introduction;
console.log(greeting); // Output: Hello

// ARRAY METHOD
// 1 reverse 
const myArray2 = ['Android', 'Data Science', 'Web'];
myArray2.reverse();
console.log(myArray2); // Output: [ 'Web', 'Data Science', 'Android' ]

// 2 sort 
myArray.sort();
console.log(myArray); // ngurutin

