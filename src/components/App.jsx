import { Component } from "react";
import { Notify } from "notiflix";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchImages } from './api/fetchImages';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { Error } from './Error/Error';
import { Spinner } from "./Loader/Loader";


export class App extends Component {
  state = {
    images: [],
    query: null,
    page: null,
    error: null,
    status: 'init',
  }

   componentDidUpdate(_, prevState) {
    if (
      prevState.search === this.state.search ||
      prevState.page === this.state.page
    ) {
     return;
    }
  }


  handleSubmit = async e => {
    e.preventDefault();
  
    try {
      this.setState({ status: 'loading' });
      const searchQuery = e.target.elements.searchQuery;
      const response = await fetchImages(searchQuery.value, 1);
      
      if (response.length === 0) {
        return Notify.info(
          'Sorry, there are no images matching your search query. Please try again.',
          { position: 'center-center', fontSize: '16px' }        
        );
      }
      this.setState({
        images: response,
        query: searchQuery.value,
        page: 1,
      });
      
    } catch (error) {
      this.setState({ status: 'error' })
    } finally {
      this.setState({ status: 'done' })
    }
  }
  
  handleLoadMore = async () => {    
    const { page , query } = this.state;
    const response = await fetchImages(query, page + 1);
    this.setState({
      images: [...this.state.images, ...response],
      page: page + 1,
    });
  }

  render() {
    const { images, error, status } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '18px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {status === 'error' && <Error message={error} />}
        {status === 'loading' && <Spinner />}
        {Boolean(images.length) && status === 'done' && (<div style={{ textAlign: 'center'}}><LoadMoreBtn onClick={this.handleLoadMore}  /></div>)}
        
      </div>
    );
  }
};
