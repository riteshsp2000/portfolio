import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default {
  name: 'Ritesh Patil',
  description: 'I build things for the web.',
  subDescription:
    "I'm a student software engineer currently studying at NIT Rourkela. I specialize in building modern and performant softwares.",
  email: 'riteshsp2000@gmail.com',

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
    },
    {
      name: 'Projects',
      link: '/#projects',
    },
    {
      name: 'Photography',
      link: '/photography',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'Contact',
      link: '/#contact',
    },
  ],
};
