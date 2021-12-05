import React from "react";
import Slider from "react-slick";
import TrackSlide from '../Cards/TrackCard';

 
export default function SlickCarousel() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight:true,
    adaptiveWidth:true,

    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
  };
  return (
    <Slider {...settings}>
        {/* <div>
        <TrackSlide title="Biological Sciences" image={biologicalScience} alt="biologicalscience" link="/course"/>
        </div>
        
        <div>
        <TrackSlide title="Chemical Sciences" image={chemicalScience} alt="chemicalscience" link="/course"/>
        </div>

        <div>
        <TrackSlide title="Physical Sciences" image={physicalScience} alt="physicalcalscience" link="/course"/>
        </div>

        <div>
        <TrackSlide title="Environmental Sciences" image={physicalScience} alt="environmentalscience" link="/course"/>
        </div>

        <div>
        <TrackSlide title="Stuffical Sciences" image={physicalScience} alt="stufficalscience" link="/course"/>
        </div> */}
    
    </Slider>
  );
}