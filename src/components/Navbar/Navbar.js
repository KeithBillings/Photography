import { useState } from 'react';
import NavButton from '../NavButton/NavButton';

export default function NavBar() {
  const [activeNav, setActiveNav] = useState();

  const navbarButtonList = [
    {
      name: 'Home',
      linkTarget: '#home',
    },
    {
      name: 'About',
      linkTarget: '#about',
    },
    {
      name: 'Portfolio',
      linkTarget: '#portfolio',
    },
    {
      name: 'Contact',
      linkTarget: '#contact',
    },
  ];

  return (
    <div className='navbar'>
      {navbarButtonList.map(({ name, linkTarget }, index) => {
        return <NavButton activeNav={activeNav} setActiveNav={setActiveNav} name={name} linkTarget={linkTarget} key={index} />;
      })}
    </div>
  );
}
