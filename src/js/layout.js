import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

// Importing views*/
import { Home } from "./views/home";
import { CreateAccount } from "./views/createAccount";
import { LogIn } from "./views/logIn";
import { UserProfile } from "./views/userProfile";
import { AboutUs } from "./views/aboutUs";
import { JobFeed } from "./views/jobFeed";
import { JobView } from "./views/jobView";
import { JobPosting } from "./views/jobPosting";

// Importing components*/
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Terms } from "./views/terms";

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="page-container d-flex flex-column h-100">
			<div className="content-wrap">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							{/* The route below takes you to the homepage */}
							<Route exact path="/">
								<Home />
							</Route>
							{/* The route below takes you to create account */}
							<Route exact path="/create-account">
								<CreateAccount />
							</Route>
							{/* The route below takes you to log-in */}
							<Route exact path="/log-in">
								<LogIn />
							</Route>
							{/* The route below takes you to user profile */}
							<Route exact path="/user-profile">
								<UserProfile />
							</Route>
							{/* The route below takes you to about us */}
							<Route exact path="/about-us">
								<AboutUs />
							</Route>
							{/* The route below takes you to job feed */}
							<Route exact path="/jobs">
								<JobFeed />
							</Route>
							{/* The route below takes you to job view */}
							<Route exact path="/job-view/:jobID">
								<JobView />
							</Route>
							{/* The route below takes you to job posting */}
							<Route exact path="/job-posting">
								<JobPosting />
							</Route>
							{/* The route below takes you to terms and conditions*/}
							<Route exact path="/terms">
								<Terms />
							</Route>
							{/* The route below takes you to not found */}
							<Route>
								<h1>You seem to be lost!</h1>
							</Route>
						</Switch>
					</ScrollToTop>
					<Footer />
				</BrowserRouter>
			</div>
		</div>
	);
};

export default injectContext(Layout);
