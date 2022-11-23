import { Divider, Input } from 'antd';
import React, { useState } from 'react';
// Iteration 5

const Search = ({ searchString, setSearchString }) => {
  const handleSearch = (string) => {
    setSearchString(string.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchString} type="text" onChange={handleSearch} />
    </>
  );
};

export default Search;
