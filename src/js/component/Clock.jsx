import React, { useState } from "react";

const Clock = () => {
	const [time, setTime] = useState(new Date());
	return (
		<>
			<div className="clock">
				<div>{time.getHours()}</div>
				<div>{time.getMinutes()}</div>
				<div>{time.getSeconds()}</div>
			</div>
		</>
	);
};

export default Clock;
