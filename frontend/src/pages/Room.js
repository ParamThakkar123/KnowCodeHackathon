import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const {roomId} = useParams();

    const myMeeting = async(element) => {
        const appID = 1938357101;
        const serverSecret = '977b79a44e3a75e54b925ff065ad793e';
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(), "Health hub");

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name: 'Copy Link',
                url: `http://localhost:3000/room/${roomId}`
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
        })
    }
  return (
    <div>
      <h1>
        Room {roomId}
      </h1>
      <div ref={myMeeting}>
      </div>
    </div>
  )
}

export default Room
