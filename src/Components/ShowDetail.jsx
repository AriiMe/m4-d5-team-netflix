import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image, Jumbotron, Badge } from 'react-bootstrap';
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
            <Jumbotron fluid className="text-white" style={{ width: "100%", height: "90vh", position: "relative", backgroundImage: 'url(' + movie.Poster + ')', backgroundPosition: "center center", backgroundSize: 'cover' }}>
                <Container style={{ width: "100%", height: "100%", marginTop: "10vh" }}>
                    <div>
                        <Image src="https://image.flaticon.com/icons/png/512/870/870910.png" height="40px" /><span className="text-uppercase font-weight-bold">{movie.Type}</span>
                    </div>

                    <Col lg={5} md={6}>
                        <h1>{movie.Title}</h1>
                        <Row className="justify-content-around mr-5">
                            <small className="text-success">{movie.Metascore}% Match</small>
                            <small className="text-muted">{movie.Type}</small>
                            <small className="text-muted">{movie.Year}</small>
                            <Badge variant="dark">{movie.Rated}</Badge>
                            <Badge variant="dark">HD</Badge>
                            <Badge variant="secondary">{movie.imdbRating}</Badge>
                        </Row>
                        <Row>

                            <div className="plot mt-4">
                                <p>{movie.Plot}</p>
                            </div>
                        </Row>
                    </Col>
                </Container>
            </Jumbotron >
            <Container>

            </Container>

        </>;
    }
}

ShowDetail.propTypes = { id: PropTypes.string.isRequired };

// #endregion

export default ShowDetail;