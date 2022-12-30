const modal = document.querySelector('.modal-backdrop');
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

const goNext = () => {
  if (current < students.length - 1) {
    current++;
  }
  changeStudents();
  hideIcons();
};
const goPrevious = () => {
  if (current > 0) {
    current--;
  }
  changeStudents();
  hideIcons();
};

export const footerModalFunction = () => {
  modalOpenButton.addEventListener('click', () => {
    hideIcons();
    modal.classList.remove('is-hidden');
  });
  modalCloseButton.addEventListener('click', () => {
    modal.classList.add('is-hidden');
    setTimeout(() => {
      students[current].classList.remove('modal-footer__student-active');
      current = 0;
      students[0].classList.add('modal-footer__student-active');
    }, 500);
  });
  modalNextButton.addEventListener('click', goNext);
  modalPreviousButton.addEventListener('click', goPrevious);
};
