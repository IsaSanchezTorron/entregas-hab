import config from "./config.js";
const axios = require("axios").default;
const apiKey = config.apiKey;
const URL_BASE = `https://ws.audioscrobbler.com/`;

const URL_GEO =
  `2.0/?method=geo.gettopartists&country=spain&api_key=` +
  apiKey +
  `&format=json`;

const URL_TOP =
  `2.0/?method=geo.gettoptracks&country=spain&api_key=` +
  apiKey +
  `&format=json`;

const URL_TAGS =
  `2.0/?method=chart.gettoptags&api_key=` + apiKey + `&format=json`;

async function getArtists() {
  try {
    const response = await axios.get(`${URL_BASE}${URL_GEO}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getTopTracks() {
  try {
    const response = await axios.get(`${URL_BASE}${URL_TOP}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getTopTags() {
  try {
    const response = await axios.get(`${URL_BASE}${URL_TAGS}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getArtists,
  getTopTracks,
  getTopTags,
};
