import React from "react";
import "./styles.scss";
import Filters from "../filters";
import List from "../list";
import fetchPeople from "../../services/people-service";
import { tsImportEqualsDeclaration, conditionalExpression } from "@babel/types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {
        data: [],
        isFetching: true
      },
      filters: {
        genders: [],
        cities: [],
        allCities: []
      }
    };
    this.getPeople = this.getPeople.bind(this);
    this.handlerGenderFilter = this.handlerGenderFilter.bind(this);
    this.handlerCityFilter = this.handlerCityFilter.bind(this);
  }

  handlerGenderFilter(event) {
    const { value, checked } = event.target;
    console.log(value);
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          genders: checked
            ? prevState.filters.genders.concat(value)
            : prevState.filters.genders.filter(item => item !== value)
        }
      };
    });
  }
  handlerCityFilter(event) {
    const { value, checked } = event.target;
    console.log(value);
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          cities: checked
            ? prevState.filters.cities.concat(value)
            : prevState.filters.genders.filter(item => item !== value)
        }
      };
    });
  }
  getPeople() {
    fetchPeople().then(data => {
      this.setState(prevState => {
        return {
          people: {
            data: data.results,
            isFetching: false
          },
          filters: {
            ...prevState.filters,
            allCities: data.results
              .map(item => item.location.city)
              .filter((item, ind, arr) => arr.indexOf(item) === ind)
          }
        };
      });
    });
  }

  componentDidMount() {
    this.getPeople();
  }
  render() {
    const { isFetching, data } = this.state.people;
    const { genders, cities } = this.state.filters;
    return (
      <div className="App">
        <header>
          <h1>People Directory</h1>
        </header>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <React.Fragment>
            <Filters
              onGenderChange={this.handlerGenderFilter}
              genders={this.state.filters.genders}
              allCities={this.state.filters.allCities}
              onCityChange={this.handlerCityFilter}
              cities={this.state.filters.cities}
            />
            <List people={data.
              filter(person => {
                if(!genders.length){
                  return true;
                }
                else {
                  return genders.includes(person.gender)
                }
              }).filter(person => {
                if(!cities.length){
                  return true;
                }
                else {
                  return cities.includes(person.location.city)
                }
              })} />
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default App;
