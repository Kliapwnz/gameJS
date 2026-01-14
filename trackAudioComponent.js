function TrackAudioComponent(audioSource) {
  const trackAudioElement = document.createElement("audio")
  trackAudioElement.src = audioSource
  trackAudioElement.controls = true
  return trackAudioElement
}