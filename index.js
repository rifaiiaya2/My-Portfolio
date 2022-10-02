var services = document.getElementById("Services");

var Original_content = `
<div class="icon"><i class="bi bi-laptop"></i></div>
<h4 class="title"><a href="">TITLE</a></h4>
<p class="description">DESCRIPTION</p>
</div>`;

fetch("https://apicv2102022.herokuapp.com/services")
  .then((response) => response.json())
  .then((json) => {
    json.Sheet1.forEach((element) => {
      var content = Original_content;
      content = content.replace("TITLE", element.A);
      content = content.replace("DESCRIPTION", element.B);
      var service = document.createElement("div");
      service.innerHTML = content;
      service.className = "col-lg-4 col-md-6 icon-box";
      services.appendChild(service);
    });
  });

var intersts = document.getElementById("Intersted");
var Original_intersts = ` 
<div class="icon"><i class="bi bi-clipboard-heart"></i></div>
<h4 class="title"><a href="">TITLE</a></h4>
<p class="description">DESCRIPTION</p>
</div>`;

fetch("https://apicv2102022.herokuapp.com/services")
  .then((response) => response.json())
  .then((json) => {
    json.Sheet2.forEach((element) => {
      var content = Original_content;
      content = content.replace("TITLE", element.A);
      content = content.replace("DESCRIPTION", element.B);
      var interst = document.createElement("div");
      interst.innerHTML = content;
      interst.className = "col-lg-4 col-md-6 icon-box";
      intersts.appendChild(interst);
    });
  });
