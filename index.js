const playlists = [
  {
    id: 1,
    title: "Hip-Hop Hits",
    tracks: [
      {
        artist: "Eminem",
        title: "Rap God",
        isHot: true,
        imageSource: "./img/icons/eminem.jpg",
        audioSource: "./music/Eminem - Rap God.mp3"
      },
      {
        artist: "50 cent",
        title: "In da Club",
        isHot: false,
        imageSource: "./img/icons/50cent.jpeg",
        audioSource: "./music/50cent - In da club.mp3"
      }
    ]
  },
  {
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
  }
]

const root = document.getElementById("root")

for (let i = 0; i < playlists.length; i++) {
  const playlist = playlists[i];

  const playlistElement = document.createElement('div')
  const playlistTitleElement = document.createElement("h2")
  playlistTitleElement.append(playlist.title)

  const tracksElement = document.createElement('ul')
  for (let i = 0; i < playlist.tracks.length; i++) {
    const track = playlist.tracks[i]

    const trackElement = createTrackElement(track);

    tracksElement.append(trackElement)


  }
  playlistElement.append(playlistTitleElement, tracksElement)

  root.append(playlistElement)
}

function createTrackElement(inputTrack) {
  const element = document.createElement('li')


  const trackAudioElement = document.createElement("audio")
  trackAudioElement.src = inputTrack.audioSource
  trackAudioElement.controls = true
  const trackImageElement = createTrackImage(inputTrack.imageSource)

  element.append(trackImageElement, inputTrack.title, trackAudioElement)

  return element
}

function createTrackImage(imageSource) {
  const element = document.createElement('img')
  element.src = imageSource
  return element
}