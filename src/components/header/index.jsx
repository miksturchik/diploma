import PropTypes from "prop-types";
import { StyledHeader, StyledLink, StyledBtn } from "./styled";
import { AUTH_URL } from "services/constants/urls";
import { setToken } from "services/localstorage";

import { Logo } from "components/logo";

export const Header = ({ isAuthorized }) => {
    const logout = () => {
        setToken("");
        window.location.href = window.location.origin;
    };
    return (
        <StyledHeader>
            <Logo />
            {!isAuthorized ? (
                <StyledLink href={AUTH_URL}>Login</StyledLink>
            ) : (
                <StyledBtn onClick={logout}>Logout</StyledBtn>
            )}
        </StyledHeader>
    );
};

Header.propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
};
