import axios from "axios";

//Не используется 
const request = async (params, method = "GET") => {
  const options = {
    method,
    url: `https://jsonplaceholder.typicode.com/users?${params}`,
  };

  try {
    const response = await axios.request(options);
    console.log("opt", options);
    console.log("response.data", response.data);
    return response;
  } catch (error) {
    console.error("error", error);
    return error;
  }
};

export default request;
