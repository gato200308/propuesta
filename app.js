/* ==========================================================================
   LÓGICA E INTERACTIVIDAD DE LA PROPUESTA
   ========================================================================== */

// 1. CONFIGURACIÓN DEL CONTENIDO (Personalizable por el usuario)
const CONFIG = {
    nombreChica: "Mi Dama", // Nombre de tu chica
    dias: [
        {
            dia: 1,
            fechaDesbloqueo: "2026-08-18", // Se desbloquea el 18 de Agosto
            titulo: "18 de agosto de 2026 | El comienzo de lo nuestro",
            imagen: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi Dama, hoy empieza esta cuenta regresiva que no solo marca días, sino la forma en que mi corazón decidió tomarte en serio. A veces pienso en lo improbable que fue todo: un primer cruce por Tinder, luego WhatsApp, después la recocha que nos hizo reír, y finalmente esa sinceridad bonita con la que ambos entendimos que ya no queríamos quedarnos en lo superficial. Me gusta recordar ese inicio porque ahí está la verdad más linda de lo nuestro: empezamos entre bromas, pero terminamos hablándonos con el alma.\n\nDesde Bogotá hasta Villavicencio, quiero que sepas que no estoy jugando contigo ni con lo que siento. Mi Dama, yo sí quiero hacer las cosas bien, despacio si hace falta, pero con intención real, con cuidado, con respeto y con amor del bueno. Esta primera carta es mi manera de decirte que no me intimida la distancia cuando lo que me mueve por dentro es tan sincero. Si algo nació entre nosotros, quiero ayudar a que crezca bonito.",
            frase: "El amor verdadero no improvisa: se construye con intención."
        },
        {
            dia: 2,
            fechaDesbloqueo: "2026-08-19", // Se desbloquea el 19 de Agosto
            titulo: "19 de agosto de 2026 | La risa que nos une",
            imagen: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi Dama, hay algo en la forma en que hablamos que me alegra incluso en los días pesados. Tu risa, tus ocurrencias, tu manera tan tuya de responderme, de seguirme la corriente y de hacer que cualquier conversación sencilla se vuelva especial, son cosas que yo no me paso por alto. Contigo no siento que tenga que fingir nada; al contrario, siento que puedo ser yo, con toda mi espontaneidad, y eso vale demasiado. Mi Dama, esa complicidad que tenemos es una de las cosas que más me encantan de ti.\n\nY no solo me gustas por lo que dices, sino por la energía que dejas en mí después de hablar. Hay personas que entran a la vida de uno y la ordenan un poco; tú entraste y además le pusiste alegría. A la distancia, sigues siendo capaz de cambiarme el día, de sacarme una sonrisa y de recordarme que lo bonito también puede sentirse por mensajes, audios y silencios que hablan bien. Mi Dama, contigo la risa también se volvió una forma de enamorarme.",
            frase: "Tu risa tiene la costumbre de volver hermoso lo simple."
        },
        {
            dia: 3,
            fechaDesbloqueo: "2026-08-20", // Se desbloquea el 20 de Agosto
            titulo: "20 de agosto de 2026 | Tu belleza completa",
            imagen: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi Dama, no voy a esconder lo que siento: me deslumbras. Me fascina tu belleza completa, la que se ve y la que no se explica fácil. Me encantas por tu presencia, por tu forma de moverte, por la elegancia natural que tienes y por ese cuerpo que, siendo honesto, me provoca admiración, deseo y ternura al mismo tiempo. Eres hermosa de una manera que no se reduce a una mirada; eres de esas mujeres que se sienten antes de explicarse, y desde el primer momento me dejaste claro que había algo en ti que me iba a quedar rondando en la cabeza y en el corazón.\n\nPero lo que más me gusta, Mi Dama, es que tu belleza no vive sola. Está acompañada de personalidad, de carácter, de una manera de ser que hace que todo en ti tenga más peso, más sentido y más encanto. Lo físico me atrae profundamente, sí, pero lo que me termina de rendir ante ti es que esa belleza viene con esencia, con autenticidad y con una luz que no necesita permiso para notarse. Si alguna vez dudaste de lo mucho que puedes impactar a alguien, quiero que esta carta te lo diga con claridad: tú sí me deslumbraste, y todavía lo sigues haciendo.",
            frase: "Eres belleza, pero también esencia; y eso me deja sin defensa."
        },
        {
            dia: 4,
            fechaDesbloqueo: "2026-08-21", // Se desbloquea el 21 de Agosto
            titulo: "21 de agosto de 2026 | Venciendo la distancia",
            imagen: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi Dama, la distancia entre Bogotá y Villavicencio existe, sí, pero nunca la he sentido como una pared. La he sentido como una prueba, como un tramo que vale la pena cruzar cuando lo que hay del otro lado importa de verdad. A mí no me asusta que haya kilómetros; me asusta más la idea de no intentar lo suficiente por alguien que me mueve tanto. Y contigo, Mi Dama, intento más porque siento más, porque me importas más, porque lo que estamos construyendo merece esfuerzo y no excusas.\n\nSi algo me nace contigo es demostrarte con hechos que esto no se queda en palabras bonitas. Quiero que veas en mí a un hombre dispuesto a sostener lo que dice, a viajar con intención, a escribir, a insistir, a cuidar, a estar presente incluso cuando no pueda estar físicamente al lado tuyo. Mi Dama, la distancia no me hace dudar; me hace tener más claro que quiero lucharla contigo, no contra ti. Si te sigo pensando desde Bogotá, es porque mi corazón ya aprendió el camino hasta Villavicencio.",
            frase: "La distancia no me detiene; me obliga a quererte con más intención."
        },
        {
            dia: 5,
            fechaDesbloqueo: "2026-08-22", // Se desbloquea el 22 de Agosto
            titulo: "22 de agosto de 2026 | Paciencia y detalles",
            imagen: "https://images.unsplash.com/photo-1501908731398-23591973b087?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi Dama, cuando uno quiere construir algo serio, maduro y bonito, entiende que el amor no vive solo de emoción: también se sostiene con paciencia, detalles y decisión. Por eso cada carta, cada mensaje, cada gesto mío hacia ti no es un adorno; es un ladrillo pequeño, pero firme, de algo que quiero levantar con cuidado. No me interesa una historia improvisada. Me interesa una historia que se pueda mirar con orgullo con el paso del tiempo, una historia donde ambos sepamos que lo que sentimos fue atendido con respeto y con verdad.\n\nMi Dama, yo creo en los detalles porque ahí se nota quién ama de verdad. Una palabra en el momento justo, una carta pensada con calma, una intención sincera, una manera de escuchar y de estar: todo eso también construye futuro. Y si hoy te escribo así es porque quiero que sientas que lo nuestro tiene espacio para crecer, para madurar y para hacerse fuerte sin perder la ternura. No quiero prometerte perfección, pero sí constancia, presencia y ganas reales de hacerte sentir elegida.",
            frase: "Los detalles también son una forma de decir para siempre."
        },
        {
            dia: 6,
            fechaDesbloqueo: "2026-08-23", // Se desbloquea el 23 de Agosto
            titulo: "23 de agosto de 2026 | La antesala de tu día",
            imagen: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi Dama, ya se siente el aire distinto porque se acerca una fecha demasiado especial: tu día. Y yo, que no soy de guardar lo que siento cuando algo me importa de verdad, confieso que llevo la ilusión prendida desde hace rato. Me emociona pensar que estoy a punto de celebrar otra vuelta al sol tuya, otro capítulo de tu vida, otro motivo para agradecer que existas. Mi Dama, hay personas que nacen y pasan por el mundo; tú, en cambio, haces que el mundo se sienta más bonito para quienes tenemos el privilegio de quererte.\n\nEsta carta es como una respiración antes del momento grande: llena de expectativa, de cariño y de una alegría que no me cabe del todo en el pecho. Quiero que sepas que me emociona celebrarte, honrar tu vida y recordarte que eres importante, valiosa y profundamente querida. No solo por lo que eres conmigo, sino por todo lo que eres por ti misma. Mi Dama, se acerca tu día y yo ya estoy sintiendo la felicidad de acompañarlo contigo.",
            frase: "Se acerca tu día y yo ya estoy celebrándolo con el corazón."
        },
        {
            dia: 7,
            fechaDesbloqueo: "2026-08-24", // Se desbloquea el 24 de Agosto
            titulo: "24 de agosto de 2026 | La víspera",
            imagen: "https://images.unsplash.com/photo-1533227260828-531465922380?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi Dama, la víspera de tu cumpleaños me encuentra pensando en todo lo que cambió desde que apareciste. Cambió mi manera de esperar mensajes, mi forma de imaginar el futuro, mi emoción por las pequeñas cosas y, sobre todo, mi forma de entender que alguien puede llegar a la vida de uno y dejarla más viva. Desde que te conozco, todo tiene un poco más de color, más de sentido y más de intención. Mi Dama, hay encuentros que no parecen tan grandes al principio, pero luego uno descubre que estaban reacomodando el corazón desde el primer momento.\n\nMañana no solo celebraré que cumples años; celebraré que existes, que eres tú, que el mundo te puso en mi camino y que, de alguna manera, me enseñaste a querer con más verdad. Me ilusiona imaginar la alegría de mañana, la emoción de decirte lo mucho que significas, y la manera en que quiero hacerte sentir especial, vista y profundamente amada. Mi Dama, antes de que llegue tu día, quiero dejar escrito que para mí ya eres motivo suficiente de celebración.",
            frase: "La víspera de tu cumpleaños ya se siente como una promesa hermosa."
        },
        {
            dia: 8,
            fechaDesbloqueo: "2026-08-25", // Se desbloquea el 25 de Agosto (Cumpleaños y Propuesta)
            titulo: "¡Feliz Cumpleaños y Algo Más! 🎂❤️",
            imagen: "https://images.unsplash.com/photo-1537907690979-ee8e01276184?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi Dama, hoy sí es tu día. Hoy celebro tu vida con toda el alma, porque naciste tú y con eso bastó para volver importante una fecha, un recuerdo y una ilusión. Feliz cumpleaños, Mi Dama. Ojalá pudieras ver con la intensidad con la que te pienso, con cuánto cariño admiro tu existencia, con qué ternura me nace desearte alegría, paz, salud, plenitud y sueños cumplidos. Eres una mujer inmensamente especial, y no lo digo solo porque me encantas, sino porque de verdad siento que tu vida tiene una luz que merece ser celebrada como algo grande, hermoso e irrepetible.\n\nSi he escrito estas cartas una a una es porque quería que llegaras a este momento sabiendo algo esencial: lo que siento por ti no es pasajero ni pequeño. Me gustas profundamente, me importas de una forma seria y bonita, y quiero seguir construyendo contigo algo que valga la pena cuidar. Por eso, en este día tan importante, quiero hacerte mi propuesta con el corazón abierto y sin rodeos: Mi Dama, ¿quieres ser mi novia, mi pareja formal, y permitirme caminar contigo esta historia como algo serio, bonito y nuestro? Quiero elegirte con intención, con respeto y con amor. Quiero que me elijas también, si así lo siente tu corazón. Feliz cumpleaños, Mi Dama, y gracias por existir en mi vida.",
            frase: "Feliz cumpleaños, Mi Dama: hoy celebro tu vida y te elijo con el corazón abierto."
        }
    ]
};

