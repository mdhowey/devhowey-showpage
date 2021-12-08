const toggle = document.querySelector(".toggle");
const mainnav = document.querySelector(".main-nav");

function toggleMenu() {
  if (mainnav.classList.contains("active")) {
    mainnav.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<GiHamburgerMenu />";
  } else {
    mainnav.classList.add("active");
    toggle.querySelector("a").innerHTML = "<IoMdClose />";
  }
}

toggle.addEventListener("click", toggleMenu, false);