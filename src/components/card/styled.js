import styled from "styled-components";

export const StyledCard = styled.div`
    position: relative;
    border-radius: 10px;
    min-height: 200px;
    overflow: hidden;
    transition: all 0.5s;

    img {
        display: flex;
        width: 100%;
        height: auto;
    }

    &:hover {
        box-shadow: 0 0px 5px 5px rgba(0, 0, 0, 0.2);
    }
`;

export const StyledLikeBtn = styled.button`
    position: absolute;
    cursor: pointer;
    bottom: 10px;
    right: 10px;
    color: #fff;
    border: none;
    background: transparent;

    color: ${(props) => (props.active ? "#ed4956" : "inherit")};

    &:hover {
        color: #ed4956;
    }
`;
