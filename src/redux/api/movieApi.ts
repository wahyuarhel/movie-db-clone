import axios from "axios";
import { movieUrl } from "./endpoint";


const MovieEndpoint = axios.create({
  baseURL: movieUrl,
});

export default MovieEndpoint