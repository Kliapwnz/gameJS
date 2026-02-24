import {liba} from "../../shared/liba.js";
import {addPlaylist, hideEditDialog} from "../../data/data.js";


export function DialogActionsComponent() {
  const element = liba.create('div')

  const cancelButtonElement = liba.create('button')
  cancelButtonElement.append("Cancel")
  cancelButtonElement.addEventListener('click', () => {
    hideEditDialog()
  })
  const addPlaylistButtonElement = liba.create('button')
  addPlaylistButtonElement.append('Create')
  addPlaylistButtonElement.addEventListener('click', () => {
    try{
      addPlaylist()
    } catch (error) {
      alert(error)
    }

  })

  element.append(cancelButtonElement, addPlaylistButtonElement)
  return element

}

