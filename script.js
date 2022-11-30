const data = [
  {
    name: 'Random Word Generator',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    imageUrl: 'images/projects/7.png',
    tecnologies: ['JAVASCRIPT', 'HTML', 'CSS'],
    ProjectUrls: {
      seeLive: 'https://muneef-nk.github.io/Random-Word-Generator/',
      seeSource: 'https://github.com/Muneef-Nk/Random-Word-Generator',
    },
  },
  {
    name: 'BG Color Changer',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    imageUrl: './images/projects/1.png',
    tecnologies: ['JAVASCRIPT', 'HTML', 'CSS'],
    ProjectUrls: {
      seeLive: 'https://muneef-nk.github.io/Bg-Color-Change/',
      seeSource: 'https://github.com/Muneef-Nk/Bg-Color-Change',
    },
  },
  {
    name: 'Calculator',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    imageUrl: 'images/projects/2.png',
    tecnologies: ['JAVASCRIPT', 'HTML', 'CSS'],
    ProjectUrls: {
      seeLive: 'https://muneef-nk.github.io/calculator/',
      seeSource: 'https://github.com/Muneef-Nk/calculator',
    },
  },
  {
    name: 'validation',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    imageUrl: 'images/projects/3.png',
    tecnologies: ['JAVASCRIPT', 'HTML', 'CSS'],
    ProjectUrls: {
      seeLive: 'https://muneef-nk.github.io/Validation-/',
      seeSource: 'https://github.com/Muneef-Nk/Validation-',
    },
  },
  {
    name: 'Login Page',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    imageUrl: 'images/projects/4.png',
    tecnologies: ['JAVASCRIPT', 'HTML', 'CSS'],
    ProjectUrls: {
      seeLive: 'https://muneef-nk.github.io/Login-Page/',
      seeSource:'https://github.com/Muneef-Nk/Login-Page',
    },
  },
  {
    name: 'Simple TODO List',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    imageUrl: 'images/projects/5.png',
    tecnologies: ['JAVASCRIPT', 'HTML', 'CSS'],
    ProjectUrls: {
      seeLive: 'https://muneef-nk.github.io/ToDo/',
      seeSource:'https://github.com/Muneef-Nk/ToDo',
    },
  },
  {
    name: 'Loading-spinner',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    imageUrl: 'images/projects/6.png',
    tecnologies: ['JAVASCRIPT', 'HTML', 'CSS'],
    ProjectUrls: {
      seeLive: 'https://muneef-nk.github.io/Loading-spinner/',
      seeSource:'https://github.com/Muneef-Nk/Loading-spinner',
    },
  },
  {
    name: 'Text typing animation',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    imageUrl: 'images/projects/8.png',
    tecnologies: ['JAVASCRIPT', 'HTML', 'CSS'],
    ProjectUrls: {
      seeLive: 'https://muneef-nk.github.io/Text-typing-animation/',
      seeSource:'https://github.com/Muneef-Nk/Text-typing-animation'
    },
  },
  

];

const body = document.querySelector('body');
const goBack = document.querySelector('.cancel-icon-desktop');
const projectTitle = document.querySelector('.modal-text-box h2');
const projectDescription = document.querySelector('.modal-text-box p');
const projectImage = document.querySelector('.project-image-desktop');
const tecnologiesArr = document.querySelector('.modal-tech');
const source = document.querySelector('.seeSource');
const live = document.querySelector('.seeLive');
const projects = document.querySelector('.Works');
const mobileNav = document.querySelector('.mobile-header-container>a');
const navLinks = document.querySelectorAll('.nav-links');
const exitNav = document.querySelector('.exit-nav');
const nextProj = document.querySelector('.next-proj');
const prevProj = document.querySelector('.prev-proj');

data.map((sample) => {
  const projectBody = `<div>
<div class="image-box">
  <img src="${sample.imageUrl}"/>
</div>
<div class="text-box">
  <h2>${sample.name}</h2>
  <ul class="tech">
    ${sample.tecnologies.map((tech) => `<li>${tech}</li>`).join('')}
  </ul>
  <div class="see-project"><a>See Project</a></div>
</div>
</div>`;

  projects.innerHTML += projectBody;

  return '';
});

const seeProject = document.querySelectorAll('.see-project');

function createChildItem(item) {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
}

