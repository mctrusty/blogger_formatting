(function() {
    try
    {
      doHighlight();
    }
    catch(e) {
	var elem = document.createElement("script");
	elem.src = "brushes-compiled.js";
	var theBody = document.getElementsByTagName("body")[0];
	theBody.appendChild(elem);
    }
})();
      
