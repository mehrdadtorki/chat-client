// "use client";
// import { useState, useEffect } from "react";
// import { initSocket } from "../socket";

// export default function Chat() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const socket = initSocket(); // Initialize socket here

//     console.log("Socket instance:", socket); // Check if socket is defined

//     socket.on("connect", () => {
//       console.log("Connected to server"); // Verify connection
//     });

//     socket.on("message", (msg) => {
//       setMessages((prevMessages) => [...prevMessages, msg]);
//     });

//     return () => {
//       socket.off("message");
//     };
//   }, []);

//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (message) {
//       const socket = initSocket(); // Ensure socket is defined
//       socket.emit("message", message);
//       setMessage("");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Real-Time Chat</h2>
//       <div
//         style={{
//           height: "300px",
//           overflowY: "scroll",
//           border: "1px solid #ddd",
//           padding: "10px",
//         }}
//       >
//         {messages.map((msg, index) => (
//           <p key={index}>{msg}</p>
//         ))}
//       </div>
//       <form onSubmit={sendMessage}>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type your message here..."
//           style={{ width: "80%", padding: "10px" }}
//         />
//         <button type="submit" style={{ padding: "10px" }}>
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }
import React from "react";

function page() {
  return <div>New Page</div>;
}

export default page;
