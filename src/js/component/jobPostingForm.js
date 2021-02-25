import React, { useState, useEffect, useContext } from "react";
import ReactBootstrap, { Form, Button, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import companyLogo from "../../img/supergig-logo.png";

// Importing views*/
import { jobPostingForm } from "../views/jobPosting";

// Importing styles*/
import "../../styles/components.scss";

export const JobPostingForm = () => {
	let history = useHistory();

	const { store, actions } = useContext(Context);
	const [job_title, setJob_title] = useState("");
	const [job_description, setJob_description] = useState("");
	const [job_address, setJob_address] = useState("");
	const [job_state, setJob_state] = useState("");
	const [job_city, setJob_city] = useState("");
	const [job_zipcode, setJob_zipcode] = useState("");
	const [job_payment, setJob_payment] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		if (
			job_title !== "" &&
			job_description !== "" &&
			job_address !== "" &&
			job_state !== "" &&
			job_city !== "" &&
			job_zipcode !== "" &&
			job_payment !== ""
		) {
			let resp = await actions.addJob(email, password);
			console.log(resp);

			if (resp) {
				history.push("/user-profile");
			} else {
				console.log("signin failed");
			}
		}
	}

	return (
		<div className="jobPostingForm-container">
			{/* Image container - L hand side */}
			<div className="jobPostingForm-second-container d-flex justify-content-around">
				<img className="jobPostingForm-img" src="https://i.imgur.com/Uzgr7Na.jpg" />

				{/* Create Account Form - R hand side */}
				<Form>
					<h1 className="d-flex justify-content-center">Job Posting</h1>
					<Form.Group controlId="formGridTitle">
						<Form.Label>Job Title</Form.Label>
						<Form.Control
							defaultValue={job_title}
							onChange={e => setJob_title(e.target.value)}
							placeholder="Job Title"
						/>
					</Form.Group>

					<Form.Group className="jobDescriptionInput" controlId="formGridDesciption">
						<Form.Label>Job Description</Form.Label>
						<Form.Control
							defaultValue={job_description}
							onChange={e => setJob_description(e.target.value)}
							as="textarea"
							rows="7"
							placeholder="Job Description - please include contact info"
						/>
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridPayment">
							<Form.Label>Payment $</Form.Label>
							<Form.Control
								defaultValue={job_payment}
								onChange={e => setJob_payment(e.target.value)}
								placeholder="100"
							/>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="formGridAddress1">
						<Form.Label> Job Address</Form.Label>
						<Form.Control
							defaultValue={job_address}
							onChange={e => setJob_address(e.target.value)}
							placeholder="1234 Main St"
						/>
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridCity">
							<Form.Label>City</Form.Label>
							<Form.Control
								defaultValue={job_city}
								onChange={e => setJob_city(e.target.value)}
								placeholder="Miami"
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridState">
							<Form.Label>State</Form.Label>
							<Form.Control
								onChange={e => setJob_state(e.target.value)}
								as="select"
								defaultValue="Choose...">
								<option>Choose...</option>
								<option value="1">Alabama</option>
								<option value="2">Alaska</option>
								<option value="3">Arizona</option>
								<option value="4">Arkansas</option>
								<option value="5">California</option>
								<option value="6">Colorado</option>
								<option value="7">Connecticut</option>
								<option value="8">Delaware</option>
								<option value="9">Florida</option>
								<option value="10">Georgia</option>
								<option value="11">Hawaii</option>
								<option value="12">Idaho</option>
								<option value="13">Illinois</option>
								<option value="14">Indiana</option>
								<option value="15">Iowa</option>
								<option value="16">Kansas</option>
								<option value="17">Kentucky</option>
								<option value="18">Louisiana</option>
								<option value="19">Maine</option>
								<option value="20">Maryland</option>
								<option value="21">Massachusetts</option>
								<option value="22">Michigan</option>
								<option value="23">Minnesota</option>
								<option value="24">Mississippi</option>
								<option value="25">Missouri</option>
								<option value="26">Montana</option>
								<option value="27">Nebraska</option>
								<option value="28">Nevada</option>
								<option value="29">New Hampshire</option>
								<option value="30">New Jersey</option>
								<option value="31">New Mexico</option>
								<option value="32">New York</option>
								<option value="33">North Carolina</option>
								<option value="34">North Dakota</option>
								<option value="35">Ohio</option>
								<option value="36">Oklahoma</option>
								<option value="37">Oregon</option>
								<option value="38">Pennsylvania</option>
								<option value="39">Rhode Island[</option>
								<option value="40">South Carolina</option>
								<option value="41">South Dakota</option>
								<option value="42">Tennessee</option>
								<option value="43">Texas</option>
								<option value="44">Utah</option>
								<option value="45">Vermont</option>
								<option value="46">Virginia</option>
								<option value="47">Washington</option>
								<option value="48">West Virginia</option>
								<option value="49">Wisconsin</option>
								<option value="50">Wyoming</option>
							</Form.Control>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridZip">
							<Form.Label>Zip</Form.Label>
							<Form.Control
								defaultValue={job_zipcode}
								onChange={e => setJob_zipcode(e.target.value)}
								placeholder="33174"
							/>
						</Form.Group>
					</Form.Row>

					<Button
						className="submit-button"
						variant="primary"
						type="submit"
						onClick={() => {
							actions.addJob(
								job_title,
								job_description,
								job_payment,
								job_address,
								job_city,
								job_state,
								job_zipcode
							);
							alert("Job has been posted");
						}}>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};
