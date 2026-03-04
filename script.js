const myProjects = [
    {
        name: "Парфам Пополам",
        url: "https://t.me/pb_aq"
    },
    {
        name: "ParfDrink",
        url: "https://t.me/pd_aa"
    },
    {
        name: "ANTIFAKE ПАРФЮМ",
        url: "https://t.me/antifakePARF"
    }
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