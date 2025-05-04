import { useState, useEffect } from 'react';

const BackgroundOverlay = (() => {
    const [offset, setOffset] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
          // setRootOffset(window.pageYOffset);
          setOffset(window.pageYOffset - window.innerHeight);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () =>
          window.removeEventListener('scroll', handleScroll)
    
      }, []);
    
    return (
        <div className="background-overlay">
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-900 opacity-[.1]"
                style={{
                    opacity: 0.1 + (offset * 0.001)
                }} />
            <div className="absolute  top-[0%] left-0 right-0 h-[30%] bg-gradient-to-b from-white dark:from-slate-900 to-transparent opacity-[.1]"
                style={{
                    opacity: 0.8 + (offset * 0.002)
                }} />

            <div className="absolute inset-0 bg-white/40 dark:bg-black/30 z--10 opacity-[.1]" />
        </div>
    );
} )

export default BackgroundOverlay;
