import React, { Component } from 'react'
import api_youtube from '../api/api_youtube'
import VideoPlayer from '../components/VideoPlayer'

class Youtube extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            videoTitle: "",
            channelName: "",
            videoMetaInfo: [],
            selectedVideoId: null
        }
    }

    handlerSearch = async (keyword) => {
        const response = await api_youtube.get('/search', {
            params: {
                q: keyword
            }
        })

        this.setState({
            videoMetaInfo: response.data.items,
            selectedVideoId: response.data.items[0].id.videoId,
            videoTitle: response.data.items[0].snippet.title,
            channelName: response.data.items[0].snippet.channelTitle
        })

        console.log(this.state)
    }

    handlerChange = (event) => {
        this.setState({ title: event.target.value })
    }

    handlerSubmit = (event) => {
        event.preventDefault()

        this.handlerSearch(this.state.title)
    }

    handlerSelectVideo = (videoId, videoTitle, channelName) => {
        this.setState({
            selectedVideoId: videoId,
            videoTitle: videoTitle,
            channelName: channelName
        })
        console.log("ini handle")
        console.log(videoId)
        console.log(videoTitle)
    }

    selectVideo(videoIdObj, videoTitleObj, channelNameObj) {
        this.handlerSelectVideo(videoIdObj, videoTitleObj, channelNameObj);
    }



    render() {
        return (
            <div className="container">
                <h1>Youtube</h1>
                <div className="form-group" handlerSearch={this.handlerSearch}>
                    <form onSubmit={this.handlerSubmit}>
                        <input value={this.state.title} onChange={this.handlerChange} type="text" placeholder="Search videos..." className="form-control col-md-5" />
                    </form>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <VideoPlayer videoId={this.state.selectedVideoId} videoTitle={this.state.videoTitle} channelName={this.state.channelName} />
                        </div>

                        <div className="col">
                            {this.state.videoMetaInfo.map((result) =>
                                <div className="card" style={{ width: "20rem" }} onClick={() => this.selectVideo(result.id.videoId, result.snippet.title, result.snippet.channelTitle)}>
                                    <div className="card-body">
                                        <img src={result.snippet.thumbnails.medium.url} alt="image" style={{ width: '200px' }} />
                                        <p>{result.snippet.channelTitle}</p>
                                        <h6>{result.snippet.title}</h6>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Youtube
