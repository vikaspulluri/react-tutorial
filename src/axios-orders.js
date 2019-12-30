import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-90f36.firebaseio.com/'
});

export default instance;
