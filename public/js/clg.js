let searchbtn = document.getElementById("search-clg-btn");

searchbtn.addEventListener("click", function () {
  let name = document.getElementById("name-new").value;
  let mail = document.getElementById("mail-new").value;
  let contact = String(document.getElementById("contact-new").value);
  let address = document.getElementById("address-new").value;

  let district =
    document.getElementById("district-new").options[
      document.getElementById("district-new").selectedIndex
    ].text;

  console.log(district);

  let searchfor = {
    name: name,
    email: mail,
    contact_no: contact,
    address: address,
    district: district,
  };
  console.log(searchfor);

  fetch("https://api.jkbeducation.com/api/v1/list-colleges-by-region", {
    method: "POST",
    body: JSON.stringify(searchfor),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then(function (json) {
      console.log(json);
      // result = JSON.parse(json)
      let len = json["result"].length;
      console.log(len);

      for (let i = 0; i < len; i++) {
        let ul = document.createElement("ul");
        ul.setAttribute("class", "shortlist-clg-list-new");

        let text = document.createTextNode(`${i + 1}`);
        let li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "srno");
        ul.append(li);

        text = document.createTextNode(json["result"][i]["university_name"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "uni");
        ul.append(li);

        // document.getElementById('shortlist-clg-names').append(ul);

        text = document.createTextNode(json["result"][i]["location"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "locn");
        ul.append(li);

        text = document.createTextNode(json["result"][i]["college_code"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "clgcode");
        ul.append(li);

        text = document.createTextNode(json["result"][i]["college_name"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "cname");
        ul.append(li);

        text = document.createTextNode(json["result"][i]["college_type"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "ctype");
        ul.append(li);

        text = document.createTextNode(json["result"][i]["fees"]);
        li = document.createElement("li");
        li.append(text);
        li.setAttribute("class", "fees");
        ul.append(li);

        // ul.setAttribute('class' , 'shortlist-clg-title');
        console.log(ul);
        document.getElementById("shortlist-clg-names-new").append(ul);
      }
    });
  // console.log(result)

  // console.log(result);
  // college_code
  // :
  // 3193
  // college_name
  // :
  // "Shivajirao S. Jondhale College of Engineering, Dombivali,Mumbai"
  // college_type
  // :
  // "Private"
  // university_name:
  // fees
  // :
  // 0
  // location
  // :
  // "Thane"
});
