import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import _ from 'lodash'
import SearchBar from './components/searchFile'
import Videos from './components/video_list'
import VideoDetail from './components/video_details'

const API_KEY = "AIzaSyBH9i3zgDZJxYxDQLdbGIGebQUdSLb00-M";

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            videos:[],
            selectedVideo : null
        }
        this.search('Avengers Infinity War')
    }

    search(search_string){
        YTSearch({ key: API_KEY, term: search_string }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        const videoSearch = _.debounce((term) => {this.search(term)},300)
        return(
            <div>
            <SearchBar onTextChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <Videos videos={this.state.videos} onVideoSelect = {(video)=> this.setState({selectedVideo:video})}/>
            </div>
        )
    }
}
ReactDOM.render(<App />,document.querySelector('.container'))