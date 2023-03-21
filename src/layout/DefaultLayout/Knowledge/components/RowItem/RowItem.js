import React from "react";

import DelayedRender from '~/components/DelayedRender'
function RowItem({data, isInView, delays}) {
    return ( 
        <DelayedRender 
            delay={delays}    
        >
            <div className={`grid grid-cols-3 md:grid-cols-6 gap-x-10 md:gap-x-28 gap-y-10 mt-10 ${isInView?'opacity-100':'opacity-0'}`}>
                {data.map((item, index) => {
                return (
                    <DelayedRender
                    key={index}
                    delay={(index+1)*250} // Change the delay time to adjust when each item should appear
                    >
                    <a href={item.link} className='fromLeftFast' target={'_blank'} rel="noreferrer">
                        {item.dark ? 
                            (<>
                                <img src={item.dark} alt={item.alt} className='dark:block hidden'/>
                                <img src={item.image} alt={item.alt} className='dark:hidden block'/>
                            </>) 
                            : (<img src={item.image} alt={item.alt}/>)
                        }
                    </a>
                    </DelayedRender>
                );
                })}
            </div>
        </DelayedRender>
     );
}

export default RowItem;