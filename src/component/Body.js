import React from "react";
// Import css files

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Body = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <Slider
      {...settings}
      className="  h-[57vh] w-[100vw] bg-no-repeat bg-center bg-auto"
    >
      <div>
        <img className="h-full w-full h-[57vh]" src="https://dirums.com/_next/image?url=https%3A%2F%2Fd2wmjgcwxowcvo.cloudfront.net%2Fdownload-2022.1.23_19.7.26-dirums-(dirums.com)%2Fmedia%2FMaa_Durga_collection_2.jpg&w=3840&q=75"/>
      </div>
      <div>
        <img className="h-full w-full h-[57vh]" src="https://dirums.com/_next/image?url=https%3A%2F%2Fd2wmjgcwxowcvo.cloudfront.net%2Fdownload-2022.1.23_19.7.26-dirums-(dirums.com)%2Fmedia%2FSCULPTURE_Collectiong_1.jpg&w=3840&q=75" />
      </div>
      <div> 
      <img className="h-full w-full h-[57vh]" src="https://dirums.com/_next/image?url=https%3A%2F%2Fd2wmjgcwxowcvo.cloudfront.net%2Fdownload-2022.1.23_19.7.26-dirums-(dirums.com)%2Fmedia%2FModern_Abstract_Banner_1.jpg&w=3840&q=75"/>
      </div>
      <div> 
      <img  className="h-full w-full h-[57vh]" src="https://dirums.com/_next/image?url=https%3A%2F%2Fd2wmjgcwxowcvo.cloudfront.net%2Fdownload-2022.1.23_19.7.26-dirums-(dirums.com)%2Fmedia%2FBuddha_Collection_Banner_1.jpg&w=3840&q=75"/>
      </div>
      <div> <img className="h-full w-full h-[57vh]" src="https://dirums.com/_next/image?url=https%3A%2F%2Fd2wmjgcwxowcvo.cloudfront.net%2Fdownload-2022.1.23_19.7.26-dirums-(dirums.com)%2Fmedia%2FRadha_Krishna_Collection_Banner_1.jpg&w=3840&q=75" />
      </div>
    </Slider>
    <div className="flex mt-12 mx-8 justify-center flex-nowrap items-center gap-x-28">
        
        <div className="flex gap-4">
            <img className="w-12" src="https://dirums.com/images/home-svg/free-shipping.svg"/>
            <div className="flex flex-col">
                <span className="font-bold">FREE SHIPPING</span>
                <span>Worldwide</span>
            </div>
        </div>
        <div className="flex gap-4">
            <img className="w-12" src="https://dirums.com/images/home-svg/easy-return.svg"/>
            <div className="flex flex-col">
                <span className="font-bold">EASY RETURNS</span>
                <span>Within 7 Days</span>
            </div>
        </div>
        <div className="flex gap-4">
            <img className="w-12" src="https://dirums.com/images/home-svg/secured-payments.svg"/>
            <div className="flex flex-col">
                <span className="font-bold">SECURED</span>
                <span>Checkout and payments</span>
            </div>
        </div>
        <div className="flex gap-4">
            <img className="w-12" src="https://dirums.com/images/home-svg/genuine-image.svg"/>
            <div className="flex flex-col">
                <span className="font-bold">GENUINE PRODUCTS</span>
                <span>Handmade with love</span>
            </div>
        </div>
        <div className="flex gap-4">
            <img className="w-12" src="https://dirums.com/images/home-svg/cod-image.svg"/>
            <div className="flex flex-col">
                <span className="font-bold">COD AVAILABLE</span>
                <span>Pay on delivery</span>
            </div>
        </div>

    </div>
    </>

  );
};

export default Body;
