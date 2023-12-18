import axios from "axios";

export const getCardInfo = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/items/${id}`
  );
  return response;
};
