function toggleProject(button, targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const isOpen = !target.classList.contains("hidden");

    // close all
    document.querySelectorAll(".project-content")
        .forEach(el => el.classList.add("hidden"));

    document.querySelectorAll(".arrow")
        .forEach(el => el.textContent = "▼");

    // toggle
    if (!isOpen) {
        target.classList.remove("hidden");
        button.querySelector(".arrow").textContent = "▲";
    }
}