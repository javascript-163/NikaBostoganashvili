// task 2
function show() {
  return new Promise(() => {
    let choosePicture = document.getElementById("choosePicture");
    let picture = document.getElementById("picture");
    let file = choosePicture.files[0];

    if (file) {
      let reader = new FileReader();
      reader.onload = function (event) {
        picture.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}
