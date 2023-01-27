import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '31931672-bd2c71509f90e4d9af4570b10';
const IMG_PER_PAGE = 12;

export const fetchImages = async (value, page) => {
    const response =  await axios.get(
        `?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${IMG_PER_PAGE}`);
    return response.data.hits.map(image => {
        return {
            id: image.id,
            webformatURL: image.webformatURL,
        }
    })
    }
