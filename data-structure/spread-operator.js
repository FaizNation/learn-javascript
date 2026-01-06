// object
const name = { nama : 'faiz'};
const alamat = { alamat : 'jurug', nojalan : 32};
const users = { ...name, ...alamat}
console.log(users);

const copied = { ...name};
console.log(copied);


// array
const laptop = ['asus tuf'];
const spesifikasi = ['ram 3 gb', 40000];
const barang = [...laptop, ...spesifikasi];
console.log(barang);

const arraycopied = [...spesifikasi];
console.log(arraycopied);
