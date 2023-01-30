import { Component } from "react";

import  Searchbar  from "./Searchbar/Searchbar";
import { fetchImages } from '../api/fetchImages';
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
    status: 'init'
  }

  componentDidUpdate(_, prevState) {
    const { query, page, images } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.setState({ status: 'loading' });
      fetchImages(query, page)
        .then(({ hasMoreImages, images: newImages }) => {
          this.setState(({
            status: hasMoreImages ? 'done' : 'allLoaded',
            images: [...images, ...newImages],
          }));
        })
        .catch(error => this.setState({ status: 'error', error: error.message }));
    }
  }  
  

  handleSubmit = query => {
    this.setState({ query: query.search, page: 1, images: [] });
  };

  
  handleLoadMore = () => {    
     this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { images, error, status, query} = this.state;

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
        {(!images.length && query) && <p style={{ margin: '0 auto', fontSize: '28px', fontWeight: '600', color: '#D0342C'}}>Nothing found</p>}
        {Boolean(images.length >0) && status === 'done' && (<div style={{ textAlign: 'center'}}><LoadMoreBtn onClick={this.handleLoadMore}  /></div>)}
        
      </div>
    );
  }
};
