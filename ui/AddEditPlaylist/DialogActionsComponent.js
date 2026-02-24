import {liba} from "../../shared/liba.js";


export function DialogActionsComponent() {
  const element = liba.create('div')

  const cancelButtonElement = liba.create('button')
  cancelButtonElement.append("Cancel")
  const addPlaylistButtonElement = liba.create('button')
  addPlaylistButtonElement.append('Create')

  element.append(cancelButtonElement, addPlaylistButtonElement)
  return element

};

