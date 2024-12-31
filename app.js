let counter = 0;
let counterElement = document.getElementById('counter');
function incrementCounter() {
  counter++;
  counterElement.textContent = counter;
}
function decrementCounter() {
  counter--;
  counterElement.textContent = counter;
}
function resetCounter() {
  counter = 0;
  counterElement.textContent = counter;
}

  