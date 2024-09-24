import React from "react";
import gallery from "../../assets/gallery2x.png";

const BannerGallery = (props) => {
  return (
    <div className="px-5 md:px-10">
      <img src={gallery} className="mx-auto"/>
    </div>
  );
};

export default BannerGallery;
