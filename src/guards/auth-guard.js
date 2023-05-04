import { Navigate, Outlet } from "react-router-dom";
import { getAuthToken } from "../services/auth";

export const AuthGuard = ({ roles }) => {
  const { token, user } = getAuthToken();
  if (!token) {
    return <> {roles.length == 0 ? <Outlet /> : <Navigate to={"/"} /> }</>;
  } else {
    return (
      <>
        {roles.find((role) => user.userType.includes(role)) ? (
          <Outlet />
        ) : (
          <Navigate to={`${user.userType}-home`} />
        )}
      </>
    );
  }
};
