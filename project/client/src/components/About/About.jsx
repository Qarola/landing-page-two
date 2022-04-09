import React from "react";
import image21 from "../../img/image21.PNG"
import loading from "../../img/loading-line.gif";

const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <div
                  className="bg-image hover-overlay ripple shadow-2-strong"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={image21}
                    alt="b-day cake"
                    className="img-fluid shadow-3-strong"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>    
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text style={{marginTop:1.5rem}}">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data ? (
                      props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    ) : (
                      <div className="loading-image">
                        <img src={loading} alt="loading-line.gif" />
                      </div>
                    )}
                  </ul>
                </div>
              {/*   <div className="col-lg-9 col-sm-9 col-xs-12">
                  <ul>
                    {props.data ? (
                      props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                    ) : (
                      <div className="loading-image">
                        <img src={loading} alt="loading-line.gif" />
                      </div>
                    )} 
                  </ul>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
