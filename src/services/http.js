import { getToken } from "services/localstorage";
import {
    API_URL,
    SEARCH_PHOTOS,
    GET_TOKEN_URL,
    getLikeEndpoint,
} from "services/constants/urls";

const buildToken = (token) => (token ? `Bearer ${token}` : "");

const makeFetch = (baseUrl) => async (path, params) => {
    const url = `${baseUrl}${path}`;

    const token = buildToken(getToken());
    const Authorization =
        token || `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`;
    const request = new Request(url, {
        mode: "cors",
        headers: {
            // "Content-Type": "application/json",
            Authorization,
        },
        ...params,
    });

    let data;

    try {
        const result = await fetch(request);
        data = await result.json();

        if (result && result.status !== 200) {
            throw data;
        }
        return data;
    } catch (error) {
        //EMPTY RESPONSE BODY CAUSE ERROR IN result.json();
        data = {};
    }
};

const makeApiCall = makeFetch(API_URL);

export const auth = (code) =>
    makeFetch(`${GET_TOKEN_URL}${code}`)("", {
        method: "POST",
        data: {
            client_id: process.env.REACT_APP_ACCESS_KEY,
            client_secret: process.env.REACT_APP_SECRET_KEY,
            redirect_uri:
                process.env.REACT_APP_REDIRECT_URI || window.location.origin,
            code,
            grant_type: "authorization_code",
        },
    });

export const searchPhotos = ({ query, page = 1, perPage = 10 }) => {
    return makeApiCall(
        `${SEARCH_PHOTOS}/?query=${query}&page=${page}&per_page=${perPage}`,
    );
};

export const likePicture = (id) =>
    makeApiCall(getLikeEndpoint(id), {
        method: "POST",
    });

export const unlikePicture = (id) =>
    makeApiCall(getLikeEndpoint(id), {
        method: "DELETE",
    });
