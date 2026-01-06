const mySet = new Set ([1, 2, 3, 3]);
console.log(mySet);


// Menyimpan Nilai di Set
mySet.add('faiz')
console.log(mySet);

// Mengakses Nilai di Set
// 1 pake loop
for (const loop of mySet) {
  console.log(loop);
};

// 2 pake foreach
mySet.forEach((value) => console.log(value));

// Menghapus Nilai di Set
mySet.delete('faiz');
console.log(mySet);

