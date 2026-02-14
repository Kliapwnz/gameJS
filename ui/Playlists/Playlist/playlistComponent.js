import {liba} from "../../../shared/liba.js";
import {TracksComponent} from "./Tracks/tracksComponent.js"
import {deletePlaylist} from "../../../data/data.js";

export function playlistComponent(playlist) {
  const element = liba.create('div', ["playlist"])

  const playlistTitleElement = document.createElement("h2")
  playlistTitleElement.append(playlist.title)

  const deleteButtonElement = liba.create('button')
  deleteButtonElement.append("❌")
  deleteButtonElement.addEventListener('click', () => {
    deletePlaylist(playlist.id)
  })

  element.append(deleteButtonElement, playlistTitleElement, TracksComponent(playlist.tracks))
  return element

}