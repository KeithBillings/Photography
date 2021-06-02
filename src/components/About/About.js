import Keith from '../../assets/images/Keith.jpg';

export default function About() {
	function handleClick () {
		window.open('https://www.instagram.com/keithbillingsphotography/');
	}

  return (
    <div id='about' className='about-section'>
      <div className='profile-photo'>
        <img className='profile-photo--keith' src={Keith} alt='Keith' />
        <svg className='social-icon-overlay' onClick={handleClick} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
        </svg>
      </div>
      <div className='about-content'>
        <h1>About Me</h1>
        <div className='custom-seperator'></div>
        <div className='about-content__text'>
          My name is Keith Billings. I am a Portland native, love to create, travel, spend time with friends, cook awesome dishes for those friends, do
          photography, invest in the stock market, talk fast cars, talk business, code out websites, watch sci-fi, listen to hip hop and synthwave, go to metal
          concerts, go to awesome nature scenic spots, shop designer, eat fancy meals, help friends with projects, and basically never have any free time! Catch
          me if you can!
          <br />
          <br />
          This is my photography website that lives as a way to see my portfolio of my best work and provide contact details if you want to book me!
          <a href='#contact' className='book-a-session'>
            book a session 
            <svg
              preserveAspectRatio='xMidYMid meet'
              data-bbox='6.443 47.497 187.114 105.008'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='6.443 47.497 187.114 105.008'
              role='img'
            >
              <g>
                <path d='M174.476 51.261l-74.704 74.193L25.578 50.75c-4.287-4.316-11.566-4.341-15.882-.054s-4.341 11.565-.055 15.882l82.107 82.673c4.287 4.316 11.566 4.341 15.882.055l82.673-82.107c4.316-4.287 4.341-11.566.055-15.882s-11.235-4.342-15.882-.056z'></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
