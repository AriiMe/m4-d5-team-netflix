import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Carousel } from 'react-bootstrap';
import CardItem from './CardsItem';

class carouselItem extends React.Component {
    state = {
        index: 0,
    }

    carouselSlides = (movies) => {
        for (let j = 0; j < movies.length / 6; j++) {
            let carousel_item
            for (let i = 0; i < 6; i++) {
                const movie = movies[i + 6 * j];
                carousel_item += this.carouselItem(movie);
            }
        }
        return (carousel_item);
    }

    carouselItem = (movies) => {
        movies.map((movie) => { <CardItem movie={movie}></CardItem> });
    }


    handleSelect = (selectedIndex, e) => {
        this.setState({ index: selectedIndex });
    };
    render() {
        const { movies, title } = props;
        const [index] = this.state;
        return (
            <>
                <h4 style="color: white">{title}</h4>
                <Carousel activeIndex={index} onSelect={this.handleSelect}>
                    {this.carouselSlides(movies)}
                </Carousel>;
            </>
        )
    }
}

carouselItem.propTypes = { movies: propTypes.Array.required, title: propTypes.string.required };
carouselItem.defaultProps = defaultProps;


export default carouselItem;