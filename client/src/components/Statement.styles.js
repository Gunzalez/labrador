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

export default StatementContainer;