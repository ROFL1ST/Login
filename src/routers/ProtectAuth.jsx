import { Navigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import LoadingPage from "../Page/LoadingPage";
import React, { useCallback } from "react";
import { authMe } from "../redux/action/authAction";
export default function PrivateAuth({ children }) {
  const auth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const authMeHandle = useCallback(async () => {
    await dispatch(authMe());
  }, []);

  React.useEffect(() => {
    authMeHandle();
  }, []);
  if (auth) {
    return children;
  }

  if (localStorage.getItem("token")) {
    return <LoadingPage></LoadingPage>;
  } else {
    return <Navigate to="/login" />;
  }
}
