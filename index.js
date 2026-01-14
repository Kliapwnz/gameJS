import {playlistsComponent} from "./playlistsComponent.js";

const root = document.getElementById("root")


const playlistsElement = playlistsComponent(playlists)
root.append(playlistsElement)

