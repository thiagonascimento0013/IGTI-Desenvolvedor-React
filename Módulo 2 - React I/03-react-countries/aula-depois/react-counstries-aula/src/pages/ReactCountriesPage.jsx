import { useState } from 'react';
import Countries from '../components/Countries';
import Header from '../components/Header';
import Main from '../components/Main';
import Textinput from '../components/Textinput';
import { allCountries } from '../data/countries';
import Country from '../components/Country';

export default function ReactCountriesPage() {
	//state
	const [countryFilter, setCountryFilter] = useState('');
	const [visitedCountries, setVisitedCountries] = useState([]);

	function handCountryFilterChange(newCountryFilter) {
		setCountryFilter(newCountryFilter);
	}

	function toggleVisitedCountry(countryId) {
		let newVisitedCountries = [...visitedCountries];

		const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1

		if (isCountryVisited) {
			newVisitedCountries =
			 newVisitedCountries.filter(visitedCountryId => {
				return visitedCountryId !== countryId});
		} else {
			newVisitedCountries.push(countryId);
		}

		setVisitedCountries(newVisitedCountries);
	}

	const countryFilterLowercase = countryFilter.trim().toLocaleLowerCase();

	//pretier-ignore
	const filteredCountries = 
		countryFilterLowercase.length >= 3
			? allCountries.filter(({nameLowerCase}) => {
				return nameLowerCase.includes(countryFilterLowercase);
				})
			: allCountries;

	return (
		<div>
			<Header>React Countries</Header>
			<Main>
				<Textinput
				id="inputCountryFilter"
				labelDescription="Informe o nome do país (pelo menos 3 caracteres):"
				autoFocus
				onInputChange={handCountryFilterChange}
				inputValue={countryFilter}
				/>

				{/* <Countries
					visitedCountries={visitedCountries}
					onCountryClick={toggleVisitedCountry}
					>
						{filteredCountries}
				</Countries> */}

				<Countries>
					<h2 className="text-center font-semibold">{filteredCountries.length} país(es)</h2>
					<h3 className="text-center font-semibold text-sm">{visitedCountries.length} país(es) visitados</h3>

				{filteredCountries.map(country => {
				const isVisited = visitedCountries.indexOf(country.id) !== -1;

					return (
						<Country
							isVisited={isVisited}
							onCountryClick={toggleVisitedCountry}
							key={country.id}
						>
							{country}
						</Country>
					);
				})}
				</Countries>
			</Main>
		</div>
	);
}