//function realizando manipulação em scroll vertical
function beginPage() {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
}

//function realizando verificação em posição exata do scroll vertical na página
function verifyScroll() {
  if(window.scrollY === 0) {
    document.querySelector(".scrollButton").style.display = "none";
  }else {
    document.querySelector(".scrollButton").style.display = "block";
  }
}
window.addEventListener("scroll", verifyScroll);
