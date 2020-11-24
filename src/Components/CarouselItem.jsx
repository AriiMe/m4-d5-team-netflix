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
    pages = ['1', '2', '3']

    componentDidMount = () => {
        const { Title } = this.props
        this.pages.forEach(page => this.fetchMovies(Title, page));
    }

    fetchMovies = async (Title, page) => {
        try {
            let response = await fetch(this.url + Title + "&page" + page);

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
        const { Title, history } = this.props;
        const { index, movies } = this.state;
        console.log(movies)
        return (
            <>
                <h4>{Title}</h4>
                <Carousel activeIndex={index} onSelect={this.handleSelect} indicators={false}>
                    {this.renderSlides()}
                    < Carousel.Item >
                        <Row>
                            {movies.flat().map((single_movie, i) =>
                                (i < 6) && <CardItem movie={single_movie} history={history} ></CardItem>)
                            }
                        </Row>

                    </Carousel.Item>
                    < Carousel.Item >
                        <Row>
                            {movies.flat().map((single_movie, i) =>
                                (i > 6 && i < 13) && <CardItem movie={single_movie} history={history} ></CardItem>)
                            }
                        </Row>

                    </Carousel.Item>
                    < Carousel.Item >
                        <Row>
                            {movies.flat().map((single_movie, i) =>
                                (i > 12 && i < 19) && <CardItem movie={single_movie} history={history} ></CardItem>)
                            }
                        </Row>

                    </Carousel.Item>

                </Carousel>
            </>
        )
    }
}

carouselItem.propTypes = { Title: propTypes.string, history: PropTypes.string };



export default carouselItem;