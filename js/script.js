const submitButton = document.getElementsByClassName("primary-button");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const nameOutput = document.getElementById("username");

submitButton[0].addEventListener("click", function (e) {
  if (nameInput.Value.length === 0 || emailInput.value.length === 0) {
    alert("nama atau email tidak boleh kosong");
  } else {
    nameOutput.textContent = nameInput.value;
  }
});

// let start = 0;
// function otomatis() {
//   const sliders = document.querySelectorAll(".slider");

//   for (let i = 0; i < sliders.length; i++) {
//     sliders[i].style.display = "none";
//   }

//   if (start >= sliders.length) {
//     start = 0;
//   }

//   sliders[start].style.display = "block";
//   console.log("gambar ke" + start);
//   start++;

  setTimeout(otomatis, 2000);
}
