import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { Fonts } from "./fonts";
import { ResetCss } from "./reset";

export const GlobalStyle = createGlobalStyle`

    ${normalize};
    ${ResetCss};
    ${Fonts};

    [role="button"] {
        cursor: pointer;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    a:focus {
        outline: 0 none;
    }
    input[type="button"],
    input[type="submit"],
    input[type="reset"],
    input[type="file"],
    button {
        color: inherit;
    }
    .hidden {
        display: none !important;
    }
    :focus::-webkit-input-placeholder {
        color: transparent;
    }
    :focus::-moz-placeholder {
        color: transparent;
    }
    :focus:-moz-placeholder {
        color: transparent;
    }
    :focus:-ms-input-placeholder {
        color: transparent;
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    button,         
    input[type="submit"],
    textarea {
        margin: 0;
        box-sizing: border-box;
        max-width: 100%;
        font-family: inherit;
    }
    textarea {
        min-width: 100%;
        min-height: 42px;
    }
    p textarea {
        font-family: inherit;
        font-size: inherit;
        width: 100%;
        max-height: 100%;
    }
    button,
    input,
    textarea {
        appearance: none;
        transition: all 0.2s ease;
    }
    input[type="checkbox"] {
        appearance: none;
    }
    input[type="radio"] {
        appearance: none;
    }
    label {
        font-weight: normal;
    }

    html {
        min-height: 100%;
        height: 100%;
        position: relative;
    }

    body {
        line-height: 1.4;
        font-size: 16px;
        min-height: 100vh;
        scroll-behavior: smooth;
        text-rendering: optimizeLegibility;
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
        font-family: "Mulish", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

`;
