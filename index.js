const playlists = [{
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

const root = document.getElementById("root")


const playlistElement = playlistsComponent(playlists)
root.append(playlistElement)

function playlistsComponent(playlists) {
  const element = document.createElement('div')
  for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];

    element.append(playlistComponent(playlist))


  }
  return element
}

function TracksComponent(inputTracks) {
  const element = document.createElement('ul')
  for (let i = 0; i < inputTracks.length; i++) {
    const track = inputTracks[i]

    const trackElement = TrackComponent(track);

    element.append(trackElement)

  }
  return element
}

function playlistComponent(playlist) {
  const element = document.createElement('div')
  const playlistTitleElement = document.createElement("h2")
  playlistTitleElement.append(playlist.title)
  element.append(playlistTitleElement, TracksComponent(playlist.tracks))
  return element

}

function TrackComponent(inputTrack) {
  const element = document.createElement('li')


  const trackAudioElement = TrackAudioComponent(inputTrack.audioSource)
  const trackImageElement = TrackImageComponent(inputTrack.imageSource)

  element.append(
    trackImageElement,
    TrackTitleComponent(inputTrack),
    trackAudioElement)

  return element
}

function TrackImageComponent(imageSource) {
  const element = document.createElement('img')
  element.src = imageSource
  return element
}

function TrackAudioComponent(audioSource) {
  const trackAudioElement = document.createElement("audio")
  trackAudioElement.src = audioSource
  trackAudioElement.controls = true
  return trackAudioElement
}

function TrackTitleComponent(inputTrack) {
  return inputTrack.artist + ' - ' + inputTrack.title
}