gadgets.window.adjustHeight();

function doNumbersSearch () {
  var number = "800";
  window.location.href = "https://tickets-internal.fpool.org/issues/?jql=%22Number(s)%20Affected%20Preview%22%20~%20%22*"+number+"*%22";
}
