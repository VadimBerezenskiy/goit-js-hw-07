const input = document.querySelector('input');
const text = document.querySelector('#text');
input.addEventListener('input', event => {
  console.dir(text.style.fontSize);
  text.style.fontSize = `${event.target.value}px`;
});
