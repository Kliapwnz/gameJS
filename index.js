const playlists = [
  {
    id: 1,
    title: "Hip-Hop Hits",
    tracks: [
      {
        artist: "Eminem",
        title: "Rap God",
        isHot: true,
        imageSource: "./img/icons/eminem.jpg"
      },
      {
        artist: "50 cent",
        title: "In da Club",
        isHot: false,
        imageSource: "./img/icons/50cent.jpeg"
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
        imageSource: "./img/icons/PublicEnemy.jpg"
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

    const trackElement = document.createElement('li')

    const trackImageElement = document.createElement('img')
    trackImageElement.src = track.imageSource



    trackElement.append(trackImageElement, track.title)

    tracksElement.append(trackElement)


  }
  playlistElement.append(playlistTitleElement, tracksElement)

  root.append(playlistElement)
}