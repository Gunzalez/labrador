import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { connect } from "react-redux";
import ConnectedBill from './components/Statement/Bill/Bill';
import Contact from './components/Statement/Contact/Contact';
import StatementContainer, { NavigationBar, NavigationBarItem } from './components/styles';

import  { fetchWrapper } from './components/helpers';

import store from './components/redux/configureStore';

import { addSummary } from "./components/redux/actions";

class ConnectedApp extends Component {

    constructor(props){
        super(props)
    }


    componentDidMount(){
        console.log(this.props);

        // this.props.fetchSummary();
    }

    render() {

        // const someData = {
        //     "period": "April 2018 - 16 Dec 2017",
        //     "balance": "125.10",
        //     "payment": "44.34",
        //     "current": "83.49"
        // };
        //
        // this.props.addSummary(someData);

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
                        <Route exact path='/' component={ConnectedBill} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </StatementContainer>
            </Router>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addSummary: someData => dispatch(addSummary(someData))
    };
}

const App = connect(null, mapDispatchToProps)(ConnectedApp);

export default App;
