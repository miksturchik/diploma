import React from "react";
import { GridLayout } from "../grid-layout";
import { Card } from "../card";
import { Header } from "../header";
import { Hero } from "../hero";
import { SearchInput } from "../search-input";
import { StyledPageWrapper, StyledContentWrapper } from "./styled";

export const App = () => {
    return (
        <StyledPageWrapper>
            <StyledContentWrapper>
                <Header />
                <Hero>
                    <SearchInput />
                </Hero>
                <GridLayout>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </GridLayout>
            </StyledContentWrapper>
        </StyledPageWrapper>
    );
};
