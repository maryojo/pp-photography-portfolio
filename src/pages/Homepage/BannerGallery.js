import React from "react";
import gallery from "../../assets/header-gallery.png";

const BannerGallery = (props) => {
  return (
    <div className="px-5 md:px-10">
      <img src={gallery} className="mx-auto"/>
      {/* <div className="grid grid-cols-3 gap-3 w-full mt-3">
      <div
       className="h-48 rounded-md">
      <img src="https://images.pexels.com/photos/20452012/pexels-photo-20452012/free-photo-of-woman-sitting-in-traditional-clothing-and-with-painting-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="rounded-md w-full h-full object-cover"/>
      </div>
      <div
       className="h-48 rounded-md">
      <img src="https://images.pexels.com/photos/20452012/pexels-photo-20452012/free-photo-of-woman-sitting-in-traditional-clothing-and-with-painting-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="rounded-md w-full h-full object-cover"/>
      </div>
      <div
       className="h-48 rounded-md">
      <img src="https://images.pexels.com/photos/20452012/pexels-photo-20452012/free-photo-of-woman-sitting-in-traditional-clothing-and-with-painting-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="rounded-md w-full h-full object-cover"/>
      </div>

      </div> */}
    </div>
  );
};

export default BannerGallery;
