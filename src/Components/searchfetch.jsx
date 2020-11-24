
import React, { useState } from 'react'
import "../App.css";
import Searchmf from "./searchmf"
import axios from 'axios'
import Result from './Result'
import Results from './Results'
import Popup from './Popup'
import './card.css'
import { Spinner } from 'react-bootstrap';


function Searchfetch() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    loading: false,
  })

  const apiurl = "http://www.omdbapi.com/?apikey=ff133ca5";
  console.log(apiurl)
  const search = (e) => {

    if (e.key === "Enter") {
      setState({ loading: true })
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
        setState({ loading: false })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;
    setState({ loading: false })
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
        {state.loading ? "loading..." : <Results results={state.results} openPopup={openPopup} />}

        {(typeof state.selected.Title !== "undefined") && <Popup selected={state.selected} closePopup={closePopup} />}
      </>
    </div>
  );
}

export default Searchfetch;
