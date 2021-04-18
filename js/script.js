'use strict';

// VARIABLES

let books = document.querySelectorAll('.books'),
   book = document.querySelectorAll('.book'),
   // chapter = document.querySelectorAll('li'),
   adv = document.querySelector('.adv'),
   newChapter = document.createElement('li');

console.log(book);
// console.log(chapter);

books[0].prepend(book[1]);
books[0].append(book[2]);
book[0].after(book[4]);

document.querySelector('body').style.backgroundImage = 'url(/image/you-dont-know-js.jpg)';

book[4].querySelector('h2').querySelector('a').text = 'Книга 3. this и Прототипы Объектов';


let sortChapter = function (collection) {
   let sortElements = function (arr) {
      let arrInd = Object.keys(arr).sort(function (prev, next) {
         if (arr[prev].textContent > arr[next].textContent) {
            return 1;
         }
         if (arr[prev].textContent < arr[next].textContent) {
            return -1;
         }
      });
      let arrNew = [];
      for (let i = 0; i < arrInd.length; i++) {
         arrNew.push(arr[arrInd[i]]);
      }
      return arrNew;
   };

   let elem = collection.querySelectorAll('li');
   let arrChapter = [],
      arrApp = [];
   elem.forEach(el => {
      if (el.textContent.indexOf('Введение') > -1) {
         collection.insertBefore(el, elem[0]);
      }
      if (el.textContent.indexOf('Предисловие') > -1) {
         collection.insertBefore(el, elem[1]);
      }
      if (el.textContent.indexOf('Глава') > -1) { arrChapter.push(el); }
      if (el.textContent.indexOf('Приложение') > -1) { arrApp.push(el); }
   });
   arrChapter = sortElements(arrChapter);
   arrChapter.forEach(el => { collection.appendChild(el); });
   arrApp = sortElements(arrApp);
   arrApp.forEach(el => { collection.appendChild(el); });
};

sortChapter(book[0].querySelector('ul'));
sortChapter(book[5].querySelector('ul'));


adv.remove();



newChapter.innerText = 'Глава 8: За пределами ES6” и поставить её в правильное место';
book[2].querySelector('ul').appendChild(newChapter);


/*Восстановить порядок книг.

Заменить картинку заднего фона на другую из папки image

Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

Удалить рекламу со страницы

Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место*/