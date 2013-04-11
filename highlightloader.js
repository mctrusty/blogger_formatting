eval(function()
{
try
 {
  doHighlight();
 }
 catch(e)
 {
  var elem = document.createElement('SCRIPT');
  elem.src="shPyCsSql.js";
  var theBody = document.getElementsByTagName('body')[0];
  theBody.appendChild(elem);
 }
})();
