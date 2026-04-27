/* =========================================================
    CONFIG
    ========================================================= */
export const API_BASE = document
    .querySelector('meta[name="api-base"]')
    ?.getAttribute("content") || "";

export const BASE_PATH =
    (location.hostname === "localhost" ||
        location.hostname === "127.0.0.1")
        ? ""
        : "/learning/";

// export const BASE_PATH = document
//     .querySelector("base")
//     ?.getAttribute("href") || "/";