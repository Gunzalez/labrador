import React, { Component } from 'react';

import dictionary from '../../dictionary';

import { StatementTable, SummaryRow, StatementLabel, StatementValue } from '../../styles';

import { fetchWrapper } from '../../helpers';

const StatementRow = ({ label, value, highlight, total }) => {
    return(
        <SummaryRow>
            <StatementLabel highlight={highlight} total={total}>{ dictionary[label] }</StatementLabel>
            <StatementValue highlight={highlight} total={total}>£{value}</StatementValue>
        </SummaryRow>
    )
};

class Bill extends Component {

    constructor(props){
        super(props);
        this.state = {
            summary: {}
        }
    };

    componentDidMount(){

        fetchWrapper('summary')
            .then(response => {
                if(response.statusText === "OK"){
                    return response.json();
                }
            })
            .then(jsonResponse => {
                const { data } = jsonResponse;
                this.setState({
                    summary: data
                })
            })
            .catch(error => {
                console.log('Fetch error: ' + error);
            });
    };

    render() {

        const { summary: { period, balance, payment, current } } = this.state;

        const broughtForward = (balance - payment).toFixed(2);

        const final = parseFloat(broughtForward) + parseFloat(current);

        return (
            <div>
                <h2>Statement Summary</h2>
                <h3>For the Period { period }</h3>
                <StatementTable>
                    <tbody>
                        <StatementRow label={'balance'} value={balance} />
                        <StatementRow label={'payment'} value={payment} />
                        <StatementRow label={'broughtForward'} value={broughtForward} highlight={true} />
                        <StatementRow label={'current'} value={current} highlight={true} />
                        <StatementRow label={'final'} value={final} total={true} highlight={true} />
                    </tbody>
                </StatementTable>
            </div>
        );
    }
}

export default Bill;