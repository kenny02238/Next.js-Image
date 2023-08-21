"use client";
import Image from "next/image";
import Samoyed from "@/public/images/samoyed.jpg";

const ImgVsImage = () => {
  return (
    <>
      {/* 使用一般 img標籤 */}
      {/* <img src="/images/samoyed.jpg" alt="" /> */}
      {/* 使用next的Image標籤 */}
      <Image src={Samoyed} alt="" />
      {/* 使用Image搭配sizes prop */}
      <Image src={Samoyed} alt="" sizes="100vw" />
    </>
  );
};

export default ImgVsImage;
