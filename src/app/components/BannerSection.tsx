import Image, { StaticImageData } from "next/legacy/image";
import React from "react";
import Button from "./Button";

interface BannerSectionProps {
    heading: string,
    imageUrl: StaticImageData,
    secondHeading: string,
    para: string,
    buttonText: string,
    imageAlt: string,
}

const BannerSection: React.FC<BannerSectionProps> = ({heading, imageUrl, secondHeading, para, buttonText, imageAlt}) => {
  return (
    <section className="px-6 md:px-10">
      <h2 className="mb-4 font-bold text-2xl md:text-3xl lg:text-4xl">{heading}</h2>

      <Image 
        src={imageUrl} 
        alt={imageAlt} 
        layout="responsive" 
        width={1200}  // The native width of your image
        height={500}  // The native height of your image
        className="object-cover rounded-md"
      />

      <div className="flex flex-col items-center py-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase pt-2 text-center">{secondHeading}</h2>
        <p className="w-full md:w-3/4 lg:w-1/2 text-center py-6 text-sm md:text-base lg:text-lg">
          {para}
        </p>
        <Button text={buttonText} classNames="rounded-full py-2 px-6 text-sm md:text-base" />
      </div>
    </section>
  );
};

export default BannerSection;
