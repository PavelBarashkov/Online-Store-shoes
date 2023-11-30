import axios from "axios";

export const getCards = async (categoryId, offset) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/items`,
    {
      params: {
        categoryId,
        offset,
      },
    }
  );
  return response;
};
