import axios from "axios";
import { movieUrl } from "./endpoint";


const MovieEndpoint = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default MovieEndpoint