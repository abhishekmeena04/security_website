import React from "react";

const Gallery = () => {
  return (
    <>
      <h1>Gallery</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <div className="galleryimage h-[43vh] rounded w-11/13 overflow-hidden">
          <img
            class="h-80 max-w-full rounded-lg img"
            src="/gallery1.jpeg"
            alt=""
          />
        </div>
        <div className="galleryimage h-[43vh] rounded w-11/13 overflow-hidden">
          <img
            class="h-80 max-w-full rounded-lg img"
            src="/gallery6.jpeg"
            alt=""
          />
        </div>
        <div className="galleryimage h-[43vh] rounded w-11/13 overflow-hidden">
          <img
            class="h-80 max-w-full rounded-lg img"
            src="/gallery3.jpeg"
            alt=""
          />
        </div>
        <div className="galleryimage h-[43vh] rounded w-11/13 overflow-hidden">
          <img
            class="h-80 max-w-full rounded-lg img"
            src="/gallery4.jpeg"
            alt=""
          />
        </div>
        <div className="galleryimage h-[43vh] rounded w-11/13 overflow-hidden">
          <img
            class="h-80 max-w-full rounded-lg img"
            src="/gallery5.jpeg"
            alt=""
          />
        </div>
        <div className="galleryimage h-[43vh] rounded w-11/13 overflow-hidden">
          <img
            class="h-80 max-w-full rounded-lg img"
            src="/gallery2.jpeg"
            alt=""
          />
        </div>
        <div className="galleryimage h-[43vh] rounded w-11/13 overflow-hidden">
          <img
            class="h-80 max-w-full rounded-lg img"
            src="/gallery7.jpeg"
            alt=""
          />
        </div>
        <div className="galleryimage h-[43vh] rounded w-11/13 overflow-hidden">
          <img
            class="h-80 max-w-full rounded-lg img"
            src="/gallery8.jpeg"
            alt=""
          />
        </div>
        <div className="galleryimage h-[43vh] rounded w-11/13 overflow-hidden">
          <img
            class="h-80 max-w-full rounded-lg img"
            src="/gallery9.jpeg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
