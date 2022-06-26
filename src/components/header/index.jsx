import PropTypes from "prop-types";
import { StyledHeader, StyledLink, StyledBtn } from "./styled";
import { AUTH_URL } from "services/constants/urls";
import { setToken } from "services/localstorage";
import { Link } from "react-router-dom";

import { Logo } from "components/logo";

export const Header = ({ isAuthorized }) => {
    const logout = () => {
        setToken("");
        window.location.href = window.location.origin;
    };
    return (
        <StyledHeader>
            <Link to="/">
                <Logo />
            </Link>
            <nav>
                {!isAuthorized ? (
                    <StyledLink href={AUTH_URL}>Login</StyledLink>
                ) : (
                    <>
                        <Link to="Favorite">Favorite</Link>
                        <StyledBtn onClick={logout}>Logout</StyledBtn>
                    </>
                )}
            </nav>
        </StyledHeader>
    );
};

Header.propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
};
