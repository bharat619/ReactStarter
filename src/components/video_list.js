import React from 'react'
import VideoListItem from './video_list_item'
const videos = (props) => {
    const video_items = props.videos.map((video)=>{
        return <VideoListItem key={video.etag} video={video}
        selectedVideo={props.onVideoSelect}
        />
    })
    return(
        <ul className="col-md-4 list-group">
            {video_items}
        </ul>
    )
}
export default videos