import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import './card.css'


class CardsItem extends React.Component {

    render() {

        const { movie } = props;
        return (

            <div class="col-sm-12 col-md-6 col-lg-2 mx-auto text-center">
                <Image src={movie.imageUrl} fluid />
                <div class="details text-left col-sm-12">
                    <p class="title m-0">{movie.name}</p>
                    <p class="text-muted m-0">{movie.category}</p>
                    <p class="text-truncate m-0 ">{movie.description}</p>
                </div>
            </div>

        )
    }
}

CardsItem.propTypes = { movies: propTypes.Object.required, onClick: propTypes.func.required };
CardsItem.defaultProps = defaultProps;


export default CardsItem;