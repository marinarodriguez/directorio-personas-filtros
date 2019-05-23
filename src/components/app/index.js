import React from "react";
import "./styles.scss";
import Filters from "../filters";
import List from "../list";
import fetchPeople from "../../services/people-service";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {
        data: [],
        isFetching: true
      }
    };
    this.getPeople = this.getPeople.bind(this);
  }

  getPeople() {
    fetchPeople().then(data => {
      this.setState({
        people: {
          data: data.results,
          isFetching: false
        }
      });
    });
  }

  componentDidMount() {
    this.getPeople();
  }
  render() {
    const {isFetching, data} = this.state.people;
    return (
      <div className="App">
        <header>
          <h1>People Directory</h1>
        </header>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <React.Fragment>
            <Filters />
            <List 
            people={data}/>
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default App;
