import axios from "axios";

export const login = async (username, password) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/login/", {
      username,
      password,
      withCredentials: true,
    });

    return true;
  } catch (error) {
    console.error(
      "Failed to login:",
      error.response ? error.response.data : "No response"
    );
    throw error;
  }
};
