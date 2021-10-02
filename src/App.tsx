import React, {useState} from 'react';
import Navbar from "./components/navbar/Navbar";
import "./global.scss"
import {ThemeContext} from "./context";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
	const [isDark, setIsDark] = useState<boolean>(false)

	const toggle = () => {
		setIsDark(!isDark);
	}

	return (
		<div className="App">
			<ThemeContext.Provider value={{isDark, toggle}}>
				<Navbar/>
				<Home/>
				<About/>
				<Projects/>
				<Contact/>

			</ThemeContext.Provider>
		</div>
	);
}

export default App;
