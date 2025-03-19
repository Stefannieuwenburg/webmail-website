import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

/**
 * This component renders a contact form with an image next to it.
 */
function ContactForm() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white flex justify-center items-center"
    >
      <div className="container">
        <p className="text-center mt-10">
          <h1 className="text-3xl text-secondary">Contact Me</h1>
        </p>
        <div className="row align-items-center">
          {/* Linker sectie met afbeelding */}
          <div className="col-md-6">
            <div className="shadow-lg">
              <img
                className="rounded-lg w-100"
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
                alt="Achtergrond afbeelding"
              />
            </div>
          </div>

          {/* Rechter sectie met contactformulier */}
          <div className="col-md-6">
            <form>
              <input
                type="text"
                name="name"
                placeholder="Enter your company name or your contact name"
                className="form-control"
                required
              />
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-control"
                  required
                />
                <small className="text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message here..."
                  rows="6"
                  className="form-control"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
