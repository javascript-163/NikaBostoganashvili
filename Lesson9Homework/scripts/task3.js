// task 3
function readFile() {
  return new Promise(() => {
    let chooseFile = document.getElementById("chooseFile");
    let file = chooseFile.files[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsText(file);

      reader.onload = function (event) {
        document.getElementById("textInput").value = event.target.result;
      };
    }
  });
}

function showPicture() {
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

function showVideo() {
  return new Promise(() => {
    let chooseVideo = document.getElementById("chooseVideo");
    let video = document.getElementById("video");
    let file = chooseVideo.files[0];

    if (file) {
      let reader = new FileReader();
      reader.onload = function (event) {
        video.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

function play() {
  let video = document.getElementById("video");

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
