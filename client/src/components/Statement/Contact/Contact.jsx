import React, { Component } from 'react';

import { fetchWrapper } from '../../helpers';

import { ContactList, ContactMethod } from '../../styles';

class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            methods: []
        }
    };

    componentDidMount(){

        fetchWrapper('contact')
            .then(response => {
                if(response.statusText === "OK"){
                    return response.json();
                }
            })
            .then(jsonResponse => {
                const { data: { methods} } = jsonResponse;
                this.setState({
                    methods
                })
            })
            .catch(error => {
                console.log('Fetch error: ' + error);
            });
    }

    contactMethods() {
        return this.state.methods.map((method,i) => (
            <ContactMethod key={i}>
                {method}
            </ContactMethod>
        ));
    };

    render() {
        return (
            <div>
                <h2>Contact</h2>
                <ContactList>
                    { this.contactMethods() }
                </ContactList>
            </div>
        );
    }
}

export default Contact;