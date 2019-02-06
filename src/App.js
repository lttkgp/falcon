import React, { Component } from 'react';
import axios from 'axios';
import TrendingCard from './components/TrendingCard';
import './App.css';
import './Styles.css';
import YouTube from 'react-youtube';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trendingDataFetched: false,
      latestDataFetched: false,
      trendingData: [],
      latestData: [],
      trendingPlaylist: null,
      latestPlaylist: null,
      activeId: null,
    };
    this.getVideoId = this.getVideoId.bind(this);
    this.buildPlaylist = this.buildPlaylist.bind(this);
    this.playVideoWithId = this.playVideoWithId.bind(this);
    this.postSongEnd = this.postSongEnd.bind(this);
  }

  componentDidMount() {
    const falconUrl = "http://localhost:3001";
    axios.get(falconUrl + "/trending/month")
      .then((response) => {
        if (response['data'] != null) {
          this.setState({
            trendingDataFetched: true,
            trendingData: response['data']
          });
          this.buildPlaylist(0, response['data']);
        }
      }
    );
    axios.get(falconUrl + "/latest/50")
      .then((response) => {
        if (response['data'] != null) {
          this.setState({
            latestDataFetched: true,
            latestData: response['data']
          });
          this.buildPlaylist(1, response['data']);
        }
      }
    );
  }

  buildPlaylist(playlistType, playlistData) {
    let videoIds = []
    for (let i=0; i<playlistData.length; ++i) {
      let videoId = this.getVideoId(playlistData[i]['link']);
      if (videoId.length === 11) {
        videoIds.push(videoId);
      }
    }
    if (playlistType === 0) {
      this.setState({
        trendingPlaylist: videoIds,
        activeId: {
          listId: 0,
          cardId: 0,
          videoId: videoIds[0]},
      });
    } else if (playlistType === 1) {
      this.setState({
        latestPlaylist: videoIds
      });
    }
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

  playVideoWithId(listId, cardId, videoId) {
    this.setState({
      activeId: {
        listId,
        cardId,
        videoId,
      },
    });
  }

  postSongEnd() {
    console.log("new song!");
    let currentActiveId = this.state.activeId;
    this.setState({
      activeId: {
        listId: currentActiveId['listId'],
        cardId: currentActiveId['cardId'] + 1,
        videoId: currentActiveId['listId']===0?this.state.trendingPlaylist[currentActiveId['cardId'] + 1]:this.state.latestPlaylist[currentActiveId['cardId'] + 1],
      },
    });
  }

  render() {
    let playerOptions = {
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className="App">
        <div className="Home">
          <div className="VideoPlayer">
            {
              this.state.activeId &&
              <YouTube
                videoId={this.state.activeId['videoId']}
                opts={playerOptions}
                onEnd={() => this.postSongEnd()}
              >
              </YouTube>
            }
          </div>
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
                      listId={0}
                      cardId={i}
                      videoId={videoId}
                      onPlayButton={this.playVideoWithId}
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
                      listId={1}
                      cardId={i}
                      videoId={videoId}
                      onPlayButton={this.playVideoWithId}
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
