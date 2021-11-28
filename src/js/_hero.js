refs = {
  buttonSwitch: document.querySelector('.button-switch__toggle'),
  title: document.querySelector('.offers-title'),
};

refs.buttonSwitch.addEventListener('change', onInputChange);

function onInputChange(e) {
  const { top: titleHeight } = refs.title.getBoundingClientRect();
  window.scrollBy({
    top: titleHeight,
    behavior: 'smooth',
  });
  setTimeout(() => {
    refs.buttonSwitch.checked = false;
  }, 500);
}
