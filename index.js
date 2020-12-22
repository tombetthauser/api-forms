document.querySelector("#load-button").addEventListener("click", async () => {
  let val = document.querySelector("#input-field").value;
  
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