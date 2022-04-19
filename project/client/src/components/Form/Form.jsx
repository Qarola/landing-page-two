import React from "react";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";

const Form = () => {
  return (
    <>
      <main className="mt-5" id="contact">
        <div className="container ctn-form">
          <section class="mb-5">
            <h4 className="mb-5 text-center title-form">
              <strong>Send Us a message</strong>
            </h4>

            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <form
                  action="https://formspree.io/f/mbjwaevy"
                  method="POST"
                  className="contactForm"
                >
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <MDBInput
                          label="First Name"
                          id="form1"
                          type="text"
                          name="firstname"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline">
                        <MDBInput
                          label="Last Name"
                          id="form1"
                          type="text"
                          name="lastname"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email input  */}
                  <div className="form-outline mb-4">
                    <MDBInput
                      label="Email address"
                      id="typeEmail"
                      type="email"
                      name="email"
                    />
                  </div>
                  {/* Password input  */}
                  <div className="form-outline mb-4">
                    <MDBTextArea
                      label="Message"
                      id="textAreaExample"
                      rows={4}
                      name="message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-block mb-4 btn-submit"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
        <a
          href="https://wa.me/573145648859"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </main>
      <hr className="line"></hr>
    </>
  );
};

export default Form;
