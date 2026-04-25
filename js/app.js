// HTMX routing
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

// INIT
function initApp() {
    initDropdown();
    initLoadingIndicator();

    if (typeof NAV_TREE !== "undefined") {
        renderNavbar(NAV_TREE, 0);
    }

    if (NAV_TREE[0]) {
        handleNav([0], 0);
    }
}

document.addEventListener("DOMContentLoaded", initApp);

// re-init after HTMX swap
document.body.addEventListener("htmx:afterSwap", (e) => {
    if (e.target.closest('nav')) {
        initDropdown();
    }
});