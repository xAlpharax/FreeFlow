// Filename - App.js

import React from "react";
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from "./components/Navbar";
import Footer from "./Footer";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Courses from "./pages/courses";
import Contact from "./pages/contact";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route path="/courses" element={<Courses />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
