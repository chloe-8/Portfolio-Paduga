
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-link").forEach(link => {
  link.addEventListener("click", function (e) {
    const imgSrc = this.getAttribute("data-image");

    if (imgSrc) {
      e.preventDefault(); 
      modalImg.src = imgSrc;  
      modal.style.display = "block";
    }
  });
});


closeBtn.onclick = function () {
  modal.style.display = "none";  
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";  
  }
};
