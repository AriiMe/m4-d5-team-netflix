import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import Searchmf from "./Components/searchmf";
//import Nav from "./Components/nav";
//import Jumbo from "./Components/Jumbo";
import Main from "./Components/Main";
//import Footer from "./Components/footer";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Jumbo />
      <Main />
    </div>
  );
}

export default App;
