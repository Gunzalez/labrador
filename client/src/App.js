import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Bill from './components/Statement/Bill/Bill';
import Contact from './components/Statement/Contact/Contact';
import StatementContainer, { NavigationBar, NavigationBarItem } from './components/styles';

class App extends Component {
    render() {
        return (
            <Router>
                <StatementContainer>
                    <h1>Your Energy Statement</h1>
                    <NavigationBar>
                        <NavigationBarItem><Link to={'/'} className="nav-link"> Statement Summary </Link></NavigationBarItem>
                        <NavigationBarItem><Link to={'/contact'} className="nav-link">Contact Information</Link></NavigationBarItem>
                    </NavigationBar>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Bill} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </StatementContainer>
            </Router>
        );
    }
}

export default App;
