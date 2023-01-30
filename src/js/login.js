export const userHandling = (hide = false) => {
  //modal swtich

  const loginModal = document.querySelector('[data-modal-login]');
  const loginWindow = document.querySelector('.login-window');
  const registerWindow = document.querySelector('.register-window');
  const loginWindowBtn = document.querySelector('.modal-login__loginBtn');
  const registerWindowBtn = document.querySelector('.modal-login__registerBtn');
  const closeloginBtn = document.querySelector('.form__close-btn');
  const modalLoginWindow = document.querySelector('.modal-login');
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
  if (hide == false) {
    loginWindowBtn.addEventListener('click', changeToLogin);
    registerWindowBtn.addEventListener('click', changeToRegister);
  }
  //modal close
  const hideModal = () => {
    loginWindowBtn.removeEventListener('click', changeToLogin);
    registerWindowBtn.removeEventListener('click', changeToRegister);
    modalLoginWindow.removeEventListener('click', loginClickBackdropListener);
    loginModal.classList.add('is-hidden');
    return;
  };
  const loginEscapeListener = event => {
    if (event.key === 'Escape') {
      hideModal();
    }
  };
  const loginXkeyListener = event => {
    if (event.target.classList.contains('form__close-btn') !== true) return;
    hideModal();
  };
  const loginClickBackdropListener = event => {
    if (event.target.classList.contains('backdrop') !== true) return;
    hideModal();
  };
  if (hide) return hideModal();
  document.addEventListener('keydown', loginEscapeListener);
  closeloginBtn.addEventListener('click', loginXkeyListener);
  document.addEventListener('click', loginClickBackdropListener);
};
