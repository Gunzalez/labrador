import styled, { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        @import url('https://fonts.googleapis.com/css?family=Ropa+Sans');
        font-family: Ropa Sans;
    }
`;

const StatementContainer = styled.div`   
    width: 900px;
    margin: 0 auto;
`;

export const NavigationBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const NavigationBarItem = styled.li`
    display: inline;
    padding-right: 10px;
`;

export const StatementTable = styled.table`
    padding: 10px;
    width: 600px;
    border: 1px solid #cccccc;
`;

export const SummaryRow = styled.tr`
`;

export const StatementLabel = styled.td`
    padding-right: 50px;
    padding-bottom: ${props => props.highlight ? '10px' : '5px'};
    padding-top: ${props => props.highlight ? '10px' : '5px'};
    text-align: left;
    border-bottom: ${props => props.highlight ? '2px solid #cccccc' : null};
    font-weight: ${props => props.highlight ? 'bold' : null};
    font-size: ${props => props.total ? '1.4em' : '1em'}
    
`;

export const StatementValue = styled(StatementLabel)`
    text-align: right;
    padding-right: 0;
`;

export default StatementContainer;