import {liba} from "./liba";

function playlistComponent(playlist) {
  const element = liba.create('div', ["playlist"])

  const playlistTitleElement = document.createElement("h2")
  playlistTitleElement.append(playlist.title)
  element.append(playlistTitleElement, TracksComponent(playlist.tracks))
  return element

}