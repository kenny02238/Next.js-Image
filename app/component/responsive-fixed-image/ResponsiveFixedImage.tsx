"use client";

import Image from "next/image";
import samoyed from "@/public/images/samoyed.jpg";
const ResponsiveFixedImage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {/* <Image
        src={samoyed}
        alt=""
        priority
        placeholder="blur"
        className="rounded"
        sizes="10vw"
      /> */}
      <Image
        src={samoyed}
        alt=""
        priority
        placeholder="blur"
        className="rounded"
        sizes="(max-width: 640px) 100vw,
                (max-width: 1024px) 50vw, 
                33vw"
      />
      <Image
        src={samoyed}
        alt=""
        priority
        placeholder="blur"
        className="rounded"
        sizes="(max-width: 640px) 100vw,
                (max-width: 1024px) 50vw, 
                33vw"
      />
      <Image
        src={samoyed}
        alt=""
        priority
        placeholder="blur"
        className="rounded"
        sizes="(max-width: 640px) 100vw,
                (max-width: 1024px) 50vw, 
                33vw"
      />
    </div>
  );
};

export default ResponsiveFixedImage;
