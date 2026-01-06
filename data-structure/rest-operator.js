// intinya ini buat function biar bisa ada arraynya
function users (absen, ...name){
  console.log(name.length);
  console.log('absen', absen);
  console.log('nama', name);
};

users(89, 87, 'rafly', 'pais');

