const beat = new Audio("audio/1.mp3");
// beat.play()

const song = [
  {
    id: 1,
    songName: `On My Way <br><div class="subtitle">Alen Walker</div>`,
    poster: "img/1.jpg",
  },
  {
    id: 2,
    songName: `Faded <br><div class="subtitle">Alen Walker</div>`,
    poster: "img/2.jpg",
  },
  {
    id: 3,
    songName: `Cartoon Mas Y Mas<br><div class="subtitle">FT.Daniel Levi</div>`,
    poster: "img/3.jpg",
  },
  {
    id: 4,
    songName: `Warrio <br><div class="subtitle">Warrio Mortals</div>`,
    poster: "img/4.jpg",
  },
  {
    id: 5,
    songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
    poster: "img/5.jpg",
  },
  {
    id: 6,
    songName: `Electronic music <br><div class="subtitle">Electro</div>`,
    poster: "img/6.jpg",
  },
  {
    id: 7,
    songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamasha/div>`,
    poster: "img/7.jpg",
  },
  {
    id: 8,
    songName: `Suna Hai Tere dil <br><div class="subtitle">Sanak</div>`,
    poster: "img/8.jpg",
  },
  {
    id: 9,
    songName: `Dilbar <br><div class="subtitle">Satyamev Jayate</div>`,
    poster: "img/9.jpg",
  },
  {
    id: 10,
    songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
    poster: "img/10.jpg",
  },
  {
    id: 11,
    songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer</div>`,
    poster: "img/11.jpg",
  },
  {
    id: 12,
    songName: `Putt Jatt Da <br><div class="subtitle">Diljit Dosanj</div>`,
    poster: "img/12.jpg",
  },
  {
    id: 13,
    songName: `Barishein <br><div class="subtitle">Atif Aslam</div>`,
    poster: "img/13.jpg",
  },
  {
    id: 14,
    songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
    poster: "img/14.jpg",
  },
  {
    id: 15,
    songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
    poster: "img/15.jpg",
  },
  {
    id: 16,
    songName: `Meri Zindagi Hai Tu <br><div class="subtitle">Satyamev Jayate</div>`,
    poster: "img/16.jpg",
  },
  {
    id: 17,
    songName: `Bhot Yaad Hai Tumko <br><div class="subtitle">Rahat Fateh Ali Khan</div>`,
    poster: "img/17.jpg",
  },
  {
    id: 18,
    songName: `Mere Dhol Judaiyan <br><div class="subtitle">Ali Sethi Seha Gill</div>`,
    poster: "img/18.jpg",
  },
  {
    id: 19,
    songName: `Eh Munde Ne Pagal Ne Saare <br><div class="subtitle">AP Dhillon</div>`,
    poster: "img/19.jpg",
  },
  {
    id: 20,
    songName: `Dunny 82K <br><div class="subtitle">Gurinder Gill</div>`,
    poster: "img/20.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach(function (
  dets,
  elem
) {
  dets.getElementsByTagName("img")[0].src = song[elem].poster;
  dets.getElementsByTagName("h5")[0].innerHTML = song[elem].songName;
});

var masterPlay = document.getElementById("masterPlay");
var wave = document.getElementById("wavePlay");

masterPlay.addEventListener("click", () => {
  if (beat.paused || beat.currentTime <= 0) {
    beat.play();
    wave.classList.add("active2");
    masterPlay.classList.add("ri-pause-fill");
    masterPlay.classList.remove("ri-play-fill");
  } else {
    beat.pause();
    wave.classList.remove("active2");
    masterPlay.classList.remove("ri-pause-fill");
    masterPlay.classList.add("ri-play-fill");
  }
});

const allbackground = function () {
  Array.from(document.getElementsByClassName("songItem")).forEach(function (e) {
    e.style.background = "rgb(105, 105, 105, .0)";
  });
};
const allplay = function () {
  Array.from(document.getElementsByClassName("playlistplay")).forEach(function (
    e
  ) {
    e.classList.remove("ri-pause-circle-fill");
    e.classList.add("ri-play-circle-fill");
  });
};

var index = 0;
var poster = document.getElementById("poster");
var title = document.getElementById("title");
var download = document.getElementById("download");

Array.from(document.getElementsByClassName("playlistplay")).forEach((e) => {
  e.addEventListener("click", function (el) {
    index = el.target.id;
    beat.src = `audio/${index}.mp3`;
    poster.src = `img/${index}.jpg`;
    beat.play();
    masterPlay.classList.add("ri-pause-fill");
    masterPlay.classList.remove("ri-play-fill");
    download.href = `audio/${index}.mp3`;
    var songTitle = song.filter(function (els) {
      return els.id == index;
    });

    songTitle.forEach(function (elss) {
      var { songName } = elss;
      title.innerHTML = songName;
      download.setAttribute("download", songName);
    });
    allbackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 105, .1)";
    allplay();
    // wave.classList.add("active2");
    e.target.classList.remove("ri-play-circle-fill");
    e.target.classList.add("ri-pause-circle-fill");
  });
});

