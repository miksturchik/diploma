import React, { useState } from "react";
import { GridLayout } from "components/grid-layout";
import { Card } from "components/card";
import { Header } from "components/header";
import { Hero } from "components/hero";
import { SearchInput } from "components/search-input";
import { StyledPageWrapper, StyledContentWrapper } from "./styled";
import { useSearhPhotos } from "hooks/use-search-photos";
import { useAuth } from "hooks/use-auth";

export const App = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const { photos, refetch } = useSearhPhotos({ query, page });
    const isAuthorized = useAuth();

    return (
        <StyledPageWrapper>
            <StyledContentWrapper>
                <Header isAuthorized={isAuthorized} />
                <Hero>
                    <SearchInput onSearch={setQuery} />
                </Hero>
                <GridLayout>
                    {photos.map(({ alt_description, urls }) => (
                        <Card
                            isAuthorized={isAuthorized}
                            onPhotoUpdate={refetch}
                        >
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
