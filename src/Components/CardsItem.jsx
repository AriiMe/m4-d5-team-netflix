import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import './card.css'


class CardsItem extends React.Component {

    render() {
        const { movie, history } = this.props;
        return (

            <div key={movie.imdbID} className="col-sm-12 col-md-6 col-lg-2 p-1 text-center" style={{ height: '400px' }} onClick={() => this.props.history.push('/details/' + movie.imdbID)}>
                <Image src={movie.Poster} className=".img-fluid" fluid />
                <div className="details text-left col-sm-12">
                    <p className="title m-0">{movie.Title}</p>
                    <p className="text-muted m-0">{movie.Type}</p>
                    <p className="text-truncate m-0 ">{movie.Year}</p>
                </div>
            </div>

        )
    }
}

CardsItem.propTypes = { movie: propTypes.Object, history: PropTypes.string };



export default CardsItem;