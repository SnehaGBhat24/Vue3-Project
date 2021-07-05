import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.spoonacular.com',
  timeout: 5000,
})

instance.interceptors.request.use(config => {
  config.params = {
    'apiKey' : '4fcc8c02541143c09c3ddb3e792a86ea',
    ...config.params,
  }
  return config;
})

export default instance;