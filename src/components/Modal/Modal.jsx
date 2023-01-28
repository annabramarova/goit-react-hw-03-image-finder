import PropTypes from 'prop-types';
import { Overlay, ModalImg } from './Modal.styled';

export const Modal = ({ src, alt, onModalClose }) => {
  <Overlay onClick= {onModalClose}>
  <ModalImg>
    <img src={src} alt={alt} />
  </ModalImg>
</Overlay>
}

Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onModalClose: PropTypes.func.isRequired,
}