

const root = document.getElementById("root")


const playlistsElement = playlistsComponent(playlists)
root.append(playlistsElement)

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
  const element = createElement('div', ["playlist"])

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
  return `${inputTrack.isHot ? "🔥" : ""}${inputTrack.artist} - ${inputTrack.title}`
}

function createElement (tagName, classes = []) {
  const element = document.createElement(tagName)
  classes.forEach(c => {
    element.classList.add(c)
  })
  return element
}