import styled from "styled-components";
import hero from "../../assets/img/hero-img.png";

export const StyledHero = styled.div`
    min-height: 275px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    background-image: url(${hero});
    background-size: contain;
    background-position: left;
    background-repeat: no-repeat;
`;
