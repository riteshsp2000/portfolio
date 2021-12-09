/* eslint-disable max-len */
import React from 'react';

// Components
import {Banner, H2} from '@components';

const DATA = {
  SECTION1: [
    {
      content: [
        'Hey! I am Ritesh Patil, a Student Passionate about Computer Science. I enjoy creating web applications that live on the internet and can be accessed by everyone. I have been developing software for the past 2 years and it has been awesome so far!',
        'Fast forward to today, I am an undergrad at National Institute of Technology Rourkela, India pursuing my bachelors in Industrial Design. These days, my main focus is on writing performant and industry-standard code, primarily utilising React and Node.js. I am meticulous in my attention to detail and am well-versed in what it takes to create excellent user-centric experiences.',
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
        `The pandemic turned me into an avid cooking enthusiast. I'd like to think I've come a long way by trying new cuisines and meals since COVID-19, when I scarcely cooked anything except eggs. Indian and Italian cusines are something that I very much link. I'm learning how to make traditional Indian food and a variety of pastas in the coming months.`,
      ],
      short: true,
      src: 'https://res.cloudinary.com/riteshp2000/image/upload/v1638951969/portfolio/v2/assets/food_gywesq.webp',
      alt: 'An amateur Cook',
    },
    {
      title: 'A pop culture fanatic 🍿',
      content: [
        `I'm the friend who casually drops meme references into discussions and looks at you funny if you don't recognise them. I am a huge huge huge Potter head and love fantasy/scifi movies. The Lord of the rings, Star Wars, The Matrix are some of the top ones. And who does not like good old Marvel movies? You might have guessed that I am a huge rock music fan, I love Queen!`,
      ],
      short: true,
      src: 'https://res.cloudinary.com/riteshp2000/image/upload/v1638952094/portfolio/v2/assets/queen_tdugyo.webp',
      alt: 'A pop culture fanatic',
    },
    {
      title: '✈️  A travel junkie',
      content: [
        `I have lived across muliple states of India and have travelled to a few. I like to think this makes me adapt to new environments with ease, and has taught me to be curious. Regularly I go onto trips with friends and family. Be it train, roadtrip or flights, I'm in for everything`,
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
        `HackNITR Hackathon is one of the largest student run hackathons in the eastern part of India. Organised by GDSC NIT Rourkela and Opencode, the hackathon endeavours to bring young talent under one roof. I have been the Lead organiser for the third edition and am glad that it was a successful event with over 2200+ registrations. In the last month itself the website had close to 1/2 a million hits! Isn't that amazing`,
      ],
      short: true,
      src: 'https://res.cloudinary.com/riteshp2000/image/upload/v1638952258/portfolio/v2/assets/hacknitr_egkclh.webp',
      alt: 'HackNITR 3.0',
    },
    {
      title: '🎤️  TEDxNITRourkela',
      content: [
        `An independently organized TED event coordinated and curated by a group of NIT Rourkela students, TEDxNITRourkela present people with the opportunity to suggest innovative and efficient ideas to tackle our society's various issues, thus gathering a diverse range of voices from many disciplines that exist to help humanity grow. I have been the tech coordinator and have also gotten up with the live streaming and post production for the event.`,
      ],
      short: true,
      src: 'https://res.cloudinary.com/riteshp2000/image/upload/v1638952258/portfolio/v2/assets/tedx_yptppx.webp',
      alt: 'TEDxNITRourkela',
    },
    {
      title: 'Google Developer Student Clubs 👨🏾‍💻',
      content: [
        `A Google Developers program for university students to learn the different skills. We as a tech community work on different projects that benefit the society and the student community, we also organise various different events and sessions. I have been glad to be the Lead of this community and am proud that we have been able to bring some positive changes in the NIT Rourkela environment.`,
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
