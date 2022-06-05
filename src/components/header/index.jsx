import { StyledHeader, StyledLink } from "./styled";
import { Logo } from "../logo";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <StyledLink href="login">Login</StyledLink>
        </StyledHeader>
    );
};
