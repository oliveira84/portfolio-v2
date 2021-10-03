import React, {useContext, useEffect, useState} from 'react';
import "./navbar.scss";
import Switch from "../switch/Switch";
import {ThemeContext} from "../../context";

const Navbar = () => {
	const {isDark} = useContext(ThemeContext);
	const [shadow, setShadow] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > 100) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleScroll, {passive: true});
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className={`container ${isDark && "dark"} ${(shadow && isDark) ? "shadow-dark" : shadow && "shadow-bright"}`}>
			<div className={"wrapper"}>
				<ul className={"menu"}>
					<li className={"link"}><a href="#home">home</a></li>
					<li className={"link"}><a href="#about">about</a></li>
					<li className={"link"}><a href="#projects">projects</a></li>
					<li className={"link"}>contact</li>
					<li><Switch/></li>

				</ul>
			</div>
		</div>
	);
}

export default Navbar;