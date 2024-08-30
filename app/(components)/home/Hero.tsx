import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[550px]">
      <div className="bg-[url('/images/banner.png')] bg-cover bg-no-repeat bg-center aboslute top-0 left-0 h-full"></div>

      <div className="absolute top-[20%] left-4 text-white w-full">
        <h1 className="text-h1 font-bold max-w-[80%] tracking-wide">
          The leading B2B ecommerce platform for global trade
        </h1>
      </div>
    </div>
  );
};

export default Hero;
