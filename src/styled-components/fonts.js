import { css } from "styled-components";
const fontsPath = "../fonts/mulish/";

export const Fonts = css`
    /* mulish-300 - latin */
    @font-face {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 300;
        src: url("${fontsPath}mulish-300.woff2") format("woff2"),
            url("${fontsPath}mulish-300.woff") format("woff");
    }
    /* mulish-regular - latin */
    @font-face {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        src: url("${fontsPath}mulish-regular.woff2") format("woff2"),
            url("${fontsPath}mulish-regular.woff") format("woff");
    }
`;
