import { getSuggestions } from "services/localstorage";

export const getFilteredSuggestions = (query) => {
    const sugest = getSuggestions();
    const filteredSuggestions = sugest.filter((str) => str.match(query));

    return query
        ? [...new Set([query, ...filteredSuggestions])]
        : filteredSuggestions;
};
