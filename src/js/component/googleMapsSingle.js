import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import GoogleMapReact, { Marker } from "google-map-react";
import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyCjV5S1bkd7RssX1Z7cytvypvQAgchTt8A");

// Importing styles*/
import "../../styles/googleMaps.scss";

const markerStyle = {
	height: "15px",
	width: "15px",
	backgroundColor: "red",
	borderRadius: "50%"
};
// Variable for marker below
const AnyReactComponent = props => <div style={markerStyle}></div>;

AnyReactComponent.propTypes = {
	text: PropTypes.string
};

class SimpleMapSingle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			center: {
				lat: 0,
				lng: 0
			},

			zoom: 12
		};
	}

	getCenter = () => {
		Geocode.fromAddress(this.props.address).then(
			response => {
				const { lat, lng } = response.results[0].geometry.location;
				console.log("lat/long", lat, lng);
				this.setState({
					center: {
						lat: lat,
						lng: lng
					}
				});
			},
			error => {
				console.error(error);
			}
		);
	};

	render() {
		return (
			<div className="google-maps-wrapper">
				{/* // Important! Always set the container height explicitly */}
				<div
					className="google-maps-container"
					style={{
						height: "400px",
						width: "600px",
						marginTop: "25px",
						marginLeft: "auto",
						marginRight: "auto"
					}}>
					<GoogleMapReact
						bootstrapURLKeys={{ key: "AIzaSyCjV5S1bkd7RssX1Z7cytvypvQAgchTt8A" }}
						center={this.state.center}
						defaultCenter={{ lat: 59.95, lng: 30.33 }}
						defaultZoom={this.state.zoom}
						yesIWantToUseGoogleMapApiInternals
						onGoogleApiLoaded={({ map, maps }) => {
							this.getCenter();
							const center = new google.maps.LatLng(this.state.center.lat, this.state.center.lng);

							// using global variable:
							map.panTo(center);
						}}>
						{/* Marker is located below */}
						<AnyReactComponent lat={this.state.center.lat} lng={this.state.center.lng} />
					</GoogleMapReact>
				</div>
			</div>
		);
	}
}

SimpleMapSingle.propTypes = {
	address: PropTypes.string.isRequired,
	center: PropTypes.object,
	zoom: PropTypes.number
};

export default SimpleMapSingle;
