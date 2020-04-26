import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from '../views/home';
import Feed from '../views/feed';
import Genre from '../views/genre';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Video from './video.js';

// This file is in javascript because the location hooks and components from
// the react-router-dom show error while compiling as the libraries do not have
// strict type definition and allow 'any' type.

export default function CSwitch() {
  let location = useLocation();
  console.log(location);

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames='fade' timeout={500}>
        <Switch location={location}>
          <Route path='/feed' component={(props) => Feed({ ...props })} />
          <Route path='/genre' component={(props) => Genre({ ...props })} />
          <Route
            path='/video'
            component={(props) =>
              Video({ id: location.search.slice(2), ...props })
            }
          />
          <Route path='/' component={(props) => Home({ ...props })} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
