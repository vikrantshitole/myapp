import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-f6d0f.firebaseio.com/',
});

export default instance;
