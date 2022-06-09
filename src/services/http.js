import { getToken } from "services/localstorage";
import {
    API_URL,
    SEARCH_PHOTOS,
    GET_TOKEN_URL,
    getLikeEndpoint,
    getUnlikeEndpoint,
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

    const result = await fetch(request);
    let data;

    try {
        data = await result.json();
    } catch (error) {
        //EMPTY RESPONSE BODY CAUSE ERROR IN result.json();
        data = {};
    }

    if (result && result.status !== 200) {
        throw data;
    }

    return data;
};

const makeApiCall = makeFetch(API_URL);

export const auth = async (code) => {
    return await makeFetch(`${GET_TOKEN_URL}${code}`)("", {
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
};

export const searchPhotos = async ({ query, page = 1, perPage = 10 }) => {
    return await makeApiCall(
        `${SEARCH_PHOTOS}/?query=${query}&page=${page}&per_page=${perPage}`,
    );
};

export const likePicture = async ({ id }) =>
    await makeApiCall(getLikeEndpoint(id), {
        method: "POST",
    });

export const unlikePicture = async ({ id }) =>
    await makeApiCall(getUnlikeEndpoint(id), {
        method: "DELETE",
    });
