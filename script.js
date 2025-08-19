// ==== Profile Image Modal ====
const modal = document.getElementById("imgModal");
const profilePic = document.getElementById("profilePic");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];

// Open modal when image clicked
profilePic.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Close modal when X clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close modal when clicking outside image
modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