// 2. CONSTANTES DE ELEMENTOS DOM
const DOM = {
    canvas: document.getElementById('canvas-bg'),
    welcomeScreen: document.getElementById('welcome-screen'),
    mainScreen: document.getElementById('main-screen'),
    proposalScreen: document.getElementById('proposal-screen'),
    celebrationScreen: document.getElementById('celebration-screen'),
    btnEnter: document.getElementById('btn-enter'),
    calendarGrid: document.getElementById('calendar-grid'),
    proposalTrigger: document.getElementById('proposal-trigger-container'),
    btnGotoProposal: document.getElementById('btn-goto-proposal'),
    
    // Modal
    modal: document.getElementById('letter-modal'),
    modalClose: document.getElementById('btn-close-modal'),
    modalReadDone: document.getElementById('btn-read-done'),
    modalDayBadge: document.getElementById('modal-day-badge'),
    modalTitle: document.getElementById('modal-title'),
    modalImg: document.getElementById('modal-img'),
    modalMessage: document.getElementById('modal-message'),
    modalPhrase: document.getElementById('modal-phrase'),
    modalSignature: document.getElementById('modal-signature'),
    countdownContainer: document.getElementById('countdown-container'),
    
    // Propuesta
    proposalButtons: document.getElementById('proposal-buttons-container'),
    btnYes: document.getElementById('btn-yes'),
    btnNo: document.getElementById('btn-no'),
    btnBackToCalendar: document.getElementById('btn-back-to-calendar'),
    celebrationDate: document.getElementById('celebration-current-date')
};

