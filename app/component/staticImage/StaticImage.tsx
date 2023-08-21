"use client";

import Image, { StaticImageData } from "next/image";
import samoyed from "@/public/images/samoyed.jpg";

const StaticImage = () => {
  return (
    <>
      <Image src={samoyed} alt="" />
    </>
  );
};

export default StaticImage;
