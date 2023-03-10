import React from "react";
import { useSelector } from "react-redux";

import Layout from "../Layout/Layout";

const Favourite = () => {
	const { favouriteVideos } = useSelector((state) => state.favourite);

	return (
		<Layout>
			<div>
				<div className="mt-24 pl-10">
					{favouriteVideos.map((video) => (
						<div key={video.id} className="flex mb-5 justify-between cursor-pointer">
							<img className="w-56 rounded-md" src={video.image} alt="img" />
							<div className="w-full pl-5">
								<h4 className="font-bold">{video.title}</h4>
								<p>{video.description}</p>
								<p>{video.price}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Favourite;
