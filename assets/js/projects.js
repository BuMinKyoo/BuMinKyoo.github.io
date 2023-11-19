$(document).ready(() => {
    render_projects('ALL');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/Public-API_JSON.png',
            link: 'https://github.com/BuMinKyoo/Public-API_JSON',
            title: 'Public-API_JSON',
            demo: '',
            technologies: ['C#', 'WPF', 'JSON'],
            description: "공공 API를 활용한 List View",
            categories: ['ALL', 'C_sharp', 'WPF', 'JSON']
        },
        {
            image: 'assets/images/BingGoGame.png',
            link: 'https://github.com/BuMinKyoo/BingGoGame',
            title: '빙고게임',
            demo: '',
            technologies: ['C#', 'WPF'],
            description: "소켓통신을 이용한 빙고게임(미완성)",
            categories: ['ALL', 'C_sharp', 'WPF']
        },
        {
            image: 'assets/images/WPFHttp.png',
            link: 'https://github.com/BuMinKyoo/WPFHttp',
            title: 'WPFHttp',
            demo: '',
            technologies: ['C#', 'WPF'],
            description: "tcp로 통신하는 http 서버",
            categories: ['ALL', 'C_sharp', 'WPF']
        },
        {
            image: 'assets/images/MFCWebFileDown.png',
            link: 'https://github.com/BuMinKyoo/MFCWebFileDown',
            title: 'MFCWebFileDown',
            demo: '',
            technologies: ['C++', 'MFC'],
            description: "http통신으로 파일 다운로드 후 배포",
            categories: ['ALL', 'C++', 'MFC']
        },
        {
            image: 'assets/images/WPF_Kiosk.png',
            link: 'https://github.com/BuMinKyoo/WPF_Kiosk',
            title: 'WPF_Kiosk',
            demo: '',
            technologies: ['C#', 'WPF'],
            description: "WPF를 이용한 키오스크 프로그램(개발중2023-11-19)",
            categories: ['ALL', 'C_sharp', 'WPF']
        }
    ]

    let projects = [];
    if(slug == 'ALL') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}