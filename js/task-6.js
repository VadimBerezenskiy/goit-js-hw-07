const input = document.querySelector('input');
input.addEventListener('change', event => {
  if (event.target.value.length >= input.attributes[2].value) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
