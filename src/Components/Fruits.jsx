import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Fruits = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true, // Enable arrows
    prevArrow: <div className="slick-prev">Prev</div>, // Custom previous arrow
    nextArrow: <div className="slick-next">Next</div>, // Custom next arrow
  };

  return (
    <div>
      {/* First section */}
      <div className="flex flex-col lg:flex-row items-center justify-around bg-orange-50 md:p-20 px-5 py-5 md:px-0">
        <div className="items-start justify-start w-screen px-5 md:px-0 md:w-[700px]">
          <h1 className="mb-3 font-bold md:text-5xl text-xl text-green-600">
            Receive the fresh produce you want directly from local organic farmers
          </h1>
          <img src="./Images/gholder.WEBP" className="mb-3 w-[150px]" />
          <p className="mb-5 text-lg md:text-xl font-serif">
            Organic Produce Direct is an online market that lets you buy organic fruits, vegetables, mushrooms, herbs, and more from certified organic farmers in Western New York.
          </p>
          <p className="mb-3 text-lg md:text-xl font-serif">
            Keep more money within your community by directly supporting the farmers who grow delicious produce free of pesticides and GMOs.
          </p>
        </div>
        <div>
          <img src="./Images/ac.WEBP" className="md:w-[600px]" />
        </div>
      </div>

      {/* Second section (Customer Testimonials Slider) */}
      <div className="bg-orange-50 py-20">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-2xl md:text-5xl text-orange-400">
            What our customers are saying
          </h1>
        </div>
        <div className="flex justify-center px-5 py-10">
          <div className="slider-container overflow-hidden border-2 border-green-900 p-10 w-full md:w-[1200px]">
            <Slider {...settings}>
              <div className="testimonial-item text-start">
                <h3 className="text-lg md:text-xl mb-4">
                  I’m so impressed with the quality of all the produce I received! Everything was absolutely amazing and delicious! The best part, it was delivered to my doorstep! I cannot recommend Jamie and his service enough. I am so grateful and appreciative to have Organic Produce Direct for my family!
                </h3>
                <h1 className="font-bold text-green-600">Alexa</h1>
                <div className="rating text-yellow-500">
                  <span>⭐⭐⭐⭐⭐</span> {/* Replace with rating if needed */}
                </div>
              </div>
              <div className="testimonial-item text-start">
                <h3 className="text-lg md:text-xl mb-4">
                  The produce is delicious and very good quality. I feel I get value for cost. I especially like being able to choose exactly what I want. I am enjoying eating more veg! Thank you
                </h3>
                <h1 className="font-bold text-green-600">Lynette</h1>
                <div className="rating text-yellow-500">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <div className="testimonial-item text-start">
                <h3 className="text-lg md:text-xl mb-4">
                  I opened Immersion Cold Pressed Juice last year. As an all organic company it’s a challenge to source everything that I need. Organic Produce Direct has streamlined this process and made my business run more efficiently. To have local organic produce delivered to my business at a reasonable cost saves me time and money. If you value eating clean organic food, Organic Produce Direct is a must. Support local farms, support this business that tries to better our community. I absolutely love what Jamie has created here in Buffalo and look forward to seeing his business grow.
                </h3>
                <h1 className="font-bold text-green-600">Jon</h1>
                <div className="rating text-yellow-500">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <div className="testimonial-item text-start">
                <h3 className="text-lg md:text-xl mb-4">
                  I would not hesitate to recommend ORGANIC PRODUCE DIRECT to friends, family and other prospective customers. I have purchased and been happy with your fruit, vegetables and specialty products selected. We love the high quality, overall value, customer service and online ease of use. Thank you for providing this excellence service!
                </h3>
                <h1 className="font-bold text-green-600">Theodora</h1>
                <div className="rating text-yellow-500">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fruits;
