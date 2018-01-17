playlist = {
  Kanye: "song1",
  Chance: "song2"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
