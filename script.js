function showAlert() {
  alert("Loading weather report...");
}

function removeCookie(element) {
  element.parentElement.remove();
}

function handleTemp(el) {
  if (el.value === "c") {
    farenheightCelsius();
  }
  if (el.value === "f") {
    celsiusFarenheight();
  }
}

function farenheightCelsius(el) {
  var temp = document.querySelectorAll(".digits");
  temp.forEach((el) => {
    el.innerHTML = Math.round(((parseInt(el.innerHTML) - 32) * 5) / 9) + "˚C";
  });
}

function celsiusFarenheight() {
  var temp = document.querySelectorAll(".digits");
  temp.forEach((el) => {
    el.innerHTML = Math.round((parseInt(el.innerHTML) * 9) / 5 + 32) + "˚F";
  });
}
