import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import weddingImage from '../assets/images/wedding-scroll-cropped.jpg';
import socialImage from '../assets/images/2.2-Social-Lorely-Meza.jpg';
import corporateImage from '../assets/images/2.3-Corporate-Joel-Maus.jpg';
import venuesImage from '../assets/images/2.4-Venues-Jenny-Quicksall.jpg';

const InfoSlider = () => {
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setSelectedContentIndex(newIndex),
  };

  const contentList = [
    {
      title: 'EXCEPTIONAL WEDDINGS',
      description:
        'The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.',
      buttonText: 'LEARN MORE',
      image: weddingImage,
    },
    {
      title: 'INCOMPARABLE SOCIAL EVENTS',
      description:
        'We sweat the small stuff, so you don’t have to. For all of life’s special occasions, we give your anniversary, shower, or birthday party the attention it deserves, allowing you to focus on being present with your guests!',
      buttonText: 'LEARN MORE',
      image: socialImage,
    },
    {
      title: 'ONE-OF-A-KIND CORPORATE EVENTS',
      description:
        'Our job is to make you look good. From office lunches to large-scale corporate events, we’ve made our business out of making your business shine.',
      buttonText: 'LEARN MORE',
      image: corporateImage,
    },
    {
      title: 'EXCLUSIVE SOCIAL VENUES',
      description:
        'We don’t put you in a box. Each venue is unique to each party, and our curated list of event spaces and venue partners offers easy access with personalized service at Southern California’s premier locations.',
      buttonText: 'LEARN MORE',
      image: venuesImage,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center relative py-8 md:py-16">
      <div className="md:w-1/2 h-auto md:h-full overflow-hidden">
        <Slider {...settings} className="h-full">
          {contentList.map((item, index) => (
            <div key={index} className="w-full h-full overflow-hidden">
              <img
                src={item.image}
                alt={`Image ${index + 1}`}
                className="w-full h-full rounded-tl-full rounded-tr-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="md:w-1/2 p-4 md:p-8 md:text-left">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {contentList[selectedContentIndex].title}
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            {contentList[selectedContentIndex].description}
          </p>
          <a
            href="#"
            className="btn bg-[#FF8C00] text-white px-4 py-2 rounded-md transition-transform hover:translate-x-1"
          >
            {contentList[selectedContentIndex].buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoSlider;
