import {liba} from "../../shared/liba.js";
import {setNewTitle} from "../../data/data.js";

export function DialogFormComponent() {
  const element = liba.create('form')
  const playlistNameInputElement = liba.create('input')
  playlistNameInputElement.addEventListener('change', () => {
    setNewTitle(playlistNameInputElement.value)
  })
  // const playlistImageSourceElement = liba.create('input')

  element.append(playlistNameInputElement)// playlistImageSourceElement

  return element
};

