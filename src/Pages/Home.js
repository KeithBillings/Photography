export default function Home() {
  return (
    <div id='home'>
      <div className='header'>
        <div className='text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary-main'>Keith Billings</span>
            <span className='heading-primary-secondary'>Photography</span>
          </h1>
          <a href='#home' className='btn btn-color btn-animated'>button</a>
        </div>
      </div>
      <div id='about'>About</div>
      <div id='portfolio'>Portfolio</div>
      <div id='contact'>contact</div>
    </div>
  );
}
