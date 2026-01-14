import {TrackAudioComponent} from "./trackAudioComponent.js"
import {TrackImageComponent} from "./trackImageComponent.js"
import {TrackTitleComponent} from "./trackTitleComponent.js"

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