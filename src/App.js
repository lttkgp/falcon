import React, { Component } from 'react';
import TrendingCard from './components/TrendingCard';
import './App.css';
import './Styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Home">
          <div className="TrendingLists">
            <div className="Trending">
              <div className="TrendingTitle">
                {"Today's top 10 tracks"}
              </div>
              <TrendingCard
                albumArt={require("./assets/albumart/young_mister.jpg")}
                songName="Everything Has It's Place"
                artistName="Young Mister"
              />
              <TrendingCard
                albumArt={require("./assets/albumart/Carrie_&_Lowell.jpg")}
                songName="Fourth of July"
                artistName="Sufjan Stevens"
              />
              <TrendingCard
                albumArt={require("./assets/albumart/a_rush_of_blood_to_the_head.jpg")}
                songName="Warning Sign"
                artistName="Coldplay"
              />
            </div>
            <div className="Trending">
              <div className="TrendingTitle">
                {"Latest 10 tracks"}
              </div>
              <TrendingCard
                albumArt={require("./assets/albumart/young_mister.jpg")}
                songName="Everything Has It's Place"
                artistName="Young Mister"
              />
              <TrendingCard
                albumArt={require("./assets/albumart/Carrie_&_Lowell.jpg")}
                songName="Fourth of July"
                artistName="Sufjan Stevens"
              />
              <TrendingCard
                albumArt={require("./assets/albumart/a_rush_of_blood_to_the_head.jpg")}
                songName="Warning Sign"
                artistName="Coldplay"
              />
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
