const AUTH0 = "https://unsplash.com/oauth/";

export const AUTH_URL = `${AUTH0}authorize?client_id=${
    process.env.REACT_APP_ACCESS_KEY
}&redirect_uri=${
    process.env.REACT_APP_REDIRECT_URI || window.location.href
}&response_type=code`;

export const GET_TOKEN_URL = `${AUTH0}token?client_id=${
    process.env.REACT_APP_ACCESS_KEY
}&client_secret=${process.env.REACT_APP_SECRET_KEY}&redirect_uri=${
    process.env.REACT_APP_REDIRECT_URI || window.location.href
}&grant_type=authorization_code`;

export const API_URL = "https://api.unsplash.com/";

export const SEARCH_PHOTOS = "search/photos";

export const getLikeEndpoint = (id) => `photos/:id/like`;
export const getUnlikeEndpoint = (id) => `photos/:id/unlike`;
