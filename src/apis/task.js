import axios from "axios";
const backendUrl = `${import.meta.env.REACT_APP_BACKEND_URL}/tasks`;

export const getAnalyticsData = async () => {
  try {
    const requestUrl = `${backendUrl}/analytics`;
    const token = localStorage.getItem("tokenPro");
    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.get(requestUrl);
    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const getTasks = async (typeOfFilter) => {
  try {
    const requestUrl = `${backendUrl}/all?typeOfFilter=${typeOfFilter}`;
    const token = localStorage.getItem("tokenPro");

    axios.defaults.headers.common["Authorization"] = token;

    const response = await axios.get(requestUrl);

    return response?.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const checkItems = async (taskId, itemId, selected) => {
  try {
    const requestUrl = `${backendUrl}/checklist/${taskId}/${itemId}`;
    const payload = { selected };

    const token = localStorage.getItem("tokenPro");

    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.put(requestUrl, payload);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async ({
  title,
  priority,
  checklist,
  dueDate,
  status,
}) => {
  try {
    const requestUrl = `${backendUrl}/create`;
    const payload = {
      title,
      priority,
      checklist,
      dueDate,
      status,
    };

    const token = localStorage.getItem("tokenPro");

    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.post(requestUrl, payload);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const moveTask = async (taskId, status) => {
  try {
    const requestUrl = `${backendUrl}/${taskId}/move`;
    const payload = { status };

    const token = localStorage.getItem("tokenPro");

    axios.defaults.headers.common["Authorization"] = token;

    const response = await axios.put(requestUrl, payload);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const requestUrl = `${backendUrl}/delete-task/${taskId}`;

    const token = localStorage.getItem("tokenPro");

    axios.defaults.headers.common["Authorization"] = token;
    const response = await axios.delete(requestUrl);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTaskDescription = async (taskId) => {
  try {
    const requestUrl = `${backendUrl}/task-description/${taskId}`;
    const response = await axios.get(requestUrl);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const editTaskById = async (
  taskId,
  title,
  priority,
  checklist,
  status,
  dueDate
) => {
  try {
    const requestUrl = `${backendUrl}/edit/${taskId}`;
    const reqPayload = {
      title,
      priority,
      checklist,
      status,
      dueDate,
    };

    const token = localStorage.getItem("tokenPro");

    axios.defaults.headers.common["Authorization"] = token;

    const response = await axios.put(requestUrl, reqPayload);

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
