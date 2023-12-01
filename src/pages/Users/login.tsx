import {
	Alert,
	Box,
	Button,
	Container,
	Link,
	TextField,
	Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { startSession } from "../../session";
import { signInUser } from "../../firebase/firebase";

export function Login() {
	const navigate = useNavigate();

	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// validate the inputs
		if (!email || !password) {
			setError("Please enter your username and password.");
			return;
		}

		setError("");

		try {
			let loginResponse = await signInUser(email, password);
			startSession(loginResponse.user);
			navigate("/projects");
		} catch (error) {
			console.error(error.message);
			setError(error.message);
		}
	};

	return (
		<Container
			maxWidth="xs"
			sx={{ mt: 2 }}>
			<Typography
				variant="h5"
				component="h1"
				gutterBottom
				textAlign="center">
				Login
			</Typography>
			{error && (
				<Alert
					severity="error"
					sx={{ my: 2 }}>
					{error}
				</Alert>
			)}
			<Box
				component="form"
				onSubmit={handleSubmit}>
				<TextField
					label="Email"
					variant="outlined"
					autoComplete="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					sx={{ mt: 1 }}
					fullWidth
				/>
				<TextField
					label="Password"
					variant="outlined"
					type="password"
					autoComplete="new-password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					sx={{ mt: 3 }}
					fullWidth
				/>
				<Button
					variant="contained"
					type="submit"
					sx={{ mt: 3 }}
					fullWidth>
					Login
				</Button>
				<Box sx={{ mt: 2 }}>
					Don't have an account yet? <Link href="/register">Register</Link>
				</Box>
			</Box>
		</Container>
	);
}
