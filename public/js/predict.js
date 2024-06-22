let predbtn = document.getElementById("predict-btn");
predbtn.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let contact = String(document.getElementById("contact").value);
  let address = document.getElementById("address").value;
  // let univesity = document.getElementById('university').value;
  let university =
    document.getElementById("university").options[
      document.getElementById("university").selectedIndex
    ].value;
  let caste = document.getElementById("caste").value;
  let exam =
    document.getElementById("exam").options[
      document.getElementById("exam").selectedIndex
    ].text;
  let score = Number(document.getElementById("score").value);
  let branch =
    document.getElementById("branch").options[
      document.getElementById("branch").selectedIndex
    ].text;

  let predfor = {
    name: name,
    email: mail,
    contact_no: contact,
    address: address,
    exam_type: exam,
    score: score,
    university: university,
    branch: branch,
    caste: caste,
  };

  let resultArr;
  fetch("https://api.jkbeducation.com/api/v1/predict-colleges-by-score", {
    method: "POST",
    body: JSON.stringify(predfor),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then(function (data) {
      resultArr = data["result"];
      let fetchedArr = resultArr;
      let len = fetchedArr.length;
      console.log(len);
      for (let i = 0; i < len; i++) {
        let ul = document.createElement("ul");
        ul.setAttribute("class", "shortlist-clg-list");
        let li = document.createElement("li");
        let text = document.createTextNode(`${i + 1}`);
        li.append(text);
        li.setAttribute("class", "sr-no");
        ul.append(li);

        li = document.createElement("li");
        text = document.createTextNode(fetchedArr[i]["college_code"]);
        li.append(text);
        li.setAttribute("class", "college-code");
        ul.append(li);

        text = document.createTextNode(fetchedArr[i]["college_name"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "college-name");
        ul.append(li);

        text = document.createTextNode(fetchedArr[i]["branch_name"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "branch-name");
        ul.append(li);

        text = document.createTextNode(fetchedArr[i]["fees"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "fees-name");
        ul.append(li);

        text = document.createTextNode(fetchedArr[i]["location"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "location");
        ul.append(li);

        if (predfor["exam_type"] == "JEE") {
          text = document.createTextNode(fetchedArr[i]["ai"]);
        } else {
          text = document.createTextNode(fetchedArr[i][caste]);
        }
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "score");
        ul.append(li);

        document.getElementById("shortlist-clg-names").append(ul);
      }

      let feesbtn = document.querySelector("#fees-sort");
      feesbtn.addEventListener("click", () => {
        const sortedFeesArr = fetchedArr.sort(function (a, b) {
          if (a.fees < b.fees) {
            return -1;
          }
          if (a.fees > b.fees) {
            return 1;
          }
        });
        document.querySelector(
          "#shortlist-clg-names"
        ).innerHTML = `<ul class="shortlist-clg-list" id="shortlist-clg-title">
          <li class="sr-no">Sr No.</li>
          <li class="college-code">Code</li>
          <li class="college-name">College Name</li>
          <li class="branch-name">Branch</li>
          <li class="fees-name">Fees</li>
          <li class="location">Location</li>
          <li class="score">Score</li>
        </ul>`;
        for (let i = 0; i < len; i++) {
          let ul = document.createElement("ul");
          ul.setAttribute("class", "shortlist-clg-list");

          let li = document.createElement("li");
          let text = document.createTextNode(`${i + 1}`);
          li.append(text);
          li.setAttribute("class", "sr-no");
          ul.append(li);

          li = document.createElement("li");
          text = document.createTextNode(sortedFeesArr[i]["college_code"]);
          li.append(text);
          li.setAttribute("class", "college-code");
          ul.append(li);

          text = document.createTextNode(sortedFeesArr[i]["college_name"]);
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "college-name");
          ul.append(li);

          text = document.createTextNode(sortedFeesArr[i]["branch_name"]);
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "branch-name");
          ul.append(li);

          text = document.createTextNode(sortedFeesArr[i]["fees"]);
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "fees-name");
          ul.append(li);

          text = document.createTextNode(sortedFeesArr[i]["location"]);
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "location");
          ul.append(li);
          if (predfor["exam_type"] == "JEE") {
            text = document.createTextNode(sortedFeesArr[i]["ai"]);
          } else {
            text = document.createTextNode(sortedFeesArr[i][caste]);
          }
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "score");
          ul.append(li);

          document.getElementById("shortlist-clg-names").append(ul);
        }
      });

      let scorebtn = document.querySelector("#score-sort");
      scorebtn.addEventListener("click", () => {
        const sortScoreArr = fetchedArr.sort(function (a, b) {
          if (a[caste] < b[caste]) {
            return -1;
          }
          if (a[caste] > b[caste]) {
            return 1;
          }
        })
        document.querySelector(
          "#shortlist-clg-names"
        ).innerHTML = `<ul class="shortlist-clg-list" id="shortlist-clg-title">
          <li class="sr-no">Sr No.</li>
          <li class="college-code">Code</li>
          <li class="college-name">College Name</li>
          <li class="branch-name">Branch</li>
          <li class="fees-name">Fees</li>
          <li class="location">Location</li>
          <li class="score">Score</li>
        </ul>`;
        for (let i = 0; i < len; i++) {
          let ul = document.createElement("ul");
          ul.setAttribute("class", "shortlist-clg-list");

          let li = document.createElement("li");
          let text = document.createTextNode(`${i + 1}`);
          li.append(text);
          li.setAttribute("class", "sr-no");
          ul.append(li);

          li = document.createElement("li");
          text = document.createTextNode(sortScoreArr[i]["college_code"]);
          li.append(text);
          li.setAttribute("class", "college-code");
          ul.append(li);

          text = document.createTextNode(sortScoreArr[i]["college_name"]);
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "college-name");
          ul.append(li);

          text = document.createTextNode(sortScoreArr[i]["branch_name"]);
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "branch-name");
          ul.append(li);

          text = document.createTextNode(sortScoreArr[i]["fees"]);
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "fees-name");
          ul.append(li);

          text = document.createTextNode(sortScoreArr[i]["location"]);
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "location");
          ul.append(li);

          if (predfor["exam_type"] == "JEE") {
            text = document.createTextNode(sortScoreArr[i]["ai"]);
          } else {
            text = document.createTextNode(sortScoreArr[i][caste]);
          }
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "score");
          ul.append(li);

          document.getElementById("shortlist-clg-names").append(ul);
        }
      });
      var yearSelect = document.getElementById("year-select");
      yearSelect.addEventListener("change", function () {
        var x = yearSelect.value;
        fetchedArr = resultArr.filter((item) => item.year === parseInt(x));
        document.querySelector(
          "#shortlist-clg-names"
        ).innerHTML = `<ul class="shortlist-clg-list" id="shortlist-clg-title">
                          <li class="sr-no">Sr No.</li>
                          <li class="college-code">Code</li>
                          <li class="college-name">College Name</li>
                          <li class="branch-name">Branch</li>
                          <li class="fees-name">Fees</li>
                          <li class="location">Location</li>
                          <li class="score">Score</li>
                        </ul>`;
        for (let i = 0; i < len; i++) {
          let ul = document.createElement("ul");
          ul.setAttribute("class", "shortlist-clg-list");

          let li = document.createElement("li");
          let text = document.createTextNode(`${i + 1}`);
          li.append(text);
          li.setAttribute("class", "sr-no");
          ul.append(li);

          li = document.createElement("li");
          text = document.createTextNode(fetchedArr[i]["college_code"]);
          li.append(text);
          li.setAttribute("class", "college-code");
          ul.append(li);

          text = document.createTextNode(fetchedArr[i]["college_name"]);
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "college-name");
          ul.append(li);

          text = document.createTextNode(fetchedArr[i]["branch_name"]);
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "branch-name");
          ul.append(li);

          text = document.createTextNode(fetchedArr[i]["fees"]);
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "fees-name");
          ul.append(li);

          text = document.createTextNode(fetchedArr[i]["location"]);
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "location");
          ul.append(li);

          if (predfor["exam_type"] == "JEE") {
            text = document.createTextNode(fetchedArr[i]["ai"]);
          } else {
            text = document.createTextNode(fetchedArr[i][caste]);
          }
          li = document.createElement("li");
          li.append(text);
          li.setAttribute("class", "score");
          ul.append(li);

          document.getElementById("shortlist-clg-names").append(ul);
        }
      });

      // result = {
      //     0 : {
      //             branch_code:263
      //             branch_name:"Artificial Intelligence and Data Science"
      //             college_code:5152
      //             college_name:"G H Raisoni Institute of Engineering and Business Management, Jalgaon"
      //             college_type:"Private"
      //             fees:0
      //             location:"Jalgaon"
      //             open:61.6697194
      //             tfws:63.5478045
      //             university_code:5
      //             university_name:"Kavayitri Bahinabai Chaudhari North Maharashtra University"
      //             year:2023
      //             _id:"649326a269614942c318140c"
      //     }
      // }
    });
});
