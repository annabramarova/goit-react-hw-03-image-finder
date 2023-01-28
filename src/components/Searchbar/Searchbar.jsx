import React from "react";
import PropTypes from 'prop-types';
import { SearchBar, SearchForm, Label, Button, Input } from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) => (
    <SearchBar>
   <SearchForm >
    <Button type="submit">
      <Label>Search</Label>
    </Button>

    <Input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchBar>
)

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
}