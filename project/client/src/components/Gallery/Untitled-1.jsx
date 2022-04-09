/*const [currentImage, setCurrentImage] = useState(0);
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

/*   const data = [
  { thumb: "img/portfolio/01-small.png", title: "Lorem Ipsum1" },
  { thumb: "img/portfolio/02-small.jpg", title: "Lorem Ipsum2" },
  { thumb: "img/portfolio/03-small.jpg", title: "Lorem Ipsum3" },
  { thumb: "img/portfolio/04-small.jpg", title: "Lorem Ipsum4" },
  { thumb: "img/portfolio/05-small.jpg", title: "Lorem Ipsum5" },
  { thumb: "img/portfolio/06-small.jpg", title: "Lorem Ipsum6" },
  { thumb: "img/portfolio/07-small.jpg", title: "Lorem Ipsum7" },
  { thumb: "img/portfolio/08-small.jpg", title: "Lorem Ipsum8" },
  { thumb: "img/portfolio/09-small.jpg", title: "Lorem Ipsum9" }
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
const Gallery = () => { 
return (
  <div id="gallery" className="text-center">
  <div className="container">
    <div className="section-title">
      <h2>Gallery</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
    </div>
    <div className="row">
      <div className="portfolio-items">
        {data.map(({ title, thumb }, index) => (
          <div key={index} onClick={() => openImageViewer(index)} className="col-sm-6 col-md-4 col-lg-4">
            <div className="portfolio-item cursor">
              <div className="hover-bg">
                <div className="hover-text">
                  <h4>{title}</h4>
                </div>
                <img src={thumb} className="img-responsive" alt="Project Title" />{" "}
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
);
}
export default Gallery;


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import React from "react";
import PhotoAlbum from  "react-photo-album";
//import ImageViewer from "react-simple-image-viewer";

/* const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

 const data = [
    { thumb: "img/portfolio/img1-small.jpg", title: "Lorem Ipsum1" },
    { thumb: "img/portfolio/img2-small.jpg", title: "Lorem Ipsum2" },
    { thumb: "img/portfolio/img3-small.jpg", title: "Lorem Ipsum3" },
    { thumb: "img/portfolio/img4-small.jpg", title: "Lorem Ipsum4" },
    { thumb: "img/portfolio/img5-small.jpg", title: "Lorem Ipsum5" },
    { thumb: "img/portfolio/img6-small.jpg", title: "Lorem Ipsum6" },
    { thumb: "img/portfolio/img7-small.jpg", title: "Lorem Ipsum7" },
    { thumb: "img/portfolio/img8-small.jpg", title: "Lorem Ipsum8" },
    { thumb: "img/portfolio/img9-small.jpg", title: "Lorem Ipsum9" },
  ]; 

  const data = [
  { thumb: "img/portfolio/01-small.png", title: "Lorem Ipsum1" },
  { thumb: "img/portfolio/02-small.jpg", title: "Lorem Ipsum2" },
  { thumb: "img/portfolio/03-small.jpg", title: "Lorem Ipsum3" },
  { thumb: "img/portfolio/04-small.jpg", title: "Lorem Ipsum4" },
  { thumb: "img/portfolio/05-small.jpg", title: "Lorem Ipsum5" },
  { thumb: "img/portfolio/06-small.jpg", title: "Lorem Ipsum6" },
  { thumb: "img/portfolio/07-small.jpg", title: "Lorem Ipsum7" },
  { thumb: "img/portfolio/08-small.jpg", title: "Lorem Ipsum8" },
  { thumb: "img/portfolio/09-small.jpg", title: "Lorem Ipsum9" }
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
          <div className="portfolio-items">
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
  );
};
export default Gallery; */
/*
const photos = [
  { thumb: "img/portfolio/img1-small.jpg", title: "Lorem Ipsum1" },
  { thumb: "img/portfolio/img2-small.jpg", title: "Lorem Ipsum2" },
  { thumb: "img/portfolio/img3-small.jpg", title: "Lorem Ipsum3" },
  { thumb: "img/portfolio/img4-small.jpg", title: "Lorem Ipsum4" },
  { thumb: "img/portfolio/img5-small.jpg", title: "Lorem Ipsum5" },
  { thumb: "img/portfolio/img6-small.jpg", title: "Lorem Ipsum6" },
  { thumb: "img/portfolio/img7-small.jpg", title: "Lorem Ipsum7" },
  { thumb: "img/portfolio/img8-small.jpg", title: "Lorem Ipsum8" },
  { thumb: "img/portfolio/img9-small.jpg", title: "Lorem Ipsum9" },
]; 

const images = photos.map((obj) => obj.thumb.replace("-small", "-large"));


const Gallery = () => { 
  return (
    <div className="text-center" id='gallery'>
      <div className="container">
        <div className="section-title">
        <h2>Gallery</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        </div>
        <PhotoAlbum layout="rows" photos={images} />
      </div>
    </div>
  )
}
export default Gallery;

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
//import JsonImages from '../../data/images.json';


const Gallery = ({imagesData}) => {


  return (
    <div className="text-center" id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div>
          <div className="row">
            <li className="portfolio-items">
              {imagesData?.map((image) => (
                <MDBCard style={{ maxWidth: "22rem" }} className="portfolio-item cursor">
                  <MDBCardImage image={image.img} className="hover-bg" />
                  <MDBCardBody>
                    <MDBCardTitle title={image.title}  className="hover-text"></MDBCardTitle>
                    <MDBCardText>Some text here</MDBCardText>
                    <MDBBtn href="#!">Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              ))}
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 <MDBCarousel showControls showIndicators>
          <MDBCarouselInner>
            <MDBCarouselItem className="active">
              <MDBCarouselElement
                src={img1}
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement
                src={img2}
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement
                src={img3}
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
{/* 
            <MDBCarouselItem>
              <MDBCarouselElement
                src={img4}
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Fourth slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement
                src={img5}
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Fifth slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement
                src={img6}
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Sixth slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement
                src={img7}
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Seventh slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement
                src={img8}
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Eighth slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement
                src={img9}
                alt="..."
              />
              <MDBCarouselCaption>
                <h5>Nineth slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem> 

            </MDBCarouselInner>
            </MDBCarousel>

/*const images= [
  {
      "img": "img/portfolio/img1-large.jpg",
      "title": "Lorem Ipsum1"
  },
  {
      "img": "img/portfolio/img2-large.jpg",
      "title": "Lorem Ipsum2"
  },
  {
      "img": "img/portfolio/img3-large.jpg",
      "title": "Lorem Ipsum3"
  },
  {
      "img": "img/portfolio/img4-large.jpg",
      "title": "Lorem Ipsum4"
  },
  {
      "img": "img/portfolio/img5-large.jpg",
      "title": "Lorem Ipsum5"
  },
  {
      "img": "img/portfolio/img6-large.jpg",
      "title": "Lorem Ipsum6"
  },
  {
      "img": "img/portfolio/img7-large.jpg",
      "title": "Lorem Ipsum7"
  },
  {
      "img": "img/portfolio/img8-large.jpg",
      "title": "Lorem Ipsum8"
  },
  {
      "img": "img/portfolio/img9-large.jpg",
      "title": "Lorem Ipsum9"
  }
];
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import React from "react";
import PhotoGrid from "react-photo-feed";
import "react-photo-feed/library/style.css";


/* import img1 from "../../img/portfolio/img1-small.jpg";
import img2 from "../../img/portfolio/img2-small.jpg";
import img3 from "../../img/portfolio/img3-small.jpg";
import img4 from "../../img/portfolio/img4-small.jpg";
import img5 from "../../img/portfolio/img5-small.jpg";
import img6 from "../../img/portfolio/img6-small.jpg";
import img7 from "../../img/portfolio/img7-small.jpg";
import img8 from "../../img/portfolio/img8-small.jpg";
import img9 from "../../img/portfolio/img9-small.jpg"; 

const images = [
  {
    id: 1,
    src: "img/portfolio/img1-large.jpg",
    title: "Lorem Ipsum1",
  },
  /* {
    id: 2,
    src: "https://apimocha.com/lpsample2app/get/2",
    title: "Lorem Ipsum2",
  },
  {
    id: 3,
    src: "img/portfolio/img3-large.jpg",
    title: "Lorem Ipsum3",
  },
  {
    src: "img/portfolio/img4-large.jpg",
    title: "Lorem Ipsum4",
  },
  {
    src: "img/portfolio/img5-large.jpg",
    title: "Lorem Ipsum5",
  },
  {
    src: "img/portfolio/img6-large.jpg",
    title: "Lorem Ipsum6",
  },
  {
    src: "img/portfolio/img7-large.jpg",
    title: "Lorem Ipsum7",
  },
  {
    src: "img/portfolio/img8-large.jpg",
    title: "Lorem Ipsum8",
  },
  {
    src: "img/portfolio/img9-large.jpg",
    title: "Lorem Ipsum9",
  }, 
];

const Gallery = () => {
  return (
    <div className="text-center" id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div>
          <PhotoGrid columns={3} photos={images} />
        </div>
      </div>
    </div>
  );
};
export default Gallery;

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 <>
      <section className="text-center" id="features">
        <h4 className="mb-5">
          <strong>Facilis consequatur eligendi</strong>
        </h4>

        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={img1} alt="..." className="img-fluid" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={img2} alt="..." className="img-fluid" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={img3} alt="..." className="img-fluid" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
        <>
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={img4} alt="..." className="img-fluid" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={img5} alt="..." className="img-fluid" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={img6} alt="..." className="img-fluid" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>

            </>
            <>
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={img7} alt="..." className="img-fluid" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={img8} alt="..." className="img-fluid" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={img9} alt="..." className="img-fluid" />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#!" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            </div>
            </>
          </div>
        </div>
      </section>
      <hr className="line"></hr>

      {/* <hr className="line"></hr>*
      </>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{
  "images": [
    {
      "id": "1",
      "src": "img/portfolio/img1-large.jpg",
      "title": "Lorem Ipsum1"
    },
    {
      "id": "2",
      "src": "img/portfolio/img1-small.jpg",
      "title": "Lorem Ipsum1"
    },
    {
      "id": "3",
      "src": "img/portfolio/img2-large.jpg",
      "title": "Lorem Ipsum2"
    },
    {
      "id": "4",
      "src": "img/portfolio/img2-small.jpg",
      "title": "Lorem Ipsum2"
    },
    {
      "id": "5",
      "src": "img/portfolio/img3-large.jpg",
      "title": "Lorem Ipsum3"
    },
    {
      "id": "6",
      "src": "img/portfolio/img3-small.jpg",
      "title": "Lorem Ipsum2"
    },

    {
      "id": "7",
      "src": "img/portfolio/img4-large.jpg",
      "title": "Lorem Ipsum4"
    },
    {
      "id": "8",
      "src": "img/portfolio/img4-small.jpg",
      "title": "Lorem Ipsum4"
    },
    {
      "id": "9",
      "src": "img/portfolio/img5-large.jpg",
      "title": "Lorem Ipsum5"
    },
    {
      "id": "10",
      "src": "img/portfolio/img5-small.jpg",
      "title": "Lorem Ipsum5"
    },
    {
      "id": "11",
      "src": "img/portfolio/img6-large.jpg",
      "title": "Lorem Ipsum6"
    },
    {
      "id": "12",
      "src": "img/portfolio/img6-small.jpg",
      "title": "Lorem Ipsum6"
    },
    {
      "id": "13",
      "src": "img/portfolio/img7-large.jpg",
      "title": "Lorem Ipsum7"
    },
    {
      "id": "14",
      "src": "img/portfolio/img7-small.jpg",
      "title": "Lorem Ipsum7"
    },
    {
      "id": "15",
      "src": "img/portfolio/img8-large.jpg",
      "title": "Lorem Ipsum8"
    },
    {
      "id": "16",
      "src": "img/portfolio/img8-small.jpg",
      "title": "Lorem Ipsum8"
    },
    {
      "id": "17",
      "src": "img/portfolio/img9-large.jpg",
      "title": "Lorem Ipsum9"
    },
    {
      "id": "18",
      "src": "img/portfolio/img9-small.jpg",
      "title": "Lorem Ipsum9"
    }
  ]
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import React from "react";
import ImageCard from "./Card";


let images = [
  {
    id: 1,
    src: "img/portfolio/img1-small.jpg",
    title: "Lorem Ipsum1",
  },
  {
    id: 2,
    src: "img/portfolio/img2-small.jpg",
    title: "Lorem Ipsum2",
  },
  {
    id: 3,
    src: "img/portfolio/img3-small.jpg",
    title: "Lorem Ipsum3",
  },
  {
    id: 4,
    src: "img/portfolio/img4-small.jpg",
    title: "Lorem Ipsum4",
  },
  {
    id: 5,
    src: "img/portfolio/img5-small.jpg",
    title: "Lorem Ipsum5",
  },
  {
    id: 6,
    src: "img/portfolio/img6-small.jpg",
    title: "Lorem Ipsum6",
  },
  {
    id: 7,
    src: "img/portfolio/img7-small.jpg",
    title: "Lorem Ipsum7",
  },
  {
    id: 8,
    src: "img/portfolio/img8-small.png",
    title: "Lorem Ipsum8",
  },
  {
    id: 9,
    src: "img/portfolio/img9-small.jpg",
    title: "Lorem Ipsum9",
  },
];

const Gallery = () => {
  return (
    <div className="text-center" id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <ul>
          {images?.map((image) => (
            <div className="container">
              <div className="row col-lg-4 col-md-6 mb-4">
                  <ImageCard key={image.id} src={image.src} title={image.title} />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Gallery;

*/
