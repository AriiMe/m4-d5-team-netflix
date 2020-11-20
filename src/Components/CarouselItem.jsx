import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Carousel, Row } from 'react-bootstrap';
import CardItem from './CardsItem';
import PropTypes from 'prop-types';


class carouselItem extends React.Component {
    state = {
        movies: [],
        index: 0,
        loading: false,
    }
    url = "http://www.omdbapi.com/?apikey=ff133ca5&s="

    componentWillMount = () => {
        const { Title } = this.props
        this.fetchMovies(Title);
    }
    fetchMovies = async (Title) => {
        try {
            let response = await fetch(this.url + Title);

            if (response.ok) {
                let movies_list = await response.json();
                let movies = [[...this.state.movies], [movies_list.Search]].flat();
                this.setState({
                    loading: true,
                    movies: movies,
                })
            }
        } catch (e) {
            console.log("error happened, that's life", e)
            this.setState({ loading: false })
        }
    }

    renderSlides = () => {
        if (this.state.loading === true) {
            const { movies } = this.state;
        }
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({ index: selectedIndex });
    }

    render() {
        const { Title } = this.props;
        const { index, movies } = this.state;
        return (
            <>
                <h4>{Title}</h4>
                <Carousel activeIndex={index} onSelect={this.handleSelect}>
                    {this.renderSlides()}
                    {movies.map((movie) =>
                        <Carousel.Item>
                            <Row>
                                {movie.map((single_movie, i) =>
                                    (i < 6) && <CardItem movie={single_movie}></CardItem>)
                                }
                            </Row>
                        </Carousel.Item>)}
                </Carousel>
            </>
        )
    }
}

carouselItem.propTypes = { Title: propTypes.string };



export default carouselItem;