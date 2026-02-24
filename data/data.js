export let playlists = [{
  id: 1,
  title: "Hip-Hop Hits",
  tracks: [
    {
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
    }
  ]
}, {
  id: 2,
  title: "Rap Hits 1990s",
  tracks: [
    {
      artist: "Public Enemy",
      title: "Fight the Power",
      isHot: true,
      imageSource: "./img/icons/PublicEnemy.jpg",
      audioSource: "./music/Public Enemy - Fight The Power (Remix).mp3"
    }
  ]
}]

export let dialogOpen = {
  value: false,
  newTitle: ""
}


export const setNewTitle = (title) => {
  dialogOpen.newTitle = title
}

export const showEditDialog = () => {
  dialogOpen.value = true
  emit()
}
export const hideEditDialog = () => {
  dialogOpen.value = false
  emit()
}

export const deletePlaylist = (id) => {
  playlists = playlists.filter(p => p.id !== id)
  emit()
}

export const addPlaylist = () => {
  if (dialogOpen.newTitle === '') {
    return
  }
  playlists.push({
    id: Date.now(),
    title: dialogOpen.newTitle,
    tracks: []
  })
  hideEditDialog()
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