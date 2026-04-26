import { API_BASE, BASE_PATH } from "./config.js";
import {
    initDropdown,
    initDropdownGlobal,
    initNavActive,
    initLoading
} from "./ui.js";

/* =========================================================
   HTMX ROUTING
   ========================================================= */
document.body.addEventListener("htmx:configRequest", (event) => {
    let path = event.detail.path;
    if (!path) return;

    if (path.startsWith("/api")) {
        event.detail.path = API_BASE + path;
        return;
    }

    if (!path.startsWith("http")) {
        event.detail.path = BASE_PATH + path;
    }
});

/* =========================================================
   INIT SYSTEM
   ========================================================= */
function initApp() {
    initDropdown();
    initDropdownGlobal();
    initNavActive();
    initLoading();
}

/* first load */
document.addEventListener("DOMContentLoaded", initApp);

/* re-init after HTMX swap */
document.body.addEventListener("htmx:afterSwap", (e) => {
    if (e.target.closest('nav')) {
        initDropdown();
    }
});