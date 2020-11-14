const inputName = document.querySelector('input#name-input');
const outputName = document.querySelector('span#name-output');
inputName.addEventListener('input', event => {
  outputName.textContent = event.target.value;
});
