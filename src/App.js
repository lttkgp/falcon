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
      weeklyDataFetched: false,
      latestDataFetched: false,
      trendingData: [],
      weeklyData: [],
      latestData: [],
      trendingPlaylist: null,
      weeklyPlaylist: null,
      latestPlaylist: null,
      activeId: null,
    };
    this.getVideoId = this.getVideoId.bind(this);
    this.buildPlaylist = this.buildPlaylist.bind(this);
    this.playVideoWithId = this.playVideoWithId.bind(this);
    this.postSongEnd = this.postSongEnd.bind(this);
  }

  componentDidMount() {
    const falconUrl = "https://api.lttkgp.com";
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
    axios.get(falconUrl + "/trending/week")
    .then((response) => {
      if (response['data'] != null) {
        this.setState({
          weeklyDataFetched: true,
          weeklyData: response['data']
        });
        this.buildPlaylist(1, response['data']);
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
          this.buildPlaylist(2, response['data']);
        }
      }
    );
  }

  buildPlaylist(playlistType, playlistData) {
    let videoIds = []
    for (let i=0; i<playlistData.length; ++i) {
      let videoId = this.getVideoId(playlistData[i]['link']);
      videoIds.push(videoId);
    }
    if (playlistType === 0) {
      let i=0;
      do {
        this.setState({
          trendingPlaylist: videoIds,
          activeId: {
            listId: 0,
            cardId: 0,
            videoId: videoIds[0]},
        });
      } while(videoIds[i].length!==11);
    } else if (playlistType === 1) {
      this.setState({
        weeklyPlaylist: videoIds
      });
    } else if (playlistType === 2) {
      this.setState({
        latestPlaylist: videoIds
      });
    }
  }

  getVideoId(videoUrl) {
    videoUrl = videoUrl.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return undefined !== videoUrl[2]?videoUrl[2].split(/[^0-9a-z_\-]/i)[0]:videoUrl[0];
  }

  playVideoWithId(listId, cardId, videoId) {
    while (videoId.length!==11) {
      cardId += 1;
      if (listId === 0) {
        videoId = this.state.trendingPlaylist[cardId];
      } else if (listId === 1) {
        videoId = this.state.weeklyPlaylist[cardId];
      } else if (listId === 2) {
        videoId = this.state.latestPlaylist[cardId];
      }
    }
    this.setState({
      activeId: {
        listId,
        cardId,
        videoId,
      },
    });
  }

  postSongEnd() {
    let currentActiveId = this.state.activeId;
    let videoId = currentActiveId['videoId'];
    if (currentActiveId['listId']===0) {
      videoId = this.state.trendingPlaylist[currentActiveId['cardId'] + 1];
    } else if (currentActiveId['listId']===1) {
      videoId = this.state.weeklyPlaylist[currentActiveId['cardId'] + 1];
    } else if (currentActiveId['listId']===2) {
      videoId = this.state.latestPlaylist[currentActiveId['cardId'] + 1];
    }
    this.playVideoWithId(currentActiveId['listId'], currentActiveId['cardId'] + 1, videoId);
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
          <div className="HomeTitle">
            Listen To This KGP!
          </div>
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
                {"This week's top tracks"}
              </div>
              {
                this.state.weeklyData.map((item, i) => {
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
                      listId={2}
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
      </div>
    );
  }
}

export default App;
