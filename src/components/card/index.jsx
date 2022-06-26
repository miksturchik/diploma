import PropTypes from "prop-types";
import { StyledCard, StyledLikeBtn, StyledDownloadLink } from "./styled";
import { Like } from "@styled-icons/boxicons-solid/Like";
import { Download } from "@styled-icons/boxicons-solid/Download";
import { likePicture, unlikePicture } from "services/http";

export const Card = ({ children, id, isAuthorized, likedByUser, onPhotoUpdate, downloadLink }) => {
    const onBtnClick = async () => {
        const action = likedByUser ? unlikePicture : likePicture;
        const updatedDatta = await action(id);
        onPhotoUpdate(updatedDatta.photo);
    };

    return (
        <StyledCard>
            {children}
         
            {isAuthorized && (
                <StyledLikeBtn active={likedByUser} onClick={onBtnClick}>
                    <Like width={24} height={24} />
                </StyledLikeBtn>
            )}

            {isAuthorized && downloadLink && (
                <StyledDownloadLink href={downloadLink} download target="_blank">
                    <Download width={24} height={24} />
                </StyledDownloadLink>
            )}
        </StyledCard>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    isAuthorized: PropTypes.bool,
    likedByUser: PropTypes.bool,
    downloadLink: PropTypes.string,
    onPhotoUpdate: PropTypes.func.isRequired,
};
