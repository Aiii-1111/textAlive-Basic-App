import {Player} from textalive-app-api;

//get html elements
const play_button = document.querySelector("#play-button");
const pause_button = document.querySelector("#pause-button");
const rewind_button = document.querySelector("#rewind-button");
const submit_button = document.querySelector("#submit-button")

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

  play_button.addEventListener("click", player.requestPlay());
  pause_button.addEventListener("click", player.requestPause());
  rewind_button.addEventListener("click", player.requestMediaSeek(0));
}

function submitUrl()
{
  song_url = document.getElementById("#url-input").value;
}

function onAppReady(app)
{
  submit_button.disabled = false;
  submit_button.addEventListener("click",submitUrl());
}

//function onTimerReady()

//initialise player
const player = new Player({app : {token: "k0IXqtc8pHZgl9mz"},
  mediaBannerElement: document.querySelector("#media")});

submit_button.addEventListener("click",submitUrl());

player.addListeners({onAppReady,});