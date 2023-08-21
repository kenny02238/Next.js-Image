import React from "react";
import Image from "next/image";
const ResponsiveFillImage = () => {
  return (
    <figure className="relative w-full h-96">
      <Image
        src="https://images.unsplash.com/photo-1482192505345-5655af888cc4"
        alt=""
        fill
        className="object-cover"
      />
    </figure>
  );
};

export default ResponsiveFillImage;
