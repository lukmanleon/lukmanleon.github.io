// COPY EMAIL TO CLIPBOARD
function copyEmailToClipboard(id) {
  let text = document.getElementById(id).innerHTML;
  navigator.clipboard.writeText(text);

  let toast = document.getElementById("mtoast");
  toast.innerHTML = "My email address has been copied to your clipboard!";
  toast.style.display = "block";

  setTimeout(function () {
    toast.style.display = "none";
  }, 3500); // <-- time in milliseconds
}

// NAVIGATION MENU - SHOW
var navLinks = document.getElementById("navigation-links");
function showMenu() {
  navLinks.style.right = "0";
}

// NAVIGATION MENU - HIDE
function hideMenu() {
  navLinks.style.right = "-300px";
}