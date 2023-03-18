import React, {useState, useEffect} from "react";

import { images } from "~/images";
function Welcome() {
      const [showButton, setShowButton] = useState(true);

    const handleScroll = () => {
        const threshold = 100;
        const currentPosition = window.pageYOffset;
        setShowButton(currentPosition < threshold);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return ( 
        <div className="h-screen pt-56 md:pt-0">
            {/* Image Astronaut */}
            <div>
                <img 
                    src={images.common.astronaut} 
                    alt="astronaut"
                    className="hidden fromTop md:block absolute w-72 top-10"/>
            </div>
            {/* Content */}
            <div className="block md:flex justify-between h-full items-center">
                {/* Welcome */}
                <div className="md:w-2/3 fromLeft">
                    <h1 className="text-5xl md:text-9xl font-bold text-center text-purple-title dark:text-blue-title pb-10">Hello, I'm TanThi</h1>
                    <p className="text-3xl md:text-5xl font-semibold text-black dark:text-white text-center">
                        Teaching assistant at&nbsp;
                        <a href="https://mindx.edu.vn/" target={"_blank"} rel="noreferrer">
                            MindX Technology School
                        </a>
                    </p>
                    <section className="flex justify-center mt-16">
                        <button 
                            className="md:text-4xl rounded-2xl md:rounded-3xl  font-medium bg-transparent border-2 border-purple-title dark:border-blue-title text-purple-title dark:text-blue-title px-3 py-2 md:px-6 md:py-4 mx-5"
                        >
                            Download my CV
                        </button>
                        <a 
                            href="https://m.me/lntt.1806"
                            target={'_blank'}
                            className="md:text-4xl rounded-2xl md:rounded-3xl  font-medium bg-transparent border-2 border-black dark:border-white text-black dark:text-white px-3 py-2 md:px-6 md:py-4 mx-5" rel="noreferrer"
                        >
                            Let's Talk
                        </a>
                    </section>
                </div>
                {/* Image */}
                <div className="mt-20 w-2/3 md:w-1/5 mx-auto flex justify-center fromRight card">
                    <img src={images.common.myImage} alt='My Avatar' className="rounded-2xl"/>
                </div>
            </div>
            {/* Croll Down */}
            {
                showButton && 
                <div className="absolute hidden md:block bottom-0 w-36 left-1/2 right-1/2">
                    <img className="dark:hidden" src={images.common.crolldownLight} alt=''/>
                    <img className="hidden dark:block" src={images.common.crolldownDark} alt=''/>
                </div>
            }
        </div>
     );
}

export default Welcome;