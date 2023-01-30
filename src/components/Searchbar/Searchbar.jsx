import {Component} from "react";
import PropTypes from 'prop-types';
import { SearchBar, SearchForm,  Button, Input } from "./Searchbar.styled";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";


class Searchbar extends Component {
  state = { search: '' };

  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ search: '' });
  }
  render() {
    return (<SearchBar>
      <SearchForm onSubmit={this.handleSubmit}>
        <Button type="submit">
          <FaSearch size='1.5em' fill="navy" />
        </Button>

        <Input
          onChange={this.handleChange}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.search}
        />
      </SearchForm>
    </SearchBar>)
  }
}
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}