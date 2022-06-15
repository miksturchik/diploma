import styled from "styled-components";

export const StyledSearchInput = styled.input`
    min-width: 250px;
    padding: 15px 10px;
    border-radius: 7px 0 0 7px;
    border: solid 1px #eaeaea;
    color: #34383f;
    font-size: 18px;
`;

export const StyledButton = styled.button`
    display: block;
    cursor: pointer;
    min-width: 120px;

    padding: 15px 10px;
    height: 100%;
    border: solid 1px #eaeaea;
    background-color: #34383f;
    color: #fff;
    font-weight: bold;
    border-radius: 0 7px 7px 0;
`;

export const StyledSearchWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledMenu = styled.ul`
    display: ${({ open }) => (open ? "block" : "none")};
    position: absolute;
    z-index: 2;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #eaeaea;
`;

export const StyledMenuItem = styled.li`
    cursor: pointer;
    color: #9c9c9c;
    padding: 5px 10px;
    background-color: ${({ active }) => (active ? "#e9f6ee" : "none")};

    &:hover {
        background-color: #e9f6ee;
    }
`;
