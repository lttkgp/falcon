import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlay, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
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
                Today's top 10 tracks
              </div>
              <div className="TrendingCard">
                <div className="TrendingCardImage">
                  <img src={ require('./assets/albumart/young_mister.jpg') } alt="Album Art"/>
                </div>
                <div className="TrendingSongDetails">
                  <div className="TrendingSongName">
                    Everything Has It's Place
                  </div>
                  <div className="TrendingSongArtistName">
                    Young Mister
                  </div>
                </div>
                <div className="TrendingCardButtons">
                  <div className="TrendingCardButton">
                    <FontAwesomeIcon icon={faPlus} color="#4c4c4c"/>
                  </div>
                  <div className="TrendingCardButton">
                    <FontAwesomeIcon icon={faPlay} color="#4c4c4c"/>
                  </div>
                  <div className="TrendingCardButton">
                    <FontAwesomeIcon icon={faEllipsisV} color="#4c4c4c"/>
                  </div>
                </div>
              </div>
              <div className="TrendingCard">
                <div className="TrendingCardImage">
                  <img src={ require('./assets/albumart/Carrie_&_Lowell.jpg') } alt="Album Art"/>
                </div>
                <div className="TrendingSongDetails">
                  <div className="TrendingSongName">
                    Fourth of July
                  </div>
                  <div className="TrendingSongArtistName">
                    Sufjan Stevens
                  </div>
                </div>
                <div className="TrendingCardButtons">
                  <div className="TrendingCardButton">
                  </div>
                  <div className="TrendingCardButton">
                  </div>
                  <div className="TrendingCardButton">
                  </div>
                </div>
              </div>
              <div className="TrendingCard">
                <div className="TrendingCardImage">
                  <img src={ require('./assets/albumart/a_rush_of_blood_to_the_head.jpg') } alt="Album Art"/>
                </div>
                <div className="TrendingSongDetails">
                  <div className="TrendingSongName">
                    Warning Sign
                  </div>
                  <div className="TrendingSongArtistName">
                    Coldplay
                  </div>
                </div>
                <div className="TrendingCardButtons">
                  <div className="TrendingCardButton">
                  </div>
                  <div className="TrendingCardButton">
                  </div>
                  <div className="TrendingCardButton">
                  </div>
                </div>
              </div>
            </div>
            <div className="Trending">
              <div className="TrendingTitle">
                Latest 10 tracks
              </div>
              <div className="TrendingCard">
                <div className="TrendingCardImage">
                  <img src={ require('./assets/albumart/young_mister.jpg') } alt="Album Art"/>
                </div>
                <div className="TrendingSongDetails">
                  <div className="TrendingSongName">
                    Everything Has It's Place
                  </div>
                  <div className="TrendingSongArtistName">
                    Young Mister
                  </div>
                </div>
                <div className="TrendingCardButtons">
                  <div className="TrendingCardButton">
                  </div>
                  <div className="TrendingCardButton">
                  </div>
                  <div className="TrendingCardButton">
                  </div>
                </div>
              </div>
              <div className="TrendingCard">
                <div className="TrendingCardImage">
                  <img src={ require('./assets/albumart/Carrie_&_Lowell.jpg') } alt="Album Art"/>
                </div>
                <div className="TrendingSongDetails">
                  <div className="TrendingSongName">
                    Fourth of July
                  </div>
                  <div className="TrendingSongArtistName">
                    Sufjan Stevens
                  </div>
                </div>
                <div className="TrendingCardButtons">
                  <div className="TrendingCardButton">
                  </div>
                  <div className="TrendingCardButton">
                  </div>
                  <div className="TrendingCardButton">
                  </div>
                </div>
              </div>
              <div className="TrendingCard">
                <div className="TrendingCardImage">
                  <img src={ require('./assets/albumart/a_rush_of_blood_to_the_head.jpg') } alt="Album Art"/>
                </div>
                <div className="TrendingSongDetails">
                  <div className="TrendingSongName">
                    Warning Sign
                  </div>
                  <div className="TrendingSongArtistName">
                    Coldplay
                  </div>
                </div>
                <div className="TrendingCardButtons">
                  <div className="TrendingCardButton">
                  </div>
                  <div className="TrendingCardButton">
                  </div>
                  <div className="TrendingCardButton">
                  </div>
                </div>
              </div>
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
