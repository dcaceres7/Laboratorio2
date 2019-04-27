import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from "./Components/Home";
import User from './Components/User';
import Contact from './Components/Contact';

class RouterDefinition extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/contact" component={Contact} exact />
                        <Route path="/user" component={User} exact />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default RouterDefinition;