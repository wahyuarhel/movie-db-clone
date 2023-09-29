import axios from "axios";


const Endpoint = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default Endpoint