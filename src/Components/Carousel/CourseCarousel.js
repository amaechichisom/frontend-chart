import React from "react";
import Slider from "react-slick";
import CourseCard from '../Cards/CourseCard';

 
export default function CourseCarousel() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 4,
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
            <CourseCard title="Introduction to Biology" numberOfCourses="8 Lessons" price="Free" alt="lernen-biology" image={biology} link="/course"/>
        </div>

        <div>
            <CourseCard title="Introduction to Zoology" numberOfCourses="12 Lessons" price="Free" alt="lernen-zoology" image={zoology} link="/course"/>
        </div>

        <div>
            <CourseCard title="Introduction to Botany" numberOfCourses="8 Lessons" price="Free" alt="lernen-botany" image={botany} link="/course"/>
        </div>

        <div>
            <CourseCard title="Introduction to the Cell" numberOfCourses="15 Lessons" price="Free" alt="lernen-cell" image={cell} link="/course"/>
        </div>

        <div>
            <CourseCard title="Introduction to Biology" numberOfCourses="8 Lessons" price="Free" alt="lernen-biology" image={biology} link="/course"/>
        </div> */}
    
    </Slider>
  );
}