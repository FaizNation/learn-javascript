// Object 
const user = {
  name : 'DIcoding',
  'last name' : 'Indonesia',
  age : 9,
};

console.log(user.name); // akses pake dots
console.log(user['last name']); // akses pake bracket

const { name } = user; // akses pake object destructuring
console.log(name);


//Mengubah nilai di properti objecet
const account = {
  balance : 1000,
  debt : 10,
};

account.balance = 2000;
console.log(account.balance);

//menghapus
delete account.debt;
delete user ['age']; // atau gini juga bisa
console.log(account);
console.log(user);