function deleteChildListItems(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const displayNav = () => {
  document.body.getElementsByClassName('header-not-visible')[0].style.display = 'none';
  document.body.getElementsByClassName('mobile-menu')[0].style.top = 0;
  body.style.height = '100vh';
  body.style.overflowY = 'hidden';
};

const closeNav = () => {
  document.body.getElementsByClassName('header-not-visible')[0].style.display = 'flex';
  document.body.getElementsByClassName('mobile-menu')[0].style.top = '-100%';
  body.style.height = 'auto';
  body.style.overflowY = 'scroll';
};

seeProject.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteChildListItems(tecnologiesArr);
    const Title = btn.parentElement.childNodes[1].textContent;
    const project = data.find((i) => i.name === Title);
    projectTitle.textContent = project.name;
    projectDescription.textContent = project.description;
    projectImage.src = project.imageUrl;
    project.tecnologies.map((tech) => {
      tecnologiesArr.appendChild(createChildItem(tech));
      return '';
    });
    live.href = project.ProjectUrls.seeLive;
    source.href = project.ProjectUrls.seeSource;
    document.querySelector('.modal-wrapper').style.display = 'flex';
    document.querySelector('.cover').style.display = 'block';
    document.body.style.overflowY = 'hidden';
  });
});

goBack.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.modal-wrapper').style.display = 'none';
  document.querySelector('.cover').style.display = 'none';
  document.body.style.overflowY = 'auto';
});

const email = document.getElementById('Email');
const form = document.querySelector('.contact-us');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', (e) => {
  const reg1 = /[a-z]/g;
  const reg2 = /[A-Z]/g;
  if (reg1.test(email.value.trim()) && !reg2.test(email.value.trim()) === false) {
    e.preventDefault();
    errorMsg.textContent = 'Your email should be in lowercase';
    errorMsg.style.display = 'inline-flex';
    setTimeout(() => {
      errorMsg.style.display = 'none';
    }, 5000);
    email.value = email.value.toLowerCase();
  }
});

window.addEventListener('scroll', () => {
  const Header = document.querySelector('header');
  if (window.scrollY > 10) {
    Header.classList.add('fixed-nav');
  } else { Header.classList.remove('fixed-nav'); }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeNav();
  });
});

mobileNav.addEventListener('click', () => {
  displayNav();
});

exitNav.addEventListener('click', () => {
  closeNav();
});

prevProj.addEventListener('click', () => {
  const currentProj = data.find((proj) => proj.name === projectTitle.textContent);
  const currentPos = data.indexOf(currentProj);
  const prevPos = currentPos - 1;
  if (currentPos === 1) {
    prevProj.disabled = true;
  }
  if (currentPos >= 1) {
    nextProj.disabled = false;
    deleteChildListItems(tecnologiesArr);
    projectTitle.textContent = data[prevPos].name;
    projectDescription.textContent = data[prevPos].description;
    projectImage.src = data[prevPos].imageUrl;
    data[prevPos].tecnologies.map((tech) => {
      tecnologiesArr.appendChild(createChildItem(tech));
      return '';
    });
    live.href = data[prevPos].ProjectUrls.seeLive;
    source.href = data[prevPos].ProjectUrls.seeSource;
  }
});

nextProj.addEventListener('click', () => {
  const currentProj = data.find((proj) => proj.name === projectTitle.textContent);
  const currentPos = data.indexOf(currentProj);
  const nextPos = currentPos + 1;
  if (currentPos < data.length - 1) {
    prevProj.disabled = false;
    deleteChildListItems(tecnologiesArr);
    projectTitle.textContent = data[nextPos].name;
    projectDescription.textContent = data[nextPos].description;
    projectImage.src = data[nextPos].imageUrl;
    data[nextPos].tecnologies.map((tech) => {
      tecnologiesArr.appendChild(createChildItem(tech));
      return '';
    });
    live.href = data[nextPos].ProjectUrls.seeLive;
    source.href = data[nextPos].ProjectUrls.seeSource;
  }
  if (nextPos === data.length - 1) {
    nextProj.disabled = true;
  }
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < (offset + height)) {
      navLinks.forEach((link) => {
        link.classList.remove('activePage');
        document.querySelector(`.nav-links[href*=${id}]`).classList.add('activePage');
      });
    }
  });
});