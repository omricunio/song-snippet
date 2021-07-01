import axios from "axios";
import { AppConfig } from "../config/default";

export const itunesAPISearchInstance = axios.create({
    baseURL: AppConfig.itunesAPIUrl,
    params: AppConfig.itunesAPIDefaultParams
})
