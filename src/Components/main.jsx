import React, {Component} from "react";

class Main extends Component {
    state={
        harryPotterMovies: [],
        spiderManMovies: [],
        starWarsMovies: []
    }

url = "http://www.omdbapi.com/?apikey=187b9f87"

componentDidMount = () => {
    Promise.all([
        fetch(this.url + "s=harry%20potter")
          .then((response) => response.json())
          .then((responseObject) =>
            this.setState({ harryPotterMovies: responseObject.Search })
          ),
        fetch(this.url + "s=spider%20man")
          .then((response) => response.json())
          .then((responseObject) =>
            this.setState({ spiderManMovies: responseObject.Search })
          ),
        fetch(this.url + "s=star%20wars")
          .then((response) => response.json())
          .then((responseObject) =>
            this.setState({ starWarsMovies: responseObject.Search })
          ),
      ])
        .then(() => this.setState({ loading: false }))
        .catch((err) => {
          this.setState({ error: true });
          console.log("An error has occurred:", err);
        });
};

render(){
    return(
        <h1>Test</h1>
    )
}
}

export default Main;