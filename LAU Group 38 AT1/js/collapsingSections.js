
window.onload = collapseSections;

function collapseSections() {
  //AL: potential improvement - combine into key-pair array
  const toggleButtons = document.querySelectorAll(".collapse-toggle");
  const collapsibleSections = document.querySelectorAll(".collapsible");

  for (let item = 0; item < toggleButtons.length; item++) { 
    toggleButtons[item].addEventListener("click", function () {

      if (collapsibleSections[item].style.maxHeight)  {
        collapsibleSections[item].style.maxHeight=null;
        toggleButtons[item].innerHTML = "Click to Reveal"
      }
      else {
        collapsibleSections[item].style.maxHeight = collapsibleSections[item].scrollHeight+"px";
        toggleButtons[item].innerHTML = "Click to Hide"
      }
    });
  }
}