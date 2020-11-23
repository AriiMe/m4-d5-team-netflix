import React from 'react'
import Comments from './comments'
import { Container, Row, Col, } from "react-bootstrap"
function Popup({ selected, closePopup }) {
    return (<>
        <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span>({selected.Year})</span></h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} />
                    <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
            <div className="comments container">
                <Container>
                    <Row>
                        <Col>
                            <Comments />
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>


    </>
    )
}

export default Popup