import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './courses.css';
function CourseCard({ imageUrl, title, text }) {
	return (
		<div className="col-4 mb-2 text-dark">
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
const MyCarousel = () => {
  return (
	<Container>
		<h1>Courses</h1>
      <hr />
	  <Container>
		<h2>Top Rated Courses</h2>
    <Carousel>
      <Carousel.Item>
		<div className="row">
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />

		</div>
	  </Carousel.Item>

      <Carousel.Item>
	  <div className="row">
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />

		</div>      </Carousel.Item>

      <Carousel.Item>
	  <div className="row">
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />

		</div>      </Carousel.Item>
    </Carousel>
	</Container>
	<Container>
		<h2>Recommended courses</h2>
    <Carousel>
      <Carousel.Item>
		<div className="row">
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />

		</div>
	  </Carousel.Item>

      <Carousel.Item>
	  <div className="row">
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />

		</div>      </Carousel.Item>

      <Carousel.Item>
	  <div className="row">
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
	  <CourseCard imageUrl="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&" title="Titlu curs" text="Some quick example text to build on the card title and make up the bulk of the card's content." />

		</div>      </Carousel.Item>
    </Carousel>
	</Container>
	</Container>
  );
};

export default MyCarousel;
