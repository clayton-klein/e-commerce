let fileInput = document.querySelector("#file-input");
let imgTag = document.querySelector("#product-img");
var imgUploaded = "";

fileInput.addEventListener("change", function () {
  let file = this.files[0];

  if (file) {
    let fileReader = new FileReader();

    fileReader.addEventListener("load", function () {
      imgTag.setAttribute("src", fileReader.result);
    });

    fileReader.readAsDataURL(file); 
  }
});
