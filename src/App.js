import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/nav";
import Jumbo from "./Components/jumbo";
import Main from "./Components/main";
import Footer from "./Components/footer";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Jumbo />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
