const closeBtn = document.querySelector("#close-button");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const openBtns = Array.from(document.querySelectorAll(".open-modal"));

closeBtn.addEventListener("click", toggleModal);

function toggleModal() {
  overlay.classList.add("hidden");
  modal.classList.remove("grid");
  modal.classList.add("hidden");
}

openBtns.forEach((openBtn) => {
  openBtn.addEventListener("click", function () {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    modal.classList.add("grid");
  });
});
