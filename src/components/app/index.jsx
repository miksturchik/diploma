import React, { useState, useCallback } from "react";
import { Card } from "components/card";
import { Header } from "components/header";
import { Hero } from "components/hero";
import { PicturesGrid } from "components/pictures-grid";
import { ProtectedRoute } from "components/protected-route";
import { SearchInput } from "components/search-input";
import { useSearhPhotos } from "hooks/use-search-photos";
import { useAuth } from "hooks/use-auth";
import { StyledPageWrapper, StyledContentWrapper, StyledSpinner, StyledGetMoreBtn } from "./styled";
import { getSuggestions } from "services/localstorage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = React.memo(() => {
    const [query, setQuery] = useState(getSuggestions()[0] || "");
    const [page, setPage] = useState(1);

    const { photos, loading, hasMore, updateOnePhoto } = useSearhPhotos({
        query,
        page,
    });

    const isAuthorized = useAuth();

    const onPhotoUpdate = useCallback(
        photo => {
            updateOnePhoto(photo);
        },
        [query, updateOnePhoto],
    );

    const fetchMore = useCallback(() => setPage(page + 1), [page]);

    const favoritePhotos = photos.filter(({ liked_by_user }) => liked_by_user);
    return (
        <StyledPageWrapper>
            <StyledContentWrapper>
                <BrowserRouter>
                    <Header isAuthorized={isAuthorized} />
                    <Hero>
                        <SearchInput onSearch={setQuery} />
                    </Hero>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <PicturesGrid
                                        photos={photos}
                                        loading={loading}
                                        query={query}
                                        isAuthorized={isAuthorized}
                                        onPhotoUpdate={onPhotoUpdate}
                                    />
                                    {!loading && hasMore && (
                                        <StyledGetMoreBtn onClick={fetchMore}>Get more</StyledGetMoreBtn>
                                    )}
                                </>
                            }
                        />
                        <Route
                            path="/favorite"
                            element={
                                <ProtectedRoute condition={isAuthorized}>
                                    <PicturesGrid
                                        photos={favoritePhotos}
                                        loading={loading}
                                        query={query}
                                        isAuthorized={isAuthorized}
                                        onPhotoUpdate={onPhotoUpdate}
                                    />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="*" element={<h1>404</h1>} />
                    </Routes>
                </BrowserRouter>

                {loading && <StyledSpinner width={30} height={30} />}
            </StyledContentWrapper>
        </StyledPageWrapper>
    );
});
