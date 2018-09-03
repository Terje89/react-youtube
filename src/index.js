import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCZ8ZtDkjPHmI8vpuVW1NuHdqxqLimPtRs';

class App extends Component {
constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTsearch({key: API_KEY, term: 'dogs'}, (videos) => {
        this.setState({ videos })
    });
}

    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={ this.state.videos[0]} />
                <VideoList videos={ this.state.videos } />
            </div>
        );
    }

};

ReactDOM.render(<App />, document.querySelector('.container'))