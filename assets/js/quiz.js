function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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
        parts[+odds]
        + "<details><summary>"
        + "expand"
        + "</summary>"
        + parts[1-odds]
        + "</details><br />";
      element.innerHTML = element.innerHTML + newhtml;
    }
  });
}

