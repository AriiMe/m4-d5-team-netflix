import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';
import Comments from './Comments';


class ShowDetail extends React.Component {
    state = {
        movie: {}
    }
    url = "http://www.omdbapi.com/?apikey=ff133ca5&i="
    componentDidMount() {
        let movie_id = this.props.match.params.id;
        this.fetchMovie(movie_id)
    }


    fetchMovie = async (id) => {
        try {
            let response = await fetch(this.url + id);

            if (response.ok) {
                let movies_list = await response.json();
                this.setState({ movie: movies_list })
                return (movies_list)
            }
        } catch (e) {
            console.log("error happened, that's life", e)
            this.setState({ loading: false })
        }
    }

    render() {
        const { movie } = this.state;
        console.log(movie)
        return <>
            <Jumbotron fluid className="text-white" style={{ width: "100%", height: "100vh", position: "relative", backgroundImage: 'url(' + movie.Poster + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                <Container style={{ width: "100%", height: "100%", marginTop: "10vh" }}>
                    <div>
                        <Image src="https://image.flaticon.com/icons/png/512/870/870910.png" height="40px" /><span className="text-uppercase font-weight-bold">{movie.Type}</span>
                    </div>

                    <div>
                        <h1>{movie.Title}</h1>
                        <small> {movie.Year} {movie.Rated} {movie.Released}</small>
                    </div>
                </Container>
            </Jumbotron >
            <Container>



                <Row className="text-white">

                    <div >
                        <h2>{movie.Title} <span>({movie.Year})</span></h2>


                        <p className="rating">Rating: {movie.imdbRating}</p>
                        <div className="plot">

                            <p>{movie.Plot}</p>
                        </div>

                    </div>
                    <div className="comments container">
                        <Container>

                        </Container>
                    </div>

                </Row>
            </Container>
        </>;
    }
}

ShowDetail.propTypes = { id: PropTypes.string.isRequired };

// #endregion

export default ShowDetail;