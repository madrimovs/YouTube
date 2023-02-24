import React from "react";
import homeIcon from "../../icons/home_icon.svg";
import trendingIcon from "../../icons/trending_icon.svg";
import subscribtionIcon from "../../icons/subscription_icon.svg";
import libraryIcon from "../../icons/library_icon.svg";
import historyIcon from "../../icons/history_icon.svg";
import watchIcon from "../../icons/watch_icon.svg";
import starIcon from "../../icons/star_icon.svg";
import likeIcon from "../../icons/like_icon.svg";
import musicIcon from "../../icons/music_icon.svg";
import gamesIcon from "../../icons/games_icon.svg";
import vectorIcon from "../../icons/vector_bottom.svg";
import userIcon from "../../icons/user_icon.svg";

export const Sidebar = () => {
	return (
		<div className="sidebar w-48 h-screen mt-14 pb-44 bg-white overflow-x-scroll ">
			<div className="sidebar__categories mb-3">
				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2 gap-4 pl-4 ">
					<img src={homeIcon} alt="" />
					<p className="text-sm font-medium">Home</p>
				</div>

				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2 gap-4 pl-4 ">
					<img src={trendingIcon} alt="" />
					<p className="text-sm font-medium">Trending</p>
				</div>

				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2  gap-4 pl-4 ">
					<img src={subscribtionIcon} alt="" />
					<p className="text-sm font-medium">Subscriptions</p>
				</div>
			</div>

			<hr className="h-0.5 bg-zinc-400" />

			<div className="sidebar__categories mt-3 mb-3 ">
				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2 gap-4 pl-4 ">
					<img src={libraryIcon} alt="" />
					<p className="text-sm font-medium">Library</p>
				</div>

				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2 gap-4 pl-4 ">
					<img src={historyIcon} alt="" />
					<p className="text-sm font-medium">History</p>
				</div>

				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2  gap-4 pl-4 ">
					<img src={watchIcon} alt="" />
					<p className="text-sm font-medium">Watch later</p>
				</div>

				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2  gap-4 pl-4 ">
					<img src={starIcon} alt="" />
					<p className="text-sm font-medium">Favourites</p>
				</div>

				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2  gap-4 pl-4 ">
					<img src={likeIcon} alt="" />
					<p className="text-sm font-medium">Liked videos</p>
				</div>

				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2  gap-4 pl-4 ">
					<img src={musicIcon} alt="" />
					<p className="text-sm font-medium">Music</p>
				</div>

				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2  gap-4 pl-4 ">
					<img src={gamesIcon} alt="" />
					<p className="text-sm font-medium">Games</p>
				</div>

				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2  gap-4 pl-4 ">
					<img src={vectorIcon} alt="" />
					<p className="text-sm font-medium">Show more</p>
				</div>
			</div>

			<hr className="h-0.5 bg-zinc-400" />

			<div className="sidebar__categories mt-8">
				<h4 className="pl-4 mb-3 font-bold">Subscriptionsc</h4>

				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2 gap-4 pl-4">
					<img src={userIcon} alt="" />
					<p className="text-sm  font-medium">Gussie Singleton</p>
				</div>

				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2 gap-4 pl-4 ">
					<img src={userIcon} alt="" />
					<p className="text-sm font-medium">Nora Francis</p>
				</div>

				<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2  gap-4 pl-4 ">
					<img src={userIcon} alt="" />
					<p className="text-sm font-medium">Belle Briggs</p>
				</div>
			</div>
		</div>
	);
};