// 3. ESTADOS DE LA APLICACIÓN
let activeDayData = null;
let currentDayStates = {}; // Almacenará { 1: 'unlocked', 2: 'locked', ... }
let noButtonClickCount = 0; // Contador de clics en "NO" para móviles
let countdownInterval = null;
let calendarCountdownInterval = null;
let celebrateActive = false;

// 4. ANIMACIÓN DE CORAZONES & PARTICULAS EN CANVAS
const ctx = DOM.canvas.getContext('2d');
let particles = [];
let fireworks = [];

function resizeCanvas() {
    DOM.canvas.width = window.innerWidth;
    DOM.canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Clase Corazón
class Heart {
    constructor(x, y, size, speedY, speedX, opacity, isConfetti = false) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedY = speedY;
        this.speedX = speedX;
        this.opacity = opacity;
        this.isConfetti = isConfetti;
        this.color = isConfetti 
            ? `hsla(${Math.random() * 360}, 90%, 65%, ${opacity})` 
            : `rgba(255, ${50 + Math.random() * 80}, ${100 + Math.random() * 80}, ${opacity})`;
        this.rotation = Math.random() * Math.PI;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        
        // Dibujo de un corazón perfecto con curvas de Bezier
        const d = this.size;
        ctx.moveTo(0, -d/2);
        ctx.bezierCurveTo(d/2, -d, d, -d/2, 0, d);
        ctx.bezierCurveTo(-d, -d/2, -d/2, -d, 0, -d/2);
        
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.isConfetti ? 0 : 10;
        ctx.shadowColor = 'rgba(255, 51, 102, 0.3)';
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        
        if (celebrateActive) {
            // En celebración flotan un poco más rápido
            this.opacity -= 0.005;
        } else {
            this.opacity -= 0.002;
        }
    }
}

