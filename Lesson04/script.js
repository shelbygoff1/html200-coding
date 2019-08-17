function numberSquarer(firstNumber) {
  let number = prompt('How much money do you want? ');
  function doubler(numberToMultiply) {
  return numberToMultiply ** 2;
  }
  alert('Suprise! you actually get '+doubler(number)+' dollars!');
}
