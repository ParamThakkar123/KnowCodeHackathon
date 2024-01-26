import React, { useEffect, useCallback, useState } from "react";
import { useSocket } from "../../context/SocketProvider";
import Peer from "../../service/Peer";
import ReactPlayer from "react-player";

const Room = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [stream, setStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await Peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncomingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await Peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  useEffect(() => {
    Peer.peer.addEventListener("track", async (e) => {
      const remoteStream = e.streams;
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  const handleNegoNeeded = useCallback(async () => {
    const offer = await Peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    Peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      Peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoIncoming = useCallback(
    async ({ from, offer }) => {
      const answer = await Peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, answer });
    },
    [socket]
  );

  const handleNegoFinal = useCallback(async ({ ans }) => {
    await Peer.setLocalDescription(ans);
  }, []);

  const sendStreams = useCallback(() => {
    for (const track of stream.getTracks()) {
      Peer.peer.addTrack(track, stream);
    }
  }, [stream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      Peer.setLocalDescription(ans);
      sendStreams();
    },
    [sendStreams]
  );

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email: ${email} joined the room`);
    setRemoteSocketId(id);
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incoming:call", handleIncomingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoIncoming);
    socket.on("peer:nego:final", handleNegoFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incoming:call", handleIncomingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoIncoming);
      socket.off("peer:nego:final", handleNegoFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncomingCall,
    handleCallAccepted,
    handleNegoIncoming,
    handleNegoFinal,
  ]);
  return (
    <div>
      <h1>Room Page</h1>
      <h4>{remoteSocketId ? "Connected" : "No one in the room"}</h4>
      {stream && <button onClick={sendStreams}>Send Stream</button>}
      {remoteSocketId && <button onClick={handleCallUser}>Call</button>}
      {stream && (
        <>
          <ReactPlayer
            playing
            muted
            height="300px"
            width="500px"
            url={stream}
          />
        </>
      )}
      {remoteStream && (
        <>
          <ReactPlayer
            playing
            muted
            height="300px"
            width="500px"
            url={remoteStream}
          />
        </>
      )}
    </div>
  );
};

export default Room;
