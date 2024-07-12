// pages/api/stream.js

export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
  
    // Function to send a message
    const sendMessage = (message) => {
      res.write(`data: ${message}\n\n`);
    };
  
    // Simulate sending a new message every second
    const intervalId = setInterval(() => {
      sendMessage('bla bla bla');
    }, 1000);
  
    // Handle client disconnect
    req.on('close', () => {
      clearInterval(intervalId);
      res.end();
    });
  }
  