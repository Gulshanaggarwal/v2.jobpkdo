import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useModal = () => {
	const [isShowing, setIsShowing] = useState(false);
	const { loading } = useAuthContext();

	function toggle() {
		if (!loading) {
			setIsShowing(!isShowing);
		}
	}

	return { isShowing, toggle };
};

export default useModal;
