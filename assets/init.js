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
  let porcentagem = actualScroll / parallax[0].offsetHeight;

  if (parallax[0].offsetHeight <= actualScroll) {
    porcentagemm = 1;
  }

  navbar.style.backgroundColor = `rgba(34, 134, 216, ${porcentagem})`;
  for (let item of menuHover) {
    item.onmousedown = (e) => {
      e.target.style.backgroundColor = `rgba(31,85,181,${porcentagem})`;
    }
    item.onmouseover = (e) => {
      e.target.style.backgroundColor = `rgba(142,190,226, ${ 0.5 + (porcentagem / 2)})`;
    }
    item.onmouseout = (e) => {
      e.target.style.backgroundColor = "rgba(142,190,226, 0)";
    }
    item.onmouseup = (e) => {
      e.target.style.backgroundColor = "rgba(31,85,181,0)";
    }
  }
}