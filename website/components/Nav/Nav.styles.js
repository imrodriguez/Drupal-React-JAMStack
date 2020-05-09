import styled from 'styled-components';

export const Menu = styled.nav `
    text-align: center;
    ul {
        display: flex;
        justify-content: space-between;
    }
    nav > ul {
        padding: 4px 16px;
    }
    li {
        display: flex;
        padding: 6px 8px;
    }
    a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
    }
`;