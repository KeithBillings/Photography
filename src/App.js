import { useState } from 'react';

import NavBar from './components/Navbar/Navbar';
import Home from './Pages/Home';

import './App.scss';

function App() {
	const [theme, setTheme] = useState('light');

	function handleChangeTheme (e) {
		const mainParent = document.getElementsByClassName('App')[0];
		const themeBtn = document.getElementsByClassName('theme-button')[0];
		const customSeperator = document.getElementsByClassName('custom-seperator')[0];
		const bookASessionSVG = document.querySelector("#about > div.about-content > div.about-content__text > a > svg");
		
		if (theme === 'light'){
			setTheme('dark');
			
			mainParent.classList.remove('theme-light');
			mainParent.classList.add('theme--dark');
			
			themeBtn.textContent = 'Light mode';

			customSeperator.style.borderColor = 'white';
			bookASessionSVG.style.fill = 'white';
		}
		if (theme === 'dark'){
			setTheme('light');
			
			mainParent.classList.remove('theme--dark');
			mainParent.classList.add('theme--light');
			
			themeBtn.textContent = 'Dark mode';

			customSeperator.style.borderColor = 'black';
			bookASessionSVG.style.fill = 'black';
		}
	}

  return (
    <div className='App'>
			<button className='theme-button' onClick={handleChangeTheme}>Dark mode</button>
      <NavBar />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
