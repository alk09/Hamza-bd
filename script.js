const content = document.querySelector('.page-content');
const prevButton = document.querySelector('.nav-button.prev');
const nextButton = document.querySelector('.nav-button.next');
const scene = document.querySelector('.scene');

const pages = [
    {
        title: 'Happy Birthday Hamza',
        text: 'I hope this year becomes one of your best years ever ( with me obviously ) Hope this year hits different in the best way possible',
        image: '1.jpg'
    },
    {
        title: 'Lowkey Hot asf',
        text: 'Another year older, wiser, and somehow still surviving your own decisions , OK JK.',
        image: '2.jpg'
    },
    {
        title: 'Gold',
        text: 'Happy Birthday to the guy who makes every moment more fun , Life’s better with you around.',
        image: '3.jpg'
    },
    {
        title: 'I Love You',
        text: '----------❤︎----------⁠',
        image: '4.jpg'
    },
    {
        title: 'Wishing You the Best',
        text: 'Praying for your success and happiness every day.',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
    }
];

let activeIndex = 0;

function renderPage(index) {
    const page = pages[index];
    content.classList.add('fade-out');

    setTimeout(() => {
        content.innerHTML = '';

        if (page.image) {
            const imageWrapper = document.createElement('div');
            imageWrapper.className = 'page-image';
            const image = document.createElement('img');
            image.src = page.image;
            image.alt = page.title;
            imageWrapper.appendChild(image);
            content.appendChild(imageWrapper);
        }

        const title = document.createElement('h1');
        title.className = 'page-title';
        title.textContent = page.title;
        content.appendChild(title);

        const text = document.createElement('p');
        text.className = 'page-text';
        text.textContent = page.text;
        content.appendChild(text);

        content.classList.remove('fade-out');
        updateButtons();
    }, 200);
}

function updateButtons() {
    prevButton.disabled = activeIndex === 0;
    nextButton.textContent = activeIndex === pages.length - 1 ? 'Restart' : 'Next';
}

prevButton.addEventListener('click', () => {
    if (activeIndex > 0) {
        activeIndex -= 1;
        renderPage(activeIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (activeIndex < pages.length - 1) {
        activeIndex += 1;
    } else {
        activeIndex = 0;
    }
    renderPage(activeIndex);
});

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    const size = Math.random() * 5 + 4;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${Math.random() * 90 + 5}%`;
    sparkle.style.top = `${Math.random() * 70 + 10}%`;
    sparkle.style.background = `hsla(${Math.random() * 50 + 280}, 100%, 85%, 1)`;
    sparkle.style.boxShadow = `0 0 14px rgba(255, 255, 255, 0.9), 0 0 28px rgba(255, 183, 93, 0.35)`;
    scene.appendChild(sparkle);
    sparkle.addEventListener('animationend', () => sparkle.remove());
}

function burstSparkles() {
    for (let i = 0; i < 16; i += 1) {
        setTimeout(createSparkle, i * 120);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    renderPage(activeIndex);
    burstSparkles();
    setInterval(burstSparkles, 2600);
});
