"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const index = () => {
    const [experienceYears, setExperienceYears] = useState<string>("");

    useEffect(() => {
        const startDate = new Date('2022-04-01');
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - startDate.getTime());
        const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
        setExperienceYears(diffYears.toFixed(1));
    }, []);

  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Gopi Raj</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h3>Software Developer</h3>
            </div>
            <h5 className="text-secondary font-normal max-w-md xl:max-w-xl">
             {experienceYears} years of total experience (April 2022 – Present)
            </h5>
          </div>
          <Image
            src={getImgPath("/images/home/banner/banner-img.jpeg")}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/banner/banner-img.jpeg")}
          alt="banner-img"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;
