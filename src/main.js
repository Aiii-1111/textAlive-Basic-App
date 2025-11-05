import {Player} from textalive-app-api;

//get html elements
const play_button = document.querySelector("#play-button");
const pause_button = document.querySelector("#pause-button");
const rewind_button = document.querySelector("#rewind-button");

const submit_button = document.querySelector("#submit-button")
let song_url;

//setup listeners and methods
function addButtonEventListeners()
{
  play_button.addEventListener("click", player.requestPlay())
}

function onAppReady(app)
{
  createFromSongUrl()
}

//function onTimerReady()

//initialise player
const player = new Player({app : {token: "k0IXqtc8pHZgl9mz"},
  mediaBannerElement: document.querySelector("#media")});

player.addListeners({onAppReady,});