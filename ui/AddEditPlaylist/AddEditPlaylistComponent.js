import {liba} from "../../shared/liba.js";
import {dialogOpen} from "../../data/data.js";
import {DialogHeaderComponent} from "./DialogHeaderComponent";


export function AddEditPlaylistComponent() {

  const element = liba.create('dialog')

  element.append(DialogHeaderComponent, dialogFormElement, dialogButtonsElement)
  element.open = dialogOpen.value

  return element
}
