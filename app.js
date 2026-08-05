/* ==========================================================================
   LÓGICA E INTERACTIVIDAD DE LA PROPUESTA
   ========================================================================== */

// 1. CONFIGURACIÓN DEL CONTENIDO (Personalizable por el usuario)
const CONFIG = {
    nombreChica: "", // Puedes dejarlo vacío si prefieres no usar un nombre fijo
    // URL del servidor que recibe los recibos de lectura (usa tu despliegue en Render)
    serverUrl: 'https://propuesta-icdq.onrender.com',
    // Si false, el cliente enviará automáticamente un POST al bridge en Render
    // que creará el issue en GitHub. Esto evita que la persona tenga que
    // crear el issue manualmente.
    useIssueLink: false,
    dias: [
        {
            dia: 1,
            fechaDesbloqueo: "2026-08-03",
            titulo: "3 de agosto de 2026 | Hoy te recuerdo con todo mi corazón",
            imagen: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, hoy quiero decirte algo que siento con mucha claridad: te pienso, te extraño y te quiero con una fuerza que no sé explicar bien, pero sí sé que es real. Hay días en que todo parece pasar rápido y a la vez muy pesado, pero cuando pienso en ti, algo dentro de mí se calma. No sé si es magia, suerte o simplemente que tú llegaste a mi vida en el momento exacto, pero sí sé que contigo se siente distinto.\n\nNo necesito que todo sea perfecto para saber que algo bonito está creciendo entre nosotros. Me gusta lo que siento cuando te pienso, me gusta cómo me haces bien sin hacer mucho, y me gusta aún más saber que lo que hay entre los dos no es casual. Hay algo profundo ahí, algo que me hace sonreír cuando menos lo espero.",
            frase: "A veces el corazón reconoce lo importante antes de que la mente lo entienda."
        },
        {
            dia: 2,
            fechaDesbloqueo: "2026-08-04",
            titulo: "4 de agosto de 2026 | Tu voz me cambia el día",
            imagen: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, hay algo en ti que me hace sentir que el día puede ser mejor aunque no haya pasado nada especial. Tu voz, tus palabras, la forma en que me escuchas y hasta esa manera tan tuya de decir las cosas hacen que todo se vuelva más ligero. Con vos, una llamada simple se convierte en un momento bonito, en un pequeño refugio, en un recuerdo que uno quiere guardar.\n\nY me doy cuenta de que lo que siento por ti no es solo una emoción bonita; es algo que me acompaña, que me hace sonreír y que me hace querer estar más cerca de vos. Porque cuando hablo contigo, siento que no estoy perdiendo el tiempo, sino construyendo algo que vale la pena.",
            frase: "Tu voz no solo me habla; me devuelve la paz."
        },
        {
            dia: 3,
            fechaDesbloqueo: "2026-08-05",
            titulo: "5 de agosto de 2026 | Lo simple contigo se vuelve especial",
            imagen: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, me encanta pensar en lo fácil que se vuelve todo cuando estás tú. No hace falta que pase algo extraordinario para que un día se vuelva bonito; a veces basta con una conversación, un mensaje, una llamada o incluso un silencio compartido que de pronto se siente lleno de cariño. Contigo, hasta las cosas más simples me parecen importantes.\n\nY eso es lo que más valoro: que lo nuestro no necesita ser complicado para ser hermoso. Me gusta cómo me haces sentir, me gusta cómo me haces sonreír y me gusta la idea de seguir creando cosas pequeñas pero verdaderas con vos. Porque a veces eso es lo que más dura: los momentos simples, los que se viven con el corazón y no con la prisa.",
            frase: "Lo simple, cuando se vive con amor, se vuelve inolvidable."
        },
        {
            dia: 4,
            fechaDesbloqueo: "2026-08-06",
            titulo: "6 de agosto de 2026 | Aunque el día sea pesado",
            imagen: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, hay días en los que todo se siente pesado, cansado y un poco confuso. Pero también hay días en los que una sola idea de ti me cambia el ánimo. Me hace pensar que quizá no todo en la vida tiene que ser perfecto para que algo sea bonito. A veces basta con recordar que hay alguien que te hace bien, alguien que te acompaña aunque no esté físicamente cerca.\n\nY eso eres tú para mí. No importa si el día fue difícil, si el tiempo no alcanzó o si todo salió mal. Pensarte me recuerda que hay algo bueno en medio de todo, algo tierno, algo real, algo que me hace querer seguir adelante con más calma y más amor.",
            frase: "Algunas personas no arreglan la vida, pero sí la hacen sentir más liviana."
        },
        {
            dia: 5,
            fechaDesbloqueo: "2026-08-07",
            titulo: "7 de agosto de 2026 | Quiero hacer tiempo para vos",
            imagen: "https://images.unsplash.com/photo-1501908731398-23591973b087?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, quiero que sepas que me importa mucho hacer tiempo para ti, porque tú no eres un detalle pasajero en mi vida, sino alguien que ocupa un lugar muy especial en mi corazón. Quiero que haya espacio para los dos, para hablar sin prisa, para escuchar lo que te pasa, para reír, para mirar hacia adelante y para construir algo que nos haga bien. No quiero que esto se quede en palabras bonitas; quiero que se vea en la forma en que elijo estar, en cómo cuido lo que siento y en cómo sigo buscando momentos para acercarme a vos aunque la distancia esté presente.\n\nPorque a veces lo más bonito no es algo grande; es un momento compartido, una llamada, un mensaje, una conversación que nos haga sentir que lo que tenemos es real y merece la pena cuidar.",
            frase: "El tiempo también es una forma de decir te quiero."
        },
        {
            dia: 6,
            fechaDesbloqueo: "2026-08-08",
            titulo: "8 de agosto de 2026 | Esa conexión que no se rompe",
            imagen: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, hay algo en nosotros que no se puede fingir ni forzar. Esa conexión que aparece cuando hablamos, cuando nos entendemos sin necesidad de explicarlo todo, cuando el silencio no incomoda y cuando una simple conversación se vuelve importante. No importa si estamos cerca o lejos, hay algo ahí que sigue existiendo y que me hace sentir que lo que hay entre los dos es real.\n\nY me gusta pensar que eso también es una señal. Una señal de que lo que sentimos no es superficial ni momentáneo. Es algo que crece de a poquito, con sinceridad, con ternura y con ganas de cuidar lo que ya empieza a ser muy bonito.",
            frase: "A veces el alma reconoce a la persona correcta incluso antes de que el corazón lo acepte."
        },
        {
            dia: 7,
            fechaDesbloqueo: "2026-08-09",
            titulo: "9 de agosto de 2026 | Quiero llegar lejos contigo",
            imagen: "https://images.unsplash.com/photo-1533227260828-531465922380?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, a veces pienso en el futuro y no puedo evitar imaginar un camino donde estemos construyendo algo bonito, algo de verdad. No necesito que todo sea perfecto para saber que lo que siento por ti es serio, profundo y muy mío. Lo que quiero es llegar lejos contigo, pasar mucho tiempo juntos, vivir historias que nos recuerden que el amor no solo se habla, también se construye.\n\nY si hay algo que sé con claridad es que yo sí quiero que esto siga creciendo. Quiero planes, conversaciones, viajes, momentos tranquilos, risas, abrazos y un montón de cosas que nos hagan sentir vivos. Porque contigo no me imagino una historia corta ni superficial; me imagino una historia que se sostiene, que madura y que se vuelve cada vez más hermosa.",
            frase: "Quiero un futuro donde tu nombre se mezcle con el mío."
        },
        {
            dia: 8,
            fechaDesbloqueo: "2026-08-10",
            titulo: "10 de agosto de 2026 | Me haces querer ser mejor",
            imagen: "https://images.unsplash.com/photo-1537907690979-ee8e01276184?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, tú me inspiras de una manera que pocas personas han logrado. No porque me llenes de palabras bonitas, sino porque me haces querer ser mejor, más atento, más sincero y más constante. Cuando pienso en ti, siento que también quiero cuidar mejor lo que tenemos, ser más presente y hacer que lo nuestro se vuelva un espacio seguro, lleno de cariño y de verdad.\n\nSé que el camino no siempre será fácil, pero tampoco quiero que eso me asuste. Lo que siento por ti me da la confianza de que si decidimos seguir, podremos hacerlo con respeto, con paciencia y con mucha ternura. Y eso me hace sentir que todo lo que estamos construyendo tiene un valor muy grande, aunque todavía esté creciendo.",
            frase: "Amarte me enseña a querer mejor, más profundo y con más intención."
        },
        {
            dia: 9,
            fechaDesbloqueo: "2026-08-11",
            titulo: "11 de agosto de 2026 | La distancia no nos separa",
            imagen: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, a veces la distancia me hace pensar en lo grande que puede ser el corazón cuando realmente quiere. Porque aunque estemos lejos, lo que siento por ti no se ha ido, no se ha enfriado y tampoco se ha vuelto menos intenso. Al contrario, me hace valorar más lo que tenemos y me recuerda que el amor no necesita estar siempre cerca para ser real.\n\nQuiero que este sentimiento siga creciendo, aunque a veces nos cueste encontrar tiempo o aunque los días se vuelvan complicados. Lo importante es que no perdamos esa conexión tan bonita que existe entre nosotros. Que sigamos hablando, que sigamos encontrándonos en nuestras palabras, en nuestras llamadas y en esos momentos en los que uno piensa en el otro y siente que no está solo.",
            frase: "Lo que es verdadero no se pierde por la distancia; se cuida con más amor."
        },
        {
            dia: 10,
            fechaDesbloqueo: "2026-08-12",
            titulo: "12 de agosto de 2026 | Quiero crear momentos contigo",
            imagen: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, me encanta la idea de crear momentos únicos contigo. No necesariamente tienen que ser grandes, ni costosos, ni perfectos. Lo que importa es que sean nuestros, que tengan nuestra energía, nuestra forma de hablar, nuestras risas, nuestros silencios y ese cariño que no necesita explicación. Hay una belleza especial en compartir cosas simples y convertirlas en recuerdos inolvidables.\n\nQuiero que cada vez que pensemos en lo que vamos construyendo, recordemos que lo más bonito no solo está en lo que se dice, sino en lo que se comparte. Con el tiempo, esos momentos se vuelven parte de nosotros. Y yo quiero que haya muchos, muchísimo más, porque me encanta la idea de que nuestra historia siga teniendo su propia magia.",
            frase: "Los mejores recuerdos no siempre son los más grandes, sino los más tuyos."
        },
        {
            dia: 11,
            fechaDesbloqueo: "2026-08-13",
            titulo: "13 de agosto de 2026 | Tu presencia me cambia el día",
            imagen: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, no sabes cuánto me alegra saber que existes en mi vida de esa manera tan especial. Tu presencia, aunque sea a distancia, cambia las cosas. Cambia la forma en que veo el día, en que percibo el cansancio y en que encuentro un motivo para sonreír. Y eso es algo que llevo muy dentro, porque no es fácil encontrar a alguien que llegue tan profundo sin necesidad de estar siempre presente físicamente.\n\nContigo, incluso un día común se vuelve más bonito. Y eso me recuerda que el amor no siempre se siente en grandes demostraciones, sino en la manera en que alguien ocupa el corazón y lo ilumina desde adentro. Eso es lo que siento contigo, y por eso te quiero, te cuido y te llevo en mis pensamientos de una forma muy especial.",
            frase: "Tú no solo llenas mis días; les cambias el color."
        },
        {
            dia: 12,
            fechaDesbloqueo: "2026-08-14",
            titulo: "14 de agosto de 2026 | Te quiero cerca, aunque no te vea",
            imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, hay días en los que te extraño más de lo que puedo explicar. No porque me falte algo grande, sino porque te siento importante en mi vida de una manera muy profunda. A veces pienso en lo mucho que me gustaría tenerte cerca, abrazarte, mirarte a los ojos y decirte en persona lo mucho que significas para mí.\n\nY aunque todavía no estamos en ese momento, ya siento que lo que hay entre nosotros es real. Hay algo bonito, tierno y persistente, algo que me hace querer estar más cerca, más presente y más sincero. Porque sí, te quiero, te extraño y me hace feliz saber que estás en mi vida.",
            frase: "A veces extrañar es solo una forma de decir que ya te llevamos adentro."
        },
        {
            dia: 13,
            fechaDesbloqueo: "2026-08-15",
            titulo: "15 de agosto de 2026 | Quiero que esto siga creciendo",
            imagen: "https://images.unsplash.com/photo-1495567720989-7a082b3e0f02?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, hoy quiero decirte algo que llevo dentro con mucha claridad: quiero que esto siga creciendo. No quiero que se quede en una simple historia bonita o en unos pocos momentos especiales. Quiero que se vuelva algo sólido, algo que se cuide, que se valore y que aprenda a sostenerse incluso en los días más difíciles. Porque lo que siento por ti tiene un peso muy especial y no quiero tratarlo como algo pequeño o pasajero.\n\nQuiero construir contigo una historia que no tenga miedo de los cambios, ni de la distancia, ni del tiempo. Quiero que haya espacio para hablar, para escuchar, para demostrar amor con hechos y para seguir haciendo de lo nuestro algo que valga la pena. Y si lo hacemos con paciencia, con ternura y con honestidad, entonces sí, todo puede volverse mucho más hermoso de lo que imaginamos.",
            frase: "El amor crece cuando se cuida con intención y con verdad."
        },
        {
            dia: 14,
            fechaDesbloqueo: "2026-08-16",
            titulo: "16 de agosto de 2026 | Mi corazón ya te eligió",
            imagen: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, a veces me sorprende lo claro que se siente todo cuando pienso en ti. Mi corazón ya te eligió, y lo ha hecho de una manera que no se puede negar ni esconder. No necesito buscar excusas para decirte que te amo, porque cada vez que pienso en lo que somos y en lo que podríamos llegar a ser, siento que mi amor por ti es real, profundo y muy sincero.\n\nQuiero que lo que construyamos se vea reflejado en la forma en que nos cuidamos, en la manera en que hacemos espacio para el otro y en la forma en que seguimos eligiéndonos aunque el camino no siempre sea sencillo. Porque yo sí quiero que haya futuro para nosotros, y claro que quiero que haya tiempo para los dos, para nuestras conversaciones, nuestras llamadas, nuestros abrazos y todos esos momentos que nos hagan sentir que lo que compartimos vale muchísimo.",
            frase: "Cuando el corazón elige, no necesita una razón perfecta para seguir."
        },
        {
            dia: 15,
            fechaDesbloqueo: "2026-08-17",
            titulo: "17 de agosto de 2026 | La historia que quiero escribir contigo",
            imagen: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, hoy quiero dejarte una idea muy bonita en el corazón: quiero escribir una historia contigo. No una historia llena de promesas vacías, sino una llena de verdad, de paciencia, de complicidad y de amor. Quiero que cada día que pasemos juntos, aunque sea con pocas palabras o con mucha distancia, deje una huella bonita en lo que sentimos. Quiero que nuestros recuerdos tengan alma, que nuestras conversaciones tengan calor y que nuestro futuro se vea como un lugar en el que podamos ser nosotros mismos, tranquilos y enamorados.\n\nY si hay algo que sé con certeza, es que quiero que esta historia no se quede a medias. Quiero llegar lejos contigo, pasar mucho tiempo juntos, compartir momentos únicos y hacer que cada día cuente, aunque estemos lejos. Porque lo que hay entre nosotros ya no es solo una emoción; es una decisión de corazón, una forma de querer que sigue creciendo y que quiere seguir adelante.",
            frase: "Quiero que nuestra historia se escriba con amor, tiempo y verdad."
        },
        {
            dia: 16,
            fechaDesbloqueo: "2026-08-18",
            titulo: "18 de agosto de 2026 | Mi pregunta más importante",
            imagen: "https://images.unsplash.com/photo-1537907690979-ee8e01276184?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, hoy quiero decirte algo que viene del corazón y que no quiero seguir ocultando: te amo con una profundidad que me sorprende a mí mismo. Te amo por lo que eres, por la manera en que me haces sentir, por la forma en que tu presencia ilumina mis días y por la conexión tan bonita que hemos construido sin importar la distancia. No importa si el tiempo pasa rápido, si los días se complican o si las circunstancias no siempre son fáciles; lo que siento por ti sigue siendo real, claro y muy fuerte.\n\nQuiero que sepas que no me importa recorrer un largo camino si es contigo. Quiero pasar mucho tiempo a tu lado, crear momentos únicos, sacar tiempo para los dos, hacer llamadas para vernos, hablar con esa conexión especial que tenemos y seguir construyendo algo hermoso. Si hoy te digo esto es porque quiero que sepas que te elijo, que te quiero y que quiero seguir adelante contigo, con amor, con respeto y con la esperanza de un futuro que sea nuestro. Mi amor, ¿quieres ser mi pareja y caminar conmigo esta historia, con todo lo bonito que aún nos espera?",
            frase: "No importa la distancia ni el tiempo: si el corazón elige, el amor encuentra la manera."
        },
        {
            dia: 17,
            fechaDesbloqueo: "2026-08-19",
            titulo: "19 de agosto de 2026 | La risa que nos une",
            imagen: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, hay algo en la forma en que hablamos que me alegra incluso en los días pesados. Tu risa, tus ocurrencias, tu manera tan tuya de responderme y de seguirme la corriente hacen que cualquier conversación sencilla se vuelva especial. Contigo no siento que tenga que fingir nada; al contrario, siento que puedo ser yo, con toda mi espontaneidad, y eso vale demasiado.\n\nY no solo me gustas por lo que dices, sino por la energía que dejas en mí después de hablar. Hay personas que entran a la vida de uno y la ordenan un poco; tú entraste y además le pusiste alegría. A la distancia, sigues siendo capaz de cambiarme el día, de sacarme una sonrisa y de recordarme que lo bonito también puede sentirse por mensajes, audios y silencios que hablan bien.",
            frase: "Tu risa tiene la costumbre de volver hermoso lo simple."
        },
        {
            dia: 18,
            fechaDesbloqueo: "2026-08-20",
            titulo: "20 de agosto de 2026 | Tu belleza completa",
            imagen: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, no voy a esconder lo que siento: me deslumbras. Me fascina tu belleza completa, la que se ve y la que no se explica fácil. Me encantas por tu presencia, por tu forma de moverte, por la elegancia natural que tienes y por ese cuerpo que, siendo honesto, me provoca admiración, deseo y ternura al mismo tiempo. Eres hermosa de una manera que no se reduce a una mirada.\n\nPero lo que más me gusta, mi amor, es que tu belleza no vive sola. Está acompañada de personalidad, de carácter y de una manera de ser que hace que todo en ti tenga más peso, más sentido y más encanto. Lo físico me atrae profundamente, sí, pero lo que me termina de rendir ante ti es que esa belleza viene con esencia, con autenticidad y con una luz que no necesita permiso para notarse.",
            frase: "Eres belleza, pero también esencia; y eso me deja sin defensa."
        },
        {
            dia: 19,
            fechaDesbloqueo: "2026-08-21",
            titulo: "21 de agosto de 2026 | Venciendo la distancia",
            imagen: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, la distancia entre nosotros existe, sí, pero nunca la he sentido como una pared. La he sentido como una prueba, como un tramo que vale la pena cruzar cuando lo que hay del otro lado importa de verdad. A mí no me asusta que haya kilómetros; me asusta más la idea de no intentar lo suficiente por alguien que me mueve tanto.\n\nSi algo me nace contigo es demostrarte con hechos que esto no se queda en palabras bonitas. Quiero que veas en mí a un hombre dispuesto a sostener lo que dice, a viajar con intención, a escribir, a insistir, a cuidar y a estar presente incluso cuando no pueda estar físicamente al lado tuyo.",
            frase: "La distancia no me detiene; me obliga a quererte con más intención."
        },
        {
            dia: 20,
            fechaDesbloqueo: "2026-08-22",
            titulo: "22 de agosto de 2026 | Paciencia y detalles",
            imagen: "https://images.unsplash.com/photo-1501908731398-23591973b087?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, cuando uno quiere construir algo serio, maduro y bonito, entiende que el amor no vive solo de emoción: también se sostiene con paciencia, detalles y decisión. Por eso cada carta, cada mensaje, cada gesto mío hacia ti no es un adorno; es un ladrillo pequeño, pero firme, de algo que quiero levantar con cuidado.\n\nYo creo en los detalles porque ahí se nota quién ama de verdad. Una palabra en el momento justo, una carta pensada con calma, una intención sincera, una manera de escuchar y de estar: todo eso también construye futuro. Y si hoy te escribo así es porque quiero que sientas que lo nuestro tiene espacio para crecer, madurar y hacerse fuerte sin perder la ternura.",
            frase: "Los detalles también son una forma de decir para siempre."
        },
        {
            dia: 21,
            fechaDesbloqueo: "2026-08-23",
            titulo: "23 de agosto de 2026 | La antesala de tu día",
            imagen: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, ya se siente el aire distinto porque se acerca una fecha demasiado especial: tu día. Y yo, que no soy de guardar lo que siento cuando algo me importa de verdad, confieso que llevo la ilusión prendida desde hace rato. Me emociona pensar que estoy a punto de celebrar otra vuelta al sol tuya, otro capítulo de tu vida, otro motivo para agradecer que existas.\n\nEsta carta es como una respiración antes del momento grande: llena de expectativa, de cariño y de una alegría que no me cabe del todo en el pecho. Quiero que sepas que me emociona celebrarte, honrar tu vida y recordarte que eres importante, valiosa y profundamente querida.",
            frase: "Se acerca tu día y yo ya estoy celebrándolo con el corazón."
        },
        {
            dia: 22,
            fechaDesbloqueo: "2026-08-24",
            titulo: "24 de agosto de 2026 | La víspera",
            imagen: "https://images.unsplash.com/photo-1533227260828-531465922380?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, la víspera de tu cumpleaños me encuentra pensando en todo lo que cambió desde que apareciste. Cambió mi manera de esperar mensajes, mi forma de imaginar el futuro, mi emoción por las pequeñas cosas y, sobre todo, mi forma de entender que alguien puede llegar a la vida de uno y dejarla más viva. Desde que te conozco, todo tiene un poco más de color, más de sentido y más de intención.\n\nMañana no solo celebraré que cumples años; celebraré que existes, que eres tú, que el mundo te puso en mi camino y que de alguna manera me enseñaste a querer con más verdad.",
            frase: "La víspera de tu cumpleaños ya se siente como una promesa hermosa."
        },
        {
            dia: 23,
            fechaDesbloqueo: "2026-08-25",
            titulo: "25 de agosto de 2026 | Feliz cumpleaños y algo más",
            imagen: "https://images.unsplash.com/photo-1537907690979-ee8e01276184?auto=format&fit=crop&q=80&w=600",
            mensaje: "Mi amor, hoy sí es tu día. Hoy celebro tu vida con toda el alma, porque naciste tú y con eso bastó para volver importante una fecha, un recuerdo y una ilusión. Feliz cumpleaños, mi amor. Ojalá pudieras ver con la intensidad con la que te pienso, con cuánto cariño admiro tu existencia, con qué ternura me nace desearte alegría, paz, salud, plenitud y sueños cumplidos.\n\nSi he escrito estas cartas una a una es porque quería que llegaras a este momento sabiendo algo esencial: lo que siento por ti no es pasajero ni pequeño. Me gustas profundamente, me importas de una forma seria y bonita, y quiero seguir construyendo contigo algo que valga la pena cuidar. Por eso, en este día tan importante, quiero hacerte mi propuesta con el corazón abierto y sin rodeos: mi amor, ¿quieres ser mi pareja, caminar conmigo esta historia y permitirme elegirte con intención, respeto y amor?",
            frase: "Feliz cumpleaños, mi amor: hoy celebro tu vida y te elijo con el corazón abierto."
        }
    ]
};

