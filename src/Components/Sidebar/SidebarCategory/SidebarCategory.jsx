import React from "react";

const SidebarCategory = ({ icon, name, counter }) => {
	return (
		<div className="sidebar__category hover:bg-gray-200  rounded-lg cursor-pointer flex items-center py-2 gap-4 pl-4 ">
			<img src={icon} alt="" />
			<p className="text-sm font-medium">{name}</p>
			<p>{counter}</p>
		</div>
	);
};

export default SidebarCategory;
