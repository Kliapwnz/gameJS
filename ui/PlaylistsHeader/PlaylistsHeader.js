import {liba} from "../../shared/liba.js";

export const PlaylistsHeader = () => {
  const element = liba.create('div')

  const addNewPlaylistButton = liba.create('button')
  addNewPlaylistButton.append("add new playlist")
  element.append(addNewPlaylistButton)

  return element
};

