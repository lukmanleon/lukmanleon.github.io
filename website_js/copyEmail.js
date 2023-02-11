function copyEmailToClipboard(id) {
  /* Copy text into clipboard */
  let text = document.getElementById(id).innerHTML;
  navigator.clipboard.writeText(text);

  /* Display message and then hide it */
  let toast = document.getElementById("mtoast");
  toast.innerHTML = "My email address has been copied to your clipboard!";

  toast.style.display = "block";
  setTimeout(function () {
    toast.style.display = "none";
  }, 3500); // <-- time in milliseconds
}