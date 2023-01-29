
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Item, Img } from './ImgGalleryItem.styled'
import { Modal } from 'components/Modal/Modal';

export class ImgGalleryItem extends Component {
    state = {
        modalOpen: false,
    }
        
    showModal = () => this.setState({ modalOpen: true });
    hideModal = () => this.setState({ modalOpen: false });

    render() {
        const { modalOpen } = this.state;
        const { tags, webformatURL, largeImageURL } = this.props.imgData;
        return (
            <Item >
                <Img src={webformatURL} alt={tags} onClick={this.showModal}/>
                {modalOpen && (<Modal onClose={this.hideModal}>
                    <img src={largeImageURL} alt={tags} />
                </Modal>)}
            </Item>
        );
    }
}
ImgGalleryItem.propTypes = {
    imageData: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }),
}