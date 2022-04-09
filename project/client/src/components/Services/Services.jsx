import React from "react";
import loading from "../../img/loading-line.gif";

const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>
            <strong>Our Services</strong>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={` ${d.name} - ${i}`} className="col-md-4">
                {" "}
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="loading-image">
              <img src={loading} alt="loading-line.gif" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
