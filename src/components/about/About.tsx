import React, {useContext, useState} from 'react';
import "./about.scss";
import {ThemeContext} from "../../context";
import Timer from "../timer/Timer";

interface Me {
	id: number;
	title: string;
	description: string;
	startDate: string;
}

const data: Me[] = [
	{
		id: 0,
		title: "about me",
		description: "I am 37 years old, live in Arcos de Valdevez, always had a passion for programming and am looking for a job as a front-end developer.",
		startDate: "",
	},
	{
		id: 1,
		title: "highSchool",
		description: "Escola Secundária Tomás de Figueiredo in Arcos de valdevez.",
		startDate: "01 Jun 2003",
	},
	{
		id: 2,
		title: "degree",
		description: "I'm currently taking a degree in computer engineering at Universidade Aberta from Lisbon, and have one more year to go.",
		startDate: "01 Oct 2019",
	},
	{
		id: 3,
		title: "experience",
		description: "As a system administrator, I was responsible for the installation and maintenance of Computer systems and networks from multiple local business.",
		startDate: '01 Oct 2006',
	},
	{
		id: 4,
		title: "front-end",
		description: "In order to try to get a job as developer, in the past year I have been studying and practicing multiple technologies such as html, css, javascript, react, sass, styled-components...  ",
		startDate: '01 Jun 2020',
	},
];

const About = () => {
	const [dataId, setDataId] = useState(0)
	const {isDark} = useContext(ThemeContext);
	return (
		<div key={data[dataId].id} className={`about-container  ${isDark && "dark"}`}>
			<div className="wrapper">
				<h2 className={"title"}>About me</h2>
				<div className="items-wrapper">
					<div className="left">
						<ul>
							{data.map((item) =>
								<li
									key={item.id}
									onMouseEnter={() => setDataId(item.id)}
									onClick={() => setDataId(item.id)}>
									<h3 className={(item.id === dataId) ? "selected" : ""}>{item.title}</h3>
								</li>)}
						</ul>
					</div>
					<div className="separator"/>
					<div className="right">
						{<p>{data[dataId].description}</p>}
						{data[dataId].startDate &&
            <div className={"since"}>{<Timer date={new Date(data[dataId].startDate)}
						                                 description={"since then"}/>}</div>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;