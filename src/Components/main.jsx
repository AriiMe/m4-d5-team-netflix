import React from 'react';
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';
import Comments from './Comments';
import { Container } from 'react-bootstrap';
import Searchfetch from "./searchfetch";
import Jumbo from "./jumbo";

class Main extends React.Component {
    state = {
        movie: [],
        loading: false,
    }

    movie_keys = ['Avengers', 'Spider-man', 'Batman']
    render() {

        const { movie } = this.state;
        const { history } = this.props;
        return <>
            <Jumbo />
            <Searchfetch />
            {this.movie_keys.map((movie) => <CarouselItem Title={movie} history={history} ></CarouselItem>)}
        </>
    }
}

export default Main;



