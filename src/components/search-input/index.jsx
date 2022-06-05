import { StyledSearchInput, StyledButton, StyledSearchWrapper } from "./styled";

export const SearchInput = () => {
    return (
        <StyledSearchWrapper>
            <StyledSearchInput placeholder="Search query..." />
            <StyledButton>Search</StyledButton>
        </StyledSearchWrapper>
    );
};
