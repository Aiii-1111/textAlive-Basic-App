import { Player } from "textalive-app-api";

//get html elements
const play_button = document.querySelector("#play-button");
const pause_button = document.querySelector("#pause-button");
const rewind_button = document.querySelector("#rewind-button");
const submit_button = document.querySelector("#submit-button");

const song_name_display = document.querySelector("#song-name-display");
const producer_display = document.querySelector("#producer-display");
const phrase_display = document.querySelector("#phrase-display");

//const url_output_msg = document.querySelector("#url-output-msg"); 
let song_url;

play_button.disabled = true;
pause_button.disabled = true;
rewind_button.disabled = true;
submit_button.disabled = true;

//setup listeners and methods
function addButtonEventListeners()
{
  pause_button.disabled = false;
  rewind_button.disabled = false;
  submit_button.disabled = false;

  play_button.addEventListener("click", () => player.requestPlay());
  pause_button.addEventListener("click", () => player.requestPause());
  rewind_button.addEventListener("click", () => player.requestMediaSeek(0));
}

function submitUrl()
{
  try
  {
    console.log(document.getElementById("#url-input").value);
    song_url = new URL(document.getElementById("#url-input").value);
    player.createFromSongUrl(song_url);
    //submit_button.disabled = true;
    //player.createFromSongUrl("https://piapro.jp/t/Tzx5");
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
}


function onTimerUpdate(position)
{

}

//initialise player
const player = new Player({app : {token: "k0IXqtc8pHZgl9mz"},
  mediaBannerElement: document.querySelector("#media")});

player.addListener({onAppReady,onTimerReady,onTimerUpdate});