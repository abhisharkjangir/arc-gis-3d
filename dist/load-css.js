if (window) {
  window.onload = function(e) { //eslint-disable-line

    /* Simple Line Icons CSS File */
    var SLICss = document.createElement('link');
    SLICss.rel = 'stylesheet';
    SLICss.href = 'https://js.arcgis.com/4.6/esri/css/main.css';
    SLICss.type = 'text/css';
    var deferSLICss = document.getElementsByTagName('link')[1];
    deferSLICss.parentNode.insertBefore(SLICss, deferSLICss);
  };
}
