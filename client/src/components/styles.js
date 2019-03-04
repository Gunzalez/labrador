import styled, { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        @import url('https://fonts.googleapis.com/css?family=Ropa+Sans');
        font-family: Ropa Sans;
    }
`;

const StatementContainer = styled.div`   
    max-width: 900px;
    width: 80%;
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
    max-width: 600px;
    width: 100%;
    border: 1px solid #cccccc;
`;

export const SummaryRow = styled.tr`
`;

export const StatementLabel = styled.td`
    padding-bottom: ${props => props.highlight ? '10px' : '5px'};
    padding-top: ${props => props.highlight ? '10px' : '5px'};
    border-bottom: ${props => props.highlight ? '2px solid #cccccc' : null};
    font-weight: ${props => props.highlight ? 'bold' : null};
    font-size: ${props => props.total ? '1.4em' : '1em'}  
`;

export const ContactList = styled(NavigationBar)`
    background: whitesmoke;     
`;

export const ContactMethod = styled.li`
     padding: 8px 15px;
     border-bottom: 2px solid #ffffff;
     
`;



export const StatementValue = styled(StatementLabel)`
    text-align: right;
    padding-left: 40px;
`;

export default StatementContainer;