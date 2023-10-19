document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".page-scroll");
  
    for (const link of links) {
      link.addEventListener("click", scrollSmooth);
    }
  
    function scrollSmooth(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          behavior: "smooth",
          top: targetElement.offsetTop,
        });
      }
    }
  });
  