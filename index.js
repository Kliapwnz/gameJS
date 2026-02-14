import {playlistsComponent} from "./ui/Playlists/playlistsComponent.js";
import {playlists} from "./data/data.js";
import {AddEditPlaylistComponent} from "./ui/AddEditPlaylist/AddEditPlaylistComponent.js";

const root = document.getElementById("root")

export function refresh () {
  root.innerHTML = ""
  const playlistsElement = playlistsComponent(playlists)
  const addEditPlaylistElement = AddEditPlaylistComponent()
  root.append(playlistsElement, addEditPlaylistElement)
}

refresh()

