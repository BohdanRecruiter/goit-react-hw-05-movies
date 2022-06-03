import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: 'bf5a0d96c889a031df2402c1d39cdab8',
  },
});

const fetchReview = async id => {
  const { data } = await instance.get(`${id}/reviews`);
  return data;
};
export default fetchReview;
