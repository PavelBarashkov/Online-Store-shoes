import axios from "axios";

export const getCards = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/top-sales`
  );
  return response;
};
