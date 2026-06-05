const chatBtn = document.getElementById('chat-btn');
const chatWindow = document.getElementById('chat-window');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBody = document.getElementById('chat-body');
const suggestions = document.querySelectorAll('.suggestion');

let firstUserMessage = true; // Bandera para separar del área de sugerencias

// Mostrar/ocultar el chatbot
chatBtn.addEventListener('click', () => {
  chatWindow.classList.toggle('hidden');
  firstUserMessage = true; // Reinicia separación visual cuando se abre
});

// Enviar mensaje desde input
sendBtn.addEventListener('click', () => {
  const text = userInput.value.trim();
  if (text) {
    appendUserMessage(text);
    userInput.value = '';
  }
});

// Enviar mensaje desde sugerencias
suggestions.forEach(btn => {
  btn.addEventListener('click', () => {
    appendUserMessage(btn.textContent);
  });
});


userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); // Evita que se agregue una nueva línea
    const text = userInput.value.trim();
    if (text) {
      appendUserMessage(text);
      userInput.value = '';
    }
  }
});

// Agrega el mensaje del usuario al chat
function appendUserMessage(message) {
  const container = document.createElement('div');
  container.className = 'user-message-container';

  // Si es el primer mensaje luego de las sugerencias, añade espacio extra
  if (firstUserMessage) {
    container.classList.add('first-user-message');
    firstUserMessage = false;
  }

  const avatar = document.createElement('div');
  avatar.className = 'user-avatar';
  avatar.textContent = 'U';

  const msg = document.createElement('div');
  msg.className = 'message';
  msg.textContent = message;

  container.appendChild(msg);
  container.appendChild(avatar);

  chatBody.appendChild(container);
  chatBody.scrollTop = chatBody.scrollHeight;
}
