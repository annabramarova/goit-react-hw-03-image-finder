
import PropTypes from 'prop-types';
import { Item, Img } from './ImgGalleryItem.styled'

export const ImgGalleryItem = ({ image, onImageClick }) => (
    <Item id={image.id} onClick={onImageClick}>
    <Img src={image.webformatURL} alt={image.tags} name={image.largeImageURL}/>
    </Item>
)

ImgGalleryItem.propTypes = {
    image: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}