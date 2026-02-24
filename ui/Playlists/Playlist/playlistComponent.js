import {liba} from "../../../shared/liba.js";
import {TracksComponent} from "./Tracks/tracksComponent.js"
import {activateAddEditPlaylist, deletePlaylist} from "../../../data/data.js";

export function playlistComponent(playlist) {
  const element = liba.create('div', ["playlist"])

  const playlistTitleElement = document.createElement("h2")
  playlistTitleElement.append(playlist.title, " - ", playlist.id)

  const deleteButtonElement = liba.create('button')
  deleteButtonElement.append("❌")
  deleteButtonElement.addEventListener('click', () => {
    deletePlaylist(playlist.id)
  })
  const editButtonElement = liba.create('button')
  editButtonElement.append("🖍")
  editButtonElement.addEventListener('click', () => {
    activateAddEditPlaylist(playlist.id)
  })
  element.append(deleteButtonElement, editButtonElement, playlistTitleElement, TracksComponent(playlist.tracks))
  return element

}