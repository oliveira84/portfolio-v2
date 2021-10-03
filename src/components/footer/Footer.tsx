import React, {useContext} from 'react';
import Switch from "../switch/Switch";
import {ThemeContext} from "../../context";
import "./footer.scss"
import {Facebook, GitHub, LinkedIn} from "@material-ui/icons";


const Footer = () => {
	const {isDark} = useContext(ThemeContext);
	return (
		<div className={`footer-wrapper ${isDark && "dark"}`}>
			<footer>
				<a href={"https://github.com/oliveira84"} target="_blank" rel="noopener noreferrer"><Facebook className={"icon"}/></a>
				<a href={"https://github.com/oliveira84"} target="_blank" rel="noopener noreferrer"><LinkedIn className={"icon"}/></a>
				<a href={"https://github.com/oliveira84"} target="_blank" rel="noopener noreferrer"><GitHub className={"icon"}/></a>
				<div className="icon">
					<Switch/>
				</div>
			</footer>
		</div>
	);
}

export default Footer;