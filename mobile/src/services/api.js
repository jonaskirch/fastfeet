import axios from 'axios';
import { URL_API } from 'react-native-dotenv';

const api = axios.create({
  baseURL: URL_API,
});

export default api;
