import useRender from "~/config/hooks/useRender";
import { images } from "~/images";

function Activity() {
    const {isInView, ref} = useRender();
    return ( 
        <div className=" relative flex flex-col-reverse py-10 mt-32 md:justify-between md:mb-80">
            {/* Left */} 
            <div className="absolute w-2/3 -left-60 h-full z-0 flex items-center">
                <img src={images.planet.planet3} alt='planet'/>
            </div>


            {/* right */}
            <div className="md:w-7/12 w-5/6 relative p-10 rounded-3xl bg-opacity-30 dark:bg-opacity-30 bg-blue-400 dark:bg-gray-400  shadow-xl h-full ml-auto z-10">
                <h1 className="text-purple-title dark:text-blue-title text-center text-4xl md:text-6xl font-bold">ACTIVITY</h1>
                <div className="flex relative h-fit">
                    <div className="md:mr-10 h-fit w-fit">
                        <img src={images.activity.lineDark} className='md:w-1/2 w-1/3 hidden dark:block' alt="line"/>
                        <img src={images.activity.line} className='md:w-1/2 w-1/3 block dark:hidden' alt="line"/>
                    </div>

                    <div className="w-full pt-5">
                        <div className={`text-2xl text-justify md:text-3xl md:leading-loose ${isInView ? 'fromBot text-black dark:text-white' : 'text-transparent'}`} ref={ref}>
                            <div>
                                <div className="text-3xl font-extrabold flex items-center">
                                    <img className="w-16 mr-4" src="https://icon-library.com/images/duration-icon/duration-icon-26.jpg" alt="time" />
                                    <p>11/2021 - 5/2024</p>
                                </div>
                                <h2 className="font-bold text-3xl">IT-Zone Club - Ton Duc Thang University</h2>
                                <p className="font-bold" >Role: <span className="font-normal">Member</span></p>
                                <p>Provide software installation support, laptop troubleshooting, and assistance with technology-related issues for TDTU students.</p>
                                <a  href="https://www.facebook.com/caitzone" target={'_blank'} rel="noreferrer">Detail...</a>
                            </div>  

                            <br></br> 

                            <div>
                                <div className="text-3xl font-extrabold flex items-center">
                                    <img className="w-16 mr-4" src="https://icon-library.com/images/duration-icon/duration-icon-26.jpg" alt="time" />
                                    <p>12/2021</p>
                                </div>
                                <h2 className="font-bold text-3xl">Seminar "Criteria for Choosing a Laptop Suitable for Your Major"</h2>
                                <p className="font-bold" >Role: <span className="font-normal">HOST</span></p>
                                <p className="font-bold" >Content: <span className="font-normal">Exploring computer hardware and helping students better understand the computing needs specific to each field of study.</span></p>
                                <a  href="https://www.facebook.com/caitzone/posts/pfbid034JTi6jHQyBiHHnbwEBwLPWQyq6TsQ9MB3SxaVSx2Kfvrix8sG12cbkBNCHyHTcRMl" target={'_blank'} rel="noreferrer">Detail...</a>
                            </div> 
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Activity;