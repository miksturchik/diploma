import styled, { keyframes } from "styled-components/macro";
import { Spinner3 } from "@styled-icons/evil/Spinner3";

export const StyledPageWrapper = styled.div`
    background: linear-gradient(
        0deg,
        rgba(58, 77, 83, 1) 0%,
        rgba(176, 207, 214, 1) 100%
    );
`;

export const StyledContentWrapper = styled.div`
    width: 100%;
    background-color: #f8f9fb;
    max-width: 1170px;
    min-height: 100vh;
    margin: 0 auto;
    padding-bottom: 20px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledGridLayout = styled.div`
    padding: 0 20px;
    width: 100%;
    column-count: 3;
    column-gap: 20px;
`;

export const StyledSpinner = styled(Spinner3)`
    color: #ff8f8f;
    display: block;
    margin: 20px auto;
    width: 50px;
    height: 50px;
    animation: ${rotate} 1s linear infinite;
`;

export const StyledGetMoreBtn = styled.button`
    width: 200px;
    display: flex;
    border: none;
    font-weight: 500;
    text-decoration: underline;
    outline: none;
    margin: 20px auto;
    padding: 20px;
    background: none;
    cursor: pointer;
`;
