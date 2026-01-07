// try {
     
      // code...
     
// } catch (err) {
     
      // error handling
     
// }


try {
  console.log('Ini try block');
  throw new Error('Error: Program berhenti');
} catch (err) {
  console.log('Ini catch block');
} finally {
  console.log('Ini finally block');
}
