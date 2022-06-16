// // <⚠️ DONT DELETE THIS ⚠️>
// import "../css/nomad_day4.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
const title = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function handleMouseEnter() {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },

  handleMouseLeave: function handleMouseLeave() {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },

  handleTitleResize: function handleTitleResize() {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },

  handleContextMenu: function handleContextMenu() {
    title.innerText = "That was a right click!";
    title.style.color = colors[4];
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleTitleResize);
title.addEventListener("contextmenu", superEventHandler.handleContextMenu);
