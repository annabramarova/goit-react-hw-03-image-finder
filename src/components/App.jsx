
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn'
import { fetchImages } from './api/fetchImages'
import { Modal } from "./Modal/Modal";
// import { FaSearch } from "react-icons/fa/FaSearch";


export class App extends Component {
  state = {
  images: [],
    isLoading: false,
    query: '',
    page: 1,
    modalOpen: false,
    modalImg: '',
    modalAlt: '',
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { input } = event.target.elements;
    if (input.value.trim() === '') {
      return;
    }
    const response = await fetchImages(input.value, 1);
    this.setState({
      images: response,
      isLoading: false,
      query: input.value,
      page: 1,
    })


  }
  handleImgClick = e => {
    this.setState({
      modalOpen: true,
      modalAlt: e.target.alt,
      modalImg: e.target.name,
    })
  }

  handleLoadMore = async () => {
    const res = await fetchImages(
      this.state.query, this.state.page + 1);
    this.setState({
      images: [...this.state.images, ...res],
      page: this.state.page+1,
    })
  }

   handleModalClose = () => {
    this.setState({
      modalOpen: false,
      modalImg: '',
      modalAlt: '',
    });
  };


  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '20px',
        }}
      >
        {this.state.isLoading ? (<p>Идет загрузка</p>) : (<>
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery onImageClick={this.handleImgClick} images={this.state.images} />
            {this.state.images.length > 0 ? (
              <LoadMoreBtn onClick={this.handleLoadMore}  />
            ) : null}
        </>)}
        {this.state.modalOpen ? (
          <Modal src={this.state.modalImg} alt={this.state.modalAlt} onModalClose={this.handleModalClose} />) : null}
      </div>
    );
  }
};
