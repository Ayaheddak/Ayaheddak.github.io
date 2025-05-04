import { useEffect, useState } from 'react';
import  backgroundImage from '@/assets/bg.jpg';

const ParallaxHero = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);

    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
     
      <div 
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offset * 0.3}px)`,
          opacity: 0.5
        }}
      ></div>
      
     
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-900"
        style={{
          opacity: 0.2 + (offset * 0.001)
        }}
      ></div>
    </div>
  );
};

export default ParallaxHero;