import styled from "styled-components/macro";
import hero from "../../assets/img/hero-image.jpg";

export const StyledHero = styled.div`
    min-height: 325px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    background-image: url(${hero});
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    background-color: #f8f9fb;
`;
