import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import BASE_URL from "../BASE_URL/BASE_URL";
import Layout from "../Layout/Layout";
import userImg from "../../icons/user_icon.svg";
import Comments from "./Comments/Comments";

import likeIcon from "../../icons/like.svg";
import dislikeIcon from "../../icons/dislike.svg";
import shareIcon from "../../icons/share.svg";
import circleIcon from "../../icons/circle.svg";
import favouriteIcon from "../../icons/star_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
	FAVOURITE_HANDLER,
	REMOVE_HANDLER,
} from "../../store/typeConstants/typeConstants";

const SinglePage = () => {
	const { id } = useParams();
	const [videoData, setVideoData] = useState({});
	const [isError, setIsError] = useState(false);

	const [videos, setVideo] = useState([]);

	const { favouriteVideos } = useSelector((state) => state.favourite);
	const disppatch = useDispatch();

	function favouriteHandler(videoData) {
		let hasVideo = false;

		favouriteVideos.forEach((element) => {
			if (element.id === videoData.id) {
				hasVideo = true;
			}
		});

		if (hasVideo) {
			disppatch({ type: REMOVE_HANDLER, payload: videoData });
		} else {
			disppatch({ type: FAVOURITE_HANDLER, payload: videoData });
		}
	}

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch(BASE_URL + "products/" + id);

				if (res.status === 500) {
					throw new Error("Malumot topilmadi");
				}

				const data = await res.json();

				setVideoData(data);
			} catch (error) {
				setIsError(true);
			}
		};
		fetch(BASE_URL + "products")
			.then((res) => res.json())
			.then((data) => setVideo(data));

		getData();
	}, [id]);

	return (
		<Layout isSinglePage>
			{!isError ? (
				<div className="flex justify-between">
					<div className="video__content ml-16 w-7/12  mb-10 mt-24">
						<div className="video__img cursor-pointer">
							<img className="w-full h-96" src={videoData.image} alt="img" />
						</div>

						<div className="video__desc flex  gap-3 mt-3">
							<div className="video__user">
								<img className="rounded-xl w-12 cursor-pointer" src={userImg} alt="" />
							</div>

							<div className="video__text flex w-full justify-between">
								<div>
									<h3 className="font-medium cursor-pointer ">{videoData.title}</h3>
									<p className="text-sm">{videoData.description}</p>
									<p className="text-sm">{videoData.price}</p>
								</div>

								<div className="flex items-center justify-between">
									<img
										onClick={() => favouriteHandler(videoData)}
										className="w-5 mr-5 cursor-pointer hover:marker:bg-gray-900 "
										src={favouriteIcon}
										alt=""
									/>

									<img className="w-5 cursor-pointer" src={likeIcon} alt="" />
									<img className="w-5 cursor-pointer ml-4 mt-1" src={dislikeIcon} alt="" />

									<div className="flex items-center gap-1 ml-7 cursor-pointer">
										<img className="w-6 mt-1" src={shareIcon} alt="" />
										<p className="font-normal">Share</p>
									</div>

									<img className="w-5 ml-7 cursor-pointer" src={circleIcon} alt="" />
								</div>
							</div>
						</div>

						<div className="mt-10">
							<h1 className="font-bold">
								<span>13</span> Comments
							</h1>
						</div>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>

						<Comments
							userName={"John Doe"}
							avatar={userImg}
							text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ab."}
							likeIcon={likeIcon}
							dislikeIcon={dislikeIcon}
						/>
					</div>

					<div className="mt-24 pl-10">
						{videos.map((video) => (
							<Link key={video.id} to={"/single/" + video.id}>
								<div className="flex mb-5 justify-between cursor-pointer">
									<img className="w-36 rounded-md" src={video.image} alt="img" />
									<div className="w-full pl-5">
										<h4 className="font-bold">{video.title}</h4>
										<p>{video.description}</p>
										<p>{video.price}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			) : (
				<div className="mt-20 text-center">
					<p className="bg-red-400 font-mono text-white text-lg">!OOPS VIDEO NOT FOUND</p>
				</div>
			)}
		</Layout>
	);
};

export default SinglePage;
