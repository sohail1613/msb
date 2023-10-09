import React from "react";
import ImageA from "../assets/images/1.jpeg";

const Gallery = () => {
  const images = [];

  for (let i = 1; i <= 14; i++) {
    const imageUrl = require(`../assets/images/${i}.jpeg`);
    images.push(imageUrl);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-auto transform transition-transform group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity">
              <p className="text-white text-center absolute inset-x-0 bottom-4">
                {/* Image {index + 1} */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
