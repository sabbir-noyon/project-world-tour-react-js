//import React from 'react';

import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
	const [countries, setCountries] = useState([]);

	const [visitedCountries, setVisitedCountries] = useState([]);

	const [visitedFlags, setVisitedFlags] = useState([]);

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);

	const handleVisitedCountries = (country) => {
		console.log("Add this to your Visited Country");

		//console.log(country);
		const newVisitedCountries = [...visitedCountries, country];
		setVisitedCountries(newVisitedCountries);
	};

	const handleVisitedFlags = (flag) => {
		// console.log("Flag Adding");

		const newVisitedFlags = [...visitedFlags, flag];

		setVisitedFlags(newVisitedFlags);
	};

	return (
		<div>
			<h2>Countries : {countries.length}</h2>
			<div>
				<h5>Visited Countries {visitedCountries.length}</h5>
				<ul className="ul-li">
					{visitedCountries.map((country) => (
						<li className="li-li" key={country.cca3}>
							{country.name.common}
						</li>
					))}
				</ul>
			</div>

			<div className="flag-container">
				{visitedFlags.map((flag, idx) => (
					<img key={idx} src={flag}></img>
				))}
			</div>

			<div className="country-container">
				{countries.map((country) => (
					<Country
						key={country.cca3}
						handleVisitedCountries={handleVisitedCountries}
						handleVisitedFlags={handleVisitedFlags}
						country={country}
					></Country>
				))}
			</div>
		</div>
	);
};

export default Countries;
