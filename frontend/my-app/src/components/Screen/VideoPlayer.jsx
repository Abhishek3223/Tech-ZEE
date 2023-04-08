import React, { useContext } from 'react';
import './Screen.css'

import { SocketContext } from '../../Context';



const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  // const classes = useStyles();

  return (

    <div className="video-container">
      <div className="video">
        {
          // stream &&
          <video playsInline muted ref={myVideo} autoPlay style={{ width: "60vw", height: "80vh" }}
          />
        }
      </div>
      {/* <div className="video">
        {callAccepted && !callEnded ?
          <video playsInline ref={userVideo} autoPlay style={{ width: "300px" }} /> :
          null}
      </div> */}
    </div>
  );
};

export default VideoPlayer;