var currentStart = document.getElementById("currentStart");
var currentEnd = document.getElementById("currentEnd");
var seek = document.getElementById("seek");
var bar2 = document.getElementById("bar2");
var dot = document.getElementsByClassName("dot")[0];

beat.addEventListener("timeupdate", function () {
  var beat_curr = beat.currentTime;
  var beat_dur = beat.duration;
  var min1 = Math.floor(beat_dur / 60);
  var sec1 = Math.floor(beat_dur % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  var min2 = Math.floor(beat_curr / 60);
  var sec2 = Math.floor(beat_curr % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  currentStart.innerText = `${min2}:${sec2}`;

  var progress = parseInt((beat_curr / beat_dur) * 100);
  seek.value = progress;
  var seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  beat.currentTime = (seek.value * beat.duration) / 100;
});

var vol_icon = document.getElementById("vol-icon");
var vol = document.getElementById("vol");
var vol_bar = document.getElementsByClassName("vol-bar")[0];
var vol_dot = document.getElementById("vol-dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("ri-volume-up-fill");
    vol_icon.classList.remove("ri-volume-down-fill");
    vol_icon.classList.add("ri-volume-mute-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("ri-volume-up-fill");
    vol_icon.classList.add("ri-volume-down-fill");
    vol_icon.classList.remove("ri-volume-mute-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("ri-volume-up-fill");
    vol_icon.classList.remove("ri-volume-down-fill");
    vol_icon.classList.remove("ri-volume-mute-fill");
  }
  var vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  beat.volume = vol_a / 100;
});

var back = document.getElementById("back");
var next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  beat.src = `audio/${index}.mp3`;
  poster.src = `img/${index}.jpg`;
  beat.play();
  masterPlay.classList.add("bi-pause-circle-fill");
  masterPlay.classList.remove("bi-play-circle-fill");
  var songTitle = song.filter(function (els) {
    return els.id == index;
  });

  songTitle.forEach(function (elss) {
    var { songName } = elss;
    title.innerHTML = songName;
  });
  allbackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
  allplay();
  wave.classList.add("active1");
  e.target.classList.add("bi-pause-circle-fill");
  e.target.classList.remove("bi-play-circle-fill");
});
next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }
  beat.src = `audio/${index}.mp3`;
  poster.src = `img/${index}.jpg`;
  beat.play();
  masterPlay.classList.add("bi-pause-circle-fill");
  masterPlay.classList.remove("bi-play-circle-fill");
  var songTitle = song.filter(function (els) {
    return els.id == index;
  });

  songTitle.forEach(function (elss) {
    var { songName } = elss;
    title.innerHTML = songName;
  });
  allbackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
  allplay();
  wave.classList.add("active1");
  e.target.classList.add("bi-pause-circle-fill");
  e.target.classList.remove("bi-play-circle-fill");
});

var popleft = document.getElementById("pop-left");
var popright = document.getElementById("pop-right");
var popsong = document.getElementsByClassName("pop-song")[0];

popleft.addEventListener("click", () => {
  popsong.scrollLeft -= 330;
});
popright.addEventListener("click", () => {
  popsong.scrollLeft += 330;
});

var artleft = document.getElementById("art-left");
var artright = document.getElementById("art-right");
var popartist = document.getElementsByClassName("pop-artist")[0];

artleft.addEventListener("click", () => {
  popartist.scrollLeft -= 330;
});
artright.addEventListener("click", () => {
  popartist.scrollLeft += 330;
});

var search_result = document.getElementsByClassName("search-result")[0];
song.forEach((element) => {
  const { id, songName, poster } = element;
  var card = document.createElement("a");
  card.classList.add("card");
  card.href = "#" + id;
  card.innerHTML = `  <img src="${poster}" alt="">
  <div class="card-content">
   ${songName}
  </div>`;
  search_result.appendChild(card);
});

var input = document.getElementsByTagName("input")[0];
input.addEventListener("keyup", function () {
  var input_value = input.value.toUpperCase();
  var items = search_result.getElementsByTagName("a");

  for (let index = 0; index < items.length; index++) {
    var ab = items[index].getElementsByClassName("card-content")[0];
    var text_value = ab.textContent || ab.innerHTML;

    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
    } else {
      items[index].style.display = "none";
    }
    if (input_value == 0) {
      search_result.style.display = "none";
    } else {
      search_result.style.display = "";
    }
  }
});
