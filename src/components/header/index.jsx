import { StyledHeader, StyledLink } from "./styled";
import { AUTH_URL } from "services/constants/urls";

import { Logo } from "../logo";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <StyledLink href={AUTH_URL}>Login</StyledLink>
        </StyledHeader>
    );
};
