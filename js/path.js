import { BASE_PATH } from "./config.js";

export function resolvePath(path) {
    if (!path) return "";

    // kalau sudah absolute external
    if (path.startsWith("http")) return path;

    // pastikan selalu pakai BASE_PATH
    return BASE_PATH + path;
}