// Permitir establecer el nombre del lector desde la URL sin subirlo al repo.
// Ejemplo: https://propuesta-icdq.onrender.com/?nombre=Mishel
(function(){
    try {
        const params = new URLSearchParams(window.location.search);
        const nombreParam = params.get('nombre') || params.get('nombreChica');
        if (nombreParam && nombreParam.trim()) {
            CONFIG.nombreChica = nombreParam.trim();
        }
    } catch (e) {
        // silent
    }
})();

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

function getUnlockDateTime(dateStr) {
    const parts = dateStr.split('-').map(Number);
    return new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0, 0);
}

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

        const unlockDate = getUnlockDateTime(unlockDateStr);
        const remaining = formatCountdown(unlockDate);
        node.innerHTML = `<span>Falta</span> <strong>${remaining}</strong>`;
    });
}

function getDayState(dayNum) {
    const item = CONFIG.dias.find(d => d.dia === dayNum);
    const now = new Date();
    const unlockDate = getUnlockDateTime(item.fechaDesbloqueo);
    
    // ¿Ya llegó la hora de desbloqueo (12:00 PM del día programado)?
    const isDateReached = now >= unlockDate;
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
    }

    const totalDays = CONFIG.dias.length;
    for (let i = 1; i <= totalDays; i++) {
        if (!currentDayStates[i]) {
            currentDayStates[i] = 'locked';
        }
    }
    saveProgress();
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
    const lastDay = CONFIG.dias.length;
    if (currentDayStates[lastDay] === 'read') {
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
    
    const now = new Date();
    const unlockDate = getUnlockDateTime(data.fechaDesbloqueo);
    const diffTime = unlockDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    DOM.modalDayBadge.innerText = `Día ${data.dia}`;
    DOM.modalTitle.innerText = "Carta Bajo Candado 🔒";
    DOM.modalImg.src = "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600";
    
    let messageText = `¡Aún no es momento, mi amor! Esta carta contiene un recuerdo hermoso, pero se desbloqueará el ${formatReadableDate(data.fechaDesbloqueo)} a las 12:00 PM.\n\n`;
    
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
    
    // Evitar scroll del body cuando el modal está activo
    document.body.classList.add('modal-open');
    // Asegurar que el contenido del modal comience arriba
    const scrollArea = DOM.modal.querySelector('.modal-content-scroll');
    if (scrollArea) scrollArea.scrollTop = 0;
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
    
    // Si es el último día, personalizamos el botón para la propuesta
    if (day === CONFIG.dias.length) {
        DOM.modalReadDone.innerHTML = '<i class="fas fa-heart"></i> Tengo una pregunta para ti... ❤️';
    } else {
        DOM.modalReadDone.innerHTML = '<i class="fas fa-heart"></i> Lo he leído';
    }
    
    // Evitar scroll del body cuando el modal está activo
    document.body.classList.add('modal-open');
    // Asegurar que el contenido del modal comience arriba
    const scrollArea = DOM.modal.querySelector('.modal-content-scroll');
    if (scrollArea) scrollArea.scrollTop = 0;
    DOM.modal.classList.add('active');
}

