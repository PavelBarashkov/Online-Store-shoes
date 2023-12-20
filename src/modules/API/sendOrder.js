import axios from "axios";

export const sendOrder = async (body) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/order`, body);
  return response;
};
