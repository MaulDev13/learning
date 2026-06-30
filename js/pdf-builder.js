import { BASE_PATH, withBase } from "./config.js";

export async function buildBook({
    navPath,
    rootFilter,
    contentTarget
}) {
    navPath = withBase(navPath);
    rootFilter = withBase(rootFilter);

    console.log("navPath:", navPath);
    console.log("rootFilter:", rootFilter);

    const navHtml = await fetch(navPath).then(r => r.text());

    const parser = new DOMParser();

    const navDoc = parser.parseFromString(
        navHtml,
        "text/html"
    );

    const links = [
        ...navDoc.querySelectorAll("[hx-get]")
    ];

    const target =
        document.querySelector(contentTarget);

    let loaded = 0;

    for (const link of links) {

        // const path = link.getAttribute("hx-get");
        const path = withBase(link.getAttribute("hx-get"));
        console.log("path:", path);

        if (!path.startsWith(rootFilter))
            continue;

        try {

            const html =
                await fetch(path)
                .then(r => r.text());

            const wrapper =
                document.createElement("section");

            wrapper.classList.add("pdf-section");

            wrapper.innerHTML = html;

            target.appendChild(wrapper);

            const hr =
                document.createElement("hr");

            hr.classList.add("pdf-divider");

            target.appendChild(hr);

            loaded++;

        } catch (err) {

            console.error(
                "Gagal memuat:",
                path,
                err
            );
        }
    }

    renderMathInElement(target, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
    });

    return loaded;
}