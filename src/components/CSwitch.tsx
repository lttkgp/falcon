import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Home } from "../views/home";
import { Feed } from "../views/feed";
import { Genre } from "../views/genre";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Video } from "./video";

export const CSwitch = () => {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Switch location={location}>
          <Route path="/feed" component={Feed} />
          <Route path="/genre" component={Genre} />
          <Route
            path="/video"
            render={(props) => (
              <Video id={`${location.search.slice(2)}`} {...props} />
            )}
          />
          <Route path="/" component={Home} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
