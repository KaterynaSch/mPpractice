// Створіть просту галерею зображень. У вас є набір мініатюр зображень. Коли користувач клікає на мініатюру, велике зображення має змінитися на відповідне до мініатюри.
// Додайте клас selected до натиснутого елементу, щоб виділити мініатюру, а також видаліть клас selected з попередньо виділеного елементу.

const box = document.querySelector('#thumbnails');
const images = box.children;
const mainImg = document.querySelector('#mainImage');

console.dir(box);
console.dir(images);
console.dir(mainImg);

box.addEventListener('click', handlerClick);
function handlerClick(evt) {
    console.dir(evt.target);
    console.dir(evt.currentTarget);
    if (evt.currentTarget === evt.target) {
        return;
    }
    console.dir(evt.target.src);
    mainImg.setAttribute('src', evt.target.src);  

}