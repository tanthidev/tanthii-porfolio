import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

function useRender() {
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
    
    return ({isInView, ref});
}

export default useRender;