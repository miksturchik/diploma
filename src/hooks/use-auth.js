import { useEffect, useState } from "react";
import { getToken, setToken } from "services/localstorage";
import { auth } from "services/http";

export function useAuth() {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const token = getToken();

        if (token) {
            setIsAuthorized(true);
            return;
        }

        const code = new URLSearchParams(window.location.search).get("code");

        if (code) {
            auth(code).then((data) => {
                setToken(data.access_token);
                setIsAuthorized(true);
            });
        }
    }, []);

    return isAuthorized;
}
