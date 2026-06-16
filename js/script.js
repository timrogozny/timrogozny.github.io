// Плавная прокрутка для всех ссылок

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация появления блоков при прокрутке

const elements = document.querySelectorAll(
    '.technology, .image-center, .helper, .row, .big-card'
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }

        });
    },
    {
        threshold: 0.2
    }
);

elements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Обработка кнопок

const joinBtn = document.querySelector('.join-btn');
const startBtn = document.querySelector('.start-btn');

if (joinBtn) {
    joinBtn.addEventListener('click', e => {
        e.preventDefault();

        alert('Спасибо за интерес к Sleepy!');
    });
}

if (startBtn) {
    startBtn.addEventListener('click', e => {
        e.preventDefault();

        alert('Начинаем знакомство со Sleepy!');
    });
}