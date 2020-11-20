import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Carousel } from 'react-bootstrap';
import CardItem from './CardsItem';
import PropTypes from 'prop-types';


class carouselItem extends React.Component {
    state = {
        movies: [],
        index: 0,
        loading: false,
    }
    url = "http://www.omdbapi.com/?apikey=ff133ca5&s="
    componentDidMount = () => {
        const { title } = this.props
        this.fetchMovies(title);
    }
    fetchMovies = async (title) => {
        //this.setState({ loading: true })
        try {
            let response = await fetch(this.url + title);

            if (response.ok) {
                let movies_list = await response.json();
                let movies = [[...this.state.movie], [movies_list.Search]].flat();
                this.setState({
                    loading: true,
                    movies: movies,
                })
                console.log(this.state)
            }
        } catch (e) {
            console.log("error happened, that's life", e)
            this.setState({ loading: false })
        }
    }
    renderSlides = () => {
        if (this.state.loading === true) {
            const { movies } = this.state;
            return (movies && movies.map((movie) => this.carouselSlides(movie)))
        }
    }
    carouselSlides = (movies) => {
        console.log(movies)
        for (let j = 0; j < movies.length / 6; j++) {
            let carousel_item
            for (let i = 0; i < 6; i++) {
                const movie = movies[i + 6 * j];
                carousel_item += this.carouselItem(movie);
            }
        }
        return (this.carousel_item);
    }

    carouselItem = (movies) => {
        console.log(movies)
        movies.map((movie) => { <CardItem movie={movie}></CardItem> });
    }


    handleSelect = (selectedIndex, e) => {
        this.setState({ index: selectedIndex });
    };
    render() {
        const { title } = this.props;
        const { index, movies } = this.state;
        console.log(movies)
        return (
            <>
                <h4>{title}</h4>
                <Carousel activeIndex={index} onSelect={this.handleSelect}>
                    {this.carouselSlides(movies)}
                </Carousel>;
            </>
        )
    }
}

carouselItem.propTypes = { title: propTypes.string };



export default carouselItem;