function closeModal() {
    DOM.modal.classList.remove('active');
    // Restaurar scroll del body
    document.body.classList.remove('modal-open');
    
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    
    // Restaurar texto por defecto del botón
    DOM.modalReadDone.innerHTML = '<i class="fas fa-heart"></i> Lo he leído';
    
    if (activeDayData) {
        const finishedDay = activeDayData.dia;

        // Preguntar por el nombre del lector si no está configurado
        let readerName = CONFIG.nombreChica || '';
        if (!readerName) {
            // Nombre obligatorio: pedir hasta que se ingrese algo o cancelar la acción
            try {
                while (true) {
                    const promptVal = window.prompt('Escribe el nombre de la persona que está leyendo (obligatorio):', '');
                    if (promptVal === null) {
                        // Usuario canceló: no cerrar el modal
                        alert('El nombre es obligatorio para registrar la lectura. Si quieres continuar, escribe el nombre.');
                        return; // abortar cierre
                    }
                    const trimmed = (promptVal || '').trim();
                    if (trimmed.length > 0) {
                        readerName = trimmed;
                        break;
                    }
                    // si vacío, repetir
                }
            } catch (e) {
                readerName = 'anónimo';
            }
        }

        // Enviar recibo de lectura al servidor (intento silencioso)
        if (typeof sendReadReceipt === 'function') {
            try {
                sendReadReceipt(finishedDay, readerName);
            } catch (e) {
                console.warn('Error enviando recibo de lectura:', e);
            }
        }

        unlockNextDay(finishedDay);
        activeDayData = null;

        // Transición automática a la propuesta tras leer el último día
        if (finishedDay === CONFIG.dias.length) {
            setTimeout(() => {
                goToProposalScreen();
            }, 600); // Esperar a que se complete la animación del modal
        }
    }
}

