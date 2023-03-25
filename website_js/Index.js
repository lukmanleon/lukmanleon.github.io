// COPY EMAIL TO CLIPBOARD
function copyEmailToClipboard() {
  let toastLiveExample = document.getElementById("liveToast");
  let toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  
  toastBootstrap.show();
  navigator.clipboard.writeText("lukman.leon@gmail.com");
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
