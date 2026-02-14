import {liba} from "../../../shared/liba.js";
import {TracksComponent} from "./Tracks/tracksComponent.js"

export function playlistComponent(playlist) {
  const element = liba.create('div', ["playlist"])

  const playlistTitleElement = document.createElement("h2")
  playlistTitleElement.append(playlist.title)

  const deleteButtonElement = liba.create('button')
  deleteButtonElement.append("❌")
  deleteButtonElement.addEventListener('click', () => {
    alert("delete")
  })

  element.append(deleteButtonElement,playlistTitleElement, TracksComponent(playlist.tracks))
  return element

}