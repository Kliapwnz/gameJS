import {liba} from "../../shared/liba.js";
import {activateAddEditPlaylist} from "../../data/data.js";

export const PlaylistsHeader = () => {
  const element = liba.create('div')

  const addNewPlaylistButton = liba.create('button')
  addNewPlaylistButton.append("add new playlist")
  addNewPlaylistButton.addEventListener('click', () => {
    activateAddEditPlaylist()
  })

  element.append(addNewPlaylistButton)

  return element
};

