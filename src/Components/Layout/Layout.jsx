import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children, isSinglePage }) => {
	return (
		<>
			<Header />

			{!isSinglePage ? (
				<div className="main__content flex overflow-hidden h-screen">
					<Sidebar />

					{children}
				</div>
			) : (
				children
			)}
		</>
	);
};

export default Layout;
