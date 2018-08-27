import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

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
            </div>
        );
    }

};

ReactDOM.render(<App />, document.querySelector('.container'))