import axios from "axios";
const backendUrl = `${import.meta.env.REACT_APP_BACKEND_URL}/auth`;
export const registerUser = async ({ name, email, password }) => {
  try {
    const requestUrl = `${backendUrl}/register`;
    const reqPayload = { name, email, password };

    const response = await axios.post(requestUrl, reqPayload);

    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const requestUrl = `${backendUrl}/login`;
    const reqPayload = { email, password };
    const response = await axios.post(requestUrl, reqPayload);
    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const updateUsernameOrPassword = async ({ name, password }) => {
  try {
    const requestUrl = `${backendUrl}/settings/update`;
    const reqPayload = { name, password };
    const token = localStorage.getItem("tokenPro");
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.put(requestUrl, reqPayload);
    return response?.data;
  } catch (error) {
    console.log(error);
    return error.response?.data;
  }
};
