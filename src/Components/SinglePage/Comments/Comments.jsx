import React from "react";

const Comments = ({ userName, avatar, text, likeIcon, dislikeIcon }) => {
	return (
		<div className="ml-7 mt-5">
			<div className="sidebar__catego rounded-lg flex items-center py-2 gap-4">
				<img className="cursor-pointer" src={avatar} alt="" />
				<div>
					<h3 className="font-bold cursor-pointer">{userName}</h3>
					<p className="text-sm font-medium">{text}</p>
				</div>
			</div>

			<div className="flex ml-12">
				<img className="w-5 cursor-pointer" src={likeIcon} alt="" />
				<img className="w-5 cursor-pointer ml-4 mt-1" src={dislikeIcon} alt="" />
			</div>
		</div>
	);
};

export default Comments;
