import { Component, Fragment } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchImages } from './api/fetchImages'
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn'
import { Modal } from "./Modal/Modal";
import { Spinner } from "./Loader/Loader";


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

  async componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page || prevState.query !== this.state.query) {
      const res = await fetchImages(
        this.state.query, this.state.page + 1);
      this.setState({
        images: [...this.state.images, ...res],
        page: this.state.page + 1,
      })
    }
  }
  

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { galleryInput }  = event.target.elements;
    if (galleryInput.value.trim() === '') {
      return;
    }
    const response = await fetchImages(galleryInput.value, 1);
    this.setState({
      images: response,
      isLoading: false,
      query: galleryInput.value,
      page: 1,
    })
  }

  handleImgClick = e => {
    this.setState({
      modalOpen: true,
      modalAlt: e.target.alt,
      modalImg: e.target.name,
    });
  }

  handleLoadMore = async () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

   handleModalClose = () => {
    this.setState({
      modalOpen: false,
      modalImg: '',
      modalAlt: '',
    });
  };

  onEscPress = e => {
    if (e.code === 'Escape') {
      this.handleModalClose();
    }
  }

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '18px',
          paddingBottom: '24px',
        }}
      >
        {this.state.isLoading ? (<Spinner />) : (<Fragment>
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery onImageClick={this.handleImgClick} images={this.state.images} />
          {this.state.images.length > 0 ? (
            <div style={{ textAlign: 'center'}}><LoadMoreBtn onClick={this.handleLoadMore}  /></div>
            ) : null}
        </Fragment>)}
        {this.state.modalOpen ? (
          <Modal src={this.state.modalImg} alt={this.state.modalAlt} onModalClose={this.handleModalClose} />) : null}
      </div>
    );
  }
};
