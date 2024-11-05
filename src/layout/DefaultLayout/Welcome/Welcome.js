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
        <div className="h-screen pt-32 md:pt-0">
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
                    <div className="flex justify-center mt-4 space-x-6">
                        {/* Social Media Icons */}
                        <a href="https://www.facebook.com/lntt.1806" target="_blank" rel="noopener noreferrer" className="text-purple-title dark:text-blue-title">
                            <i className="fab fa-facebook-f text-5xl mx-3"></i>
                        </a>
                        <a href="https://github.com/tanthidev" target="_blank" rel="noopener noreferrer" className="text-purple-title dark:text-blue-title">
                            <i className="fab fa-github text-5xl mx-3"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/thi-le-ba5350200/" target="_blank" rel="noopener noreferrer" className="text-purple-title dark:text-blue-title">
                            <i className="fab fa-linkedin-in text-5xl mx-3"></i>
                        </a>
                        <a href="https://www.instagram.com/tannthi.de/" target="_blank" rel="noopener noreferrer" className="text-purple-title dark:text-blue-title">
                            <i className="fab fa-instagram text-5xl mx-3"></i>
                        </a>
                    </div>
                    {/* Phone Number Section */}
                    <div className="flex justify-center items-center mt-4">
                        
                        <a href="tel:+84123456789" className="text-2xl text-purple-title dark:text-blue-title">
                            <i className="fas fa-phone text-2xl text-purple-title dark:text-blue-title mr-2"></i>
                            +84 862 781 271
                        </a>
                    </div>
                </div>
                {/* Image */}
                <div className="mt-20 w-2/3 md:w-1/5 mx-auto flex justify-center fromRight cards">
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