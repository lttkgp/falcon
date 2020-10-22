/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import YouTube from "react-youtube";

import { getSongList } from "../store/list/effects";
import { FeedListType } from "../store/list/types";
import { mobileCheck } from "../utils/video";
import { joinArtists } from "../utils";
import { filterGenres } from "../utils/filterList";
import { FalconRootState } from "../store/rootReducer";

import Card from "./card";

import * as Icon from "react-feather";

interface VideoProps {
  id: string;
}

export const Video = (props: VideoProps) => {
  let dispatch = useDispatch();
  let { type, posts } = useSelector((state: FalconRootState) => state.queue);
  let [queue] = useState(posts);

  if (posts.length === 0) {
    if (window !== undefined) {
      var home = window.location.protocol + "//" + window.location.host;
      if (window.history.pushState) {
        window.history.pushState({ path: home }, "", home);
      }
    }
  }

  let changeURLid = (id: string) => {
    if (window !== undefined) {
      if (window.history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?=" + id;
        window.history.pushState({ path: newurl }, "", newurl);
      }
    }
  };

  let [currentIndex, changeIndex] = useState(
    (() => {
      if (props.id) {
        return posts.map((e) => e.id).indexOf(props.id);
      }
      return 0;
    })()
  );

  let handleModScroll = () => {
    if (mobileCheck() && window !== null) {
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        let e = document.getElementsByClassName("desc")[0];
        if (prevScrollpos > currentScrollPos && e !== null) {
          e.classList.remove("hidden");
        } else {
          e.classList.add("hidden");
        }
        if (currentScrollPos === 0) {
          e.classList.add("large");
          e.classList.remove("hidden");
        } else {
          e.classList.remove("large");
        }
        prevScrollpos = currentScrollPos;
      };
    }
  };

  let scrollCurrentVideo = (timeout = 100, offset = 0) => {
    setTimeout(() => {
      if (document !== undefined) {
        let el = document.querySelector(".current.queueCard");
        let Q = document.querySelector(".queue");

        if (el !== null && Q !== null) {
          const elementRect = el.getBoundingClientRect();
          const queueRect = Q.getBoundingClientRect();
          window.scroll({
            left: 0,
            top: elementRect.top - queueRect.y + offset,
            behavior: "smooth",
          });
        }
      }
    }, timeout);
  };

  useEffect(() => {
    if (document !== undefined) {
      handleModScroll();

      // When the page loads, it takes some time to render queue
      // hence we are using a delayed scroll
      scrollCurrentVideo(750);
    }
  }, []);

  useEffect(() => {
    // Scroll whenever the currentIndex changes
    scrollCurrentVideo();
  }, [currentIndex]);

  let playNextVideo = useCallback(() => {
    if (queue.length > 0) {
      if (currentIndex + 1 < queue.length) {
        changeURLid(queue[currentIndex + 1].id);
        changeIndex(currentIndex + 1);
      } else {
        // Fetch the songs of the current list type
        // append the songs to the queue
        // Play the next song
      }
    }
  }, [queue, currentIndex]);

  let playPrevVideo = useCallback(() => {
    if (currentIndex > 0) {
      changeURLid(queue[currentIndex - 1].id);
      changeIndex(currentIndex - 1);
    }
  }, [queue, currentIndex]);

  let handleEndOfVideo = () => {
    playNextVideo();
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if ((event.key === "n" || event.key === "N") && event.shiftKey) {
        playNextVideo();
      } else if ((event.key === "p" || event.key === "P") && event.shiftKey) {
        playPrevVideo();
      }
    };

    window.addEventListener("keyup", handleKeyPress);

    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, [playPrevVideo, playNextVideo]);

  return (
    <div className={queue.length !== 0 ? "video" : "video fullview"}>
      <div className="player-wrapper">
        <div className="video-container">
          <YouTube
            videoId={queue.length !== 0 ? queue[currentIndex].id : props.id}
            onEnd={handleEndOfVideo}
            opts={{
              height: "550",
              width: "900",
              playerVars: {
                autoplay: 1,
                playsinline: 1,
              },
            }}
          />

          {queue.length !== 0 ? (
            <div className="desc large">
              <div className="prev_song control_button" onClick={playPrevVideo}>
                <Icon.ChevronLeft />
              </div>
              <div className="info">
                <div className="middle">
                  <div className="text">
                    <h1 className="title">{queue[currentIndex].metadata.song.name}</h1>
                    <Helmet defer={false}>
                      <title>{queue[currentIndex].metadata.song.name} - LTTKGP 🎶 🎶 🎶</title>
                    </Helmet>
                    <h2>{joinArtists(queue[currentIndex].metadata.artists)}</h2>
                  </div>

                  <div className="widgets">
                    <div className="icons">
                      <a
                        href={"https://www.youtube.com/watch?v=" + queue[currentIndex].id}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon.Youtube></Icon.Youtube>
                      </a>
                      <a
                        href={queue[currentIndex].postdata.permalink_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fb-icon"
                      >
                        <Icon.Facebook></Icon.Facebook>
                      </a>
                      {/*
                  <a href='#link'>
                    <Icon.Link2></Icon.Link2>
                  </a>
                     */}
                      <span
                        className="likes"
                        // target="_blank"
                        // rel="noopener noreferrer"
                      >
                        <Icon.Heart></Icon.Heart>
                        <span>{queue[currentIndex].postdata.likes_count}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="genres">
                  {filterGenres(queue[currentIndex].metadata.genre).map((genre) => {
                    return (
                      <div className="genre-tag" key={"genre-tag-" + genre + "ssyid"}>
                        {genre}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="next_song control_button" onClick={playNextVideo}>
                <Icon.ChevronRight />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {queue.length !== 0 ? (
        <div className="queue">
          <h1 className="title">Queue</h1>
          {queue.map((vid, index) => {
            let selectClass = "";
            if (index === currentIndex) {
              selectClass = " current";
            }
            return (
              <Card
                id={vid.id}
                key={vid.id + "Queue-xyppu"}
                data={vid}
                type={type}
                className={"queueCard" + selectClass}
                redirect={false}
                onClick={() => {
                  changeURLid(vid.id);
                  changeIndex(index);
                }}
                queue={[]}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
