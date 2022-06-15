import PropTypes from "prop-types";
import { StyledPlugText } from "./styled";

export const Plug = ({ query }) => {
    const notFoundText = `Nothing is found for query: "${query}"`;
    const emptyQueryText = "To find photos type your query into input above...";
    return (
        <StyledPlugText>{query ? notFoundText : emptyQueryText}</StyledPlugText>
    );
};

Plug.propTypes = {
    query: PropTypes.string,
};
