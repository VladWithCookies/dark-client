import axios from 'axios';

const API_HOST = 'http://localhost:3000';

export default axios.create({
  baseURL: `${API_HOST}/api/v1/`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});
