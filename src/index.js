import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search-bar'

import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyBS3SK7Q4GQouBoC3HV3N_WsET4jXOz1CU'

// create new component
class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'bollywood'}, (videos) => {
      this.setState({videos: videos});
    });
  }

  render() {
    return(
      <div>
        <SearchBar />
      </div>
    )
  }
}

// render new component
ReactDOM.render(<App />, document.querySelector('.container'))
