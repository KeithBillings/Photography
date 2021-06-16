import image1 from '../../assets/images/portfolio/1.jpg';
import image2 from '../../assets/images/portfolio/2.jpg';
import image3 from '../../assets/images/portfolio/3.jpg';
import image4 from '../../assets/images/portfolio/4.jpg';
import image5 from '../../assets/images/portfolio/5.jpg';
import image6 from '../../assets/images/portfolio/6.jpg';
import image7 from '../../assets/images/portfolio/7.jpg';
import image8 from '../../assets/images/portfolio/8.jpg';
import image9 from '../../assets/images/portfolio/9.jpg';
import image10 from '../../assets/images/portfolio/10.jpg';
import image11 from '../../assets/images/portfolio/11.jpg';
import image12 from '../../assets/images/portfolio/12.jpg';
import image13 from '../../assets/images/portfolio/13.jpg';
import image14 from '../../assets/images/portfolio/14.jpg';
import image15 from '../../assets/images/portfolio/15.jpg';

export default function Portfolio() {
  const arrayOfImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15];

  function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

  document.addEventListener('DOMContentLoaded', function () {
    let lazyloadImages;

    if ('IntersectionObserver' in window) {
      lazyloadImages = document.querySelectorAll('.lazy');
      let imageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let image = entry.target;
            image.src = image.dataset.src;
						image.classList.add('fade-in');
            image.classList.remove('lazy');
            imageObserver.unobserve(image);
          }
        });
      });

      lazyloadImages.forEach(function (image) {
        imageObserver.observe(image);
      });
    } else {
      let lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll('.lazy');

      function lazyload() {
        if (lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
          let scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function (img) {
            if (img.offsetTop < window.innerHeight + scrollTop) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
          });
          if (lazyloadImages.length === 0) {
            document.removeEventListener('scroll', lazyload);
            window.removeEventListener('resize', lazyload);
            window.removeEventListener('orientationChange', lazyload);
          }
        }, 20);
      }

      document.addEventListener('scroll', lazyload);
      window.addEventListener('resize', lazyload);
      window.addEventListener('orientationChange', lazyload);
    }
  });

  return (
    <div id='portfolio' className='portfolio-section'>
      {arrayOfImages.map((image, index) => {
        let tall = '';

        if (getRandomInt() === 1) {
          tall = 'tall';
        }

        return <img data-src={image} loading='lazy' alt={`${image} ${index}`} key={index} className={`lazy ${tall}`} />;
      })}
    </div>
  );
}
