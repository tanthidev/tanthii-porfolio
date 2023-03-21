import { useEffect, useState } from 'react';

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

export default DelayedRender