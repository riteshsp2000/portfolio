import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default {
  name: 'Ritesh Patil',
  description: 'I build things for the web.',
  email: 'riteshsp2000@gmail.com',
  image:
    'https://res.cloudinary.com/riteshsp2000/image/upload/portfolio/Ritesh_rqu4mr.webp',
  subDescription:
    "I'm a student developer currently studying at National Institute of Technology Rourkela. I specialize in building modern and performant web and mobile applications.",
  tech: [
    'Javascript',
    'Typescript',
    'React',
    'React Native',
    'Gatsby',
    'Next.js',
    'Redux',
    'Node.js',
    'Express.js',
    'GraphQL',
    'Apollo Server',
    'MongoDB',
    'Mongoose',
    'Firebase',
    'Netlify',
    'GitHub',
    'Webpack',
  ],

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/riteshsp2000',
      icon: faGithub,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/riteshsp2000',
      icon: faInstagram,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/riteshsp2000',
      icon: faTwitter,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/riteshsp2000',
      icon: faLinkedin,
    },
  ],

  navLinks: [
    {
      name: 'About',
      link: '/#about',
      id: 'about',
    },
    {
      name: 'Projects',
      link: '/#projects',
      id: 'projects',
    },
    {
      name: 'Photography',
      link: '/photography',
      id: null,
    },
    {
      name: 'Blog',
      link: '/blog',
      id: null,
    },
    {
      name: 'Contact',
      link: '/#contact',
      id: 'contact',
    },
  ],
};
