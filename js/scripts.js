
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
** Generates a random text for the poster
** (wanted description, secret weapon, etc...)
** .............................................................................
*/

function randomizeText(id, list) {
  var now = new Date();
  var sec = now.getSeconds();
  var len = list.length;

  document.getElementById(id).innerHTML = list[sec % len];
  return ;
}

function generateDescription() {
  var listDescription = [
    "Crimes against the State",
    "Stealing the Teddy bear of Port Royal's Governors daughter",
    "Sabotaging Santiago's tax collectors' ship",
    "Taking over a merchant ship full of candies",
    "Preventing the hanging of 5 fellow pirates",
    "Eating all the candies of her brother",
    "Eating all the candies of his sister",
    "Playing too many hours of video games",
    "Offending his mother by not tyding the room",
    "Forgetting her homework repeatedly",
    "Not finishing his meal last friday",
    "Forgetting to brush his teeth",
    "Destroying the Navy's fastest ship",
    "Insulting the captain of the crew",
  ];
  var listAbilities = [
    "Can fight against wild animal",
    "The number 1 in seducing people",
    "Eating a lot without gaining weight",
    "Best dancer of the crew",
    "Capable of talking with parrots",
    "Undefeated hotdog eating champion",
    "So beautiful that it distracts others",
    "Can sleep 6 months without interruption",
    "Best navigator in the world",
    "Always has a knife hidden somewhere",
    "Can make it rain when singing",
    "Can stay under water without breathing",
    "Can escape out of any prison",
    "Can eat unlimited amounts of candies",
    "Resists every kind of tourture",
    "Capable of surviving alone on desert islands",
    "Makes the whole crew sick when cooking",
    "Can shoot a seagull with a canon from 200m distance",
    "Best saber fighter of the Carribean",
    "Talks so much that people fall asleep",
    "Can cook 1 min rice in 53 seconds",
  ]
  var listWeapons = [
    "Dragon dagger",
    "Legendary knife",
    "Giant saber",
    "Pack of candies",
  ];

  randomizeText('wantedDescription', listDescription);
  randomizeText('specialAbility', listAbilities);
  randomizeText('secretWeapon', listWeapons);
  return ;
}

/*
** Checks max number of character in an edit class div.
** .............................................................................
*/

function checkMaxChars(class_name) {
  var textfields = document.getElementsByClassName(class_name);

  for (i = 0; i < textfields.length; i += 1) {
    textfields[i].addEventListener("keypress", function(e) {
      if (this.innerHTML.length >= this.getAttribute("max")) {
        e.preventDefault();
        return false;
      }
    }, false);
  }
  return ;
}

// Comment this if you don't want to validate the number of chars.
// $(function() {
//   checkMaxChars('edit');
// })

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
** Remove default styling of upload button.
** .............................................................................
*/

$('#btnPhoto').bind("click", function () {
  $('#uploadImage').click();
});

/*
** Add a toolpit to any element with the title attribute.
** .............................................................................
*/

$( function() {
  $( document ).tooltip();
} );
