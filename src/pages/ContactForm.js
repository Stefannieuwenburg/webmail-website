import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./ContactForm.css";
/**
 * This component renders a contact form with a background image.
 * It accepts no props.
 */
function ContactForm() {
  return (
    <div className="contact3 py-5">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-shadow">
                <img
                  className="contact-form-background-image"
                  src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
                  alt="foto"/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box ml-3">
                <h1 className="font-weight-light mt-2">Quick Contact</h1>
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Name"
                          //TODO: add input validation
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email address"
                          //TODO: add input validation
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Phone"
                          //TODO: add input validation
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Message"
                          //TODO: add input validation
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                      >
                        <span>SUBMIT</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
