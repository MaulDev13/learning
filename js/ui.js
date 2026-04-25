document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-btn");
    if (!btn) return;

    document.querySelectorAll(".nav-btn")
        .forEach(b => b.classList.remove("is-active"));

    btn.classList.add("is-active");
});

// ===== DROPDOWN =====
function initDropdown() {
    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        if (!toggle || toggle.dataset.bound) return;

        toggle.dataset.bound = "true";

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();

            const isOpen = dropdown.classList.contains('open');

            document.querySelectorAll('.nav-dropdown')
                .forEach(d => d.classList.remove('open'));

            if (!isOpen) dropdown.classList.add('open');
        });
    });
}

document.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown')
        .forEach(d => d.classList.remove('open'));
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll('.nav-dropdown')
            .forEach(d => d.classList.remove('open'));
    }
});

// ===== LOADING =====
function initLoadingIndicator() {
    const loadingEl = document.getElementById("loading");

    document.body.addEventListener("htmx:beforeRequest", () => {
        loadingEl?.classList.remove("hidden");
    });

    document.body.addEventListener("htmx:afterRequest", () => {
        loadingEl?.classList.add("hidden");
    });

    document.body.addEventListener("htmx:responseError", () => {
        loadingEl?.classList.add("hidden");
    });
}