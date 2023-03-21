// import useRender from "~/config/hooks/useRender";
import { images } from "~/images";

function Activity() {
    // const {isInView, ref} = useRender();
    return ( 
        <div className="h-screen relative flex flex-col-reverse py-10 mt-32">
            {/* Left */} 
            <div className="absolute w-2/3 -left-60 h-full z-0 flex items-center">
                <img src={images.planet.planet3} alt='planet'/>
            </div>


            {/* right */}
            <div className="w-7/12 rounded-3xl bg-blue-400 dark:bg-gray-400 opacity-20 shadow-xl h-full ml-auto z-10">
                
            </div>
        </div>
     );
}

export default Activity;