import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../assets/images/MAIN.jpg';
import img2 from '../assets/images/1.-MAIN-3.jpg';
import img3 from '../assets/images/1.-MAIN-4.jpg';
import img4 from '../assets/images/9-7.jpg';
import img5 from '../assets/images/7-31-5.png';

const slideImages = [img1, img2, img3, img4, img5];

const slideContent = [
  {
    title: 'Image 1',
    description: 'This is the content for image 1.',
  },
  {
    title: 'Image 2',
    description: 'This is the content for image 2.',
  },
  {
    title: 'Image 3',
    description: 'This is the content for image 3.',
  },
  {
    title: 'Image 4',
    description: 'This is the content for image 4.',
  },
  {
    title: 'Image 5',
    description: 'This is the content for image 5.',
  },
];

const HoverSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 images at a time
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="hover-slider">
      {slideContent.map((content, index) => (
        <div key={index} className="hover-slider__slide">
          <div className="hover-slider__image-container">
            <img src={slideImages[index]} alt={`Image ${index + 1}`} className="hover-slider__image" />
            <div className="hover-slider__content">
              <h2 className="hover-slider__title">{content.title}</h2>
              <p className="hover-slider__description">{content.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HoverSlider;
