
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("is-open"));
  }
  const path = window.location.pathname.replace(/\/+$/, "/");
  document.querySelectorAll("[data-nav] a, .footer-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("/")) return;
    const normalized = href.replace(/\/+$/, "/");
    if (normalized === "/" && path === "/") link.classList.add("is-active");
    if (normalized !== "/" && path.startsWith(normalized)) link.classList.add("is-active");
  });
});
