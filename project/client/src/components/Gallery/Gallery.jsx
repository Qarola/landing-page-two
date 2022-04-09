import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

const Gallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/portfolio/img1-small.png", title: "Lorem Ipsum1" },
    { thumb: "img/portfolio/img2-small.png", title: "Lorem Ipsum2" },
    { thumb: "img/portfolio/img3-small.png", title: "Lorem Ipsum3" },
    { thumb: "img/portfolio/img4-small.png", title: "Lorem Ipsum4" },
    { thumb: "img/portfolio/img5-small.png", title: "Lorem Ipsum5" },
    { thumb: "img/portfolio/img6-small.png", title: "Lorem Ipsum6" },
    { thumb: "img/portfolio/img7-small.png", title: "Lorem Ipsum7" },
    { thumb: "img/portfolio/img8-small.png", title: "Lorem Ipsum8" },
    { thumb: "img/portfolio/img9-small.png", title: "Lorem Ipsum9" },
  ];

  const images = data.map((obj) => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <div id="gallery" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items  row row-cols-1 row-cols-sm-2 row-cols-md-4">
              {data.map(({ title, thumb }, index) => (
                <div
                  key={index}
                  onClick={() => openImageViewer(index)}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <div className="portfolio-item cursor">
                    <div className="hover-bg">
                      <div className="hover-text">
                        <h4>{title}</h4>
                      </div>
                      <img
                        src={thumb}
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {isViewerOpen && (
              <ImageViewer
                src={images}
                backgroundStyle={{ zIndex: 99999 }}
                currentIndex={currentImage}
                onClose={closeImageViewer}
              />
            )}
          </div>
        </div>
      </div>
      <hr className="line"></hr>
    </>
  );
};
export default Gallery;

//NOTA: la ruta img/portfolio se encuentra en la carpeta public, ahí se dee colocar para que a función funcione!
//Imagenes: la medida perfecta es: horizontal: 370 px y vertical: 248px para que queda la cuadrícula bien.
