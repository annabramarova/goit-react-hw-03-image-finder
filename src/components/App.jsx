import { Component } from "react";
import { Notify } from "notiflix";
import  Searchbar  from "./Searchbar/Searchbar";
import { fetchImages } from './api/fetchImages';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { Error } from './Error/Error';
import { Spinner } from "./Loader/Loader";


export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    error: null,
    status: 'init',
    allLoaded: false,
  }

  componentDidUpdate(_, prevState) {
    const { query, page, images } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ status: 'loading' });
      fetchImages(query, page)
        .then(({ hasMoreImages, images: newImages, nohits}) => {
          if (nohits) {
          this.setState({ status: 'allLoaded' })
          return Notify.info(
          'Sorry, there are no images matching your search query. Please try again.',
        );
      }
            this.setState(({
            status: hasMoreImages ? 'done' : 'allLoaded',
            images: [...images, ...newImages],
          }));
        })
        .catch(error => this.setState({ status: 'error', error: error.message }));
    }
  }
  

  handleSubmit = query => {
    if (!query || query === this.state.query) {
      return;
    }
    this.setState({ query: query.search, page: 1, images: [] });
  };

  
  handleLoadMore = () => {    
     this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { images, error, status} = this.state;

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
        {status === 'done' && (<div style={{ textAlign: 'center'}}><LoadMoreBtn onClick={this.handleLoadMore}  /></div>)}
        
      </div>
    );
  }
};
