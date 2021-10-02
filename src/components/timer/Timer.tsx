import React, {useEffect, useState} from 'react';
import "./timer.scss"

interface DateTime {
	years: number,
	months: number,
	days: number,
	hours: number,
	minutes: number,
	seconds: number,
}

const emptyDate: DateTime = {
	years: 0,
	months: 0,
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,
};

const Timer = ({date, description}: { date: Date, description: string }) => {
	const [time, setTime] = useState<DateTime>(emptyDate);

	useEffect(() => {
		const updateTime = () => {
			//console.log("updateTime executed...")
			const now = new Date()
			const newTime = {...emptyDate};
			const msDiff = Math.abs(now.getTime() - date.getTime());
			newTime.seconds = Math.floor((msDiff % (1000 * 60)) / (1000));
			newTime.minutes = Math.floor((msDiff % (1000 * 60 * 60)) / (1000 * 60));
			newTime.hours = Math.floor((msDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			newTime.days = Math.floor((msDiff % (1000 * 60 * 60 * 24 * 31)) / (1000 * 60 * 60 * 24));
			newTime.months = Math.floor((msDiff % (1000 * 60 * 60 * 24 * 31 * 12)) / (1000 * 60 * 60 * 24 * 31));
			newTime.years = Math.floor(msDiff / (1000 * 60 * 60 * 24 * 31 * 12));
			setTime(newTime)
		}
		updateTime();
		const intervalRef = setInterval(updateTime, 1000);
		return () => {
			clearInterval(intervalRef);
		};
	}, [date]);

	const timeValues = Object.values(time);
	return (
		<div className={"timer-container"}>
			<div className="wrapper">
				{Object.keys(time).map((keyName, i) => (
					<div key={`${keyName}${timeValues[i]}`} className={"item-wrapper"}>
						<div className="number">{timeValues[i]}</div>
						<div className="name">{keyName}</div>
					</div>
				))}
			</div>
			<div className={"description"}>{description}</div>
		</div>
	);
}

export default Timer;