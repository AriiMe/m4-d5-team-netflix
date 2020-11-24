import React from "react";

function Searchmf({ handleInput, search }) {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movies..."
        className="searchbox w-25 pl-2"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}

export default Searchmf;
