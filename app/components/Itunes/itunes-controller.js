import ItunesService from "./itunes-service.js";
//Private
let itunesService = new ItunesService()

function drawSongs() {
  //NOTE changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'

  let songsElem = document.querySelector("#songs")
  let template = ''
  let songs = itunesService.Songs
  songs.forEach(song => {
    template += song.Template
  })
  songsElem.innerHTML = template
  console.log(itunesService.Songs)
  //TODO use event listeners to pause 
  // FIXME document.getElementById("#songs").addEventListener("click", drawSongs)
}



//PUBLIC
class ItunesController {
  constructor() {
    itunesService.addSubscriber("songs", drawSongs)
    drawSongs()
    //TODO BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
  }

  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController