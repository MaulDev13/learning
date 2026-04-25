const API_BASE = document
    .querySelector('meta[name="api-base"]')
    ?.getAttribute("content");

const BASE_PATH = (
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1"
) ? "" : "/learning/";