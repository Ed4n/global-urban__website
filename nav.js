const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".navlinks li");
  
    burger.addEventListener("click", () => {
      burger.classList.toggle("toggle");
      console.log("nav active");
      nav.classList.toggle("nav-active");
    });
  };
  
  navSlide();
  