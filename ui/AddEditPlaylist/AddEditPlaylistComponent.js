import {liba} from "../../shared/liba.js";
import {addPlaylistState} from "../../data/data.js";
import {DialogHeaderComponent} from "./DialogHeaderComponent.js";
import {DialogFormComponent} from "./DialogFormComponent.js";
import {DialogActionsComponent} from "./DialogActionsComponent.js";


export function AddEditPlaylistComponent() {

  const element = liba.create('dialog')

  element.append(DialogHeaderComponent(), DialogFormComponent(), DialogActionsComponent())
  element.open = addPlaylistState.isActive

  return element
}
