import { Card } from "components/card";
import { Plug } from "components/plug";
import { StyledGridLayout } from "./styled";

export const PicturesGrid = ({ photos, loading, isAuthorized, onPhotoUpdate, query }) => {
    return !photos.length && !loading ? (
        <Plug query={query} />
    ) : (
        <StyledGridLayout>
            {photos.map(({ id, alt_description, urls, liked_by_user, links }) => (
                <Card
                    key={id}
                    id={id}
                    isAuthorized={isAuthorized}
                    onPhotoUpdate={onPhotoUpdate}
                    likedByUser={liked_by_user}
                    downloadLink={links?.download}
                >
                    <img alt={alt_description} src={urls.small} />
                </Card>
            ))}
        </StyledGridLayout>
    );
};
