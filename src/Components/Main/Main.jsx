import React from "react";
import Recommended from "../Recommended/Recommended";
import Layout from "../Layout/Layout";

const Main = () => {
	return (
		<Layout isSinglePage={false}>
			<Recommended />
		</Layout>
	);
};

export default Main;
