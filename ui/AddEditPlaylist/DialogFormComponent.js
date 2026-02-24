import {liba} from "../../shared/liba.js";

export function DialogFormComponent() {
  const element = liba.create('form')
  const playlistNameInputElement = liba.create('input')
  const playlistImageSourceElement = liba.create('input')

  element.append(playlistNameInputElement, playlistImageSourceElement)

  return element
};

