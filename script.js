function changeTheme() {
  document.body.classList.toggle("darkMode");
  let button = document.getElementById("btnTheme");

  if (button.textContent == "☾ Night Theme") {
    button.textContent = "☼ Day Theme";
  } else {
    button.textContent = "☾ Night Theme";
  }
}