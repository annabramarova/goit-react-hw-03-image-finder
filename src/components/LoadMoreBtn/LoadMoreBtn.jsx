import PropTypes from 'prop-types';
import { LoadMore } from './LoadMoreBtn.styled';


export const LoadMoreBtn = ({ onClick}) => (
  <LoadMore onClick={onClick} type="button">
    <span>Load More</span>
  </LoadMore>
);

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};