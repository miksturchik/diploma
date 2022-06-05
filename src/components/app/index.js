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
                    <Card>
                        <img
                            alt="img"
                            src="https://static.photocdn.pt/images/articles/2019/02/07/Simple_Landscape_Photography_Tips_With_Tons_of_Impact-2.jpg"
                        />
                    </Card>
                    <Card>
                        <img
                            alt="img"
                            src="https://static.photocdn.pt/images/articles/2019/02/07/Simple_Landscape_Photography_Tips_With_Tons_of_Impact-2.jpg"
                        />
                    </Card>
                    <Card>
                        <img
                            alt="img"
                            src="https://static.photocdn.pt/images/articles/2019/02/07/Simple_Landscape_Photography_Tips_With_Tons_of_Impact-2.jpg"
                        />
                    </Card>
                    <Card>
                        <img
                            alt="img"
                            src="https://static.photocdn.pt/images/articles/2019/02/07/Simple_Landscape_Photography_Tips_With_Tons_of_Impact-2.jpg"
                        />
                    </Card>
                    <Card>
                        <img
                            alt="img"
                            src="https://static.photocdn.pt/images/articles/2019/02/07/Simple_Landscape_Photography_Tips_With_Tons_of_Impact-2.jpg"
                        />
                    </Card>
                    <Card>
                        <img
                            alt="img"
                            src="https://static.photocdn.pt/images/articles/2019/02/07/Simple_Landscape_Photography_Tips_With_Tons_of_Impact-2.jpg"
                        />
                    </Card>
                    <Card>
                        <img
                            alt="img"
                            src="https://static.photocdn.pt/images/articles/2019/02/07/Simple_Landscape_Photography_Tips_With_Tons_of_Impact-2.jpg"
                        />
                    </Card>
                </GridLayout>
            </StyledContentWrapper>
        </StyledPageWrapper>
    );
};
