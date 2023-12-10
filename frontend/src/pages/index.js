// Filename - pages/index.js

import React from "react";
import './index.css';
function CourseCard({ imageUrl, title, text }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-2 text-dark">
      <div className="card">
        <a href="#">
          <img src={imageUrl} className="card-img-top" alt="..." />
        </a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary background2">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
function PersonCard({ imageUrl, name, username, socialLinks, websites }) {
  return (
    <div className="col-md-12 col-xl-4 mb-3 text-dark">
      <div className="card" style={{ borderRadius: '15px' }}>
        <div className="card-body text-center">
          <div className="mt-3 mb-4">
            <img src={imageUrl} className="rounded-circle img-fluid" style={{ width: '100px' }} alt="..." />
          </div>
          <h4 className="mb-2">{name}</h4>
          <p className="text-muted mb-4">@{username} | <a href="#!">{websites}</a></p>
          <div className="mb-4 pb-2">
            {socialLinks.map((link, index) => (
              <button key={index} type="button" className="btn btn-outline-primary btn-floating m-2">
                <i className={`fab ${link.icon} fa-lg`}></i>
              </button>
            ))}
          </div>
          <button type="button" className="btn btn-primary btn-rounded btn-lg background2">
            Message now
          </button>
          <div className="d-flex justify-content-between text-center mt-5 mb-2">
            <div>
              <p className="mb-2 h5">8471</p>
              <p className="text-muted mb-0">Interactions</p>
            </div>
            <div className="px-3">
              <p className="mb-2 h5">8512</p>
              <p className="text-muted mb-0">Prepared Students</p>
            </div>
            <div>
              <p className="mb-2 h5">4751</p>
              <p className="text-muted mb-0">Something</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componenta principală
function Home() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <hr />
      {/* Cursurile tale */}
      <div className="container rounded text-white pt-3 pb-3 mb-3 background ">
        <h2>Your courses</h2>
        <div className="row d-flex justify-content-center align-items-center h-100">
        <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
        
        </div>
      </div>
      <div className="container background rounded text-white p-3 mb-3">
        <h2>Connect with people</h2>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <PersonCard
            imageUrl="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
            name="Nume Prenume"
            username="Username"
            socialLinks={[
              { icon: 'fa-facebook-f' },
              { icon: 'fa-twitter' },
              { icon: 'fa-skype' },
            ]}
            websites={"website.com"}
          />
          <PersonCard
            imageUrl="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
            name="Nume Prenume"
            username="Username"
            socialLinks={[
              { icon: 'fa-facebook-f' },
              { icon: 'fa-twitter' },
              { icon: 'fa-skype' },
            ]}
            websites={"website.com"}
          />
          <PersonCard
            imageUrl="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
            name="Nume Prenume"
            username="Username"
            socialLinks={[
              { icon: 'fa-facebook-f' },
              { icon: 'fa-twitter' },
              { icon: 'fa-skype' },
            ]}
            websites={"website.com"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
