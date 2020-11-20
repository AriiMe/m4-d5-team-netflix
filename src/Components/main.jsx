import React from 'react';
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';
import Comments from './Comments';
//import Searchfetch from './Searchfetch';
//import Searchmf from './Searchmf';
import { Container } from 'react-bootstrap';

class Main extends React.Component {
    state = {
        movie: [],
        loading: false,
    }

    movie_keys = ['Avengers', 'Spider', 'Batman']
    render() {

        const { movie } = this.state;
        console.log(movie)
        return <Container>
            < CarouselItem title={this.movie_keys[0]} ></CarouselItem >
        </Container>
    }
}

export default Main;