import { useState } from "react";

const useModal = () => {
	const [isShowing, setIsShowing] = useState(false);

	function toggle() {
		console.log("hello");
		setIsShowing(!isShowing);
	}

	return { isShowing, toggle };
};

export default useModal;
