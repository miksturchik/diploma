import { StyledCard, StyledLikeBtn } from "./styled";
import { Like } from "@styled-icons/boxicons-solid/Like";
export const Card = ({ children }) => {
    return (
        <StyledCard>
            {children}
            <StyledLikeBtn>
                <Like width={24} height={24} />
            </StyledLikeBtn>
        </StyledCard>
    );
};
