import React from "react";
import Layout from "../Layout/Layout";

import userImg from "../../icons/user_icon.svg"

const MyChannel = () => {
	return (
		<Layout>
			<div className="mx-20 flex justify-center items-center">
            <img className="w-24" src={ userImg } alt="" />
            <div>
               <h1 className="font-bold">John Doe</h1>
            </div>
			</div>
		</Layout>
	);
};

export default MyChannel;
