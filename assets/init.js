document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit()
});

window.onscroll = () => {
  changeNavOpacity()
}

const changeNavOpacity = () => {
  let parallax = document.getElementsByClassName("parallax-container");
  let actualScroll = window.pageYOffset;
  let navbar = document.getElementById("nav");
  let menuHover = navbar.getElementsByClassName("waves-effect");
  let percentage = actualScroll / parallax[0].offsetHeight;

  if (parallax[0].offsetHeight <= actualScroll) {
    percentage = 1;
  }

  navbar.style.backgroundColor = `rgba(34, 134, 216, ${percentage})`;
  for (let item of menuHover) {
    item.onmousedown = (e) => {
      e.target.style.backgroundColor = `rgba(31,85,181,${percentage})`;
    }
    item.onmouseover = (e) => {
      e.target.style.backgroundColor = `rgba(142,190,226, ${ 0.5 + (percentage / 2)})`;
    }
    item.onmouseout = (e) => {
      e.target.style.backgroundColor = "rgba(142,190,226, 0)";
    }
    item.onmouseup = (e) => {
      e.target.style.backgroundColor = "rgba(31,85,181,0)";
    }
  }
}