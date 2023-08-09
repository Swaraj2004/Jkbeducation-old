let predbtn = document.getElementById("predict-btn");

predbtn.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let contact = String(document.getElementById("contact").value);
  let address = document.getElementById("address").value;
  // console.log(name.value , mail.value , contact.value , address.value);
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
  console.log(university);
  console.log(caste, branch, score, exam);

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

  console.log(predfor);

  let resultStr = "";
  fetch("https://api.jkbeducation.com/api/v1/predict-colleges-by-score-local", {
    method: "POST",
    body: JSON.stringify(predfor),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then(function (json) {
      console.log(json);
      resultStr = JSON.stringify(json);
      console.log(resultStr);
      const fetchedArr = json["result"];
      // const fetchedScoreArr = json["result"];
      console.log(fetchedArr);

      // console.log(json["result"]["0"]);
      // console.log(result['result'][0]);
      let len = json["result"].length;

      for (let i = 0; i < len; i++) {
        let ul = document.createElement("ul");
        ul.setAttribute("class", "shortlist-clg-list");

        let li = document.createElement("li");
        let text = document.createTextNode(`${i + 1}`);
        li.append(text);
        li.setAttribute("class", "sr-no");
        ul.append(li);

        li = document.createElement("li");
        text = document.createTextNode(json["result"][i]["college_code"]);
        li.append(text);
        li.setAttribute("class", "college-code");
        ul.append(li);

        text = document.createTextNode(json["result"][i]["college_name"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "college-name");
        ul.append(li);

        text = document.createTextNode(json["result"][i]["branch_name"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "branch-name");
        ul.append(li);

        text = document.createTextNode(json["result"][i]["fees"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "fees-name");
        ul.append(li);

        text = document.createTextNode(json["result"][i]["location"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "location");
        ul.append(li);

        if (predfor["exam_type"] == "JEE") {
          text = document.createTextNode(json["result"][i]["ai"]);
        } else {
          text = document.createTextNode(json["result"][i][caste]);
        }
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "score");
        ul.append(li);

        console.log(ul);
        document.getElementById("shortlist-clg-names").append(ul);
      }

      let feesbtn = document.querySelector("#fees-sort");
      feesbtn.addEventListener("click", () => {
        console.log("Sorted by fees.");
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

          console.log(ul);
          document.getElementById("shortlist-clg-names").append(ul);
        }
      });

      let scorebtn = document.querySelector("#score-sort");
      scorebtn.addEventListener("click", () => {
        console.log("Sorted by score.");
        let sortScoreArr = JSON.parse(resultStr)["result"];
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

          console.log(ul);
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
      //             _id:"649326a269614942c318140c"
      //     }
      // }
    });
  // console.log(result);
});
