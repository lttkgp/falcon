import React, { Component } from 'react';
import axios from 'axios';
import TrendingCard from './components/TrendingCard';
import './App.css';
import './Styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trendingDataFetched: false,
      latestDataFetched: false,
      trendingData: [],
      latestData: [],
    };
    this.getVideoId = this.getVideoId.bind(this);
  }

  componentDidMount() {
    const falconUrl = "http://localhost:3001";
    axios.get(falconUrl + "/trending/month")
      .then((response) => this.setState({
          trendingDataFetched: true,
          trendingData: response['data']
        })
      );
    axios.get(falconUrl + "/latest/50")
      .then((response) => this.setState({
          latestDataFetched: true,
          latestData: response['data']
        })
      );
  }

  getVideoId(videoUrl) {
    let videoId = '';
    videoUrl = videoUrl.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(videoUrl[2] !== undefined) {
      videoId = videoUrl[2].split(/[^0-9a-z_-]/i);
      videoId = videoId[0];
    }
    else {
      videoId = videoUrl;
    }
    return videoId;
  }

  render() {
    return (
      <div className="App">
        <div className="Home">
          <div className="TrendingLists">
            <div className="Trending">
              <div className="TrendingTitle">
                {"This month's top tracks"}
              </div>
              {
                this.state.trendingData.map((item, i) => {
                  let videoId = this.getVideoId(item['link']);
                  return (
                    <TrendingCard
                      albumArt={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      songName={item['name']}
                      artistName=""
                      cardId={i}
                    />
                  )
                })
              }
            </div>
            <div className="Trending">
              <div className="TrendingTitle">
                {"Latest tracks"}
              </div>
              {
                this.state.latestData.map((item, i) => {
                  let videoId = this.getVideoId(item['link']);
                  return (
                    <TrendingCard
                      albumArt={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      songName={item['name']}
                      artistName=""
                      cardId={i}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="SideBar">
        </div>
        <div className="Player">
        </div>
      </div>
    );
  }
}

export default App;
