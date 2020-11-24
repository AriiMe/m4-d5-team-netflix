import React from 'react';
import CarouselItem from './CarouselItem';
import { Container } from 'react-bootstrap';
import Searchfetch from "./searchfetch";
import Jumbo from "./jumbo";
import Searchmf from "./searchmf"

class Main extends React.Component {
    state = {
        movie: [],
        loading: false,
    }

    movie_keys = ['Avengers', 'Spider-man', 'Batman']
    render() {

        const { movie } = this.state;
        const { history, handleInput, search } = this.props;
        return <>
            <Searchmf handleInput={handleInput} search={search} />
            <Jumbo />
            <Searchfetch />
            {this.movie_keys.map((movie) => <CarouselItem Title={movie} history={history} ></CarouselItem>)}
        </>
    }
}

export default Main;



