import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userImg from "../../icons/user_icon.svg";
import BASE_URL from "../BASE_URL/BASE_URL";
import VideoContent from "./VideoContent/VideoContent";

const Recommended = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetch(BASE_URL + "products")
			.then((res) => res.json())
			.then((data) => {
				setVideos(data);
			});
	}, []);

	return (
		<div className="videos bg-zinc-100  w-full mt-16  px-5 pt-2 pb-28 overflow-auto">
			<h1 className="font-bold mb-4 ">Recommended</h1>
			<div className="videos__content flex justify-around flex-row flex-wrap gap-2">
				{videos.map((video) => (
					<Link key={video.id} to={"/single/" + video.id}>
						<VideoContent
							video={video.image}
							avatar={userImg}
							title={video.title}
							author={video.description}
							date={video.price}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Recommended;
