import { Player } from "textalive-app-api";

//get html elements
const play_button = document.querySelector("#play-button");
const pause_button = document.querySelector("#pause-button");
const rewind_button = document.querySelector("#rewind-button");
const submit_button = document.querySelector("#submit-button");

const song_name_display = document.querySelector("#song-name-display");
const producer_display = document.querySelector("#producer-display");
const phrase_display = document.querySelector("#phrase-display");

let song_url;

play_button.disabled = true;
pause_button.disabled = true;
rewind_button.disabled = true;
submit_button.disabled = true;

//setup listeners and methods
function addButtonEventListeners()
{
  play_button.disabled = false;
  pause_button.disabled = false;
  rewind_button.disabled = false;
  //submit_button.disabled = false;

  play_button.addEventListener("click", () => player.requestPlay());
  pause_button.addEventListener("click", () => player.requestPause());
  rewind_button.addEventListener("click", () => player.requestMediaSeek(0));
}

function submitUrl()
{
  try
  {
    song_url = new URL(document.getElementById("url-input").value);
    console.log("working: ",song_url);
    player.createFromSongUrl(song_url);
    //submit_button.disabled = true;
  }
  catch{}
}

function onAppReady(app)
{
  submit_button.disabled = false;
  submit_button.addEventListener("click", () => submitUrl());
}

function onTimerReady(t)
{
  addButtonEventListeners();
  song_name_display.textContent = player.data.song.name;
  producer_display.textContent = player.data.song.artist.name;
}

function onTimerUpdate()
{
  const current_phrase = player.video.findPhrase(player.timer.position)?.text;
  current_phrase && (phrase_display.textContent = current_phrase);
}

//initialise player
const player = new Player({app : {token: "k0IXqtc8pHZgl9mz"},
  mediaElement: document.querySelector("#media")});

player.addListener({onAppReady,onTimerReady,onTimerUpdate});