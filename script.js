const myProjects = [
    { name: "Парфам Пополам", url: "https://t.me/pb_aq" },
    { name: "Парфюмерный Бармен", url: "https://t.me/pd_aa" },
    { name: "Антифейк Парфюм", url: "https://t.me/antifakePARF" }
];

const container = document.getElementById('projects-container');

function renderProjects() {
    myProjects.forEach((project, index) => {
        const link = document.createElement('a');
        link.href = project.url;
        link.className = 'link-card';
        link.target = '_blank';
        link.textContent = project.name;
        link.style.animationDelay = `${0.2 + (index * 0.2)}s`;
        container.appendChild(link);
    });
}
renderProjects();

const avatar = document.getElementById('avatar');
avatar.addEventListener('click', () => {
    avatar.classList.remove('avatar-pulse');
    void avatar.offsetWidth;
    avatar.classList.add('avatar-pulse');
});

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let width, height;
let starsArray = [];

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Star {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5;
        this.speedY = Math.random() * 0.4 + 0.1;
        this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
        this.y += this.speedY;
        if (this.y > height) {
            this.y = 0;
            this.x = Math.random() * width;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initStars() {
    starsArray = [];
    for (let i = 0; i < 100; i++) {
        starsArray.push(new Star());
    }
}
initStars();

function animateStars() {
    ctx.clearRect(0, 0, width, height);
    starsArray.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animateStars);
}
animateStars();