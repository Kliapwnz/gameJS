import {TrackAudioComponent} from "./TrackAudio/trackAudioComponent.js"
import {TrackImageComponent} from "./TrackImage/trackImageComponent.js"
import {TrackTitleComponent} from "./TrackTitle/trackTitleComponent.js"

export function TrackComponent(inputTrack) {
  const element = document.createElement('li')


  const trackAudioElement = TrackAudioComponent(inputTrack.audioSource)
  const trackImageElement = TrackImageComponent(inputTrack.imageSource)

  element.append(
    trackImageElement,
    TrackTitleComponent(inputTrack),
    trackAudioElement)

  return element
}