import { BASE_PATH } from "./config.js";

const ERROR_PAGE_MAP = {
    404: "/pages/error/404.html",
    403: "/pages/error/403.html",
    500: "/pages/error/500.html",
};

let isErrorPage = false;

/* =========================================================
   ERROR PAGE RESOLVER
   ========================================================= */
function getErrorPage(status) {
    return ERROR_PAGE_MAP[status] || "/pages/error/error-generic.html";
}

/* =========================================================
   SAFE ERROR LOADER
   ========================================================= */
function showErrorPage(url) {
    if (isErrorPage) return;
    isErrorPage = true;

    // ⚠️ penting: jangan double BASE_PATH kalau URL sudah absolute internal
    const finalUrl = url.startsWith("/")
        ? BASE_PATH + url
        : url;

    htmx.ajax("GET", finalUrl, "#content");

    // reset guard
    setTimeout(() => {
        isErrorPage = false;
    }, 1000);
}

/* =========================================================
   MAIN ERROR HANDLER (HTMX)
   ========================================================= */
export function handleHTMXError(event) {
    const xhr = event.detail.xhr;
    const status = xhr?.status;

    console.error("[HTMX ERROR]", status, event.detail.path);

    // hide loading state
    document.getElementById("loading")
        ?.classList.add("hidden");

    const errorPage = getErrorPage(status);
    showErrorPage(errorPage);
}

/* =========================================================
   INIT ERROR SYSTEM
   ========================================================= */
export function initErrorHandler() {
    document.body.addEventListener(
        "htmx:responseError",
        handleHTMXError
    );

    document.body.addEventListener(
        "htmx:sendError",
        handleHTMXError
    );

    document.body.addEventListener(
        "htmx:timeout",
        handleHTMXError
    );
}