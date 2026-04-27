export function setActive(button) {
    document.querySelectorAll(".nav-btn")
        .forEach(btn => btn.classList.remove("is-active"));

    button.classList.add("is-active");
}

export function initNavActive() {
    document.body.addEventListener("click", (e) => {
        const btn = e.target.closest(".nav-btn");
        if (btn) setActive(btn);
    });
}

export function initSidebar() {
    document.querySelectorAll('.sidebar-group-title').forEach(title => {

        if (title.dataset.bound === "true") return;
        title.dataset.bound = "true";

        title.addEventListener('click', () => {
            const group = title.parentElement;
            const isOpen = group.classList.contains('open');

            // close ONLY siblings (not everything)
            const siblings = group.parentElement.querySelectorAll(':scope > .sidebar-group');

            siblings.forEach(g => {
                if (g !== group) g.classList.remove('open');
            });

            // toggle current
            if (!isOpen) {
                group.classList.add('open');
            } else {
                group.classList.remove('open');
            }
        });
    });
}

export function initDropdown() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        if (!toggle) return;

        if (toggle.dataset.bound === "true") return;
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

export function initDropdownGlobal() {
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
}

export function initLoading() {
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