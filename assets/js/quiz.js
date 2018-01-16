/*
 * Fisher-Yates shuffle stolen from StackOverflow
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/*
 * Clean and process the data retrieved by fetch.
 */
function process_data(x) {
  /*
   * For some reason, the data is stored in an array
   * where everything is in the first element, so
   * we extract that first.
   */
  quizdata = x[0];
  quizdata = quizdata.split("\n");
  quizdata = shuffle(quizdata);

  return quizdata;
}

function quiz2html(data, num_q)
{
  rendered = "";
  for(i=0; i<num_q; i++)
  {
    e = data[i];
    odds = Math.random() < .5;
    if(e.length > 0){
      parts = e.split(";");
      rendered +=
        "<details>"
        + "<summary>"
        + parts[+odds]
        + "</summary>"
        + parts[1-odds]
        + "</details><br />";
    }
  }

  return rendered;
}

function main(data)
{
  processed = process_data(data);
  num_Qs = Math.min(processed.length, numQuestions);
  rendered_html = quiz2html(processed, num_Qs);
  element = document.getElementById("main");
  element.innerHTML += rendered_html;
}

fetched = [];
fetch(target)
  .then((resp) => resp.text())
  .then(function(data) {
    fetched.push(data);
    main(fetched);
  });

