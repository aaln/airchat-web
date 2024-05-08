export const sendEventAction = (eventCode: number, recordingId: string) => {
  return fetch(
    `/api/messages/events?event=${eventCode}&recordingId=${recordingId}`
  );
};
