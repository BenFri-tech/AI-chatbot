import { useState } from "react";

export const ChatSection = () => {
  const MILLISECONDS = 1000;
  const WAITING_TIME_IN_SECONDS = 4 * MILLISECONDS
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");

  const addMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, WAITING_TIME_IN_SECONDS);
  };

  const answers = {
    0: "Ben is awesome",
    1: "Ben is cool",
    2: "Ben is smart",
    3: "Ben is nice",
    4: "I love football",
  };


  

  return (
    <div className="main-part">
      <div className="answers-container">
        {!messages.length && <p>
            Ask me Anything
            </p>}
        {messages.map((message, index) => (
          <div className="answer-text" key={index}>
            <p>{message}</p>
            {!isLoading || index !== messages.length - 1 ? (
              <p>{answers[index]}</p>
            ) : (
              <div className="loader"></div>
            )}
          </div>
        ))}
      </div>
      <form id="input-container">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          className="text-input"
          type="text"
          placeholder="Ask me anything"
          name="AskMeAnything"
        />
        <br />
        <br />
        <button
          className="send-button"
          onClick={addMessage}
          disabled={isLoading}
        >
          <span style={isLoading?{
            color: 'gray' ,
            cursor:'wait',
            
        }:{
            color: 'black' ,
            cursor:'pointer'
          }} className='material-symbols-outlined'>send</span>
        </button>
      </form>
    </div>
  );
};
