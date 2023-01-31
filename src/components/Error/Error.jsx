import PropTypes from 'prop-types';
import { Alert } from './Error.styles';

export function Error({ message }) {
  return (
    <Alert>
      <p>404</p>
      <p>Oops... something went wrong. Please, try again later, or reload page..</p>
      <p>Error message: {message}</p>
    </Alert>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};