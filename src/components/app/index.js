import React, { useState } from "react";
import { GridLayout } from "components/grid-layout";
import { Card } from "components/card";
import { Header } from "components/header";
import { Hero } from "components/hero";
import { SearchInput } from "components/search-input";
import { StyledPageWrapper, StyledContentWrapper } from "./styled";
import { useSearhPhotos } from "hooks/use-search-photos";

export const App = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const pictures = useSearhPhotos({ query, page });

    return (
        <StyledPageWrapper>
            <StyledContentWrapper>
                <Header />
                <Hero>
                    <SearchInput onSearch={setQuery} />
                </Hero>
                <GridLayout>
                    {pictures.map(({ alt_description, urls }) => (
                        <Card>
                            <img
                                key={alt_description}
                                alt={alt_description}
                                src={urls.small}
                            />
                        </Card>
                    ))}
                </GridLayout>
            </StyledContentWrapper>
        </StyledPageWrapper>
    );
};
