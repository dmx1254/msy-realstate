import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "454ccbe31bmsh7828de4155ab93ap195ad7jsn32ad77105be5",
    },
  });
  console.log(data)
  return data;
};
