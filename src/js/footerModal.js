const modalBackdrop = document.querySelector('.modal-footer-backdrop');
const modal = document.querySelector('.modal-footer');
const modalOpenButton = document.querySelector('.footer__link');
const modalCloseButton = document.querySelector('.modal-footer__icon-close');
const modalNextButton = document.querySelector('.modal-footer__icon-right');
const modalPreviousButton = document.querySelector('.modal-footer__icon-left');
let students = document.querySelectorAll('.modal-footer__student');
let current = 0;

const changeStudents = () => {
  students.forEach(function (student) {
    student.classList.remove('modal-footer__student-active');
  });
  students[current].classList.add('modal-footer__student-active');
};

const hideIcons = () => {
  if (current == 0) {
    modalPreviousButton.classList.add('modal-footer__icon-hidden');
    modalNextButton.classList.remove('modal-footer__icon-hidden');
  } else if (current > 0 && current < students.length - 1) {
    modalPreviousButton.classList.remove('modal-footer__icon-hidden');
    modalNextButton.classList.remove('modal-footer__icon-hidden');
  } else modalNextButton.classList.add('modal-footer__icon-hidden');
};

const goNextHandler = () => {
  if (current < students.length - 1) {
    current++;
  }
  changeStudents();
  hideIcons();
};
const goPreviousHandler = () => {
  if (current > 0) {
    current--;
  }
  changeStudents();
  hideIcons();
};

const modalCloseHandler = () => {
  modalBackdrop.classList.add('is-hidden');
  modal.classList.add('is-hidden');
  setTimeout(() => {
    students[current].classList.remove('modal-footer__student-active');
    current = 0;
    students[0].classList.add('modal-footer__student-active');
  }, 500);
};

const escapeBtnHandler = event => {
  if (event.key === 'Escape') {
    modalCloseHandler();
  }
};
export const footerModalFunction = () => {
  modalOpenButton.addEventListener('click', () => {
    hideIcons();
    modalBackdrop.classList.remove('is-hidden');
    modal.classList.remove('is-hidden');
    document.addEventListener('keydown', escapeBtnHandler);
  });

  modalCloseButton.addEventListener('click', () => {
    modalCloseHandler();
    document.removeEventListener('keydown', escapeBtnHandler);
  });

  modalNextButton.addEventListener('click', goNextHandler);

  modalPreviousButton.addEventListener('click', goPreviousHandler);
};
