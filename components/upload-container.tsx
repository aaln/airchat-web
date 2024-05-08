'use client';
import { useEffect, useState } from 'react';
import { VoiceVisualizer, useVoiceVisualizer } from 'react-voice-visualizer';
import { Button } from './ui/button';
// import { useReactMediaRecorder } from "react-media-recorder";

export default function UploadContainer() {
  const [signedUrl, setSignedUrl] = useState('');

  const recorderControls = useVoiceVisualizer();

  const { recordedBlob, error, audioRef, duration } = recorderControls;

  // useEffect(() => {
  //     if (!recordedBlob) return;
  //     console.log(recordedBlob);

  //     // Upload the recorded audio to the signed AWS URL
  //     // fetch(signedUrl, {
  //     //     method: "PUT",
  //     //     body: recordedBlob,
  //     // })
  //     // .then(response => {
  //     //     if (response.ok) {
  //     //         alert("Audio uploaded successfully");
  //     //     } else {
  //     //         console.error("Failed to upload audio");
  //     //     }
  //     // })
  //     // .catch(error => {
  //     //     console.error("Error uploading audio:", error);
  //     // });
  // }, [recordedBlob, error, signedUrl]);

  useEffect(() => {
    if (!error) return;

    console.error(error);
  }, [error]);

  const handleUpload = async () => {
    // Fetch the signed AWS URL when the upload button is clicked
    const uploadReqResponse = await fetch('/api/raw/CreateUploadRequest');
    const { recordingId } = await uploadReqResponse.json();
    console.log('recordingId', recordingId);
    const readyUploadSegmentResponse = await fetch(
      `/api/raw/ReadyUploadSegment?id=${recordingId}`
    );
    const { uploadUrl } = await readyUploadSegmentResponse.json();

    console.log('uploadUrl', uploadUrl);
    // setSignedUrl(uploadUrl);
    try {
      const blob = new Blob([recordedBlob], { type: 'video/mp4' });
      console.log('blob123', blob);
      const reader = new FileReader();
      reader.onloadend = async function () {
        // const base64Audio = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
        // console.log("base64Audio", base64Audio)

        const uploadAudioResponse = await fetch('/api/messages/upload-audio', {
          method: 'POST',
          body: JSON.stringify({
            audio: blob,
            uploadUrl
          })
        });
        // const uploadAudioData = await uploadAudioResponse.json();
        // console.log("uploadAudioData", uploadAudioData);
        const completeUploadResponse = await fetch(
          `/api/raw/CompleteUpload?id=${recordingId}`
        );
        const completeUploadData = await completeUploadResponse.json();
        console.log('completeUploadData', completeUploadData);
      };
      reader.readAsArrayBuffer(blob);
    } catch (error) {
      console.log('blob error 123');
      console.error(error);
    }

    // fetch("YOUR_SIGNING_ENDPOINT")
    // .then(response => response.json())
    // .then(data => {
    //     console.log("data", data);
    //     setSignedUrl(data.signedUrl);
    // })
    // .catch(error => {
    //     console.error("Error fetching signed URL:", error);
    // });
  };

  return (
    <>
      <Button onClick={handleUpload}>Upload Audio</Button>
      <VoiceVisualizer ref={audioRef} controls={recorderControls} />
    </>
  );
}
