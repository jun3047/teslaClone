document.lastScroolPostition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener("scroll", () => {
  const direnction =
    window.pageYOffset - document.lastScroolPostition > 0 ? "down" : "up";
  const sections = [...document.querySelectorAll("section")];

  if (document.onWayTo === null) {
    const destIndex =
      direnction === "up"
        ? document.lastCentered - 1
        : document.lastCentered + 1;
    if (destIndex >= 0 && destIndex < sections.length) {
      console.log({ destIndex, direnction });
      document.onWayTo = destIndex;
      window.scroll(0, sections[destIndex].offsetTop);
    }
  }

  sections.forEach((section, index) => {
    if (window.pageYOffset === section.offsetTop) {
      document.lastCentered = index;
      section.className = "active";
      if (document.onWayTo === index) {
        document.onWayTo = null;
      }
    } else {
      section.className = "";
    }
  });

  document.lastScroolPostition = window.pageYOffset;
});
