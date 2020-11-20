import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Carousel } from 'react-bootstrap';
class carousel extends React.Component {
    constructor(props) {

        render()
        const { movies, title } = props;
        {
            return <Carousel>

            </Carousel>;
        }
    }

    carousel.propTypes = { movies: propTypes.Array.required, title: propTypes.string.required };
    carousel.defaultProps = defaultProps;
    // #endregion

    export default carousel;