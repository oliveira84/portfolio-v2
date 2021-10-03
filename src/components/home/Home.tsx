import React, {useContext} from 'react';
import "./home.scss"
import {ThemeContext} from "../../context";


const Home = () => {
	const {isDark} = useContext(ThemeContext);
	return (
		<div className={`home-container ${isDark && "dark"}`}>
			<div className={"wrapper"}>
				<p>Hi, my name is</p>
				<h1 className="glitch" data-text="Daniel Oliveira">Daniel Oliveira</h1>

				<h2>Im a Front-end Developer.</h2>
				<div className="scanlines"/>
			</div>
		</div>
	);
}

export default Home;