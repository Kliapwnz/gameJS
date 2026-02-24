import {liba} from "../../shared/liba.js";
import {showEditDialog} from "../../data/data.js";

export const PlaylistsHeader = () => {
  const element = liba.create('div')

  const addNewPlaylistButton = liba.create('button')
  addNewPlaylistButton.append("add new playlist")
  addNewPlaylistButton.addEventListener('click', () => {
    showEditDialog()
  })

  element.append(addNewPlaylistButton)

  return element
};

