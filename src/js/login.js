const loginModal = document.querySelector('[data-modal-login]');

function showModal() {
  const loginWindowBtn = document.querySelector('.modal-login__loginBtn');
  loginWindowBtn.classList.add('actual-page');
  loginModal.classList.toggle('is-hidden');
  swiitchModal();
}
const signInIcon = document.querySelector('svg.icon-login');
signInIcon.onclick = () => {
  showModal();
};

const loginEscapeListener = event => {
  if (event.key === 'Escape') {
    loginModal.classList.add('is-hidden');
  }
};
document.addEventListener('keydown', loginEscapeListener);
//modal swtich
const swiitchModal = () => {
  const loginWindow = document.querySelector('.login-window');
  const registerWindow = document.querySelector('.register-window');
  const loginWindowBtn = document.querySelector('.modal-login__loginBtn');
  const registerWindowBtn = document.querySelector('.modal-login__registerBtn');
  const changeToLogin = () => {
    loginWindow.classList.remove('visually-hidden');
    registerWindow.classList.add('visually-hidden');
    loginWindowBtn.classList.add('actual-page');
    registerWindowBtn.classList.remove('actual-page');
  };
  const changeToRegister = () => {
    registerWindow.classList.remove('visually-hidden');
    registerWindowBtn.classList.add('actual-page');
    loginWindow.classList.add('visually-hidden');
    loginWindowBtn.classList.remove('actual-page');
  };
  loginWindowBtn.addEventListener('click', changeToLogin);
  registerWindowBtn.addEventListener('click', changeToRegister);
};
