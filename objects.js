var playlist = {kanye: "song1", chance: "song2"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
