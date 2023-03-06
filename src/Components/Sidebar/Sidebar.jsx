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
import SidebarCategory from "./SidebarCategory/SidebarCategory";
import ChannelList from "./ChannelList/ChannelList";
import { useState } from "react";

const Sidebar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div
			className={` ${
				open ? "w-0" : "w-56"
			} sidebar w-56 h-screen mt-16 pb-44 bg-white overflow-auto `}
		>
			<div className="sidebar__categories mb-3">
				<SidebarCategory icon={homeIcon} name={"Home"} />
				<SidebarCategory icon={trendingIcon} name={"Trending"} />
				<SidebarCategory icon={subscribtionIcon} name={"Subscriptions"} />
			</div>

			<hr className="h-0.5 bg-zinc-400" />

			<div className="sidebar__categories mt-3 mb-3 ">
				<SidebarCategory icon={libraryIcon} name={"Library"} />
				<SidebarCategory icon={historyIcon} name={"History"} />
				<SidebarCategory icon={watchIcon} name={"Watch later"} />
				<SidebarCategory icon={starIcon} name={"Favourites"} />
				<SidebarCategory icon={likeIcon} name={"Liked videos"} />
				<SidebarCategory icon={musicIcon} name={"Music"} />
				<SidebarCategory icon={gamesIcon} name={"Games"} />
				<SidebarCategory icon={vectorIcon} name={"Show more"} />
			</div>

			<hr className="h-0.5 bg-zinc-400" />

			<div className="sidebar__categories mt-8">
				<h4 className="pl-4 mb-3 font-bold">Subscriptions</h4>

				<ChannelList avatar={userIcon} name={"Gussie Singleton"} />
				<ChannelList avatar={userIcon} name={"Nora Francis"} />
				<ChannelList avatar={userIcon} name={"Belle Briggs"} />
				<ChannelList avatar={userIcon} name={"Gussie Singleton"} />
			</div>
		</div>
	);
};

export default Sidebar;
