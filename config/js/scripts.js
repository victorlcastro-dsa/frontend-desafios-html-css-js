document.addEventListener("DOMContentLoaded", () => {
    const projectButtons = document.querySelectorAll(".project button");
    const projectViewer = document.getElementById("project-viewer");
    const projectIframe = document.getElementById("project-iframe");
    const iframeControls = document.getElementById("iframe-controls");

    projectButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const project = e.target.closest(".project").dataset.project;
            projectIframe.src = `Projetos/${project}/index.html`;

            projectButtons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            projectViewer.style.display = "flex";
            setTimeout(() => {
                projectIframe.classList.add("active");
            }, 100);
        });
    });

    iframeControls.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const size = e.target.dataset.size;
            projectIframe.className = size;

            const buttons = iframeControls.querySelectorAll("button");
            buttons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            setTimeout(() => {
                projectIframe.classList.add("active");
            }, 100);
        }
    });
});