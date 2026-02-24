import {liba} from "../../shared/liba.js";
import {createUpdatePlaylist, addEditPlaylistState, deactivateAddEditPlaylist} from "../../data/data.js";


export function DialogActionsComponent() {
  const element = liba.create('div')

  const cancelButtonElement = liba.create('button')
  cancelButtonElement.append("Cancel")
  cancelButtonElement.addEventListener('click', () => {
    deactivateAddEditPlaylist()
  })
  const addPlaylistButtonElement = liba.create('button')
  addPlaylistButtonElement.append('Create')
  if (addEditPlaylistState.newTitle === "") {
    addPlaylistButtonElement.disabled = true
  }
  addPlaylistButtonElement.addEventListener('click', () => {
    try {
      createUpdatePlaylist()
    } catch (error) {
      alert(error)
    }

  })

  element.append(cancelButtonElement, addPlaylistButtonElement)
  return element

}

