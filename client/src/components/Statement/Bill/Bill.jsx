import React, { Component } from 'react';

import { connect } from "react-redux";

import dictionary from '../../dictionary';

import { StatementTable, SummaryRow, StatementLabel, StatementValue } from '../../styles';

const StatementRow = ({ label, value, highlight, total }) => {
    return(
        <SummaryRow>
            <StatementLabel highlight={highlight} total={total}>{ dictionary[label] }</StatementLabel>
            <StatementValue highlight={highlight} total={total}>£{value}</StatementValue>
        </SummaryRow>
    )
};

class Bill extends Component {

    render() {

        console.log(this.props.summary);

        const { summary: { period, balance, payment, current } } = this.props;

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

const mapStateToProps = state => {
    console.log(state);
    return { summary: state.summary };
};

const ConnectedBill = connect(mapStateToProps)(Bill);

export default ConnectedBill;
