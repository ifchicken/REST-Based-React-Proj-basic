import React from 'react';
// BrowserRouter -> Router bc we create our own history
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
              <Route path='/' exact component={StreamList} />
              <Route path='/streams/new' exact component={StreamCreate} />
              <Route path='/streams/edit/:id' exact component={StreamEdit} />
              <Route path='/streams/delete/:id' exact component={StreamDelete} />
              <Route path='/streams/:id' exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;


// if use <a href> tag,it will reload index.js and all redux dat would be reload, old one would be gone
// use <Link to>  -> single page app
