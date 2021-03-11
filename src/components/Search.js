import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const onChangeHandler = (event) => {
    if (event.target.name === "search") {
      setSearchValue(event.target.value);
    }
  };

  return (
    <div>
      <input
        name="search"
        type="text"
        onChange={onChangeHandler}
        value={searchValue}
      />
      <button
        onClick={() => {
          props.search(searchValue);
        }}
      >
        Szukaj
      </button>
    </div>
  );
};

export default Search;
