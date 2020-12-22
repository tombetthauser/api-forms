document.querySelector("#load-button").addEventListener("click", async () => {
  // let val = document.querySelector("#input-field").value;
  
  // fetch("https://tobet-api-01.herokuapp.com/api/users")
  //   .then(response => response.json())
  //   .then(data => alert(data));

  let jsonObj;



  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    // targetUrl = val;
    targetUrl = "https://tobet-api-01.herokuapp.com/api/users";
    // targetUrl = 'http://catfacts-api.appspot.com/api/facts?number=99'
  
  fetch(proxyUrl + targetUrl)
    .then(blob => blob.json())
    .then(data => {
      console.table(data);
      // document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
      jsonObj = JSON.stringify(data["users"]);

      for(let i = 0; i < data["users"].length; i++) {
        let user = data["users"][i];
        document.querySelector("#output-ul").appendChild(createArtistLi(user));
      }

      // document.querySelector("#output-div").innerHTML = jsonObj
      return data;
    })
    .catch(e => {
      console.log(e);
      return e;
    });

})

function createArtistLi(pojo) {
  let newH3 = document.createElement("h3");
  newH3.innerHTML = `${pojo.firstName} ${pojo.lastName}`
  
  let newP = document.createElement("p");
  newP.innerHTML = `${pojo.email}`
  
  let newLi = document.createElement("li");
  newLi.appendChild(newH3);
  newLi.appendChild(newP);
  
  return newLi;
}



document.querySelector("#add-button").addEventListener("click", () => {
  let first = document.querySelector("#firstName").value;
  let last = document.querySelector("#lastName").value;
  let email = document.querySelector("#email").value;

  alert(`Not working yet!`)
  // alert(`${first} ${last} ${email}`)

  // postData("https://tobet-api-01.herokuapp.com/api/users", {
  //   "firstName": `${first}`,
  //   "lastName": `${last}`,
  //   "password": "password",
  //   "email": `${email}`
  // }).then(() => {
  //   alert("success!")
  // })
})





async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  // return response.json(); // parses JSON response into native JavaScript objects
}

// postData('https://example.com/answer', { answer: 42 })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });