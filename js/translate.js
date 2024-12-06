const contents = {
    "en": {
        "short-description": "Software Developer and Computer Science student",
        "about": "About",
        "about-description": "Hello, my name is Oseias Romeiro Magalhães and I am currently studying Computer Science at the University of Brasília. I have experience in software development, especially in web applications, backends, APIs and integrations. I also have knowledge in Database and Linux and Windows Server systems. I have been improving in Automation and cloud environment. I am dedicated and committed to contributing to the creation of innovative solutions and the adoption of best practices in computing.",
        "xp": "Experiences",
        "xp-description": "<li><b>Fiverr</b>: Freelancer platform where I offer customized services in Software Development and Database, focusing on: Database Design and Modeling, Web Development, Programming Support, API Integration.</li><li><b>Federal Regional Court of the 1st Region</b>: I supported the activities of the DBAs, performing various technical and collaborative tasks, including: Documentation of processes and routines, Development and versioning of scripts, Administration and monitoring of Windows Server servers for APL, Automation of repetitive tasks and processes.</li>",
    },
    "pt": {
        "short-description": "Desenvolvedor de Softwares e estudante de Ciências da Computação",
        "about": "Sobre",
        "about-description": "Olá, meu nome é Oseias Romeiro Magalhães e estou atualmente cursando Ciências da Computação na Universidade de Brasília. Tenho experiência em desenvolvimento de softwares, especialmente em aplicações web, backends, APIs e integrações. Também tenho conhecimentos em Banco de Dados e sistemas Linux e Windows Server. Venho me aprimorando em Automação e ambiente em nuvem. Sou dedicado e comprometido em contribuir para a criação de soluções inovadoras e na adoção de melhores práticas na computação.",
        "xp": "Experiências",
        "xp-description": "<li><b>Fiverr</b>: Plataforma de freelancer onde ofereço serviços personalizados em Desenvolvimento de Software e Banco de Dados, com foco em: Design e Modelagem de Bancos de Dados, Desenvolvimento Web, Suporte em Programação, Integração de APIs.</li><li><b>Tribunal Regional Federal da 1ª Região</b>: Atuei no suporte às atividades dos DBAs, desempenhando diversas tarefas técnicas e colaborativas, incluindo: Documentação de processos e rotinas, Desenvolvimento e versionamento de scripts, Administração e monitoramento de servidores Windows Server para APL, Automação de tarefas repetitivas e processos.</li>",
    }
}

const changeLanguage = (lang) => {
    document.getElementById("short-description").innerText = contents[lang]["short-description"];
    document.getElementById("about").innerText = contents[lang]["about"];
    document.getElementById("about-description").innerHTML = contents[lang]["about-description"];
    document.getElementById("xp").innerText = contents[lang]["xp"];
    document.getElementById("xp-description").innerHTML = contents[lang]["xp-description"];
}

const langToggle = document.querySelector('#langToggle');
changeLanguage(langToggle.attributes['lang-theme'].value);

langToggle.addEventListener('click', () => {
    const lang = langToggle.attributes['lang-theme'].value;
    if (lang === 'pt') {
        changeLanguage('en');
        langToggle.attributes['lang-theme'].value = 'en';
    }else {
        changeLanguage('pt');
        langToggle.attributes['lang-theme'].value = 'pt';
    }
});