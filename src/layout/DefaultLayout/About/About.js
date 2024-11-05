import useRender from '~/config/hooks/useRender';
import { images } from "~/images";

function About() {
    const {isInView, ref} = useRender()


    return ( 
        <div className="relative flex md:justify-between md:mb-80">
            {/* Left */}
            <div className="absolute md:relative w-5/6 -left-40 -top-10 md:left-0 md:-top-0 md:w-1/2 md:-ml-96 md:-mt-40">
                <img 
                    src={images.planet.planet1}
                    alt='planet'    
                    className="rotateImage w-full"
                />
            </div>

            <div>

            </div>
            {/* Right */} 
            <div className="ml-auto w-11/12 md:w-1/2 py-10 mt-32 md:mt-10 px-7 md:px-10 z-10 bg-blue-400  dark:bg-gray-700 bg-opacity-10 dark:bg-opacity-20 h-fit rounded-2xl shadow-xl">
                <h2 className="text-purple-title dark:text-blue-title text-center text-4xl md:text-6xl font-bold mb-16">ABOUT ME</h2>
                <p className={`text-2xl text-justify md:text-3xl md:leading-loose ${isInView ? 'fromBot text-black dark:text-white' : 'text-transparent'}`} ref={ref}>
                    Good day, everyone! I'm Le Nguyen Tan Thi, and I live in District 7, Vietnam. I have a strong interest in technology and football.
                    <br/><br/>
                    I am passionate about exploring new programming languages and technologies to tackle complex challenges. I am excited to continue developing my expertise and contribute to the ever-evolving tech industry.
                </p>
            </div>

        </div>
     );
}

export default About;