"use client";

  import { useEffect, useRef } from 'react';

  export default function Home() {
      const localVideoRef = useRef(null);
      const remoteVideoRef = useRef(null);
      const peerConnectionRef = useRef(null);
      const wsRef = useRef(null);
      const localStreamRef = useRef(null);
      let tracksAdded = false
  
      useEffect(() => {
          // Initialize WebSocket
          wsRef.current = new WebSocket('ws://localhost:8080');
  
          wsRef.current.onmessage = async (message) => {
              const data = JSON.parse(await message.data.text());
              console.log(data)
              if (data.offer) {
                  await handleOffer(data.offer);
              } else if (data.answer) {
                  await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(data.answer));
              } else if (data.iceCandidate) {
                  await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(data.iceCandidate));
              }
          };
  
          // Get local media stream
          navigator.mediaDevices.getUserMedia({ video: true, audio: true })
              .then((stream) => {
                  localStreamRef.current = stream;
                  localVideoRef.current.srcObject = stream;
                  createPeerConnection();
              })
              .catch((error) => console.error('Error accessing media devices.', error));
  
          return () => {
              wsRef.current.close();
          };
      }, []);
  
      const createPeerConnection = () => {
          peerConnectionRef.current = new RTCPeerConnection();
  
          // Add local stream tracks to the peer connection
          if(!tracksAdded){
            localStreamRef.current.getTracks().forEach(track => {
                peerConnectionRef.current.addTrack(track, localStreamRef.current);
            });
            tracksAdded= !tracksAdded;
          }
  
          peerConnectionRef.current.onicecandidate = (event) => {
              if (event.candidate) {
                  wsRef.current.send(JSON.stringify({ iceCandidate: event.candidate }));
              }
          };
  
          peerConnectionRef.current.ontrack = (event) => {
              remoteVideoRef.current.srcObject = event.streams[0];
          };
  
          // Create an offer
          peerConnectionRef.current.createOffer()
              .then((offer) => {
                  return peerConnectionRef.current.setLocalDescription(offer);
              })
              .then(() => {
                  wsRef.current.send(JSON.stringify({ offer: peerConnectionRef.current.localDescription }));
              });
      };
  
      const handleOffer = async (offer) => {
        // Check if the connection is ready
        if (!peerConnectionRef.current) {
          console.error('PeerConnection not initialized');
          return;
        }
          await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(offer));
          if(!tracksAdded){
            localStreamRef.current.getTracks().forEach(track => {
                peerConnectionRef.current.addTrack(track, localStreamRef.current);
            });
            tracksAdded= !tracksAdded;
          }
  
          const answer = await peerConnectionRef.current.createAnswer();
          await peerConnectionRef.current.setLocalDescription(answer);
          wsRef.current.send(JSON.stringify({ answer }));
      };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#1a202c',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999999
    }}>
      <div style={{
        width: '100%',
        maxWidth: '56rem',
        backgroundColor: '#2d3748',
        borderRadius: '0.5rem',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', aspectRatio: '16/9' }}>
          <video ref={remoteVideoRef} autoPlay style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} />
          <video ref={localVideoRef} autoPlay muted style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            width: '25%',
            height: '25%',
            objectFit: 'cover',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }} />
        </div>
        <div style={{
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          <button
            // onClick={toggleMute}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              // backgroundColor: isMuted ? '#e53e3e' : '#4a5568',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {/* {isMuted ? 'Unmute' : 'Mute'} */}
          </button>
          <button
            // onClick={toggleVideo}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              // backgroundColor: isVideoPaused ? '#e53e3e' : '#4a5568',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {/* {isVideoPaused ? 'Start Video' : 'Stop Video'} */}
          </button>
          <button
            // onClick={stopCall}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              backgroundColor: '#e53e3e',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            End Call
          </button>
        </div>
      </div>
    </div>
  );
}
