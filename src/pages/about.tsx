/* eslint-disable max-len */
import React from 'react';

// Components
import {Banner, H2} from '@components';

const DATA = {
  SECTION1: [
    {
      content: [
        'Hey! I am Ritesh Patil, a Student Passionate about Computer Science. I enjoy creating web applications that live on the internet and can be accessed by everyone. I have been developing software for the past 2 years and it has been awesome so far!',
        'Fast Forward to today, I am a undergrad at National Institute of Technology Rourkela, India in the field of Industrial Design. My main focus these days is to write performant and industry standard code mainly using React and Node.js. I pay close attention to details, and have a great understanding of what it takes to build great user-centric experiences',
      ],
      short: false,
      src: 'https://res.cloudinary.com/riteshp2000/image/upload/v1638948441/portfolio/v2/assets/RiteshPatil_px7ns1.webp',
      alt: 'Similing Ritesh Patil',
    },
  ],
  SECTION2: [
    {
      title: '👨🏽‍🍳 Am amateur Cook.',
      content: [
        'Fast Forward to today, I am a undergrad at National Institute of Technology Rourkela, India in the field of Industrial Design. My main focus these days is to write performant and industry standard code mainly using React and Node.js. I pay close attention to details, and have a great understanding of what it takes to build great user-centric experiences.',
      ],
      short: true,
      src: 'https://res.cloudinary.com/riteshp2000/image/upload/v1638951969/portfolio/v2/assets/food_gywesq.webp',
      alt: 'An amateur Cook',
    },
    {
      title: 'A pop culture fanatic 🍿',
      content: [
        'Fast Forward to today, I am a undergrad at National Institute of Technology Rourkela, India in the field of Industrial Design. My main focus these days is to write performant and industry standard code mainly using React and Node.js. I pay close attention to details, and have a great understanding of what it takes to build great user-centric experiences.',
      ],
      short: true,
      src: 'https://res.cloudinary.com/riteshp2000/image/upload/v1638952094/portfolio/v2/assets/queen_tdugyo.webp',
      alt: 'A pop culture fanatic',
    },
    {
      title: '✈️  A travel junkie',
      content: [
        'Fast Forward to today, I am a undergrad at National Institute of Technology Rourkela, India in the field of Industrial Design. My main focus these days is to write performant and industry standard code mainly using React and Node.js. I pay close attention to details, and have a great understanding of what it takes to build great user-centric experiences.',
      ],
      short: true,
      src: 'https://res.cloudinary.com/riteshp2000/image/upload/v1638952099/portfolio/v2/assets/photo_qhraa9.webp',
      alt: 'A travel junkie',
    },
  ],
  SECTION3: [
    {
      title: 'HackNITR 3.0 Hackathon  💻',
      content: [
        'Fast Forward to today, I am a undergrad at National Institute of Technology Rourkela, India in the field of Industrial Design. My main focus these days is to write performant and industry standard code mainly using React and Node.js. I pay close attention to details, and have a great understanding of what it takes to build great user-centric experiences.',
      ],
      short: true,
      src: 'https://res.cloudinary.com/riteshp2000/image/upload/v1638952258/portfolio/v2/assets/hacknitr_egkclh.webp',
      alt: 'HackNITR 3.0',
    },
    {
      title: '🎤️  TEDxNITRourkela',
      content: [
        'Fast Forward to today, I am a undergrad at National Institute of Technology Rourkela, India in the field of Industrial Design. My main focus these days is to write performant and industry standard code mainly using React and Node.js. I pay close attention to details, and have a great understanding of what it takes to build great user-centric experiences.',
      ],
      short: true,
      src: 'https://res.cloudinary.com/riteshp2000/image/upload/v1638952258/portfolio/v2/assets/tedx_yptppx.webp',
      alt: 'TEDxNITRourkela',
    },
    {
      title: 'Google Developer Student Clubs 👨🏾‍💻',
      content: [
        'Fast Forward to today, I am a undergrad at National Institute of Technology Rourkela, India in the field of Industrial Design. My main focus these days is to write performant and industry standard code mainly using React and Node.js. I pay close attention to details, and have a great understanding of what it takes to build great user-centric experiences.',
      ],
      short: true,
      src: 'https://res.cloudinary.com/riteshp2000/image/upload/v1638952259/portfolio/v2/assets/dsc_haucrm.webp',
      alt: 'GDSC',
    },
  ],
};

const About = () => {
  return (
    <>
      {DATA.SECTION1.map(({src, alt, content}) => (
        <Banner key={alt} alt={alt} src={src} content={content} />
      ))}

      <H2 style={{marginBottom: '0.2rem', marginTop: '5rem'}}>
        What am I like outside of work? I’m glad you asked
      </H2>

      {DATA.SECTION2.map(({title, src, alt, content, short}, index) => (
        <Banner
          key={title}
          flip={(index + 1) % 2 === 0}
          title={title}
          short={short}
          alt={alt}
          src={src}
          content={content}
        />
      ))}

      <H2 style={{marginBottom: '0.2rem', marginTop: '5rem'}}>
        I’m active in the tech community {'&'} love to organise events
      </H2>

      {DATA.SECTION3.map(({title, src, alt, content, short}, index) => (
        <Banner
          key={title}
          flip={index % 2 === 0}
          title={title}
          short={short}
          alt={alt}
          src={src}
          content={content}
        />
      ))}
    </>
  );
};

export default About;
