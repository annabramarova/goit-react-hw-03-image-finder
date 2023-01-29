import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalImg } from './Modal.styled';


const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }

  componentWillUnmount() {
      window.removeEventListener('keydown', this.onEscPress);
    }

  onEscPress = ({ code }) => {
      if (code === 'Escape') {
        this.props.onClose();
      }
    };

  handleClick = ({ target, currentTarget }) => {
      if (target === currentTarget) {
        this.props.onClose();
      }
    };

    render() {
      const { children } = this.props;
      return createPortal(
        <Overlay onClick={this.handleClick}>
          <ModalImg>
            {children}
          </ModalImg>
        </Overlay>, modalRoot);
    }
  }

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}