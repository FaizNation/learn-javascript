// membuat map 
const productMap = new Map([
  ['sepatu', 340],
  ['kaos kaki', 120],
  ['celana', 500],
]);

console.log(productMap);

// nambah element
const users = new Map ();
users.set('name', 'faiz');
console.log(users);

// akses nilai 
console.log(users.get('name'));

// hapus
users.set('lastname', 'nation');
console.log(users);
users.delete('name');
console.log(users);

