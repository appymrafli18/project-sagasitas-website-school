import React from 'react';
import gallerycard1 from './images/gallerycard1.png';
import gallerycard2 from './images/gallerycard2.png';
import gallerycard3 from './images/gallerycard3.png';
import gallerycard4 from './images/gallerycard4.png';
import gallerycard5 from './images/gallerycard5.png';
import gallerycard6 from './images/gallerycard6.png';
import gallerycard7 from './images/gallerycard7.png';
import gallerycard8 from './images/gallerycard8.png';
import gallerycard9 from './images/gallerycard9.png';
import gallerycard10 from './images/gallerycard10.png';
import gallerycard11 from './images/gallerycard11.png';
import gallerycard12 from './images/gallerycard12.png';

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="container mx-auto px-4">
          <div className="gallery-box grid mt-24 gap-y-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center rounded-xl">
            <img src={gallerycard1} alt="Gallery" />
            <img src={gallerycard2} alt="Gallery" />
            <img src={gallerycard3} alt="Gallery" />
            <img src={gallerycard4} alt="Gallery" />
            <img src={gallerycard5} alt="Gallery" />
            <img src={gallerycard6} alt="Gallery" />
            <img src={gallerycard7} alt="Gallery" />
            <img src={gallerycard8} alt="Gallery" />
            <img src={gallerycard9} alt="Gallery" />
            <img src={gallerycard10} alt="Gallery" />
            <img src={gallerycard11} alt="Gallery" />
            <img src={gallerycard12} alt="Gallery" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
