import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import './card.css'


class CardsItem extends React.Component {

    render() {

        const { movie, onClick } = this.props;
        return (

            <div class="col-sm-12 col-md-6 col-lg-2 mx-auto text-center" onClick={onClick}>
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

//CardsItem.propTypes = { movie: propTypes.Object, onClick: propTypes.func };



export default CardsItem;