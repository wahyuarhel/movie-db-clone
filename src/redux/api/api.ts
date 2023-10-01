import axios from "axios";


const Endpoint = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  params: {
    language: 'en-US',
    region: 'ID',
    api_key: process.env.NEXT_PUBLIC_API_KEY
  }
});

export default Endpoint