DOM.modalClose.addEventListener('click', closeModal);
function handleReadClick(e) {
    // Obtener nombre (obligatorio si no está en CONFIG)
    let readerName = CONFIG.nombreChica || '';
    if (!readerName) {
        try {
            while (true) {
                const promptVal = window.prompt('Escribe el nombre de la persona que está leyendo (obligatorio):', '');
                if (promptVal === null) {
                    alert('El nombre es obligatorio para registrar la lectura.');
                    return; // cancelar acción
                }
                const trimmed = (promptVal || '').trim();
                if (trimmed.length > 0) {
                    readerName = trimmed;
                    break;
                }
            }
        } catch (e) {
            readerName = 'anónimo';
        }
    }

    // Si preferimos que la persona cree el issue desde su cuenta
    if (CONFIG.useIssueLink) {
        const ownerRepo = 'gato200308/propuesta';
        const title = encodeURIComponent(`Lectura: Día ${activeDayData ? activeDayData.dia : ''} leído${readerName ? ` por ${readerName}` : ''}`);
        const body = encodeURIComponent(`Se registró la lectura del día ${activeDayData ? activeDayData.dia : ''}.

Lector: ${readerName}
Fecha: ${new Date().toISOString()}

(Enlace generado automáticamente)`);
        const url = `https://github.com/${ownerRepo}/issues/new?title=${title}&body=${body}`;
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showToast('Abriendo GitHub para confirmar lectura...', true, 4000);
        closeModal();
        return;
    }

    // Envío automático al bridge (no requiere interacción de la persona)
    if (typeof sendReadReceipt === 'function' && activeDayData) {
        sendReadReceipt(activeDayData.dia, readerName)
        .then(() => {
            // Envío exitoso: desbloquear y cerrar modal
            try { unlockNextDay(activeDayData.dia); } catch (e) {}
            activeDayData = null;
            closeModal();
            // Si era el último día, navegar a la propuesta
            if (activeDayData === null && (activeDayData === CONFIG.dias.length)) {
                setTimeout(() => goToProposalScreen(), 600);
            }
        })
        .catch(() => {
            // En caso de error, dejamos el modal abierto para reintento
            // pero informamos al usuario
            showToast('No se pudo registrar la lectura. Intenta de nuevo.', false, 5000);
        });
    } else {
        closeModal();
    }
}

