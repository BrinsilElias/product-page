import React, { useState, useEffect } from "react";
import { HeaderSm, HeaderLg } from "../components/Headers";

const HeaderSection = () => {
    const [isLargerThan835, setIsLargerThan835] = useState(window.innerWidth > 835);

    useEffect(() => {
      // Update the state when the window is resized
      const handleResize = () => {
        setIsLargerThan835(window.innerWidth > 835);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <>
        <header>
          {isLargerThan835 ? <HeaderLg /> : <HeaderSm />}
        </header>
      </>
    );
};

export default HeaderSection;
