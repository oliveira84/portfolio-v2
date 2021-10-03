import React, {useEffect, useState} from 'react';
import Navbar from "./components/navbar/Navbar";
import "./global.scss"
import {ThemeContext} from "./context";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";

function App() {
	const [isDark, setIsDark] = useState<boolean>(true)

	useEffect(() => {
		const data = localStorage.getItem('data')
		if (data) {
			setIsDark(JSON.parse(data))
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(isDark))
	}, [isDark]);

	const toggle = () => {
		setIsDark(!isDark);
	}

	return (
		<div className="App">
			<ThemeContext.Provider value={{isDark, toggle}}>
				<BrowserRouter>
					<Navbar/>
					<Switch>
						<Route exact path={"/"}>
							<MainPage/>
						</Route>
						<Route exact path={"/contact"}>
							<ContactPage/>
						</Route>
						<Route path={"/"}>
							<div><h1>oops, page not found</h1></div>
						</Route>
					</Switch>
					<Footer/>
				</BrowserRouter>
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
