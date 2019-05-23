import React from "react";
import Card from "../card";
import PropTypes from "prop-types";

const List = props => {
  return (
    <ul>
      {props.people.map((item, index) => {
        return (
          <li key={index}>
            <Card
              name={`${item.name.first} ${item.name.last}`}
              img={item.picture.thumbnail}
              city={item.location.city}
              age={item.dob.age}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default List;

List.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired
};
