import React from 'react';
import Home from "../components/home/Home";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import "./pages.scss"

const MainPage = () => {
	return (
		<div className={"page main"}>
			<Home/>
			<About/>
			<Projects/>
		</div>
	);
}

export default MainPage;