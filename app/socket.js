// app/socket.js
import { io } from "socket.io-client";

export const initSocket = () => {
  // Always create a new instance of socket
  const socket = io("http://localhost:4000", {
    transports: ["websocket"], // Use websocket transport to avoid polling
    withCredentials: true, // Enable credentials if needed for CORS
  });

  return socket;
};
