import { Player } from 'video-react'
import video from './video1.mp4'
import '../../../node_modules/video-react/dist/video-react.css'

const Video = () => (
  <Player
    fluid={false}
    width={'100%'}
    height={'100%'}
    muted={true}
    autoPlay={true}
    type="video/mp4"
  >
    <source src={video} />
  </Player>
)

export default Video
