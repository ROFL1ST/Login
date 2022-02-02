import { Register, Login, Authme} from "../../api/auth";
import { syncToken } from "../../api/axiosClient";
import { Identitas, Update } from "../../api/identitas";


export function AuthRegister(payload) {
  return async (dispatch) => {
    dispatch(isLoadingStart());
    try {
      const response = await Register(payload);
      const data = response.data;
      dispatch(registerHandle(data));
      localStorage.setItem("token", data.token);
      dispatch({
        type: "loadingEnd",
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      dispatch({
        type: "loadingEnd",
      });
      let data = error.response.data;
      return data;
    }
  };
}


export function AuthIdentitas(payload) {
  return async (dispatch) => {
    dispatch(isLoadingStart());
    try {
      const response = await Identitas(payload);
      const data = response.data;
      dispatch(registerHandle(data));
      localStorage.setItem("token", data.token);
      dispatch({
        type: "loadingEnd",
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      dispatch({
        type: "loadingEnd",
      });
      let data = error.response.data;
      return data;
    }
  };
}

export function UpdateIdent(payload) {
  return async (dispatch) => {
    dispatch(isLoadingStart());
    try {
      const response = await Update(payload);
      const data = response.data;
      dispatch(registerHandle(data));
      localStorage.setItem("token", data.token);
      dispatch({
        type: "loadingEnd",
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      dispatch({
        type: "loadingEnd",
      });
      let data = error.response.data;
      return data;
    }
  };
}

const isLoadingStart = () => {
  return {
    type: "loadingStart",
  };
};

const registerHandle = (data) => {
  return {
    type: "Login",
    nama: data?.user?.nama,
    email: data?.user?.email,
    token: data?.token,
  };
};

export function AuthLogin(payload) {
  return async (dispatch) => {
    dispatch(isLoadingStart());
    try {
      const response = await Login(payload);
      const data = response.data;
      dispatch(registerHandle(data));
      dispatch({
        type: "loadingEnd",
      });
      localStorage.setItem("token", data.token);
      console.log(data);
      return data;
    } catch (error) {
      dispatch({
        type: "loadingEnd",
      });
      let data = error.response.data;
      return data;
    }
  };
}


export function authMe() {
  return async (dispatch) => {
    syncToken()
    try {
      const response = await Authme();
      const data = response.data;
      dispatch(registerHandle(data));
      localStorage.setItem("token", data.token);
      syncToken()
      return data;
    } catch (err) {
      console.log(err);    
    }
  };
}
