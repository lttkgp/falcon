import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from '../views/home';
import Feed from '../views/feed';
import Genre from '../views/genre';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Video from './video';

export default function CSwitch() {
  let location = useLocation();
  console.log(location);

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames='fade' timeout={500}>
        <Switch location={location}>
          <Route path='/feed' render={(props) => Feed({ ...props })} />
          <Route path='/genre' render={(props) => Genre({ ...props })} />
          <Route
            path='/video'
            component={(props) =>
              Video({ id: location.search.slice(2), ...props })
            }
          />
          <Route path='/' render={(props) => Home({ ...props })} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