// Clase Brillo/Sparkle
class Sparkle {
    constructor(x, y, size, speedY, speedX, opacity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedY = speedY;
        this.speedX = speedX;
        this.opacity = opacity;
    }

    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 230, 150, ${this.opacity})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#e5c158';
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.opacity -= 0.004;
    }
}

// Clase Partícula de Fuego Artificial
class FireworkParticle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.opacity = 1;
        this.gravity = 0.05;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.opacity -= 0.015;
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Bucle de Animación
function animate() {
    ctx.clearRect(0, 0, DOM.canvas.width, DOM.canvas.height);

    // Crear partículas normales a baja frecuencia
    if (Math.random() < 0.04 && particles.length < 150) {
        const size = 5 + Math.random() * 15;
        particles.push(new Heart(
            Math.random() * DOM.canvas.width,
            DOM.canvas.height + 20,
            size,
            0.5 + Math.random() * 1.5,
            (Math.random() - 0.5) * 0.5,
            0.6 + Math.random() * 0.4
        ));
    }
    
    // Crear brillos dorados
    if (Math.random() < 0.03 && particles.length < 180) {
        particles.push(new Sparkle(
            Math.random() * DOM.canvas.width,
            DOM.canvas.height + 10,
            1 + Math.random() * 2.5,
            0.3 + Math.random() * 1,
            (Math.random() - 0.5) * 0.4,
            0.4 + Math.random() * 0.6
        ));
    }

    // Efecto fuente extra cuando la celebración está activa
    if (celebrateActive && Math.random() < 0.4) {
        // Spawnea múltiples corazones y confeti de colores desde abajo
        for (let i = 0; i < 4; i++) {
            const size = 8 + Math.random() * 20;
            particles.push(new Heart(
                Math.random() * DOM.canvas.width,
                DOM.canvas.height + 20,
                size,
                2 + Math.random() * 4,
                (Math.random() - 0.5) * 3,
                0.8 + Math.random() * 0.2,
                true // Confeti multicolor
            ));
        }
    }

    // Actualizar y dibujar
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();

        // Eliminar partículas desvanecidas o fuera de pantalla
        if (p.opacity <= 0 || p.y < -30 || p.x < -30 || p.x > DOM.canvas.width + 30) {
            particles.splice(i, 1);
        }
    }

    // Efecto fuegos artificiales cuando la celebración está activa
    if (celebrateActive && Math.random() < 0.05) {
        const explosionX = 50 + Math.random() * (DOM.canvas.width - 100);
        const explosionY = 50 + Math.random() * (DOM.canvas.height / 2);
        const colors = ['#ff3366', '#ff9933', '#ffff66', '#33ccff', '#cc33ff', '#ff33cc'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < 40; i++) {
            fireworks.push(new FireworkParticle(explosionX, explosionY, color));
        }
    }
    
    // Actualizar y dibujar fuegos artificiales
    for (let i = fireworks.length - 1; i >= 0; i--) {
        const fw = fireworks[i];
        fw.update();
        fw.draw();
        if (fw.opacity <= 0) {
            fireworks.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}
animate();




// ==========================================================================
// 6. MECÁNICA DE LOCK/UNLOCK & LOCAL STORAGE
// ==========================================================================
const getLocalYYYYMMDD = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};

