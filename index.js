import {playlistsComponent} from "./playlistsComponent";

const root = document.getElementById("root")


const playlistsElement = playlistsComponent(playlists)
root.append(playlistsElement)

