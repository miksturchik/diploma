import PropTypes from "prop-types";
import { StyledCard, StyledLikeBtn } from "./styled";
import { Like } from "@styled-icons/boxicons-solid/Like";
import { likePicture, unlikePicture } from "services/http";

export const Card = ({
    children,
    id,
    isAuthorized,
    likedByUser,
    onPhotoUpdate,
}) => {
    const onBtnClick = async () => {
        const action = likedByUser ? unlikePicture : likePicture;
        await action(id);
        onPhotoUpdate();
    };

    return (
        <StyledCard>
            {children}
            {isAuthorized && (
                <StyledLikeBtn active={likedByUser} onClick={onBtnClick}>
                    <Like width={24} height={24} />
                </StyledLikeBtn>
            )}
        </StyledCard>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    isAuthorized: PropTypes.bool,
    likedByUser: PropTypes.bool,
    onPhotoUpdate: PropTypes.func.isRequired,
};
