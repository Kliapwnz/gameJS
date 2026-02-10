import {playlistsComponent} from "./playlistsComponent.js";
import {playlists} from "./data.js";

const root = document.getElementById("root")


const playlistsElement = playlistsComponent(playlists)
root.append(playlistsElement)

