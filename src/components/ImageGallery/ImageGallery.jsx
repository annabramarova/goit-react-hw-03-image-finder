
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import {ImgGalleryItem} from 'components/ImageGalleryItem/ImgGalleryItem'

export const ImageGallery = ({ images, onImageClick }) => (
    <Gallery>
        {images.map((image, idx) => (
            <ImgGalleryItem onClick ={onImageClick} image={image} key={idx} />
        ))}
    </Gallery>
)

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.exact({
           id: PropTypes.number.isRequired, 
        })
    ),
    onImageClick: PropTypes.func.isRequired,
}