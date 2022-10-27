import testimonials from "../utlities/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TestCard() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className='testimonial-wrapper'>
      <Slider {...settings}>
        {testimonials.map((test) => (
          <div className='card'>
            <div className='company-name'>
              <h2>{test.name}</h2>
            </div>
            <div className='card-description'>
              <p>{test.description}</p>
            </div>
            <div className='card-logo'>
              <h2>{test.name}</h2>
              <p>{test.logo}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default TestCard;
