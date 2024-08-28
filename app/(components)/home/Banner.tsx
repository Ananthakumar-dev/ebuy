"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const heroImages = [
  {
    name: "Grocery",
    src: "school-kids.jpg",
    description: "School stationaries damaka sale is going on. Expires soon. ",
  },
  {
    name: "Mobiles",
    src: "grooming.jpg",
    description: "Enhance your grooming with those glossy things.",
  },
  {
    name: "Clothes",
    src: "decor.jpeg",
    description: "Decorate your home, office or anything belongs to you.",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changingIndex = setInterval(() => {
      handleCarouselIndex("next");
    }, 5000);

    return () => clearInterval(changingIndex);
  });

  function handleCarouselIndex(type: "next" | "prev") {
    const maxIndex = heroImages.length - 1;

    if (type === "prev") {
      currentIndex === 0
        ? setCurrentIndex(maxIndex)
        : setCurrentIndex(currentIndex - 1);
    }

    if (type === "next") {
      currentIndex === maxIndex
        ? setCurrentIndex(0)
        : setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className="h-[60%] relative">
      {heroImages.map((_, index) => {
        return (
          <div className="h-full absolute top-0 left-0 w-full" key={index}>
            <Image
              src={`/uploads/banner/${heroImages[currentIndex].src}`}
              alt="alt"
              fill
              className={`object-fill ${
                currentIndex === index
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } transition-[opacity] duration-200 ease-in`}
            />

            {currentIndex === index && (
              <>
                <div
                  className="absolute top-[50%] left-2 cursor-pointer z-[1]"
                  onClick={() => handleCarouselIndex("prev")}
                >
                  <ArrowLeftIcon className="size-6 text-white" />
                </div>

                <div
                  className="absolute top-[50%] right-2 cursor-pointer z-[1]"
                  onClick={() => handleCarouselIndex("next")}
                >
                  <ArrowRightIcon className="size-6 text-white" />
                </div>

                <div className="absolute top-[85%] w-full z-[1]">
                  <p className="font-semibold text-center bg-white p-2">
                    {heroImages[currentIndex].description}

                    <span className="inline-block ml-1">
                      <Link
                        href="/"
                        className="text-primary-alt font-bold cursor-pointer"
                      >
                        Checkout
                      </Link>
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
