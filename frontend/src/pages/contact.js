// Contact.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h1>Contact us</h1>
		<hr />
        <p className="text-center w-75 m-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum purus at sem ornare sodales. Morbi
          leo nulla, pharetra vel felis nec, ullamcorper condimentum quam.
        </p>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 my-5">
            <div className="card border-0">
              <div className="card-body text-center">
                <i className="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                <h4 className="text-uppercase mb-5">Call us</h4>
                <p>+8801683615582</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-5">
            <div className="card border-0">
              <div className="card-body text-center">
                <i className="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                <h4 className="text-uppercase mb-5">Office location</h4>
                <address>New York, NY 10012, US</address>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 my-5">
            <div className="card border-0">
              <div className="card-body text-center">
                <i className="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                <h4 className="text-uppercase mb-5">Email</h4>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
