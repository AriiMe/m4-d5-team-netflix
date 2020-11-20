import React from 'react';
import {Jumbotron, Container, Image} from 'react-bootstrap';

class Jumbo extends React.Component {
    render(){
        return(

                <Jumbotron fluid className='mt-5 p-0 mainJumbo' style={{width: "100%", height:"50vh", position: "relative"}}>
                            <embed type="image/svg+xml" src="https://tv.giphy.com/harry%20potter" style={{width: "70%", height: "100%", objectFit: "cover", float: "right"}}/>
                            <div className='gradientOnJumbo' style={{position: "absolute", left: 0, height: "100%", width: "100%"}}></div>
                            <div className='movieNameInJumbo' style={{position: "absolute", left: "10vh", top: "5vh",width:"30%", zIndex: 10}}>
                                <p style={{color: "white", fontSize: "5vh"}}>Harry Potter and the Deathly Hallows: Part 2</p>
                                <p style={{color: "white", fontSize: "15px"}}>2011 </p>
                                </div>
                </Jumbotron>
        )
    }
}

export default Jumbo;