import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Searchmf from "./Components/searchmf";
import Searchfetch from "./Components/searchfetch";
import Nav from "./Components/nav";
import Jumbo from "./Components/jumbo";
import Main from "./Components/main";
import Footer from "./Components/footer";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Jumbo />
      <Searchfetch />
      <Main />

      <Footer />
    </div>
  );
}

export default App;
