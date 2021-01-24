var button = document.getElementById('button');
var vidNames =
["Fre sha va ca do",
]

var vidLinks =
["https://www.youtube.com/embed/bE4C8a48o1E",
]


button.addEventListener("click", function() {
  var number  = randNum(vidNames);
  changePara(number);
  changeVid(number);
})

//Math
function randNum(array) {
  var randDeci = Math.random();
  var randBig = randDeci * array.length;
  var random = Math.floor(randBig);
  return random;
}

randNum(vidNames);

function changePara(someNum) {
  var vdName = document.getElementById("vid-name");
  vidName.innerHTML = vidNames[someNum];
}

function changeVid(someNum) {
    var vidLink = document.getElementById("video");
    vidLink.src = vidLinks[someNum];
};
