import React from "react";
import PropTypes from "prop-types";

const Filters = props => {
  return (
    <form>
      <fieldset>
        <legend> Gender </legend>
        <input
          type="checkbox"
          value="male"
          name="male"
          id="male"
          checked={props.genders.includes("male")}
          onChange={props.onGenderChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="checkbox"
          value="female"
          name="female"
          id="female"
          checked={props.genders.includes("female")}
          onChange={props.onGenderChange}
        />
        <label htmlFor="female">Female</label>
      </fieldset>
      <fieldset>
        <legend>Cities</legend>
        {props.allCities.map(item => {
          return (
            <React.Fragment key={item}>
              <input
                type="checkbox"
                value={item}
                name="cities"
                id={item}
                onChange={props.onCityChange}
                checked={props.cities.includes(item)}
              />
              <label htmlFor={item}>{item}</label>
            </React.Fragment>
          );
        })}
      </fieldset>
    </form>
  );
};

Filters.propTypes = {
  onGenderChange: PropTypes.func.isRequired,
  genders: PropTypes.array.isRequired,
  allCities: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Filters;
