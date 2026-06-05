import { useState, useRef} from 'react';
//import { Link } from 'react-router-dom';

function Chat() {
  const [firstUserMessage, setFirstUserMessage] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const userInputRef = useRef<HTMLInputElement | null>(null);

  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);

  const appendUserMessage = (message: string) => {
    setMessages((prev) => [...prev, { role: 'user', text: message }]);
    getBotResponse(message);
  };

  const getBotResponse = async (userMessage: string) => {
    try {
      const response = await fetch("http://localhost:5005/savechat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage })
      });
      if (!response.ok) throw new Error("Error al conectar con la API");
      const data = await response.json();
      const botText = data.message?.content || "Respuesta no válida.";
      setMessages((prev) => [...prev, { role: 'bot', text: botText }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'bot', text: "Hubo un error al obtener la respuesta." }]);
    }
  };

  // Manejador para enviar mensaje con botón
  const handleSendMessage = () => {
    const text = userInputRef.current?.value.trim();
    if (text) {
      appendUserMessage(text);
      if (userInputRef.current) userInputRef.current.value = '';
      setFirstUserMessage(false);
    }
  };

  // Manejador para enviar mensaje con Enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const handleSuggestionClick = (message: string) => {
    appendUserMessage(message);
    setFirstUserMessage(false);
  };

  return (
    <>
      {/* Botón para abrir/cerrar chat */}
      <button
        id="chat-btn"
        className="chat-button"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setFirstUserMessage(true);
        }}
      >
        <img src="images/chat-bot.png" alt="ChatBot" />
      </button>
      {/* Chat window solo si está abierto */}
      {isOpen && (
        <div id="chat-window" className="chat-window">
          <div className="chat-header">
            <p>🎓 Asistente Virtual UTN</p>
            <button
              className="options-btn"
              onClick={() => window.open('/login', '_blank')}
              title="Abrir sesión como administrador">
              <i className="bi bi-person-circle"></i>
            </button>
          </div>

          <div className="chat-body" id="chat-body">
            <div className="suggestions">
              <button className="suggestion" onClick={() => handleSuggestionClick('Consultas de becas')}>Consultas de becas</button>
              <button className="suggestion" onClick={() => handleSuggestionClick('Consultas de matrículas')}>Consultas de matrículas</button>
              <button className="suggestion" onClick={() => handleSuggestionClick('Horarios de clases')}>Horarios de clases</button>
              <button className="suggestion" onClick={() => handleSuggestionClick('Información general')}>Información general</button>
            </div>

            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.role === 'user'
                  ? `user-message-container ${firstUserMessage ? 'first-user-message' : ''}`
                  : "bot-message-container"}
              >
                <div className={msg.role === 'user' ? "user-avatar" : "avatar bot-avatar"}>
                  {msg.role === 'user' ? 'U' : '🤖'}
                </div>
                <div className={`message ${msg.role === 'bot' ? 'bot-message' : ''}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              id="user-input"
              ref={userInputRef}
              onKeyDown={handleKeyPress}
            />
            <button id="send-btn" onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
}
export default Chat;