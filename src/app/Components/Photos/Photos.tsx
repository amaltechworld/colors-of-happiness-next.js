import React from "react";
import Image from "next/image";

const topImages = [
    { src: "/photos/photo-img1.jpeg", alt: "Quates-wedding-img-top-1" },
    { src: "/photos/photo-img2.jpeg", alt: "Quates-wedding-img-top-2" },
    { src: "/photos/photo-img3.jpeg", alt: "Quates-wedding-img-top-3" },
    { src: "/photos/photo-img4.jpeg", alt: "Quates-wedding-img-top-4" },
];

const bottomImages = [
    { src: "/photos/photo-img5.jpeg", alt: "Quates-wedding-img-bottom-1" },
    { src: "/photos/photo-img6.jpeg", alt: "Quates-wedding-img-bottom-2" },
    { src: "/photos/photo-img7.jpeg", alt: "Quates-wedding-img-bottom-3" },
    { src: "/photos/photo-img8.jpeg", alt: "Quates-wedding-img-bottom-4" },
];

const Photos = () => {
  return (
      <section className="bg-white h-auto lg:h-screen lg:snap-start flex flex-col justify-between">
          {/* Top Images */}
          <div className="grid grid-cols-4 gap-4 p-1">
              {topImages.map((img) => (
                  <div
                      key={img.src}
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"
                  >
                      <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover object-center rounded-lg transition duration-500 ease-in-out filter grayscale hover:filter-none"
                      />
                  </div>
              ))}
          </div>

          {/* Blockquote */}
          <blockquote className="sm:text-2xl md:text-3xl py-4 m-0 italic font-light text-center text-[#561C24]">
              <p className="split-1 leading-normal">
                  Colors are the sparks <br />
                  that <br />
                  ignite creativity
              </p>
          </blockquote>

          {/* Bottom Images */}
          <div className="grid grid-cols-4 gap-4 p-1">
              {bottomImages.map((img) => (
                  <div
                      key={img.src}
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"
                  >
                      <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover object-center rounded-lg transition duration-500 ease-in-out filter grayscale hover:filter-none"
                      />
                  </div>
              ))}
          </div>
      </section>
  );
};

export default Photos;