import React from "react";
import ParticlesBg from "particles-bg";
import loading from '../../img/loading-line.gif';


export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <ParticlesBg
          type="polygon"
          num={20}
          bg={{zIndex: -1, position: "absolute", top: 0, backgroundColor: "rgb(220,220,220, 0.3)" }}
          className="particle"
        />
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-md-offset-2 intro-text">
                <h1 className="title-header">
                  {props.data ? (
                    props.data.title
                  ) : (
                    <div className="loading-image">
                      <img src={loading} alt="loading-line.gif" />
                    </div>
                  )}
                  <span></span>
                </h1>
                <p className="paragraph">
                  {props.data ? props.data.paragraph : ((
                    <div className="loading-image">
                      <img src={loading} alt="loading-line.gif" />
                    </div>
                  ))}
                </p>
             <button type='button' className="btn-header"> 
                <a
                  href='#services'
                  className='btn-header page-scroll'
                >
                  <strong>Our services</strong>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
