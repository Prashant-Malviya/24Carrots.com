import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/images/1.1-Lorely-Meza-1.jpg';
import img2 from '../assets/images/1.2-Holly-Sigafoos-Photo.jpg';
import img3 from '../assets/images/1.3-Holly-Sigafoos-Photo.jpg';
import bgImg from '../assets/images/bgImg.jpg'; 

const ContentSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div
      className="flex flex-row md:flex-row items-center relative py-10 md:py-16"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full md:w-1/2 p-8 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">WELCOME TO 24 CARROTS</h2>
        <h2 className="text-5xl md:text-8xl font-bold mb-4">Remarkable Catering & Events</h2>
        <p className="text-gray-700 py-5 text-sm md:text-base">
          24 Carrots is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions.
        </p>
        <a href="https://24carrots.com/contact/" className="btn bg-[#FF8C00] text-white px-4 py-2 rounded-md transition-transform hover:translate-x-1">
          GET IN TOUCH
        </a>
      </div>
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <Slider {...settings} className="rounded-l-lg">
          <div className="w-full h-full overflow-hidden">
            <img src={img1} alt="Image 1" className="w-full h-full rounded-tl-full" />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={img2} alt="Image 2" className="w-full h-full rounded-tl-full" />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={img3} alt="Image 3" className="w-full h-full rounded-tl-full" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ContentSlider;
