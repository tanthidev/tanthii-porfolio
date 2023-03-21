import React from 'react';

import { images } from "~/images";
import RowItem from './components/RowItem/RowItem';
import useRender from '~/config/hooks/useRender';

function Knowledge() {
  const {isInView, ref} = useRender()

  const knowledges = [
    // Languages
    [
      {image: images.knowledge.html, alt: 'html', link: 'https://www.w3schools.com/html/'},
      {image: images.knowledge.css, alt: 'css', link: 'https://www.w3schools.com/css/'},
      {image: images.knowledge.js, alt: 'js', link: 'https://www.javascript.com/'},
      {image: images.knowledge.python, alt: 'python', link: 'https://www.python.org/'},
      {image: images.knowledge.java, alt: 'java', link: 'https://www.java.com/en/'},
      {image: images.knowledge.php, alt: 'git', dark: images.knowledge.phpDark, link: 'https://www.php.net/'},
    ],
    // Framework
    [
      {image: images.knowledge.react, alt: 'react', link: 'https://react.dev/'},
      {image: images.knowledge.nodejs, alt: 'nodejs', dark: images.knowledge.nodejsDark, link:'https://nodejs.org/en/about'},
      {image: images.knowledge.tailwindcss, alt: 'tailwindcss', link: 'https://tailwindcss.com/'},
    ],
    //Database
    [
      {image: images.knowledge.firebase, alt: 'firebase', dark: images.knowledge.firebaseDark, link: 'https://firebase.google.com/'},
      {image: images.knowledge.mySQL, alt: 'mySQL', link: 'https://www.mysql.com/'},


      // Tool
      {image: images.knowledge.git, alt: 'git', dark: images.knowledge.gitDark, link: 'https://git-scm.com/about'},
      {image: images.knowledge.docker, alt: 'docker', dark: images.knowledge.dockerDark, link: 'https://www.docker.com/'},
    ],

  ]

  return ( 
    <div className="flex justify-between relative mt-32">
      {/* Left */}
      <div className=" w-full md:w-2/3 px-16 md:px-28 z-10" ref={ref}>
        <h2 className="text-purple-title dark:text-blue-title  text-center text-4xl md:text-6xl font-bold mb-16">MY KNOWLEDGE</h2>
        {
          knowledges.map((item, index) => (
            <RowItem key={index} data={item} isInView={isInView} delays={(index+6)*300}/>
          ))
        }

      </div>

      {/* Right */}
      <div className="hidden md:block w-1/4">
        <img 
          src={images.planet.planet2}
          alt='planet'    
          className={`${isInView?'opacity-100 fromRight':'opacity-0'}`}
        />
      </div>
    </div>
  );
}



export default Knowledge;
