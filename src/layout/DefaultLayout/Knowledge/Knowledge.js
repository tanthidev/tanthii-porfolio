import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { images } from "~/images";

function Knowledge() {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(()=>{
    if (inView) {
      setTimeout(() => {
        setIsInView(true);
      }, 500); // Change the delay time to adjust when the animation should start
    }
  },[inView])

  const items = [
    {image: images.knowledge.html, alt: 'html'},
    {image: images.knowledge.css, alt: 'css'},
    {image: images.knowledge.js, alt: 'js'},
    {image: images.knowledge.react, alt: 'react'},
    {image: images.knowledge.nodejs, alt: 'nodejs', dark: images.knowledge.nodejsDark},
    {image: images.knowledge.firebase, alt: 'firebase', dark: images.knowledge.firebaseDark},
    {image: images.knowledge.tailwindcss, alt: 'tailwindcss'},
    {image: images.knowledge.git, alt: 'git', dark: images.knowledge.gitDark},
  ];

  return ( 
    <div className="flex justify-between">
      {/* Left */}
      <div className="w-full px-20" ref={ref}>
        <h2 className="text-purple-title dark:text-blue-title text-center md:text-6xl font-bold mb-16">MY KNOWLEDGE</h2>
        {/* Items */}
        <div className={`grid grid-cols-4 gap-x-28 gap-y-10 ${isInView?'opacity-100':'opacity-0'}`}>
          {items.map((item, index) => {
            return (
              <DelayedRender
                key={index}
                delay={(index+7) * 300} // Change the delay time to adjust when each item should appear
              >
                <div className='fromLeftFast'>
                  {item.dark ? 
                        (<>
                            <img src={item.dark} alt={item.alt} className='dark:block hidden'/>
                            <img src={item.image} alt={item.alt} className='dark:hidden block'/>
                        </>) 
                        : (<img src={item.image} alt={item.alt}/>)
                    }
                </div>
              </DelayedRender>
            );
          })}
        </div>
      </div>

      {/* Right */}
      <div className="">
        <img 
          src={images.planet.planet2}
          alt='planet'    
          className={`${isInView?'opacity-100 fromRight':'opacity-0'}`}
        />
      </div>
    </div>
  );
}

function DelayedRender({ children, delay }) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return shouldRender ? children : null;
}

export default Knowledge;
