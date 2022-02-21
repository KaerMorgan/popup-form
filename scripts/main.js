let formWrapper = document.querySelector('.form__wrapper');
let form = document.querySelector('.form');
let openFormButton = document.querySelector('.form__open');
let closeFormButton = document.querySelector('.form__close');

// открытие по клику на кнопку
openFormButton.addEventListener('click', (e) => {
  e.preventDefault();
  formWrapper.classList.add('active');
  form.classList.add('active');
})

// закрытие по клику на кнопку
closeFormButton.addEventListener('click', () => {
  formWrapper.classList.remove('active');
  form.classList.remove('active');
})

// закрытие по клику на обёртку
document.addEventListener('click', (e) => {
  if (e.target === formWrapper) {
    formWrapper.classList.remove('active');
    form.classList.remove('active');
  }
})


// маска телефона

let input = document.querySelector('.form__input_tel');

let old = 0;

input.onkeydown = function() {
  let curLen = input.value.length;

  if (curLen < old) {
    old--;
    return;
  }

  if (curLen == 2)
    input.value = input.value + "(";

  if (curLen == 6)
    input.value = input.value + ")-";

  if (curLen == 11)
    input.value = input.value + "-";

  if (curLen == 14)
    input.value = input.value + "-";


  old++;
}

input.addEventListener('keypress', (evt) => {
  if (evt.keyCode < 47 || evt.keyCode > 57) {
    evt.preventDefault();
  }
})

input.addEventListener('focus', () => {
  if (input.value.length === 0) {
    input.value = '+7';
    input.selectionStart = input.value.length;
  }
})

input.addEventListener('click', (evt) => {
  if (input.selectionStart < 2) {
    input.selectionStart = input.value.length;
  }
  if (evt.key === 'Backspace' && input.value.length <= 2) {
    evt.preventDefault();
  }
})

input.addEventListener('blur', () => {
  if (input.value === '+7') {
    input.value = '';
  }
})

input.addEventListener('keydown', (evt) => {
  if (evt.key === 'Backspace' && input.value.length <= 2) {
    evt.preventDefault();
  }
})