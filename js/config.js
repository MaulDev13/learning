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

export function withBase(path) {
    if (typeof path !== "string") {
        throw new TypeError(`withBase expected a string, got ${typeof path}`);
    }
    
    return `${BASE_PATH}/${path}`.replace(/\/{2,}/g, "/");
}