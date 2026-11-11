// Script para menú móvil y mejoras UX

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");
  const navLinks = navList.querySelectorAll(".nav-link");

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    if (!expanded) {
      navList.classList.add("open");
      navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
      navList.classList.remove("open");
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
  });

  // Al hacer click en un enlace del menú, cerrar menú en móvil
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      if (navList.classList.contains("open")) {
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Abrir menú");
      }
    })
  );

  // Desplazamiento suave para todos los enlaces internos
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetID = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetID);
      if (targetElement) {
        targetElement.scrollIntoView({behavior: "smooth", block: "start"});
      }
    });
  });
});
