import React from 'react';
import CarouselItem from './CarouselItem';
import { Container, Spinner } from 'react-bootstrap';
import Jumbo from "./jumbo";
import SearchInput from "./SearchInput"
import Results from "./Results"

class Main extends React.Component {
    state = {
        movies: [],
        loading: false,
        search: "",
    }
    handleInput = (e) => {
        let search = e.target.value;
        this.setState({ loading: false })
        this.setState(prevState => {
            return { ...prevState, search, loading: false }
        });
    }
    url = "http://www.omdbapi.com/?apikey=ff133ca5&s=";

    search = (e) => {
        if (e.key === "Enter") this.fetchMovies(this.state.search)
    };
    fetchMovies = async (Title) => {
        try {
            let response = await fetch(this.url + Title);
            if (response.ok) {
                let movies = await response.json();
                this.setState({
                    loading: true,
                    movies: movies.Search,
                })
                console.log(this.state)
            }
        } catch (e) {
            console.log("error happened, that's life", e)
            this.setState({ loading: false })
        }
    }
    movie_keys = ['Avengers', 'Spider-man', 'Batman']
    render() {

        const { movies, loading } = this.state;
        const { history } = this.props;
        return <>
            <SearchInput handleInput={this.handleInput} search={this.search} />
            {!loading ? (
                <>
                    <Jumbo />
                    {this.movie_keys.map((movie) => <CarouselItem key={movie} Title={movie} history={history} ></CarouselItem>)}
                </>
            ) : (<Container>
                <Results results={movies} openPopup={this.openPopup} history={history} />
            </Container>)
            }


        </>
    }
}

export default Main;



