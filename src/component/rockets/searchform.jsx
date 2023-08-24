import React from "react";
import { Country } from "country-state-city";
import { yearList } from "./year";

const SearchForm = (props) => {
  const countryData = Country.getAllCountries();

  const searchRockets = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-fit m-auto rounded-lg p-4 bg-white">
      <form
        onSubmit={searchRockets}
        className="flex flex-col md:flex-row gap-y-4 items-center gap-x-12"
        action="search"
      >
        <div className="flex flex-col items-center gap-y-2">
          <label htmlFor="location">Location</label>
          <select
            className=" max-[280px]:w-[13rem]"
            onChange={(e) => props.onLocation(e.target.value)}
            value={props.country}
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
              value={props.year}
              onChange={(e) => props.onYear(e.target.value)}
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
              value={props.engine}
              onChange={(e) => props.onEngine(e.target.value)}
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

        <button className="w-full bg-slate-600 px-8 text-white rounded-md py-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
