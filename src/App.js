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
		
			mainParent.style.color = 'white';
			mainParent.style.background = 'rgb(40,40,40)';
			
			themeBtn.textContent = 'Light mode';
			themeBtn.style.background = 'white';
			themeBtn.style.color = 'black';

			customSeperator.style.borderColor = 'white';
			bookASessionSVG.style.fill = 'white';
		}
		if (theme === 'dark'){
			setTheme('light');
	
			mainParent.style.color = 'black';
			mainParent.style.background = 'white';
			
			themeBtn.textContent = 'Dark mode';
			themeBtn.style.background = 'rgba(40,40,40, 0.5)';
			themeBtn.style.color = 'white';

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
