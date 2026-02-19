import {playlistComponent} from "./Playlist/playlistComponent.js"
export function playlistsComponent(playlists) {
  const element = document.createElement('div')
  for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];

    element.append(playlistComponent(playlist))


  }
  return element
}
