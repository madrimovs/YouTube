import React, { useState } from "react";

const OpenSidebar = () => {
	const [isOpen, setIsOpen] = useState(true);

	isOpen === true ? setIsOpen(false) : setIsOpen(true);

	return <div>OpenSidebar</div>;
};

export default OpenSidebar;
