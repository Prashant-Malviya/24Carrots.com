import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images
import img1 from '../assets/images/MAIN.jpg';
import img2 from '../assets/images/1.-MAIN-3.jpg';
import img3 from '../assets/images/1.-MAIN-4.jpg';
import img4 from '../assets/images/1.-MAIN-4.jpg';
import img5 from '../assets/images/1.-MAIN-4.jpg';

const HoverSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 images at a time
    slidesToScroll: 1,
    variableWidth: true,
  };

  // Sample content for each image
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

  return (
    <Slider {...settings}>
      {slideContent.map((content, index) => (
        <div key={index} className="hover-slider__slide">
          <img src={img1} alt={`Image ${index + 1}`} className="hover-slider__image" />
          <div className="hover-slider__content">
            <h2>{content.title}</h2>
            <p>{content.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HoverSlider;
