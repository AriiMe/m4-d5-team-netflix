<<<<<<< HEAD

import React, { useState } from 'react'
import "../App.css";
import Searchmf from "./searchmf"
=======
import React, {useState} from 'react'
import "../App.css";
import Searchmf from "./Searchmf"
>>>>>>> bf110fe8ea78a0df16b4d3c684d3dccaeb458354
import axios from 'axios'
import Result from './Result'
import Results from './Results'
import Popup from './Popup'
<<<<<<< HEAD
import './card.css'
=======
>>>>>>> bf110fe8ea78a0df16b4d3c684d3dccaeb458354

function Searchfetch() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })

  const apiurl = "http://www.omdbapi.com/?apikey=ff133ca5";
  console.log(apiurl)
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">

      <>
        <Searchmf handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </>
    </div>
  );
}

export default Searchfetch;
