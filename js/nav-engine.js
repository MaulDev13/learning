let CURRENT_PATH = [];

function getNodeByPath(path) {
    let node = null;
    let current = NAV_TREE;

    for (let i = 0; i < path.length; i++) {
        node = current[path[i]];
        current = node.children || [];
    }

    return node;
}

function renderNavbar(nodes, level, parentPath = []) {
    const container = document.getElementById(`navbar-${level}`);
    if (!container) return;

    if (!nodes || !nodes.length) {
        container.innerHTML = "";
        return;
    }

    let html = `
        <div class="navbar">
            <div class="nav-inner">
                <div class="nav-group">
    `;

    // ✅ BACK BUTTON (render ONCE, correctly)
    if (parentPath.length > 0) {
        const parentNode = getNodeByPath(parentPath.slice(0, -1));

        html += `
            <button class="nav-btn nav-back"
                onclick='handleNav(${JSON.stringify(parentPath.slice(0, -1))}, ${level - 1})'>
                ← ${parentNode?.title || "Back"}
            </button>
        `;
    }

    nodes.forEach((node, index) => {
        const path = [...parentPath, index];

        html += `
            <button class="nav-btn ${isActive(path) ? 'is-active' : ''}"
                onclick='handleNav(${JSON.stringify(path)}, ${level})'>
                ${node.title}
            </button>
        `;
    });

    html += `
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

function isActive(path) {
    return JSON.stringify(path) === JSON.stringify(CURRENT_PATH);
}

function handleNav(path, level) {
    CURRENT_PATH = path;

    const node = getNodeByPath(path);

    // load content
    if (node?.content) {
        htmx.ajax("GET", node.content, "#content");
    }

    // clear deeper navbars
    clearBelow(level);

    // render next level
    if (node?.children) {
        renderNavbar(node.children, level + 1, path);
    }

    // inject back button into current level
    // injectBackButton(level);
}

// function injectBackButton(level) {
//     if (level === 0) return; // no back at root

//     const container = document.getElementById(`navbar-${level}`);
//     if (!container) return;

//     const parentPath = CURRENT_PATH.slice(0, -1);
//     const parentNode = getNodeByPath(parentPath);

//     const backHTML = `
//         <button class="nav-btn nav-back"
//             onclick='handleNav(${JSON.stringify(parentPath)}, ${level - 1})'>
//             ← ${parentNode?.title || "Back"}
//         </button>
//     `;

//     const group = container.querySelector(".nav-group");
//     if (group) {
//         group.insertAdjacentHTML("afterbegin", backHTML);
//     }
// }

function clearBelow(level) {
    let i = level + 1;

    while (true) {
        const el = document.getElementById(`navbar-${i}`);
        if (!el) break;

        el.innerHTML = "";
        i++;
    }
}