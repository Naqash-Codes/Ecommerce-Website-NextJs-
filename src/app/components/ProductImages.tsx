"use client";

import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/19880784/pexels-photo-19880784.jpeg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/31115390/pexels-photo-31115390.jpeg",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/30796261/pexels-photo-30796261.jpeg",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/29251113/pexels-photo-29251113.jpeg",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative ">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, index) => (
          <div
            key={img.id}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            onClick={() => setIndex(index)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
