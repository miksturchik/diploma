import React, { useState } from "react";
import { GridLayout } from "components/grid-layout";
import { Card } from "components/card";
import { Header } from "components/header";
import { Hero } from "components/hero";
import { Plug } from "components/plug";
import { SearchInput } from "components/search-input";
import { useSearhPhotos } from "hooks/use-search-photos";
import { useAuth } from "hooks/use-auth";
import {
    StyledPageWrapper,
    StyledContentWrapper,
    StyledSpinner,
} from "./styled";

export const App = () => {
    const [query, setQuery] = useState("");
    const { photos, loading, refetch } = useSearhPhotos({
        query,
    });
    const isAuthorized = useAuth();

    return (
        <StyledPageWrapper>
            <StyledContentWrapper>
                <Header isAuthorized={isAuthorized} />
                <Hero>
                    <SearchInput onSearch={setQuery} />
                </Hero>

                {!photos.length && !loading ? (
                    <Plug query={query} />
                ) : (
                    <GridLayout>
                        {photos.map(
                            ({ id, alt_description, urls, liked_by_user }) => (
                                <Card
                                    key={id}
                                    id={id}
                                    isAuthorized={isAuthorized}
                                    onPhotoUpdate={refetch}
                                    likedByUser={liked_by_user}
                                >
                                    <img
                                        alt={alt_description}
                                        src={urls.small}
                                    />
                                </Card>
                            ),
                        )}
                    </GridLayout>
                )}
                {loading && <StyledSpinner width={30} height={30} />}
            </StyledContentWrapper>
        </StyledPageWrapper>
    );
};
