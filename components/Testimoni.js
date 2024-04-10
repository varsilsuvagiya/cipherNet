import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Emma",
      image: "/assets/emma.jpg",
      city: "Telaviv",
      country: "Israel",
      rating: "4",
      testimoni:
        "I've been using the VPN tool from for a few months now, and I'm thoroughly impressed. It's incredibly easy to use, and I've noticed a significant improvement in my online security and privacy. Plus, the speed is remarkable! Definitely the best VPN I've ever used",
    },
    {
      name: "James",
      image: "/assets/person4.jpg",
      city: "Warsaw",
      country: "Poland",
      rating: "5",
      testimoni:
        "As someone who frequently travels for work, having a reliable VPN is essential. I came across  and decided to give it a try. I'm glad I did! Not only does it keep my data secure on public Wi-Fi networks, but it also allows me to access geo-blocked content effortlessly. Highly recommended!",
    },
    {
      name: "Sophia",
      image: "/assets/sophia.jpg",
      city: "London",
      country: "United kingdom",
      rating: "4.5",
      testimoni:
        "I've tried several VPNs in the past, but none have compared to the level of service I've received from . The connection is stable, and I've experienced no slowdowns whatsoever. Plus, the customer support team is fantastic! They're always quick to respond and incredibly helpful",
    },
    {
      name: "David",
      image: "/assets/people-1.png",
      city: "Toronto",
      country: "Canada",
      rating: "5",
      testimoni:
        "I've been concerned about my online privacy for a while now, so I decided to invest in a VPN. After doing some research, I stumbled upon , and I couldn't be happier with my decision. Not only does it encrypt my internet traffic, but it also offers a wide range of server locations to choose from. It's definitely given me peace of mind",
    },
    {
      name: "Ava",
      image: "/assets/people-2.png",
      city: "New York",
      country: "U.S.A",
      rating: "4.5",
      testimoni:
        "I've been recommending  to all my friends and family ever since I started using it. Not only does it offer top-notch security features, but it's also super user-friendly. Whether you're a tech-savvy individual or a complete beginner, you'll have no trouble setting it up. Plus, the pricing is extremely reasonable for the level of service you receive. Keep up the great work!",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-green-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                    className="rounded-full w-full h-full object-cover"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-green-500 hover:text-white-500 transition-all text-green-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-green-500 hover:text-white-500 transition-all text-green-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
