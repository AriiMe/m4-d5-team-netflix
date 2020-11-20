import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Searchmf from "./Components/Searchmf";
import Nav from "./Components/Nav";
import Jumbo from "./Components/Jumbo";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
