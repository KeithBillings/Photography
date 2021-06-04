import { useEffect, useState } from 'react';

export default function NavButton(props) {
  const { name, linkTarget, activeNav, setActiveNav } = props;
  const [ifActive, setIfActive] = useState('');

  function handleNavClick() {
    setActiveNav(name);
  }

  useEffect(() => {
    if (window.location.hash === linkTarget) {
      setIfActive('active-nav');
    } else {
      setIfActive('');
    }
  }, [activeNav, linkTarget]);

  return (
    <div className={`navbar-button ${ifActive}`}>
      <a href={linkTarget} onClick={handleNavClick}>
        {name}
      </a>
    </div>
  );
}
