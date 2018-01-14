
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

fetched = [];
fetch(target)
  .then((resp) => resp.text())
  .then(function(data) {
    fetched.push(data);
    process(fetched);
  });

function process(x) {
  farray = fetched[0].split("\n");
  element = document.getElementById("main");

  farray.forEach(e => {
    odds = Math.random() > .5;
    if(e.length > 0){
      parts = e.split(";");
      newhtml =
        "<details><summary>"
        + parts[+odds]
        + "</summary>"
        + parts[1-odds]
        + "</details><br />";
      element.innerHTML = element.innerHTML + newhtml;
    }
  });
}

