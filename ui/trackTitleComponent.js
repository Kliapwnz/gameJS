export function TrackTitleComponent(inputTrack) {
  return `${inputTrack.isHot ? "🔥" : ""}${inputTrack.artist} - ${inputTrack.title}`
}