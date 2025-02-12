const messages = [
    "Нажми кое-что, хочу тебе рассказать",
    "Нажми еще",
    "Давай, не сдавайся, нажимай",
    "Обещаю, это последний раз",
    "Серьезно",
    "Ну же",
    "Хмм",
    "Ну ладно",
    "А ведь..",
    "Я люблю тебя💓",
];

let index = 0;
const messageElement = document.getElementById('message');
const buttonElement = document.getElementById('click-button');
const messageBox = document.getElementById('message-box');
const finalGif = document.getElementById('final-gif');

buttonElement.addEventListener('click', () => {
    if (index < messages.length - 1) {
        messageElement.textContent = messages[index];
        index++;
    } else {
        messageElement.textContent = messages[index];
        buttonElement.style.display = 'none'; // Скрываем кнопку
        setTimeout(() => {
            messageBox.style.display = 'none'; // Скрываем блок с сообщением
            finalGif.style.display = 'flex'; // Показываем гифку и надпись
        }, 1000); // Задержка перед показом гифки
    }
});

// Функция для создания сердечек
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💕';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Разная скорость падения
    document.body.appendChild(heart);

    // Удаляем сердечко после завершения анимации
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Создаем сердечки каждые 300 мс
setInterval(createHeart, 300);