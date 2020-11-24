import React from "react";

function Searchmf({ handleInput, search }) {
  return (

    <input
      type="text"
      placeholder="Search for a movies..."
      className="searchbox pl-2"
      onChange={handleInput}
      onKeyPress={search}
    />

  );
}

export default Searchmf;
