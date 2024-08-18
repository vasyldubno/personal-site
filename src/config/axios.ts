import axios from "axios";

export const Axios = axios.create({
	baseURL: "https://personal-site-strapi-88wk.onrender.com/api",
	headers: { Authorization: `bearer ${process.env.STRAPI_API_TOKEN}` }
});
