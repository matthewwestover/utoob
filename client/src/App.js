import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import Videos from './components/Videos';
import Video from './components/Video';
import Profile from './components/Profile';
import CommentForm from './components/CommentForm';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos" component={Videos} />
          <ProtectedRoute exact path="/videos/:id" component={Video} />
          <ProtectedRoute exact path="/videos/:id/comment" component={CommentForm} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
)

export default App;