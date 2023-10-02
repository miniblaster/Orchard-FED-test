import { useState } from 'react';
import './assets/css/App.scss';
import { ModalContent } from './components/Modal/Modal';

const ImageUrls = [
  [
    '/component-01/Image-01.jpg',
    '/component-01/Image-02.jpg',
    '/component-01/Image-03.jpg',
  ],
  [
    '/component-02/Image-01.jpg',
    '/component-02/Image-02.jpg',
    '/component-02/Image-03.jpg',
  ]
]

function App() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');

  const handleAnchorClick = () => {
    console.log("Anchor clicked!");
  }

  const handleImageClick = (url) => () => {
    setUrl(url);
    setOpen(true);
    // remove scroll bar when modal is opened
    document.getElementsByTagName('body')[0].classList.add("modal-open");
  }

  const handleCloseModal = () => {
    setOpen(false);
    // add scroll bar when modal is closed
    document.getElementsByTagName('body')[0].classList.remove("modal-open");
  }

  const renderModal = () => {
    if (open) {
      return (
        <ModalContent onClose={handleCloseModal}>
          <img className='modal-image' src={url} alt="Image Modal" />
        </ModalContent>
      )
    }
  }

  return (
    <main>
      <section className='section-one responsive-grid'>
        <article className='col-one-three thumbnail-container'>
          <div className='thumbnail'>
            <img src={ImageUrls[0][0]} alt='img-01.jpg' onClick={handleImageClick(ImageUrls[0][0])} />
          </div>
        </article>
        <article className='col-one-three'>
          <div className='row-half thumbnail-container'>
            <div className='thumbnail'>
              <img src={ImageUrls[0][1]} alt='img-02.jpg' onClick={handleImageClick(ImageUrls[0][1])} />
            </div>
          </div>
          <div className='row-half thumbnail-container'>
            <div className='thumbnail'>
              <img src={ImageUrls[0][2]} alt='img-03.jpg' onClick={handleImageClick(ImageUrls[0][2])} />
            </div>
          </div>
        </article>
        <article className='col-one-three'>
          <header className='header-answer'>
            <p>ANSWER YOUR BODY'S NEEDS</p>
          </header>
          <div className='text-answer'>
            <p>
              The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetitie guides you to consume according to  your body's needs.
            </p>
          </div>
          <div className='text-mindful'>
            <p>
              Be mindful
            </p>
            <p>
              Sourcing local or organic food is a good way to start being more midful about what you're cooking and eating.
            </p>
          </div>
        </article>
      </section>
      <section className='section-two'>
        <header>ALL THE LATEST FROM AEG</header>
        <div className='responsive-grid'>
          <article className='col-one-three'>
            <div className='thumbnail-container'>
              <div className='thumbnail'>
                <img src={ImageUrls[1][0]} alt='img-01.jpg' onClick={handleImageClick(ImageUrls[1][0])} />
              </div>
            </div>
            <div className='details'>
              <div className='title'>
                <p>Summer Lunch Menu By Mark Best</p>
              </div>
              <div className='info'>
                <p>AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.</p>
              </div>
              <a href='#' onClick={handleAnchorClick}>READ MORE</a>
            </div>
          </article>
          <article className='col-one-three'>
            <div className='thumbnail-container'>
              <div className='thumbnail'>
                <img src={ImageUrls[1][1]} alt='img-02.jpg' onClick={handleImageClick(ImageUrls[1][1])} />
              </div>
            </div>
            <div className='details'>
              <div className='title'>
                <p>A Traditional Christmas Eve, Mark Best Style</p>
              </div>
              <div className='info'>
                <p>One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.</p>
              </div>
              <a href='#' onClick={handleAnchorClick}>READ MORE</a>
            </div>
          </article>
          <article className='col-one-three'>
            <div className='thumbnail-container'>
              <div className='thumbnail'>
                <img src={ImageUrls[1][2]} alt='img-03.jpg' onClick={handleImageClick(ImageUrls[1][2])} />
              </div>
            </div>
            <div className='details'>
              <div className='title'>
                <p>Taking Taste Further</p>
              </div>
              <div className='info'>
                <p>This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.</p>
              </div>
              <a href='#' onClick={handleAnchorClick}>READ MORE</a>
            </div>
          </article>
        </div>
      </section>
      {renderModal()}
    </main>
  );
}

export default App;
