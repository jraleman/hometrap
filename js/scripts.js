
/*
** Upload an image
** .............................................................................
*/

// Image object.
var img = new Image();

// Put an image into the canvas.
var putImage = function() {
  var canvas = document.getElementById('canvasImage');
  var total_width = img.width * (220 / img.height);
  var overlay = (300 - total_width) / 2;

  canvas.width = 300;
  canvas.height = 220;
  canvas.style.background = 'none';
  canvas.getContext('2d').drawImage(img, overlay, 0, total_width, 220);
  return ;
}

// Load an image.
var loadImage = function (event) {
  var file = event.target.files[0];

  img.onload = putImage;
  img.src = URL.createObjectURL(file);
  return ;
};

// Load a new image whenever the user uploads one.
document.getElementById('uploadImage').addEventListener('change', loadImage);

/*
** Remove default styling of upload button
** .............................................................................
*/

$('#btnPhoto').bind("click", function () {
  $('#uploadImage').click();
});

/*
** Generates a description of the poster
** .............................................................................
*/

function generateDescription() {
  var now = new Date();
  var sec = now.getSeconds();
  // ADD MESSAGES HERE! :D
  var list = [
    "crimes against the State",
    "second message",
  ];
  var len = list.length;

  document.getElementById('wantedDescription').innerHTML = list[sec % len];
  return ;
}

/*
** Save the user information
** Source : https://stackoverflow.com/a/27086722
** .............................................................................
*/

function saveEdits() {
  var edit_elements = document.getElementsByClassName("edit");

  localStorage.userEdits = {}
  Array.prototype.forEach.call(edit_elements, function(e) {
      console.log(e.id)
      localStorage.setItem([e.id], e.innerHTML);
  });
  window.alert("Alles gut! :D")
  return ;
}

function checkEdits() {
   if (localStorage.userEdits) {
    var edit_elements = document.getElementsByClassName("edit");
    Array.prototype.forEach.call(edit_elements, function(e) {
        console.log(e.id)
        e.innerHTML = localStorage.getItem(e.id);
    });
  }
  return ;
}

/*
** Checks max number of character in an edit class div.
** .............................................................................
*/

var textfields = document.getElementsByClassName("edit");

$(function() {
  for (i = 0; i < textfields.length; i += 1) {
      textfields[i].addEventListener("keypress", function(e) {
          if(this.innerHTML.length >= this.getAttribute("max")){
              e.preventDefault();
              return false;
          }
      }, false);
  }
})
