import { useState } from 'react';
import './assets/css/App.scss';

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

  const handleImageClick = (url) => () => {
    setUrl(url);
    setOpen(true);
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
    </main>
  );
}

export default App;
