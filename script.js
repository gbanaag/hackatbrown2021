var button = document.getElementById('button');
var vidNames =
["Fre sha va ca do",
 "ghost choir 👻🎵",
 "Watch this if you want to feel better",
 "speed up",
 "Ducks having a conversation",

 "Mark Zuckerberg asks a great question",
 "Dog Yoga",
 "Babies Laughing At Pets",
 "Duck Run",
 "Brock's Best Line Ever",

 "Spaghetti Eating Competition",
 "What people think programming is vs. how it actually is",
 "no u",
 "you could stop at five or six stores",
 "that's a 10",

 "I love refrigerators",
 "Dance till your dead doggo",
]

var vidLinks =
["https://www.youtube.com/embed/bE4C8a48o1E",
 "https://www.youtube.com/embed/kXF3VYYa5TI",
 "https://www.youtube.com/embed/_1OfB3DGwpA",
 "https://www.youtube.com/embed/mbyc0swxjtw",
 "https://www.youtube.com/embed/xJVwvq5z3MI",

 // 6-10
 "https://www.youtube.com/embed/Fuz26mUN2m0",
 "https://www.youtube.com/embed/Qy2n-kjjrdo",
 "https://www.youtube.com/embed/nRDysNZdMvU",
 "https://www.youtube.com/embed/99k-EAMBuM8",
 "https://www.youtube.com/embed/oawUi9s3ENE",

 // 11-15
 "https://www.youtube.com/embed/dYTSS14SFY0",
 "https://www.youtube.com/embed/HluANRwPyNo",
 "https://www.youtube.com/embed/uBbwZCRIILM",
 "https://www.youtube.com/embed/YCeQLeQiRP4",
 "https://www.youtube.com/embed/SLP9mbCuhJc",

 "https://www.youtube.com/embed/TiC8pig6PGE",
 "https://www.youtube.com/embed/pf5R2ke7ogI",
 // ooooo cool


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
  var vidName = document.getElementById("vid-name");
  vidName.innerHTML = vidNames[someNum];
}

function changeVid(someNum) {
    var vidLink = document.getElementById("video");
    vidLink.src = vidLinks[someNum];
};
