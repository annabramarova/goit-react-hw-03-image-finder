
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import {ImgGalleryItem} from 'components/ImageGalleryItem/ImgGalleryItem'

export const ImageGallery = ({ images }) => (
    <Gallery>
        {images.map(({id, ...imgData}) => (
            <ImgGalleryItem imgData={imgData} key={id} />
        ))}
    </Gallery>
)

ImageGallery.defaultProps = {
  images: [],
};


ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
}