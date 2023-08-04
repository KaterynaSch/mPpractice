// Задачка:
// Створіть список елементів, наприклад, <ul id="myList"></ul>. Додайте кнопку, яка буде додавати новий елемент до списку кожного разу, коли на неї натискають. Кожен новий елемент повинен мати унікальний текст, який складається з поточного часу.

const myList = document.querySelector('#myList');
const myButton = document.querySelector('#myButton');

window.addEventListener('click', handlerClick);
function handlerClick(evt) {

    if (evt.target !== myButton) {
        return;
    }
    
    const item = ` <li>
            <p>${new Date()}</p>
        </li>`
    
    myList.insertAdjacentHTML('beforeend', item);
    
};