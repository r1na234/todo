import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createUser, writeUserData } from "../../firebase/firebase";
import { startSession } from "../../session";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}>
			{"Copyright © "}
			<Link
				color="inherit"
				href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export function Register() {
	const navigate = useNavigate();
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email")?.toString();
		const password = data.get("password")?.toString();

		try {
			if (email && password) {
				let registerResponse = await createUser(email, password);
				startSession(registerResponse.user);
				const auth = getAuth();
				const userId = auth?.currentUser?.uid;
				console.log("Your access token is: " + userId);
				writeUserData(userId, email);

				navigate("/projects");
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container
				component="main"
				maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
					<Typography
						component="h1"
						variant="h5">
						Sign up
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}>
						<Grid
							container
							spacing={2}>
							<Grid
								item
								xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
								/>
							</Grid>
							<Grid
								item
								xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}>
							Sign Up
						</Button>
						<Grid
							container
							justifyContent="flex-end">
							<Grid item>
								<Link
									href="#"
									variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
}
