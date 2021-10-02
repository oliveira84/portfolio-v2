import React, {useContext} from 'react';
import "./switch.scss"

import {Brightness2, Brightness5} from "@material-ui/icons";
import {ThemeContext} from "../../context";

const Switch = () => {
	const {isDark, toggle} = useContext(ThemeContext);
	return (
		<div className={`switch ${isDark && "on"}`}
		onClick={toggle}>
			<Brightness2 className={"dark"}/>
			<span className={`slider ${isDark && "on"}`}/>
			<Brightness5 className={"bright"}/>
		</div>
	);
}

export default Switch;