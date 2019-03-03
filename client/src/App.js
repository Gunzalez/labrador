import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Bill from './components/Statement/Bill/Bill';
import Contact from './components/Statement/Contact/Contact';
import StatementContainer, { NavigationBar, NavigationBarItem } from './components/Statement.styles';

class App extends Component {
    render() {
        return (
            <Router>
                <StatementContainer>
                    <h2>Your Energy Statement</h2>
                    <NavigationBar>
                        <NavigationBarItem><Link to={'/'} className="nav-link"> Main Bill </Link></NavigationBarItem>
                        <NavigationBarItem><Link to={'/contact'} className="nav-link">Contact</Link></NavigationBarItem>
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
