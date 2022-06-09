import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { getFilteredSuggestions } from "utils";
import {
    StyledSearchInput,
    StyledButton,
    StyledSearchWrapper,
    StyledMenu,
    StyledMenuItem,
} from "./styled";

export const SearchInput = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const suggestions = useMemo(() => getFilteredSuggestions(query), [query]);
    const [activeS, setActiveS] = useState(suggestions[0]);

    const handleSearchClick = () => {
        onSearch(query);
    };

    const handleOpenMenu = () => setMenuOpen(true);
    const handleCloseMenu = () => setMenuOpen(false);

    const handleInputChange = (e) => setQuery(e.target.value);
    const handleInputBlur = () => setTimeout(handleCloseMenu, 200);

    const handleSugestClick = (suggest) => () => {
        setQuery(suggest);
        onSearch(suggest);
    };

    const selectSuggesction = (dirrection) => {
        let currentIndex = suggestions.indexOf(activeS);

        if (dirrection === "+") {
            currentIndex =
                currentIndex + 1 >= suggestions.length ? 0 : currentIndex + 1;
        } else {
            currentIndex =
                currentIndex - 1 < 0
                    ? suggestions.length - 1
                    : currentIndex - 1;
        }

        setActiveS(suggestions[currentIndex]);
    };

    const handleKeyEvent = (event) => {
        switch (event.key) {
            case "Enter":
                suggestions.includes(activeS)
                    ? handleSugestClick(activeS)()
                    : onSearch(query);
                break;
            case "Tab":
                setQuery(activeS);
                break;
            case "ArrowDown":
                selectSuggesction("+");
                break;
            case "ArrowUp":
                selectSuggesction("-");
                break;
            default:
                break;
        }
    };

    return (
        <StyledSearchWrapper onKeyDownCapture={handleKeyEvent}>
            <StyledSearchInput
                placeholder="Search query..."
                value={query}
                onChange={handleInputChange}
                onFocus={handleOpenMenu}
                onBlur={handleInputBlur}
            />
            <StyledMenu open={menuOpen && suggestions.length !== 0}>
                {suggestions.map((suggest) => (
                    <StyledMenuItem
                        key={suggest}
                        active={suggest === activeS}
                        onClick={handleSugestClick(suggest)}
                    >
                        {suggest}
                    </StyledMenuItem>
                ))}
            </StyledMenu>
            <StyledButton onClick={handleSearchClick}>Search</StyledButton>
        </StyledSearchWrapper>
    );
};

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
