import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
    'x-rapidapi-key': '933a9e9c0586cac69bc5c077d3bff2bb',
    'x-rapidapi-host': 'v3.football.api-sports.io',
  },
});

api.interceptors.response.use(
  function (response) {
    console.log('oi');
    return response;
  },
  function (error: AxiosError) {
    const errors = [
      { 0: 'Erro desconhecido!' },
      { 499: 'Algo deu errado, tente novamente mais tarde!' },
      { 500: 'Algo deu errado, tente novamente mais tarde!' },
    ];

    console.error(errors[error.response?.status ?? 0]);
    return Promise.reject(error.response);
  }
);

export default api;
