import React from "react";
import { Recommended } from "../Recommended/Recommended";
import { Sidebar } from "../Sidebar/Sidebar";

export const Main = () => {
	return (
		<main>
			<div className="main__content flex overflow-hidden h-screen">
				<Sidebar />
				<Recommended />
			</div>
		</main>
	);
};
