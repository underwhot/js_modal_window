"use strict";
/* 
ЗАДАЧА:
Создайте функционал для открытия модальных окон.
ПОДСКАЗКА:
1-Не забывайте про свойство classList с помощью которого можно манипулировать классами HTML элементов
2-При добавлении класса .hidden к любому элементу, он исчезнет, при удалении этого класса, он появится
3-Не забудьте про то, что закрыть модальное окно можно как с помощью кнопки-крестика, в верхнем правом углу модального окна, так и с помощью нажатия на любое место "Оверлей"
*/

document.addEventListener("DOMContentLoaded", function () {

  document.addEventListener("click", function (e) {
    const target = e.target;

    if (target.classList.contains("show-modal")) {
      toggleModalClass(document.querySelector('.modal'));
    } 
    
    if (target.classList.contains("close-modal") || target.classList.contains("overlay")) {
      toggleModalClass(document.querySelector('.modal'));
    }
  });

  function toggleModalClass(modalEl) {
    if (modalEl.classList.contains('hidden')) {
      modalEl.classList.remove("hidden");
      document.querySelector(".overlay").classList.remove("hidden");
    } else {
      modalEl.classList.add("hidden");
      document.querySelector(".overlay").classList.add("hidden");
    }
  };
  
});
