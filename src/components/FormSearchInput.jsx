import React from "react";

const FormSearchInput = ({ handleSubmit, searchValue, setSearchValue }) => {
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={searchValue}
        placeholder="Type to search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default FormSearchInput;
