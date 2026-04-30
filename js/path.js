import { BASE_PATH } from "./config.js";

export function resolvePath(path) {
    if (!path) return "";

    if (path.startsWith("http")) return path;

    if (path.startsWith(BASE_PATH)) return path;

    return BASE_PATH + path;
}