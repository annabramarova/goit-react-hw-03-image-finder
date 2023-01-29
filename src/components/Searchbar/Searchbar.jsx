import React from "react";
import PropTypes from 'prop-types';
import { SearchBar, SearchForm,  Button, Input } from "./Searchbar.styled";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

export const Searchbar = ({ onSubmit}) => (
    <SearchBar>
   <SearchForm onSubmit={onSubmit}>
    <Button type="submit">
     <FaSearch size='1.5em' fill="navy"/>
    </Button>

      <Input
      name="searchQuery"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchBar>
)

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}