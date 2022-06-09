import PropTypes from "prop-types";
import { StyledCard, StyledLikeBtn } from "./styled";
import { Like } from "@styled-icons/boxicons-solid/Like";

export const Card = ({ children, isAuthorized, onPhotoUpdate }) => {
    return (
        <StyledCard>
            {children}
            {isAuthorized && (
                <StyledLikeBtn>
                    <Like width={24} height={24} />
                </StyledLikeBtn>
            )}
        </StyledCard>
    );
};

Card.propTypes = {
    isAuthorized: PropTypes.bool,
    onPhotoUpdate: PropTypes.func.isRequired,
};
