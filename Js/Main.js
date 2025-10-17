/*  main.js
    ------------------------------------
    Минимальный скрипт для примера index.html,
    который демонстрирует подключение к DOM
    и простую интерактивность.
*/

(function () {
    'use strict';

    /**
     * Убеждаемся, что DOM полностью загружен
     * перед тем как работать с элементами.
     */
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        // 1. Получаем ссылку на кнопку и блок текста
        const btn = document.getElementById('btnChange');
        const demo = document.getElementById('demo');

        // 2. Добавляем обработчик клика по кнопке
        btn.addEventListener('click', function () {
            // меняем текст внутри блока #demo
            demo.textContent = 'Текст изменён!';
            
            // (опционально) меняем стиль кнопки, чтобы показать действие
            this.style.backgroundColor = '#005fa3';
            this.disabled = true;   // отключаем кнопку после первого клика
        });

        /*  Если бы вы использовали jQuery, код выглядел бы так:
        $('#btnChange').on('click', function () {
            $('#demo').text('Текст изменён!');
        });
        */
    }
})();

/*прокрутка к данной категории*/

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.nav-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            // Переходим к целевому разделу
            const targetId = btn.dataset.target;          // например "#main"
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }

            // Выделяем активную кнопку
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    /* Если нужно автоматически подсвечивать кнопку при прокрутке:
       window.addEventListener('scroll', ...) */
});