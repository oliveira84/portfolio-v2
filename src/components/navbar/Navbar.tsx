import React, {useContext, useEffect, useState} from 'react';
import "./navbar.scss";
import Switch from "../switch/Switch";
import {ThemeContext} from "../../context";
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"

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
					<li className={"link"}><HashLink to="/#home">home</HashLink></li>
					<li className={"link"}><HashLink to="/#about">about</HashLink></li>
					<li className={"link"}><HashLink to="/#projects">projects</HashLink></li>
					<li className={"link contact"}><Link to="/contact"><p>contact</p></Link>
					</li>
					<li><Switch/></li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;