function formatReadableDate(dateStr) {
    const parts = dateStr.split('-');
    const day = parseInt(parts[2], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const months = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return `${day} de ${months[monthIndex]}`;
}

function formatCountdown(targetDate) {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        return 'Disponible hoy';
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateCalendarCountdowns() {
    const countdownNodes = DOM.calendarGrid.querySelectorAll('.card-countdown');
    countdownNodes.forEach(node => {
        const unlockDateStr = node.getAttribute('data-unlock-date');
        if (!unlockDateStr) return;

        const unlockDate = new Date(`${unlockDateStr}T00:00:00`);
        const remaining = formatCountdown(unlockDate);
        node.innerHTML = `<span>Falta</span> <strong>${remaining}</strong>`;
    });
}

function getDayState(dayNum) {
    const item = CONFIG.dias.find(d => d.dia === dayNum);
    const todayStr = getLocalYYYYMMDD(new Date());
    
    // ¿Ya llegó la fecha de desbloqueo?
    const isDateReached = todayStr >= item.fechaDesbloqueo;
    if (!isDateReached) {
        return 'locked';
    }
    
    // Ya llegó la fecha. ¿Ha sido marcado como leído en el almacenamiento?
    if (currentDayStates[dayNum] === 'read') {
        return 'read';
    }
    
    // Para el día 1, si ya pasó la fecha, se desbloquea directamente.
    if (dayNum === 1) {
        return 'unlocked';
    }
    
    // Para los demás días, requerimos que el día anterior esté en estado 'read'
    const prevDayState = getDayState(dayNum - 1);
    if (prevDayState === 'read') {
        return 'unlocked';
    } else {
        return 'locked'; // Se mantiene bloqueado hasta que lea los anteriores
    }
}

function initProgress() {
    const saved = localStorage.getItem('love_proposal_states_v2');
    if (saved) {
        currentDayStates = JSON.parse(saved);
    } else {
        currentDayStates = {};
        for (let i = 1; i <= 8; i++) {
            currentDayStates[i] = 'locked';
        }
        saveProgress();
    }
}

function saveProgress() {
    localStorage.setItem('love_proposal_states_v2', JSON.stringify(currentDayStates));
}

function unlockNextDay(dayRead) {
    currentDayStates[dayRead] = 'read';
    saveProgress();
    renderCalendar();
    checkAllDaysRead();
}

function checkAllDaysRead() {
    if (currentDayStates[8] === 'read') {
        DOM.proposalTrigger.classList.remove('hidden-trigger');
        DOM.proposalTrigger.classList.add('show-trigger');
    } else {
        DOM.proposalTrigger.classList.add('hidden-trigger');
        DOM.proposalTrigger.classList.remove('show-trigger');
    }
}


// ==========================================================================
// 7. RENDERIZADO DEL CALENDARIO
// ==========================================================================
function renderCalendar() {
    DOM.calendarGrid.innerHTML = '';
    
    CONFIG.dias.forEach(item => {
        const state = getDayState(item.dia);
        const card = document.createElement('div');
        card.className = `day-card ${state}`;
        card.setAttribute('data-day', item.dia);
        
        let iconHtml = '<i class="fas fa-lock lock-icon"></i>';
        let statusText = 'Bloqueado';
        let countdownHtml = '';
        
        if (state === 'unlocked') {
            iconHtml = '<i class="fas fa-heart lock-icon"></i>';
            statusText = '¡Ábreme!';
        } else if (state === 'read') {
            iconHtml = '<i class="fas fa-check-circle lock-icon"></i>';
            statusText = 'Leído ❤️';
        } else {
            const parts = item.fechaDesbloqueo.split('-');
            const dayNum = parseInt(parts[2], 10);
            const monthsShort = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
            const monthShort = monthsShort[parseInt(parts[1], 10) - 1];
            statusText = `${dayNum} de ${monthShort}`;
            countdownHtml = `<div class="card-countdown" data-unlock-date="${item.fechaDesbloqueo}"></div>`;
        }
        
        card.innerHTML = `
            <div class="day-number">${item.dia}</div>
            <div class="day-label">Día</div>
            ${iconHtml}
            <div class="card-status-text">${statusText}</div>
            ${countdownHtml}
        `;
        
        card.addEventListener('click', () => {
            if (state === 'locked') {
                openLockedMessage(item.dia);
            } else {
                openLetter(item.dia);
            }
        });
        
        DOM.calendarGrid.appendChild(card);
    });

    if (calendarCountdownInterval) {
        clearInterval(calendarCountdownInterval);
    }
    updateCalendarCountdowns();
    calendarCountdownInterval = setInterval(updateCalendarCountdowns, 1000);
}


// ==========================================================================
// 8. MODAL DE CARTA
// ==========================================================================
function openLockedMessage(day) {
    const data = CONFIG.dias.find(item => item.dia === day);
    if (!data) return;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const unlockDate = new Date(data.fechaDesbloqueo + "T00:00:00");
    const diffTime = unlockDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    DOM.modalDayBadge.innerText = `Día ${data.dia}`;
    DOM.modalTitle.innerText = "Carta Bajo Candado 🔒";
    DOM.modalImg.src = "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600";
    
    let messageText = `¡Aún no es momento, mi amor! Esta carta contiene un recuerdo hermoso, pero se desbloqueará el ${formatReadableDate(data.fechaDesbloqueo)}.\n\n`;
    
    if (diffDays <= 0) {
        messageText += `¡Se desbloquea hoy! Pero antes debes leer las cartas de los días anteriores. 😉`;
        DOM.countdownContainer.classList.add('hidden');
    } else {
        DOM.countdownContainer.classList.remove('hidden');
        
        // Iniciar intervalo de cuenta regresiva
        const updateCountdown = () => {
            const now = new Date();
            const timeRemaining = unlockDate - now;
            
            if (timeRemaining <= 0) {
                DOM.countdownContainer.innerText = "¡Ya puedes desbloquearlo (recarga la página)!";
                clearInterval(countdownInterval);
                return;
            }
            
            const d = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const h = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            
            DOM.countdownContainer.innerHTML = `<div class="countdown-box">
                Faltan exactamente:<br>
                <strong>${d} días, ${h} horas, ${m} minutos, ${s} segundos</strong><br>
                de dulce espera. ¡Prometo que valdrá la pena! 💖
            </div>`;
        };
        
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }
    
    DOM.modalMessage.innerText = messageText;
    DOM.modalPhrase.innerText = `"El amor todo lo espera..."`;
    DOM.modalSignature.innerText = '— Santi';
    
    DOM.modalReadDone.innerHTML = '<i class="fas fa-lock-open"></i> Esperaré con ansias';
    activeDayData = null;
    
    DOM.modal.classList.add('active');
}

function openLetter(day) {
    const data = CONFIG.dias.find(item => item.dia === day);
    if (!data) return;
    
    activeDayData = data;
    
    DOM.modalDayBadge.innerText = `Día ${data.dia}`;
    DOM.modalTitle.innerText = data.titulo;
    DOM.modalImg.src = data.imagen;
    DOM.modalMessage.innerText = data.mensaje;
    DOM.modalPhrase.innerText = `"${data.frase}"`;
    DOM.modalSignature.innerText = '— Santi';
    
    // Si es el día de la propuesta (Día 8), personalizamos el botón
    if (day === 8) {
        DOM.modalReadDone.innerHTML = '<i class="fas fa-heart"></i> Tengo una pregunta para ti... ❤️';
    } else {
        DOM.modalReadDone.innerHTML = '<i class="fas fa-heart"></i> Lo he leído';
    }
    
    DOM.modal.classList.add('active');
}

function closeModal() {
    DOM.modal.classList.remove('active');
    
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    
    // Restaurar texto por defecto del botón
    DOM.modalReadDone.innerHTML = '<i class="fas fa-heart"></i> Lo he leído';
    
    if (activeDayData) {
        const finishedDay = activeDayData.dia;
        unlockNextDay(finishedDay);
        activeDayData = null;
        
        // Transición automática a la propuesta tras leer el Día 8
        if (finishedDay === 8) {
            setTimeout(() => {
                goToProposalScreen();
            }, 600); // Esperar a que se complete la animación del modal
        }
    }
}

DOM.modalClose.addEventListener('click', closeModal);
DOM.modalReadDone.addEventListener('click', closeModal);

// Cerrar al hacer clic fuera del modal card
DOM.modal.addEventListener('click', (e) => {
    if (e.target === DOM.modal) {
        closeModal();
    }
});


// ==========================================================================
// 9. NAVEGACIÓN Y FLUJO DE PANTALLAS
// ==========================================================================
function goToProposalScreen() {
    DOM.mainScreen.classList.remove('active');
    DOM.mainScreen.classList.add('hidden');
    
    DOM.proposalScreen.classList.remove('hidden');
    DOM.proposalScreen.classList.add('active');
    
    // Asegurar que el botón NO vuelva a su posición original
    DOM.btnNo.style.position = 'relative';
    DOM.btnNo.style.left = '0';
    DOM.btnNo.style.top = '0';
    DOM.btnNo.style.transform = 'scale(1)';
    noButtonClickCount = 0;
}

DOM.btnEnter.addEventListener('click', () => {
    DOM.welcomeScreen.classList.remove('active');
    DOM.welcomeScreen.classList.add('hidden');
    
    DOM.mainScreen.classList.remove('hidden');
    DOM.mainScreen.classList.add('active');
});

DOM.btnGotoProposal.addEventListener('click', goToProposalScreen);

DOM.btnBackToCalendar.addEventListener('click', () => {
    DOM.proposalScreen.classList.remove('active');
    DOM.proposalScreen.classList.add('hidden');
    
    DOM.mainScreen.classList.remove('hidden');
    DOM.mainScreen.classList.add('active');
});


// ==========================================================================
// 10. EL BOTÓN "NO" - FÍSICA DIVERTIDA
// ==========================================================================
function moveNoButton() {
    // Calculamos una posición aleatoria para que escape del mouse
    // Manteniéndolo dentro del viewport pero evitando que se salga o se oculte
    const padding = 30;
    const buttonWidth = DOM.btnNo.offsetWidth;
    const buttonHeight = DOM.btnNo.offsetHeight;
    
    // Aseguramos que se posicione de forma fija respecto a la ventana para poder moverlo libremente
    DOM.btnNo.style.position = 'fixed';
    
    // Rango de la pantalla
    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;
    
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    DOM.btnNo.style.left = `${randomX}px`;
    DOM.btnNo.style.top = `${randomY}px`;
}

// En escritorio: Escapa al pasar el mouse por encima
DOM.btnNo.addEventListener('mouseenter', moveNoButton);
DOM.btnNo.addEventListener('mouseover', moveNoButton);

// En móviles: interacción lúdica al pulsar el botón "NO"
DOM.btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Evita clicks fantasmas
    noButtonClickCount++;
    
    if (noButtonClickCount === 1) {
        // Primera pulsación: Mueve el botón
        moveNoButton();
    } else if (noButtonClickCount === 2) {
        // Segunda pulsación: Se encoge
        moveNoButton();
        DOM.btnNo.style.transform = 'scale(0.7)';
        DOM.btnNo.innerHTML = '¿Segura? 🥺';
    } else if (noButtonClickCount === 3) {
        // Tercera pulsación: Se encoge más y cambia de texto
        moveNoButton();
        DOM.btnNo.style.transform = 'scale(0.4)';
        DOM.btnNo.innerHTML = 'Pensalo bien... 🙏';
        
        // Hacemos crecer enormemente el botón SÍ
        DOM.btnYes.style.transform = 'scale(1.4)';
    } else {
        // Cuarta pulsación: Desaparece completamente
        DOM.btnNo.style.display = 'none';
        DOM.btnYes.style.transform = 'scale(1.8)';
        // Ocupa casi toda la fila para que dé clic a la fuerza
    }
});


// ==========================================================================
// 11. CELEBRACIÓN DEL "SÍ"
// ==========================================================================
DOM.btnYes.addEventListener('click', () => {
    DOM.proposalScreen.classList.remove('active');
    DOM.proposalScreen.classList.add('hidden');
    
    DOM.celebrationScreen.classList.remove('hidden');
    DOM.celebrationScreen.classList.add('active');
    
    // Activa la lluvia masiva de confeti/corazones en canvas
    celebrateActive = true;
    
    // Establecer la fecha actual de forma hermosa
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const hoy = new Date();
    DOM.celebrationDate.innerText = `Fecha oficial: ${hoy.toLocaleDateString('es-ES', options)}`;
});




// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
    initProgress();
    renderCalendar();
    checkAllDaysRead();
});
