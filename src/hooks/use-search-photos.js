import { useEffect, useState, useCallback } from "react";
import { searchPhotos } from "services/http";
import { setSuggestions } from "services/localstorage";

export function useSearhPhotos({ query, page, perPage }) {
    const [photos, setPhotos] = useState([]);

    const fetchPhotos = useCallback(async () => {
        console.log(1);
        const data = await searchPhotos({ query, page, perPage });
        setPhotos(data?.results || []);
    }, [query, page, perPage]);

    useEffect(() => {
        if (query) {
            setSuggestions(query);
            fetchPhotos(query, page, perPage);
        } else {
            setPhotos([]);
        }
    }, [query, page, perPage, fetchPhotos]);

    return { photos, refetch: fetchPhotos };
}
