function Person(name, age) {
  this.name = name;
  this.age = age;
}
 
Person.prototype.eat = function() {
  console.log(`${this.name} is eating`);
}

// JavaScript bukan bahasa pemrograman berbasis class, melainkan bahasa pemrograman berbasis prototype (prototype-based language). 

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

console.log(person1);
console.log(person2);

person1.eat(); // John is eating
person2.eat(); // Jane is eating