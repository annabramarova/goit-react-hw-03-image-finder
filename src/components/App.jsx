
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn'
// import { FaSearch } from "react-icons/fa/FaSearch";


export class App extends Component {
  state = {
  images: [],
    isLoading: false,
    query: '',
    page: 1,
    modalOpen: false,
  }

  handleSubmit = () => {

  }
  handleImgClick = () => {

  }

  handleLoadMore = () => {

  }

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
        <>
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery onImageClick={this.handleImgClick} images={this.state.images} />
            {this.state.images.length > 0 ? (
              <LoadMoreBtn onClick={this.handleLoadMore}  />
            ) : null}
        </>
      </div>
    );
  }
};
