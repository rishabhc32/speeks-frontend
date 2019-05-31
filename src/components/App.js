import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StartPage from './StartPage';
import Recoder from './Recorder';
import Loader from './Loader';

function App() {
    return (
        <Router>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/start" component={Loader} />
        </Router >
    );
}

export default App;
