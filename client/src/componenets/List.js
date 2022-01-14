import React from "react";
import CenterCard from "./CenterCard";
import Home from "./Home";
import LeadGen from "./LeadGen";

function List({ abc }) {
	console.log(abc);
	return (
		<div>
			{/* <Home /> */}
			{/* <CenterCard /> */}
			{abc.map((value) => {
				return (
					// <LeadGen />
					console.log("You are registered now")
				);
			})}
		</div>
	);
}

export default List;
