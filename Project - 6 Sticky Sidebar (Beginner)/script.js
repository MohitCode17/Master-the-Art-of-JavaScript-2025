const navElement = document.querySelector("nav");
const navLinks = document.querySelectorAll("a");

const navPosition = navElement.getBoundingClientRect().top; // Gets the distance between the top of the <nav> element and the top of the viewport (browser window).

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY; // provides the distance in pixels the document has been scrolled vertically.
  navElement.style.top = scrollPosition + "px";

  navLinks.forEach((link) => {
    const offset = 10; // Adds a small buffer (10px) to avoid issues with sections starting exactly at the viewport edge.
    const sectionElement = document.querySelector(link.hash);

    if (
      scrollPosition + offset > sectionElement.offsetTop &&
      scrollPosition + offset <
        sectionElement.offsetTop + sectionElement.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
