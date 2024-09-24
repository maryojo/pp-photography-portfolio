import React, { useState } from 'react';

const ImageGallery = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleBtnClick = () => {
    setShowOverlay(true);
  };

  const handleCloseClick = () => {
    setShowOverlay(false);
  };

  return (
    <div className="desktop_2" unique-script-id="w-w-dm-id">
      <div className="Container">
        <div className="portfolio">
          <div className="above">
            <div className="project project-first">
              <img
                alt=""
                className="bigImg image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d11.png"
              />
              <div className={`overlay ${showOverlay ? 'block' : 'hidden'}`}>
                <div className="overlay-inner">
                  <button className="close" onClick={handleCloseClick}>
                    Close X
                  </button>
                  <div className="hdImgs">
                    <img
                      alt=""
                      className="againImg"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d11.png"
                    />
                  </div>
                </div>
              </div>
              <div className="btn-box" onClick={handleBtnClick}>
                <button className="btn">View</button>
              </div>
            </div>
            {/* Add other projects here */}
          </div>
          <div className="bottom">
            {/* Add bottom projects here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
