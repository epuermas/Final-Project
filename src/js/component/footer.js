import React, { useState, useContext } from "react";
import { BrowserRouter, Router, Switch, Link } from "react-router-dom";
import companyLogo from "../../img/supergig-logo.png";
import { Context } from "../store/appContext";

// Importing styles*/
import "../../styles/components.scss";

export const Footer = () => {
	const { store, actions } = useContext(Context);
	return (
		<footer className="main-footer">
			<div className="container">
				<div className="row">
					{/* Column 1 */}
					<div className="col">
						<h5>SuperGig</h5>
						<ul className="list-unstyled">
							<li>
								<Link className="footer-link" to="/about-us">
									About Us
								</Link>
							</li>
							<li>
								<a
									className="footer-link"
									href="https://github.com/epuermas/SuperGig-FrontEnd"
									rel="noopener noreferrer"
									target="_blank">
									Repository
								</a>
							</li>
							<li>
								<Link className="footer-terms" to="/terms">
									<p>Terms Of Service</p>
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 2 */}
					<div className="col">
						<h5>Job-Posters</h5>
						<ul className="list-unstyled">
							<li>
								<Link className="footer-link" to={store.token != null ? "/user-profile" : "/log-in"}>
									View Profile
								</Link>
							</li>
							<li>
								<Link className="footer-link" to={store.token != null ? "/job-posting" : "/log-in"}>
									Post A Job
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3 */}
					<div className="col">
						<h5>Job-Seekers</h5>
						<ul className="list-unstyled">
							<li>
								<Link className="footer-link" to={store.token != null ? "/user-profile" : "/log-in"}>
									View Profile
								</Link>
							</li>
							<li>
								<Link className="footer-link" to="/jobs">
									View Jobs
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 4 */}
					<div className="col">
						<h5>Social Media</h5>
						<ul className="list-unstyled">
							<li>
								<i className="social-media-icons fab fa-instagram"></i>
								Instagram
							</li>
							<li>
								<i className="social-media-icons fab fa-facebook-square"></i>
								Facebook
							</li>
							<li>
								<i className="social-media-icons fab fa-twitter-square"></i>
								Twitter
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="row">
					<p className="col-sm">&copy;{new Date().getFullYear()} SuperGig Inc. | All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
};
