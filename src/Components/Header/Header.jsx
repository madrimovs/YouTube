import React from "react";
import menuSvg from "../../icons/burger_menu.svg";
import logo from "../../icons/logo_black.svg";
import searchIcon from "../../icons/search_icon.svg";
import cameraIcon from "../../icons/camera_icon.svg";
import combinedIcon from "../../icons/combined_icon.svg";
import callIcon from "../../icons/call_icon.svg";
import userIcon from "../../icons/user_icon.svg";

export const Header = () => {
	return (
		<div className="header flex justify-between items-center p-4 fixed top-0 left-0 right-0 bg-white">
			<div className="header__logo flex items-center gap-5">
				<img className="w-4 cursor-pointer" src={menuSvg} alt="" />
				<img src={logo} alt="" />
			</div>

			<div className="header__search">
				<form className="flex items-center relative">
					<input
						className="bg-zinc-100 pl-4 p-1 rounded-l-3xl w-96"
						type="search"
						name="search"
						placeholder="Search"
					/>
					<img
						className="cursor-pointer w-8 p-2 bg-zinc-200 rounded-r-3xl absolute left-80 ml-16"
						src={searchIcon}
						alt="search"
					/>
				</form>
			</div>

			<div className="header__icons flex items-center gap-4">
				<img className="cursor-pointer w-5" src={cameraIcon} alt="" />
				<img className="cursor-pointer w-4" src={combinedIcon} alt="" />
				<img className="cursor-pointer w-4" src={callIcon} alt="" />
				<img className="cursor-pointer w-9" src={userIcon} alt="" />
			</div>
		</div>
	);
};
