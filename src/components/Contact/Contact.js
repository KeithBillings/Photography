import linkedInIcon from '../../assets/linkedin.svg';
import instagramIcon from '../../assets/instagram.svg';
import websiteIcon from '../../assets/website-icon.svg';

export default function Contact() {
  return (
    <div id='contact' className='contact-section'>
      <div className='contact__column'>
        <h1 className='title'>Contact Me</h1>
        <div className='custom-seperator'></div>
        <p>
          To contact me, send me an <a href='mailto:keithbillingsbusiness@gmail.com'>email</a> or DM me on{' '}
          <a href='https://www.instagram.com/keithbillingsphotography/' target='_blank' rel='noreferrer'>
            Instagram!
          </a>
        </p>
        <p>
          Email: <a href='mailto:keithbillingsbusiness@gmail.com'>keithbillingsbusiness@gmail.com</a>
        </p>
        <p>Socials:</p>
        <div className='socials-wrapper'>
          <a href='https://www.linkedin.com/in/keithbillings' target='_blank' rel='noreferrer'>
            <img src={linkedInIcon} alt='linkedin' />
          </a>
          <a href='https://www.instagram.com/keithbillingsphotography/' target='_blank' rel='noreferrer'>
            <img src={instagramIcon} alt='instagram' />
          </a>
          <a href='https://keithbillings.com/' target='_blank' rel='noreferrer'>
            <img src={websiteIcon} alt='website' />
          </a>
        </div>
      </div>
      <div className='contact__column'>
        <img src='' alt='' />
      </div>
    </div>
  );
}
