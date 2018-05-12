function show_img(id)
{
  img_el = document.getElementById(id);
  img_el.style.visibility="visible";
}
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
    if(e.length > 0){
      parts = e.split(";");
      if(quiztype == "text")
      {
        odds = Math.random() < .5;
        rendered +=
          "<details>"
          + "<summary>"
          + parts[+odds]
          + "</summary>"
          + parts[1-odds]
          + "</details><br />";
      }
      if(quiztype == "image")
      {
        rendered +=
          "<br /><div class=\"integral\">"
          + "<img id="
          + "\"" + i + "\""
          + " src=\""
          + parts[0]
          + "\" class=\"igralleft\" "
          + "height=\"100\" "
          + "onclick=show_img(\"img"
          + i
          + "\") "
          + "/>"
          + "<img src=\""
          + parts[1]
          + "\" class=\"igralright\" "
          + "height=\"100\" "
          + "id=\"img"
          + i
          + "\" "
          + "/>"
          + "</div>"
      }
    }
  }

  return rendered;
}

/*
 * The 'main' function of the application.
 * This is called after a successful fetch,
 * where the fetched data is passed as an arg.
 */
function main()
{
  if(fetched == null)
    return;
  if(quiztype == null)
    return null;

  var processed = null;

  if(target.includes("french"))
  {
    var avoir = document.getElementById("avoir_box").checked;
    var etre = document.getElementById("etre_box").checked;
    var faire = document.getElementById("faire_box").checked;

    var new_fetched = [];

    for(var i=0; fetched[i]; i++)
    {
      var sliced = fetched[i].slice(0,1);
      if(sliced == "a") // avoir
        if(avoir)
          new_fetched.push(fetched[i]);

      else if(sliced == "f") // faire
        if(faire)
          new_fetched.push(fetched[i]);

      else if(sliced == "e") // etre
        if(etre)
          new_fetched.push(fetched[i]);
    }
    processed = process_data(new_fetched);
  }
  else
    processed = process_data(fetched);
  num_Qs = Math.min(processed.length, numQuestions);
  rendered_html = quiz2html(processed, num_Qs);
  element = document.getElementById("main");
  element.innerHTML = rendered_html;
}

fetched = [];
fetch(target)
  .then((resp) => resp.text())
  .then(function(data) {
    fetched.push(data);
    main();
  });

