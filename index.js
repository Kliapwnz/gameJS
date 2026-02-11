import {playlistsComponent} from "./ui/Playlists/playlistsComponent.js";
import {playlists} from "./data/data.js";

const root = document.getElementById("root")


const playlistsElement = playlistsComponent(playlists)
root.append(playlistsElement)

