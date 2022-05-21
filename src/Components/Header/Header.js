import React, {useEffect, useState} from 'react';
import "./Header.css"
import MobileHeader from "../MobileHeader/MobileHeader"
import DesktopHeader from "../DesktopHeader/DesktopHeader"

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780)

  useEffect(() => {
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 780))
    return () => {
      window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 780))
    }
  }, [])

  return (
    <>
      {
        isMobile ?
          <MobileHeader/>
          : <DesktopHeader/>
      }
    </>
  )

};

export default Header;
