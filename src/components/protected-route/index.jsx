import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children, condition}) => {
    if (!condition) {
        return  <Navigate to="/" replace={true} />
    }
    return children
}
