export default function Contact() {
  return (
    <div id='contact' className='contact-section'>
      <div className='contact__column'>
        <h1 className='title'>Contact Me</h1>
        <div className='custom-seperator'></div>
        <form action='mailto:keithbillingsbusiness@gmail.com' method='POST' encType='multipart/form-data' name='EmailFrom'>
					Name: <input type='text' name='ContactName'></input>
					Your Email: <input type='email' name='ContactEmail'></input>
					Message: <input type='text' name='ContactMessage'></input>
					<input type='submit' value='Submit'></input>
				</form>
      </div>
      <div className='contact__column'>
        <img src='' alt='' />
      </div>
    </div>
  );
}
