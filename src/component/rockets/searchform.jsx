import React, { Component } from "react";
import { Country } from "country-state-city";
import { yearList } from "./year";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryData: Country.getAllCountries(),
    };

    this.searchRockets = this.searchRockets.bind(this);
  }

  searchRockets(e) {
    e.preventDefault();
    this.props.onSearch();
  }

  render() {
    const { countryData } = this.state;
    const { country, onLocation, year, onYear, engine, onEngine } = this.props;

    return (
      <div className="w-fit m-auto rounded-lg p-4 bg-white">
        <form
          onSubmit={this.searchRockets}
          className="flex flex-col md:flex-row gap-y-4 items-center gap-x-12"
          action="search"
        >
          <div className="flex flex-col items-center gap-y-2">
            <label htmlFor="location">Location</label>
            <select
              required
              className="w-[13rem] md:w-full"
              onChange={(e) => onLocation(e.target.value)}
              value={country}
              name="Location"
              id="location"
            >
              <option value="select">Select country</option>
              {countryData.map((country) => (
                <option key={country.isoCode} value={country.name}>
                  {country.name}
                </option>
              ))}
              <option value="">Republic of the Marshall Islands</option>
            </select>
          </div>

          <div className="flex justify-between md:flex-row gap-x-6">
            <div className="flex flex-col items-center gap-y-2">
              <label className="hidden md:block" htmlFor="Launch">
                Launch
              </label>
              <label className="block md:hidden" htmlFor="Launch">
                First Launch
              </label>
              <select
                required
                value={year}
                onChange={(e) => onYear(e.target.value)}
                name="Launch"
                id="Launch"
              >
                <option value="" disabled>
                  Select year
                </option>
                {yearList.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col items-center gap-y-2">
              <label className="block md:hidden" htmlFor="Type">
                Engine Type
              </label>
              <label className="hidden md:block" htmlFor="Type">
                Type
              </label>
              <select
                required
                value={engine}
                onChange={(e) => onEngine(e.target.value)}
                name="Type"
                id="Type"
              >
                <option value="" disabled>
                  Engine
                </option>
                <option value="raptor">raptor</option>
                <option value="merlin">merlin</option>
                <option value="draco">draco</option>
                <option value="goliath">goliath</option>
              </select>
            </div>
          </div>

          <button className="w-fit bg-slate-600 px-8 text-white rounded-md py-2">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
