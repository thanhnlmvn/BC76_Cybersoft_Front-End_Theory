function zoomContent(id, valueZoom) {
  var domTag = document.getElementById(id);
  var fontSize = domTag.style.fontSize.replace("px", "") * 1;

  fontSize += valueZoom;
  domTag.style.fontSize = fontSize + "px";
}
