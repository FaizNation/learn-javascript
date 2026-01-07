const score = 85;

console.log('jalan-jalan');
if (score > 90 ) {
  console.log('makan-makan');
} else if (score > 80) {
  console.log('apa ya');
} else {
  console.log('bot bot');
}

// Ternary operator membutuhkan tiga operan dengan urutan seperti berikut:
// 1. Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
// 2. Ekspresi yang dieksekusi jika kondisinya benar.
// 3. Ekspresi yang dieksekusi jika kondisi salah.

// let result = condition ? value1 : value2;

const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`anda dapet diskon ${discount * price}`);
