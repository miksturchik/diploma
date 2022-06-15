import styled, { keyframes } from "styled-components";
import main from "../../assets/img/main-background.jpg";
import { Spinner3 } from "@styled-icons/evil/Spinner3";

export const StyledPageWrapper = styled.div`
    background-image: url(${main});
`;

export const StyledContentWrapper = styled.div`
    width: 100%;
    background-color: #fff;
    max-width: 1170px;
    margin: 0 auto;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled(Spinner3)`
    color: #ff8f8f;
    display: block;
    margin: 50px auto;
    width: 50px;
    height: 50px;
    animation: ${rotate} 1s linear infinite;
`;
