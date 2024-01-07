/* For buttons only in case I forget to use checkboxes
 * */

function invertColor() {
  let images = document.querySelectorAll("#result img");
  for (let i=0; i < images.length; i++)
    images[i].style.filter += " invert(100%)";
}

function invertHue() {
  let images = document.querySelectorAll("img");
  console.log(images)
  for (let i=0;i < images.length; i++)
    images[i].style.filter += " hue-rotate(180deg)";
}
