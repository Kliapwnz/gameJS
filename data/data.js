export let playlists = [{
  id: 1, title: "Hip-Hop Hits", tracks: [{
    artist: "Eminem",
    title: "Rap God",
    isHot: true,
    imageSource: "./img/icons/eminem.jpg",
    audioSource: "./music/Eminem - Rap God.mp3"
  }, {
    artist: "50 cent",
    title: "In da Club",
    isHot: false,
    imageSource: "./img/icons/50cent.jpeg",
    audioSource: "./music/50cent - In da club.mp3"
  }]
}, {
  id: 2, title: "Rap Hits 1990s", tracks: [{
    artist: "Public Enemy",
    title: "Fight the Power",
    isHot: true,
    imageSource: "./img/icons/PublicEnemy.jpg",
    audioSource: "./music/Public Enemy - Fight The Power (Remix).mp3"
  }]
}]

export let addEditPlaylistState = {
  isActive: false, newTitle: "", id: null
}


export const setNewTitle = (title) => {
  addEditPlaylistState.newTitle = title
  emit()
}

export const activateAddEditPlaylist = (playlistId = null) => {
  addEditPlaylistState.isActive = true
  if (playlistId) {
    addEditPlaylistState.id = playlistId
    const foundPlaylist = playlists.find((p) => p.id === playlistId)
    if (!foundPlaylist) {
      throw new Error("404")
    }
    addEditPlaylistState.newTitle = foundPlaylist.title
  } else {
    addEditPlaylistState.newTitle = ""
    addEditPlaylistState.id = null
  }
  emit()
}
export const deactivateAddEditPlaylist = () => {
  addEditPlaylistState.isActive = false
  addEditPlaylistState.id = null
  addEditPlaylistState.newTitle = ""
  emit()
}

export const deletePlaylist = (id) => {
  playlists = playlists.filter(p => p.id !== id)
  emit()
}

export const createUpdatePlaylist = () => {
  if (addEditPlaylistState.newTitle === '') {
    throw new Error("Empty title")
  }
  if (addEditPlaylistState.id) {
    const foundPlaylist = playlists.find((p) => p.id === addEditPlaylistState.id)
    if (!foundPlaylist) {
      throw new Error("404")
    }
    foundPlaylist.title = addEditPlaylistState.newTitle
  } else {
    playlists.push({
      id: Date.now(), title: addEditPlaylistState.newTitle, tracks: []
    })

  }
  deactivateAddEditPlaylist()
  emit()

}

const observers = []

export const subscribe = (observer) => {
  observers.push(observer)
}

function emit() {
  observers.forEach((observer) => {
    observer()
  })
}