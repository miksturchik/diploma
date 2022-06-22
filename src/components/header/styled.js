import styled from "styled-components/macro";

export const StyledHeader = styled.div`
    display: flex;
    min-height: 50px;
    padding: 15px;
    justify-content: space-between;
    box-shadow: 0 11px 50px 0 rgb(0 0 0 / 3%);
    background-color: #f8f9fb;
    font-size: 18px;
`;

export const StyledLink = styled.a`
    text-decoration: underline;
    font-weight: bold;
`;

export const StyledBtn = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    font-weight: bold;
`;
