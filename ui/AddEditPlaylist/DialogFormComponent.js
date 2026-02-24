import {liba} from "../../shared/liba.js";
import {addPlaylistState, setNewTitle} from "../../data/data.js";

export function DialogFormComponent() {
  const element = liba.create('form')
  const playlistNameInputElement = liba.create('input')
  playlistNameInputElement.addEventListener('input', () => {
    setNewTitle(playlistNameInputElement.value)
  })
  // const playlistImageSourceElement = liba.create('input')

  playlistNameInputElement.value = addPlaylistState.newTitle
  setTimeout(()=> {
    playlistNameInputElement.focus()
  }, 1)

  element.append(playlistNameInputElement)// playlistImageSourceElement

  return element
}

