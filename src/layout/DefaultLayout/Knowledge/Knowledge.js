import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { images } from "~/images";

function Knowledge() {
    const [isInView, setIsInView] = useState(false);
    const { ref, inView } = useInView({
      threshold: 0.5, // change this value to adjust when the animation should trigger
      triggerOnce: true, // change this value to trigger the animation every time the component enters the viewport
    });
  


    useEffect(()=>{
        if (inView) {
            setIsInView(true);
          }
    },[inView])


    return ( 
        <div className="flex justify-between">
            {/* Left */}
            <div className="w-full px-20" ref={ref}>
                <h2 className="text-purple-title dark:text-blue-title text-center md:text-6xl font-bold mb-16">MY KNOWLEDGE</h2>
                <div className={`grid grid-cols-4 gap-x-28 gap-y-10 ${isInView?'fromLeft':'hidden'}`}  >
                    <div>
                        <img src={images.knowledge.html} alt='html'/>
                    </div>

                    <div>
                        <img src={images.knowledge.css} alt='css'/>
                    </div>

                    <div>
                        <img src={images.knowledge.js} alt='js'/>
                    </div>

                    <div>
                        <img src={images.knowledge.react} alt='react'/>
                    </div>

                    <div>
                        {/* Dark */}
                        <img src={images.knowledge.nodejsDark} alt='nodejs' className="hidden dark:block"/>
                        {/* Light */}
                        <img src={images.knowledge.nodejs} alt='nodejs' className="block dark:hidden"/>
                    </div>

                    <div>
                        {/* Dark */}
                        <img src={images.knowledge.firebaseDark} alt='firebase' className="hidden dark:block"/>
                        {/* Light */}
                        <img src={images.knowledge.firebase} alt='firebase' className="block dark:hidden"/>
                    </div>

                    <div>
                        <img src={images.knowledge.tailwindcss} alt='tailwindcss'/>
                    </div>

                    <div>
                        {/* Dark */}
                        <img src={images.knowledge.gitDark} alt='git' className="hidden dark:block"/>
                        {/* Light */}
                        <img src={images.knowledge.git} alt='git' className="block dark:hidden"/>
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="">
                <img 
                    src={images.planet.planet2}
                    alt='planet'    
                    className={`${isInView?'fromRight':'hidden'}`}
                />
            </div>
        </div>
     );
}

export default Knowledge;