import {liba} from "../../shared/liba.js";
import {dialogOpen} from "../../data/data.js";


export function AddEditPlaylistComponent() {

  const element = liba.create('dialog')

  element.innerHTML = ' <p>Greetings, one and all!</p> <form method="dialog"> <button>OK</button> </form>'
  element.open = dialogOpen.value

  return element
}
