import { API_BASE, BASE_PATH } from "./config.js";
import {
    initDropdown,
    initDropdownGlobal,
    initNavActive,
    initLoading,
    initSidebar
} from "./ui.js";

import {
    initErrorHandler
} from "./error-handler.js";

/* =========================================================
   HTMX ROUTING
   ========================================================= */
document.body.addEventListener("htmx:configRequest", (event) => {
    let path = event.detail.path;
    if (!path) return;

    // API routing
    if (path.startsWith("/api")) {
        event.detail.path = API_BASE + path;
        return;
    }

    // static routing (aman dari double prefix)
    if (!path.startsWith("http") && !path.startsWith(BASE_PATH)) {
        event.detail.path = BASE_PATH + path;
    }
});

/* =========================================================
   DEBUGGING
   ========================================================= */
document.body.addEventListener("htmx:responseError", (e) => {
    console.error("HTMX ERROR:", e.detail.path);
});

/* =========================================================
   INIT SYSTEM (SINGLE ENTRY POINT)
   ========================================================= */
function initApp() {
    initDropdown();
    initDropdownGlobal();
    initSidebar();
    initNavActive();
    initLoading();

    initErrorHandler();
}

/* =========================================================
   FIRST LOAD
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

/* =========================================================
   AFTER HTMX SWAP
   ========================================================= */
document.body.addEventListener("htmx:afterSwap", (e) => {

    // 🔥 IMPORTANT: hanya re-init yang perlu
    initDropdown();
    initSidebar();

    // kalau kamu punya active nav logic
    initNavActive();

    // optional loading rebind
    initLoading();

});