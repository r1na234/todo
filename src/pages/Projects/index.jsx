import { useEffect } from "react";
import { endSession, getSession, isLoggedIn } from "../../session";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

export function Projects() {
	const navigate = useNavigate();
	useEffect(() => {
		if (!isLoggedIn()) {
			navigate("/login");
		}

		let session = getSession();
		// eslint-disable-next-line no-undef
		//setEmail(session.email);
	}, [navigate]);
	const auth = getAuth();

	useEffect(() => {
		const unsub = auth.onAuthStateChanged((authObj) => {
		  unsub();
		  if (authObj) {
			const userId = auth.currentUser.uid;
			console.log("Your access token is: " + userId);
		  } else {
			console.log("not ready")
		  }
		});
	  }, []);
	
	const onLogout = () => {
		endSession();
		navigate("/login");
	};

	return (<h1>Projects
	</h1>);
}