function TracksComponent(inputTracks) {
  const element = document.createElement('ul')
  for (let i = 0; i < inputTracks.length; i++) {
    const track = inputTracks[i]

    const trackElement = TrackComponent(track);

    element.append(trackElement)

  }
  return element
}