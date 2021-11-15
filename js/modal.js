// Модальное окно
const modalTrigger = document.querySelector('[data-modal]');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

function openModal() {
   modal.classList.add('show');
   modal.classList.remove('hide');
   document.body.style.overflow = 'hidden';
   clearInterval(modalTimerId);
}

modalTrigger.addEventListener('click', openModal);

function closeModal() {
   modal.classList.add('hide');
   modal.classList.remove('show');
   document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
   if (e.target === modal) {
      closeModal();
   }
});

document.addEventListener('keydown', (e) => {
   if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
   }
});

const modalTimerId = setTimeout(openModal, 18000);


