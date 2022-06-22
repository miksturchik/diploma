import styled from "styled-components/macro";

export const StyledCard = styled.div`
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    transition: box-shadow 0.5s;

    display: grid;
    grid-template-rows: 1fr auto;
    break-inside: avoid;
    margin-bottom: 20px;

    img {
        display: block;
        width: 100%;
        grid-row: 1 / -1;
        grid-column: 1;
    }

    &:hover {
        box-shadow: 0 0px 5px 5px rgba(0, 0, 0, 0.2);
    }
`;

export const StyledLikeBtn = styled.button`
    outline: none;
    position: absolute;
    cursor: pointer;
    bottom: 10px;
    right: 10px;
    border: none;
    background: transparent;

    color: ${(props) => (props.active ? "#ed4956" : " #fff")};
`;