DOM.modalReadDone.addEventListener('click', handleReadClick);

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


// ==========================================================================
// Envío de recibo de lectura a un servidor que publica en GitHub
// --------------------------------------------------------------------------
function sendReadReceipt(day, reader) {
    // Información mínima: día y un identificador opcional del lector
    const payload = {
        day: day,
        reader: reader || CONFIG.nombreChica || 'anónimo'
    };

    // Añadimos la key (token) desde la URL si está presente
    try {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        if (key) payload.key = key;
    } catch (e) {
        // ignore
    }

    // Intento silencioso, no bloqueante
    if (CONFIG.useIssueLink) {
        const ownerRepo = 'gato200308/propuesta';
        const title = encodeURIComponent(`Lectura: Día ${day} leído${payload.reader ? ` por ${payload.reader}` : ''}`);
        const body = encodeURIComponent(`Se registró la lectura del día ${day}.\n\nLector: ${payload.reader}\nFecha: ${new Date().toISOString()}\n\n(Enlace generado automáticamente)`);
        const url = `https://github.com/${ownerRepo}/issues/new?title=${title}&body=${body}`;
        window.open(url, '_blank');
        showToast('Abriendo GitHub para confirmar lectura...', true, 4000);
        return Promise.resolve({ linkOpened: true });
    }

    const target = (CONFIG.serverUrl && CONFIG.serverUrl.length > 0) ? (CONFIG.serverUrl.replace(/\/$/, '') + '/api/read') : '/api/read';
    return fetch(target, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(res => res.json().then(j => ({ ok: res.ok, body: j })))
    .then(result => {
        if (result.ok) {
            console.log('Recibo de lectura enviado:', result.body);
            showToast('Recibo enviado a GitHub', true);
            return result.body;
        } else {
            console.warn('Error en servidor:', result.body);
            showToast('No se pudo enviar (servidor)', false);
            throw result.body;
        }
    })
    .catch(err => {
        console.warn('No se pudo enviar el recibo de lectura:', err);
        showToast('No se pudo enviar (red)', false);
        throw err;
    });
}

// Toast simple
function showToast(message, success = true, ms = 3000) {
    try {
        const el = document.getElementById('toast');
        if (!el) return;
        el.textContent = message;
        el.classList.remove('success', 'error');
        el.classList.add(success ? 'success' : 'error');
        el.classList.add('show');
        clearTimeout(el._toastTimer);
        el._toastTimer = setTimeout(() => {
            el.classList.remove('show');
        }, ms);
    } catch (e) {
        console.log('Toast error', e);
    }
}

