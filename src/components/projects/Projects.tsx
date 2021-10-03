import React, {useContext, useState} from 'react';
import "./projects.scss"
import {ThemeContext} from "../../context";
import {ChevronLeft, ChevronRight, GitHub, LanguageRounded} from "@material-ui/icons";

interface Proj {
	id: number;
	title: string;
	description: string;
	technologies: string;
	img: string;
	live: string;
	git: string;
}

const frontendProjects: Proj[] = [
	{
		id: 0,
		title: "Popcorn Time",
		description: "A Movies and Tv shows that shows information about the last trends by category, all the data is fetched from the TMDB api.",
		technologies: "React, styled-components, material-ui.",
		img: "https://d33wubrfki0l68.cloudfront.net/613b394ce092cdbf940e4898/screenshot_2021-09-10-10-54-06-0000.png",
		live: "https://popcorntime.netlify.app/",
		git: "https://github.com/oliveira84/popcornTime",
	},
	{
		id: 1,
		title: "World Covid Tracker",
		description: "A Dashboard that shows the daily cases by country of the covid pandemic, all the data is fetched from Disease.sh api.",
		technologies: "React, styled-components, material-ui, chart.js, leaflet.",
		img: "https://d33wubrfki0l68.cloudfront.net/612a7aeeeb3f35d96f49043c/screenshot_2021-08-28-18-05-36-0000.png",
		live: "https://world-covid19-stats.netlify.app",
		git: "https://github.com/oliveira84/covid19-tracker",
	},
	{
		id: 2,
		title: "Sorting algorithms visualisation",
		technologies: "Javascript, css, html.",
		description: "A visual representation from some of the most famous sorting algorithms such as quick sort, merge sort, bubble sort, ...",
		img: "/assets/sorting.png",
		live: "https://oliveira84.github.io/sorting/",
		git: "https://github.com/oliveira84/sorting",
	},
	{
		id: 3,
		title: "Portuguese Radio Search",
		description: "A Movies and Tv shows that shows the last trends.",
		technologies: "React, styled-components, radio-browser-api.",
		img: "https://d33wubrfki0l68.cloudfront.net/61220f8ab800f67a88219694/screenshot_2021-08-22-08-49-16-0000.png",
		live: "https://radio-search.netlify.app/",
		git: "https://github.com/oliveira84/radios",
	},
	{
		id: 4,
		title: "Movie Search - React App",
		description: "A Movies and Tv shows that shows the last trends ",
		technologies: "React, styled-components",
		img: "https://d33wubrfki0l68.cloudfront.net/6121129f16ea33077e13aad6/screenshot_2021-08-21-14-50-08-0000.png",
		live: "https://movies-search-2021.netlify.app",
		git: "https://github.com/oliveira84/moviesSearch",
	},
];

const Projects = () => {
	const [projectId, setProjectId] = useState(0)
	const {isDark} = useContext(ThemeContext);
	return (
		<div className={`projects-container  ${isDark && "dark"}`}>
			<div className="wrapper">
				<h2 className={"title"}>Projects</h2>
				<div className="items-wrapper">
					<div className={"slider"} style={{left: `calc(${-projectId * 100}vw)`}}>
						{frontendProjects.map((item) => (
							<div key={item.id} className="item-wrapper">
								<div className="left">
									<img src={item.img} alt=""/>
								</div>
								<div className="right">
									<h2>{item.title}</h2>
									<p>{item.description}</p>
									<p>Technologies: {item.technologies}</p>
									<a href={item.live} target="_blank" rel="noopener noreferrer"><LanguageRounded className={"icon"}/> </a>
									<a href={item.git} target="_blank" rel="noopener noreferrer"><GitHub className={"icon"}/></a>
								</div>
							</div>))}
					</div>
				</div>
				<div className="slider-control">
					<ChevronLeft
						className={"chevron"}
						onClick={() => setProjectId(((projectId > 0) ? (projectId - 1) : (frontendProjects.length - 1)))}/>
					{frontendProjects.map((item) => (
						<div
							key={item.id}
							onClick={() => setProjectId(item.id)}
							className={`circle ${(projectId === item.id) && "selected"}`}/>
					))}
					<ChevronRight
						className={"chevron"}
						onClick={() => setProjectId(((projectId + 1) % frontendProjects.length))}/>
				</div>
			</div>
		</div>
	);
}

export default Projects;