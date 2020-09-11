import axios from "axios";
const API = "https://api.unsplash.com/search/photos/";
const authorization = "?client_id=pJ_cpS8peK6aCGg0xIVtvA9l54rePzwubzEIpr-9WYI";
const APIUrl = API + authorization;

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID pJ_cpS8peK6aCGg0xIVtvA9l54rePzwubzEIpr-9WYI",
  },
});
