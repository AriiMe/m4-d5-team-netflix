import React from 'react';
import {Jumbotron, Container, Image} from 'react-bootstrap';

class Jumbo extends React.Component {
    render(){
        return(

                <Jumbotron fluid className='mt-0 p-0 mainJumbo' style={{width: "100%", height:"100vh", position: "relative"}}>
                            <embed type="image/svg+xml" src="https://tv.giphy.com/?username=hulu" style={{width: "80%", height: "100%", objectFit: "cover", float: "right"}}/>
                            <div className='gradientOnJumbo' style={{position: "absolute", left: 0, height: "100%", width: "100%"}}></div>
                </Jumbotron>
        )
    }
}

export default Jumbo;