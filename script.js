$(document).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
  
    if (urlParams.has("select")) {
      $("#" + urlParams.get("select")).attr("style", "background-color: grey; color: bisque;");
    } else {
      $("#all").attr("style", "background-color: grey; color: bisque;");
    }
});