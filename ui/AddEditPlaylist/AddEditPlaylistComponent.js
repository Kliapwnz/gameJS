import {liba} from "../../shared/liba.js";
import {dialogOpen} from "../../data/data.js";
import {DialogHeaderComponent} from "./DialogHeaderComponent";
import {DialogFormComponent} from "./DialogFormComponent";
import {DialogActionsComponent} from "./DialogActionsComponent";


export function AddEditPlaylistComponent() {

  const element = liba.create('dialog')

  element.append(DialogHeaderComponent, DialogFormComponent, DialogActionsComponent)
  element.open = dialogOpen.value

  return element
}
