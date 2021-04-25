import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gabe Valdivia | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'WordPress, UI', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Web Developer',
  name: 'Gabriel Valdivia',
  subtitle: 'WordPress | Gatsby | Custom',
  cta: 'Available!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I’ve been working as a front-end web developer for 7 years now, 9 if you count 2 years of Graphic Web Design at DeVry University. I’ve worked as a front-end developer for various creative agencies in Portland, Oregon, and have a background in fronted web development and coding sites from scratch using Foundation & Bootstrap.',
  paragraphTwo:
    'My mainstay is freelance work for other creative agencies. I have worked for various award-winning marketing agencies and small business owners and other clients that like to keep a low profile.',
  paragraphThree:
    'Do you have any projects that you need help with? If so, contact me using one of the various methods below.',
  resume:
    'https://docs.google.com/document/d/1ZYJxRWAj6PhzGMvF_YaLE0CutJSImyKwVxz_YTb5ySY/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'La-Pizzeria-Optimized-scaled-768h',
    title: 'Pizza La Paz',
    info:
      'Pizza La Paz is a fictional website inteded to showcase my theme development skills. This site was built from scratch using: ACF, CPT, CSS Grid, SASS, Open Maps',
    info2: '',
    url: 'https://www.paz.gabeswebcoding.com',
    repo: 'https://github.com/GabeValdivia/lapaz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'agencia-gonzales-optimized-768h.jpg',
    title: 'Agencia de Viajes Gonazles',
    info:
      'Agencia de Viajes Gonzales is a fictional website inteded to showcase my theme development skills. This site was built from scratch using: ACF, CPT, CSS Grid, Flexbox, SASS, Open Maps, and a customized WordPress login design',
    info2: '',
    url: 'https://avg.gabeswebcoding.com/',
    repo: 'https://github.com/GabeValdivia/avg', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fit-fitness-optimized-768h.jpg',
    title: 'Fit Fitness',
    info:
      'Fit Fitness is a fictional website inteded to showcase my theme development skills. This site was built from scratch using: ACF, CPT, CSS Grid, SASS, Open Maps',
    info2: '',
    url: 'https://fit.gabeswebcoding.com/',
    repo: 'https://github.com/GabeValdivia/fit', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: `Let's talk`,
  email: 'gabe@gabeswebcoding.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/codefuzed',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/GabeValdivia',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gabriel-valdivia-344b471ab/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/GabeValdivia',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
