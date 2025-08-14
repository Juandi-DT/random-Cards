// Frases por categoría
const phrases = {
  "truth": [
    "¿Cuál es tu mayor miedo?",
    "¿Has mentido a alguien en esta sala?",
    "¿Quién te gusta ahora mismo?",
    "¿Alguna vez hiciste trampa en un examen?",
    "¿Cuál es tu secreto más vergonzoso?",
    "¿Con quién aquí tendrías una cita?",
    "¿Has tenido un sueño raro con alguien de esta sala?",
    "¿Cuál ha sido tu mayor error amoroso?",
    "¿Has fingido estar enfermo para no salir?",
    "¿Qué es lo más inmaduro que haces todavía?",
    "¿Tienes algún fetiche raro?",
    "¿Qué es lo más ilegal que has hecho?",
    "¿Te han pillado haciendo algo vergonzoso?",
    "¿Alguna vez te han roto el corazón?",
    "¿A qué edad fue tu primer beso?"
  ],
  "dare": [
    "Habla como un robot por 1 minuto.",
    "Haz 10 sentadillas ahora.",
    "Envía un emoji extraño a tu crush.",
    "Baila sin música durante 30 segundos.",
    "Di el abecedario al revés.",
    "Haz una imitación de otro jugador.",
    "Manda un audio diciendo 'te amo' a alguien aleatorio.",
    "Cambia tu foto de perfil por algo ridículo por 5 minutos.",
    "Haz una historia diciendo 'me acabo de tirar un pedo'.",
    "Intenta hacer una pose de yoga rara por 20 segundos.",
    "Canta el coro de tu canción favorita a capela.",
    "Hazte un peinado raro con lo que tengas cerca.",
    "Envía un mensaje cringy a tu ex (si tienes).",
    "Escribe en Google lo último que buscaste y léelo en voz alta.",
    "Haz una declaración dramática de amor a una silla."
  ],
  "never": [
    "Yo nunca he hecho trampa en un juego.",
    "Yo nunca me he enamorado a primera vista.",
    "Yo nunca he llorado viendo una película.",
    "Yo nunca he enviado un mensaje estando borracho.",
    "Yo nunca he stalkeado a alguien.",
    "Yo nunca he mentido para evitar una cita.",
    "Yo nunca he fingido reírme de un chiste malo.",
    "Yo nunca me he quedado dormido en clase.",
    "Yo nunca he tenido un crush en un profesor.",
    "Yo nunca he dicho 'te amo' sin sentirlo.",
    "Yo nunca he leído mensajes viejos por nostalgia.",
    "Yo nunca me he enamorado de alguien que no me correspondía.",
    "Yo nunca he buscado el nombre de alguien en Google.",
    "Yo nunca me he arrepentido justo después de enviar un mensaje.",
    "Yo nunca he dicho que me gustaba algo solo por quedar bien."
  ]
};

let playerName = '';

function startRandom() {
  const name = document.getElementById("playerNameInput").value.trim();
  if (!name) {
    alert("Por favor, ingresa tu nombre.");
    return;
  }

  document.getElementById("playerNameDisplay").textContent = `Jugador: ${name}`;
  document.getElementById("menu").style.display = "none";
  const card = document.getElementById("gameCard");
  card.style.display = "block";
  card.classList.add("show"); // <- Muy importante para el CSS de transición
}

function showPhrase(category) {
  if (!phrases[category] || phrases[category].length === 0) {
    document.getElementById("cardContent").innerText = "No hay frases disponibles.";
    return;
  }
  const cardContent = document.getElementById('cardContent');
  const randomIndex = Math.floor(Math.random() * phrases[category].length);
  const phrase = phrases[category][randomIndex];

  cardContent.textContent = phrase;
  document.querySelector(".options").style.display = "none";
  document.querySelector(".next-btn").style.display = "block";
  
}

function resetCard() {
  const cardContent = document.getElementById('cardContent');
  cardContent.textContent = 'Elige una opción';
}
 function nextCard() {
      const question = document.getElementById('cardContent');
      question.innerText = 'Elige una opción';
}

const card = document.querySelector(".card");
const cardContent = document.querySelector(".card-content");
const optionsDiv = document.querySelector(".options");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  // 1. Agrega clase de animación
  card.classList.add("animate-out");

  // 2. Espera que termine la animación
  setTimeout(() => {
    // 3. Remueve clase animación
    card.classList.remove("animate-out");

    // 4. Limpia y muestra nuevas opciones (puedes personalizar esto)
    cardContent.innerText = "Elige una opción para continuar";
    optionsDiv.style.display = "flex";
    nextBtn.style.display = "none";
  }, 500); // debe coincidir con la duración de la animación
});

function nextCard() {
  const card = document.getElementById("gameCard");
  const cardContent = document.getElementById("cardContent");
  const options = document.querySelector(".options");
  const nextBtn = document.querySelector(".next-btn");

  // Agrega animación de salida
  card.classList.add("animate-out");

  // Espera a que termine la animación
  setTimeout(() => {
    // Reinicia el contenido
    cardContent.textContent = "Elige una opción";
    options.style.display = "flex";
    nextBtn.style.display = "none"; // se vuelve a mostrar cuando elijan opción

    // Remueve animación de salida y añade de entrada
    card.classList.remove("animate-out");
    card.classList.add("animate-in");

    setTimeout(() => {
      card.classList.remove("animate-in");
      card.classList.add("show");
    }, 10);
  }, 500); // misma duración que la animación CSS
}
