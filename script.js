(function () {
  "use strict";

  var STORE_KEY = "cn_inmunidad_sistemica_v1";
  var THEME_KEY = "cn_inmunidad_theme_v1";
  var currentView = "home";
  var currentModule = 0;
  var currentSlide = 0;
  var forceTop = false;

  var modules = [
    {
      id: "m1",
      title: "Sistemas y seres vivos",
      focus: "Concepto de sistema, limites, componentes, entradas, salidas y transformaciones.",
      badge: "Mirada sistemica",
      slides: [
        {
          title: "Un sistema es un recorte de la realidad",
          visual: "system",
          tiles: [
            ["Componentes", "Elementos relacionados entre si, como muebles, redes, reservorios o estructuras biologicas."],
            ["Limites", "Separan el sistema del medio. Se definen segun lo que se quiere estudiar."],
            ["Relaciones", "Permiten entender la funcion del conjunto, no solo la lista de partes."]
          ]
        },
        {
          title: "Los sistemas abiertos intercambian",
          visual: "system",
          tiles: [
            ["Materia", "Alimentos, agua, aire, desechos y sustancias que entran o salen."],
            ["Energia", "Energia electrica, quimica o luminosa que permite el funcionamiento."],
            ["Informacion", "Senales, instrucciones, registros, estimulos y respuestas."]
          ]
        },
        {
          title: "Los seres vivos son sistemas abiertos complejos",
          visual: "cells",
          tiles: [
            ["Organizacion", "Sus componentes interactuan de manera coordinada y regulada."],
            ["Homeostasis", "Mantienen condiciones internas relativamente estables."],
            ["Complejidad", "Aumenta con la variedad de componentes y relaciones."]
          ]
        }
      ],
      activities: [
        {
          id: "m1a1",
          title: "Comedor como sistema",
          type: "classify",
          points: 3,
          prompt: "Clasifica componentes del comedor como reservorios o redes.",
          bins: [
            ["mat", "Reservorio de materiales"],
            ["info", "Reservorio de informacion"],
            ["energy", "Reservorio de energia"],
            ["net", "Red de intercambio"]
          ],
          items: [
            ["armario", "Armario con vajilla", "mat"],
            ["libros", "Libros y carpetas", "info"],
            ["bateria", "Bateria de un celular", "energy"],
            ["wifi", "Red de internet", "net"]
          ],
          feedback: "Un sistema puede estudiarse por sus componentes y por las relaciones que permiten flujos."
        },
        {
          id: "m1a2",
          title: "Sistema abierto",
          type: "multi",
          points: 2,
          prompt: "Selecciona los intercambios que caracterizan a un ser vivo como sistema abierto.",
          options: [
            ["Intercambia materia con el medio", true],
            ["Intercambia energia con el medio", true],
            ["Intercambia informacion con el medio", true],
            ["No depende de su entorno", false]
          ],
          feedback: "Los seres vivos reciben y liberan materia, energia e informacion constantemente."
        },
        {
          id: "m1a3",
          title: "Explicacion sistemica",
          type: "short",
          points: 2,
          prompt: "Explica por que el comedor de la secuencia ayuda a comprender un organismo como sistema abierto.",
          keywords: ["sistema", "componentes", "limites", "materia", "energia", "informacion", "intercambio", "medio"]
        }
      ]
    },
    {
      id: "m2",
      title: "Niveles de organizacion biologica",
      focus: "Jerarquia biologica, inclusion entre niveles y propiedades emergentes.",
      badge: "Propiedades emergentes",
      slides: [
        {
          title: "Una jerarquia de complejidad creciente",
          visual: "levels",
          tiles: [
            ["Moleculas", "Biomoleculas como agua, proteinas, lipidos y acidos nucleicos."],
            ["Celulas", "Primer nivel con vida autonoma."],
            ["Tejidos y organos", "Celulas y tejidos especializados cooperan en funciones comunes."]
          ]
        },
        {
          title: "Del nivel menor al organismo",
          visual: "levels",
          tiles: [
            ["Sistemas de organos", "Organos coordinados realizan funciones vitales complejas."],
            ["Organismo", "Individuo integrado con regulacion interna."],
            ["Niveles ecologicos", "Poblacion, comunidad, ecosistema y biosfera amplian la mirada."]
          ]
        },
        {
          title: "La analogia de las mamushkas tiene limites",
          visual: "mamushkas",
          tiles: [
            ["Mamushkas", "El juego consiste en munecas huecas de distintos tamanos, ordenadas de mayor a menor, que se abren por la mitad."],
            ["Inclusion", "Cada muneca contiene otra mas pequena en su interior, y la mas pequena ya no contiene ninguna otra."],
            ["Sirve", "Muestra inclusion y organizacion jerarquica."],
            ["No alcanza", "Las munecas son estaticas; los seres vivos son dinamicos."],
            ["Emergencia", "La vida aparece en la celula y no se explica solo sumando moleculas."]
          ]
        }
      ],
      activities: [
        {
          id: "m2a1",
          title: "Orden biologico",
          type: "order",
          points: 3,
          prompt: "Ordena los niveles desde menor a mayor complejidad.",
          items: ["Molecula", "Celula", "Tejido", "Organo", "Sistema de organos", "Organismo"],
          start: ["Tejido", "Organismo", "Molecula", "Sistema de organos", "Celula", "Organo"],
          feedback: "Orden correcto: Molecula, Celula, Tejido, Organo, Sistema de organos y Organismo. La celula es el segundo nivel de esta lista porque antes esta el nivel molecular."
        },
        {
          id: "m2a2",
          title: "Estructura y funcion",
          type: "matching",
          points: 2,
          prompt: "Relaciona cada nivel con su descripcion.",
          pairs: [
            ["Celula", "Primer nivel con vida"],
            ["Tejido", "Conjunto de celulas especializadas"],
            ["Organo", "Estructura formada por tejidos"],
            ["Sistema de organos", "Organos coordinados"]
          ],
          feedback: "La funcion biologica depende de la organizacion entre niveles."
        },
        {
          id: "m2a3",
          title: "Modelo y limite",
          type: "choice",
          points: 2,
          prompt: "La analogia de las mamushkas no explica bien las propiedades emergentes porque...",
          options: [
            ["Las munecas son objetos estaticos y no tienen funciones biologicas nuevas", true],
            ["Las munecas no pueden ordenarse de mayor a menor", false],
            ["La biologia no usa modelos ni analogias", false],
            ["Todos los niveles biologicos son identicos", false]
          ],
          feedback: "Una analogia ayuda a pensar, pero tambien debe analizarse criticamente."
        }
      ]
    },
    {
      id: "m3",
      title: "Sistema inmunologico",
      focus: "Red de celulas, tejidos, organos y moleculas que reconoce lo propio y lo ajeno.",
      badge: "Red defensiva",
      slides: [
        {
          title: "Una red integrada para preservar la salud",
          visual: "cells",
          tiles: [
            ["Funcion", "Discrimina entre lo propio y lo extrano."],
            ["Escalas", "Integra moleculas, celulas, tejidos, organos y sistemas."],
            ["Equilibrio", "Su regulacion evita respuestas insuficientes o exageradas."]
          ]
        },
        {
          title: "Inmunidad innata",
          visual: "cells",
          tiles: [
            ["Rapida", "Actua desde el nacimiento y responde de forma inespecifica."],
            ["Componentes", "Piel, mucosas, secreciones, macrofagos y neutrofilos."],
            ["Fagocitosis", "Celulas defensivas engloban y degradan agentes externos."]
          ]
        },
        {
          title: "Inmunidad adaptativa",
          visual: "cells",
          tiles: [
            ["Especifica", "Reconoce antigenos concretos."],
            ["Memoria", "Responde con mayor eficacia ante nuevos contactos."],
            ["Linfocitos", "B y T coordinan respuestas humorales y celulares."]
          ]
        }
      ],
      activities: [
        {
          id: "m3a1",
          title: "Innata o adaptativa",
          type: "classify",
          points: 3,
          prompt: "Clasifica cada elemento segun el tipo de inmunidad.",
          bins: [["innata", "Innata"], ["adapt", "Adaptativa"]],
          items: [
            ["piel", "Piel y mucosas", "innata"],
            ["fago", "Macrofagos y neutrofilos", "innata"],
            ["b", "Linfocitos B", "adapt"],
            ["mem", "Memoria inmunologica", "adapt"]
          ],
          feedback: "La defensa innata es inmediata; la adaptativa es especifica y conserva memoria."
        },
        {
          id: "m3a2",
          title: "Reconocimiento inmunologico",
          type: "choice",
          points: 2,
          prompt: "La funcion central del sistema inmunologico es...",
          options: [
            ["Reconocer lo propio y lo extrano para responder de forma regulada", true],
            ["Producir energia para todos los organos", false],
            ["Transportar oxigeno por arterias y venas", false],
            ["Descomponer alimentos en nutrientes", false]
          ],
          feedback: "El reconocimiento permite responder ante antigenos sin atacar indiscriminadamente al propio cuerpo."
        },
        {
          id: "m3a3",
          title: "Salud y sistema inmune",
          type: "short",
          points: 2,
          prompt: "Describe como se relacionan sistema inmunologico, salud y homeostasis.",
          keywords: ["salud", "inmunologico", "homeostasis", "equilibrio", "respuesta", "defensa", "regulacion", "organismo"]
        }
      ]
    },
    {
      id: "m4",
      title: "Barreras de defensa",
      focus: "Barreras fisicas, quimicas e inmunologicas y respuesta inflamatoria.",
      badge: "Primera linea",
      slides: [
        {
          title: "Las barreras reducen el ingreso de patogenos",
          visual: "system",
          tiles: [
            ["Fisicas", "Piel, mucosas, cilios y superficies que bloquean o arrastran."],
            ["Quimicas", "Lisozima, jugos gastricos, sudor y otras secreciones."],
            ["Biologicas", "Microbiota que compite con microorganismos daninos."]
          ]
        },
        {
          title: "Los puntos de entrada importan",
          visual: "cells",
          tiles: [
            ["Vias", "Boca, nariz, ojos, heridas y sistema urogenital."],
            ["Proteccion", "Moco, lagrimas, acidez y piel integra disminuyen riesgos."],
            ["Contexto", "Higiene, cuidado de heridas y prevencion fortalecen la defensa."]
          ]
        },
        {
          title: "Inflamacion: respuesta local coordinada",
          visual: "cells",
          tiles: [
            ["Senales", "Dolor, calor, enrojecimiento e hinchazon son pistas visibles."],
            ["Accion", "Llegan celulas defensivas y sustancias que coordinan la respuesta."],
            ["Sentido", "No es solo molestia: ayuda a contener y reparar."]
          ]
        }
      ],
      activities: [
        {
          id: "m4a1",
          title: "Tipos de barrera",
          type: "classify",
          points: 3,
          prompt: "Ubica cada barrera en su categoria.",
          bins: [["fisica", "Fisica"], ["quimica", "Quimica"], ["biologica", "Biologica"]],
          items: [
            ["piel", "Piel integra", "fisica"],
            ["moco", "Mucosas y cilios", "fisica"],
            ["acido", "Acido gastrico", "quimica"],
            ["microbiota", "Microbiota normal", "biologica"]
          ],
          feedback: "Las barreras actuan antes de que el patogeno se instale dentro del cuerpo."
        },
        {
          id: "m4a2",
          title: "Inflamacion paso a paso",
          type: "order",
          points: 2,
          prompt: "Ordena una respuesta inflamatoria basica.",
          items: ["Entrada del patogeno por una herida", "Celulas danadas liberan senales", "Aumenta el flujo de sangre local", "Llegan fagocitos", "Se eliminan agentes y comienza reparacion"],
          start: ["Aumenta el flujo de sangre local", "Entrada del patogeno por una herida", "Se eliminan agentes y comienza reparacion", "Celulas danadas liberan senales", "Llegan fagocitos"],
          feedback: "La inflamacion conecta un fenomeno visible con procesos celulares."
        },
        {
          id: "m4a3",
          title: "Analisis de herida",
          type: "truefalse",
          points: 2,
          prompt: "La inflamacion siempre indica que el sistema inmunitario esta fallando.",
          answer: false,
          keywords: ["respuesta", "defensa", "fagocitos", "reparacion", "inflamacion", "normal"],
          feedback: "La inflamacion puede ser una respuesta defensiva normal, aunque debe vigilarse si empeora."
        }
      ]
    },
    {
      id: "m5",
      title: "Respuesta inmunitaria",
      focus: "Respuesta humoral, respuesta celular, antigenos, anticuerpos y memoria.",
      badge: "Especificidad",
      slides: [
        {
          title: "Respuesta humoral",
          visual: "cells",
          tiles: [
            ["Linfocitos B", "Se activan ante antigenos especificos."],
            ["Plasmaticas", "Producen anticuerpos que se unen al antigeno."],
            ["Memoria", "Algunas celulas quedan preparadas para una futura exposicion."]
          ]
        },
        {
          title: "Respuesta celular",
          visual: "cells",
          tiles: [
            ["Linfocitos T", "Reconocen senales en celulas infectadas."],
            ["Accion", "Destruyen celulas infectadas o coordinan otras defensas."],
            ["Complemento", "Trabaja junto a la respuesta humoral."]
          ]
        },
        {
          title: "La segunda respuesta puede ser mas eficaz",
          visual: "cells",
          tiles: [
            ["Memoria", "Permite reconocer rapidamente un antigeno ya conocido."],
            ["Anticuerpos", "Neutralizan o facilitan la eliminacion del patogeno."],
            ["Regulacion", "La respuesta debe ser suficiente, no descontrolada."]
          ]
        }
      ],
      activities: [
        {
          id: "m5a1",
          title: "Humoral y celular",
          type: "matching",
          points: 2,
          prompt: "Relaciona cada respuesta con su accion principal.",
          pairs: [
            ["Humoral", "Produce anticuerpos frente a patogenos libres"],
            ["Celular", "Destruye celulas infectadas"],
            ["Linfocito B", "Puede diferenciarse en celula plasmatica"],
            ["Linfocito T", "Reconoce antigenos presentados por celulas"]
          ],
          feedback: "Ambas respuestas son complementarias y especificas."
        },
        {
          id: "m5a2",
          title: "Secuencia adaptativa",
          type: "order",
          points: 3,
          prompt: "Ordena una respuesta humoral simplificada.",
          items: ["Ingreso de antigeno", "Reconocimiento por linfocito B", "Activacion y multiplicacion", "Formacion de celulas plasmaticas", "Produccion de anticuerpos", "Formacion de celulas de memoria"],
          start: ["Produccion de anticuerpos", "Ingreso de antigeno", "Formacion de celulas de memoria", "Reconocimiento por linfocito B", "Formacion de celulas plasmaticas", "Activacion y multiplicacion"],
          feedback: "La memoria inmunologica explica por que una segunda respuesta puede ser mas rapida."
        },
        {
          id: "m5a3",
          title: "Explica la especificidad",
          type: "short",
          points: 2,
          prompt: "Explica por que la respuesta adaptativa se considera especifica y con memoria.",
          keywords: ["antigeno", "linfocito", "anticuerpo", "memoria", "especifica", "segunda", "respuesta"]
        }
      ]
    },
    {
      id: "m6",
      title: "Vacunas y anticuerpos",
      focus: "Historia, desarrollo actual de vacunas, evidencia, etica y salud publica.",
      badge: "Prevencion",
      slides: [
        {
          title: "La vacunacion es ciencia historica y social",
          visual: "cells",
          tiles: [
            ["Montagu", "Divulgo la variolizacion en Europa a partir de saberes observados."],
            ["Jenner", "Relaciono viruela vacuna con proteccion ante viruela humana."],
            ["Etica", "Los procedimientos aceptables cambian con el conocimiento y los derechos."]
          ]
        },
        {
          title: "Las vacunas entrenan la memoria inmune",
          visual: "cells",
          tiles: [
            ["Antigeno", "Presentan informacion segura del agente o una parte de el."],
            ["Anticuerpos", "Facilitan neutralizacion y eliminacion."],
            ["Memoria", "Prepara una respuesta futura mas rapida y eficaz."]
          ]
        },
        {
          title: "La investigacion actual es colectiva",
          visual: "system",
          tiles: [
            ["Equipos", "No depende de una sola persona aislada."],
            ["Fases", "Se prueba seguridad y eficacia antes y despues de aprobarse."],
            ["Contexto", "Tecnologia, recursos, pandemia e informacion influyen en la investigacion."]
          ]
        }
      ],
      activities: [
        {
          id: "m6a1",
          title: "Vacuna y memoria",
          type: "fill",
          points: 2,
          prompt: "Completa la idea clave.",
          parts: ["Una vacuna presenta un ", " para activar linfocitos y generar ", " inmunologica."],
          blanks: [
            ["antigeno", ["anticuerpo", "patogeno", "antigeno"]],
            ["memoria", ["memoria", "fiebre", "inflamacion"]]
          ],
          feedback: "La vacunacion se apoya en antigenos y memoria inmunologica."
        },
        {
          id: "m6a2",
          title: "Ciencia actual",
          type: "truefalse",
          points: 2,
          prompt: "En la actualidad, una vacuna debe pasar fases de evaluacion y monitoreo despues de aplicarse a la poblacion.",
          answer: true,
          keywords: ["fases", "seguridad", "eficacia", "monitoreo", "poblacion", "evaluacion"],
          feedback: "La investigacion de vacunas combina evidencia, trabajo en equipo, tecnologia y vigilancia."
        },
        {
          id: "m6a3",
          title: "Decision informada",
          type: "short",
          points: 3,
          prompt: "Argumenta por que las vacunas son importantes para la salud personal y comunitaria usando evidencia cientifica.",
          keywords: ["vacuna", "memoria", "anticuerpos", "prevencion", "salud", "comunidad", "evidencia", "inmunidad"]
        }
      ]
    },
    {
      id: "m7",
      title: "Trasplantes y enfermedades inmunologicas",
      focus: "Compatibilidad, rechazo, inmunosupresion y desequilibrios del sistema inmune.",
      badge: "Aplicacion medica",
      slides: [
        {
          title: "Un trasplante tambien es un problema inmunologico",
          visual: "system",
          tiles: [
            ["Reconocimiento", "El sistema inmune puede identificar el tejido donado como extrano."],
            ["Compatibilidad", "Sangre, tejidos y organos exigen distintos niveles de compatibilidad."],
            ["Inmunosupresion", "Reduce rechazo, pero puede aumentar riesgo de infecciones."]
          ]
        },
        {
          title: "Se trasplantan niveles biologicos distintos",
          visual: "levels",
          tiles: [
            ["Organos", "Corazon, pulmones, higado, rinones, pancreas e intestino."],
            ["Tejidos", "Piel, corneas, hueso, tendones, valvulas y vasos sanguineos."],
            ["Celulas", "Celulas madre, medula osea, sangre, plasma y plaquetas."]
          ]
        },
        {
          title: "Cuando el equilibrio se altera",
          visual: "cells",
          tiles: [
            ["Alergias y asma", "Respuestas exageradas ante sustancias o vias aereas inflamadas."],
            ["Autoinmunidad", "Perdida de tolerancia: el cuerpo ataca tejidos propios."],
            ["Inmunodeficiencia", "Defensas insuficientes, como en VIH/sida avanzado."]
          ]
        }
      ],
      activities: [
        {
          id: "m7a1",
          title: "Nivel trasplantable",
          type: "classify",
          points: 3,
          prompt: "Clasifica cada elemento por nivel de organizacion.",
          bins: [["organo", "Organo"], ["tejido", "Tejido"], ["celula", "Celulas o componente celular"]],
          items: [
            ["corazon", "Corazon", "organo"],
            ["piel", "Piel", "tejido"],
            ["cornea", "Corneas", "tejido"],
            ["madre", "Celulas madre", "celula"],
            ["plaq", "Plaquetas", "celula"]
          ],
          feedback: "Los trasplantes pueden involucrar organos completos, tejidos o componentes celulares."
        },
        {
          id: "m7a2",
          title: "Rechazo e inmunosupresion",
          type: "choice",
          points: 2,
          prompt: "Despues de un trasplante, la inmunosupresion se usa principalmente para...",
          options: [
            ["Disminuir la respuesta inmune que podria rechazar el organo o tejido", true],
            ["Aumentar la produccion de anticuerpos contra el trasplante", false],
            ["Eliminar la necesidad de compatibilidad sanguinea", false],
            ["Convertir un tejido en organo", false]
          ],
          feedback: "Reducir temporalmente la defensa puede proteger el trasplante, pero exige cuidado medico."
        },
        {
          id: "m7a3",
          title: "Desequilibrio inmunologico",
          type: "matching",
          points: 2,
          prompt: "Relaciona cada enfermedad o condicion con su descripcion general.",
          pairs: [
            ["Alergia", "Hipersensibilidad ante un alergeno"],
            ["Lupus", "Enfermedad autoinmune multisistemica"],
            ["Asma", "Inflamacion cronica de vias aereas"],
            ["VIH/sida", "Inmunodeficiencia adquirida"]
          ],
          feedback: "El sistema inmunitario debe defender y regularse: ambos aspectos sostienen la salud."
        }
      ]
    },
    {
      id: "m8",
      title: "Evaluacion final",
      focus: "Integracion de sistemas, niveles, inmunidad, vacunas, trasplantes y argumentacion.",
      badge: "Cierre codificado",
      slides: [
        {
          title: "Integrar es mirar relaciones",
          visual: "system",
          tiles: [
            ["Sistema", "Componentes, limites, entradas, salidas y transformaciones."],
            ["Organizacion", "Niveles biologicos con propiedades emergentes."],
            ["Inmunidad", "Red dinamica que defiende, reconoce y regula."]
          ]
        },
        {
          title: "Evaluar tambien es retroalimentar",
          visual: "levels",
          tiles: [
            ["Autocorreccion", "Las actividades cerradas se corrigen por exactitud o parcialidad."],
            ["Respuesta breve", "Se valora longitud, palabras clave, coherencia y relacion tematica."],
            ["Codigo", "La plataforma muestra nota codificada del 1 al 70."]
          ]
        }
      ],
      activities: [
        {
          id: "m8a1",
          title: "Caso: corte en la piel",
          type: "multi",
          points: 3,
          prompt: "Una estudiante se corta superficialmente la mano. Selecciona procesos esperados de defensa.",
          options: [
            ["La piel deja de funcionar como barrera en esa zona", true],
            ["Puede activarse inflamacion local", true],
            ["Fagocitos pueden llegar al sitio", true],
            ["La memoria inmunologica aparece antes que cualquier respuesta innata", false]
          ],
          feedback: "Una herida conecta barreras, inflamacion y celulas defensivas."
        },
        {
          id: "m8a2",
          title: "Red conceptual",
          type: "matching",
          points: 3,
          prompt: "Conecta conceptos clave de la secuencia.",
          pairs: [
            ["Sistema abierto", "Intercambia materia, energia e informacion"],
            ["Propiedad emergente", "Caracteristica nueva del nivel organizado"],
            ["Anticuerpo", "Molecula que reconoce antigenos"],
            ["Trasplante", "Puede activar rechazo inmunologico"],
            ["Vacuna", "Favorece memoria inmunologica"],
            ["Homeostasis", "Regulacion interna del organismo"]
          ],
          feedback: "La evaluacion final exige conectar partes, funciones y procesos."
        },
        {
          id: "m8a3",
          title: "Lectura cientifica breve",
          type: "choice",
          points: 3,
          prompt: "Texto: Una enfermedad autoinmune ocurre cuando se pierde la tolerancia inmunologica. La idea central es que...",
          options: [
            ["El sistema inmune puede atacar tejidos propios al reconocerlos como extranos", true],
            ["Las bacterias siempre causan alergias", false],
            ["La inmunidad innata produce memoria especifica", false],
            ["Los anticuerpos solo aparecen en trasplantes", false]
          ],
          feedback: "La autoinmunidad muestra que defender no basta: el reconocimiento debe estar regulado."
        },
        {
          id: "m8a4",
          title: "Proyecto de indagacion",
          type: "short",
          points: 5,
          prompt: "Elige una enfermedad inmunologica y explica que pregunta investigable formularias, que fuentes usarias y que relacion tiene con el equilibrio del sistema inmune.",
          keywords: ["pregunta", "fuentes", "evidencia", "sistema", "inmunologico", "equilibrio", "celulas", "tratamiento", "salud"]
        },
        {
          id: "m8a5",
          title: "Argumentacion final",
          type: "short",
          points: 4,
          prompt: "Explica como se conectan sistemas abiertos, niveles de organizacion y respuesta inmunitaria para comprender la salud humana.",
          keywords: ["sistema", "abierto", "niveles", "organizacion", "inmunitaria", "salud", "homeostasis", "componentes", "relaciones"]
        },
        {
          id: "m8a6",
          title: "Criterio cientifico",
          type: "truefalse",
          points: 3,
          prompt: "Una explicacion cientifica sobre vacunas debe apoyarse en evidencias verificables y no en informacion pseudocientifica.",
          answer: true,
          keywords: ["evidencia", "verificable", "cientifica", "vacunas", "fuentes", "informacion"],
          feedback: "La secuencia exige postura critica ante informacion no validada."
        }
      ]
    }
  ];

  var state = loadState();

  function defaultState() {
    return { students: { s1: "", s2: "" }, answers: {}, checked: {}, feedback: {} };
  }

  function loadState() {
    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {}
    return defaultState();
  }

  function saveState() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function getTheme() {
    try {
      return localStorage.getItem(THEME_KEY) || "light";
    } catch (e) {
      return "light";
    }
  }

  function setTheme(theme) {
    document.body.className = theme === "dark" ? "dark" : "";
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}
  }

  function $(id) {
    return document.getElementById(id);
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function words(text) {
    var clean = String(text || "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
    return clean ? clean.split(" ").length : 0;
  }

  function normalize(text) {
    var s = String(text || "").toLowerCase();
    var from = "áàäâéèëêíìïîóòöôúùüûñ";
    var to = "aaaaeeeeiiiioooouuuun";
    for (var i = 0; i < from.length; i++) {
      s = s.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
    return s;
  }

  function allActivities() {
    var out = [];
    for (var i = 0; i < modules.length; i++) {
      for (var j = 0; j < modules[i].activities.length; j++) {
        out.push(modules[i].activities[j]);
      }
    }
    return out;
  }

  function findActivity(id) {
    for (var i = 0; i < modules.length; i++) {
      for (var j = 0; j < modules[i].activities.length; j++) {
        if (modules[i].activities[j].id === id) {
          return modules[i].activities[j];
        }
      }
    }
    return null;
  }

  function totalPoints() {
    var acts = allActivities();
    var total = 0;
    for (var i = 0; i < acts.length; i++) {
      total += acts[i].points;
    }
    return total;
  }

  function answer(id) {
    return state.answers[id];
  }

  function isAnswered(activity) {
    var a = answer(activity.id);
    if (activity.type === "order" && !a) {
      a = initialOrder(activity);
      state.answers[activity.id] = a.slice(0);
      saveState();
    }
    if (activity.type === "short") {
      return words(a) >= 20 && words(a) <= 150;
    }
    if (activity.type === "truefalse") {
      return a && typeof a.value !== "undefined" && words(a.justification) >= 20 && words(a.justification) <= 150;
    }
    if (activity.type === "multi") {
      return a && a.length;
    }
    if (activity.type === "classify") {
      return a && Object.keys(a).length === activity.items.length;
    }
    if (activity.type === "matching") {
      return a && Object.keys(a).length === activity.pairs.length;
    }
    if (activity.type === "fill") {
      return a && Object.keys(a).length === activity.blanks.length;
    }
    if (activity.type === "order") {
      return a && a.length === activity.items.length;
    }
    return typeof a !== "undefined" && a !== null && a !== "";
  }

  function scoreActivity(activity) {
    var a = answer(activity.id);
    var p = activity.points;
    var i, correct, score, key;
    if (!isAnswered(activity)) {
      return 0;
    }
    if (activity.type === "choice") {
      return activity.options[a] && activity.options[a][1] ? p : 0;
    }
    if (activity.type === "multi") {
      correct = 0;
      for (i = 0; i < activity.options.length; i++) {
        var should = activity.options[i][1];
        var has = a.indexOf(i) !== -1;
        if (should === has) {
          correct++;
        }
      }
      return p * correct / activity.options.length;
    }
    if (activity.type === "classify") {
      correct = 0;
      for (i = 0; i < activity.items.length; i++) {
        if (a[activity.items[i][0]] === activity.items[i][2]) {
          correct++;
        }
      }
      return p * correct / activity.items.length;
    }
    if (activity.type === "matching") {
      correct = 0;
      for (i = 0; i < activity.pairs.length; i++) {
        if (a[activity.pairs[i][0]] === activity.pairs[i][1]) {
          correct++;
        }
      }
      return p * correct / activity.pairs.length;
    }
    if (activity.type === "order") {
      correct = 0;
      for (i = 0; i < activity.items.length; i++) {
        if (a[i] === activity.items[i]) {
          correct++;
        }
      }
      return p * correct / activity.items.length;
    }
    if (activity.type === "fill") {
      correct = 0;
      for (i = 0; i < activity.blanks.length; i++) {
        if (normalize(a[i]) === normalize(activity.blanks[i][0])) {
          correct++;
        }
      }
      return p * correct / activity.blanks.length;
    }
    if (activity.type === "truefalse") {
      score = 0;
      if (a.value === activity.answer) {
        score += p * 0.55;
      }
      score += p * 0.45 * shortQuality(a.justification, activity.keywords);
      return score;
    }
    if (activity.type === "short") {
      return p * shortQuality(a, activity.keywords);
    }
    return 0;
  }

  function shortQuality(text, keywords) {
    var count = words(text);
    if (count < 20 || count > 150) {
      return 0;
    }
    var n = normalize(text);
    var hits = 0;
    for (var i = 0; i < keywords.length; i++) {
      if (n.indexOf(normalize(keywords[i])) !== -1) {
        hits++;
      }
    }
    var keywordScore = Math.min(1, hits / 4);
    var lengthScore = count >= 30 ? 1 : 0.72;
    var coherence = /[.!?]/.test(text) || count > 35 ? 1 : 0.78;
    return Math.max(0.25, keywordScore * 0.62 + lengthScore * 0.2 + coherence * 0.18);
  }

  function scoreTotal() {
    var acts = allActivities();
    var total = 0;
    for (var i = 0; i < acts.length; i++) {
      total += scoreActivity(acts[i]);
    }
    return Math.round(total);
  }

  function completedCount() {
    var acts = allActivities();
    var c = 0;
    for (var i = 0; i < acts.length; i++) {
      if (isAnswered(acts[i])) {
        c++;
      }
    }
    return c;
  }

  function moduleCompleted(mod) {
    for (var i = 0; i < mod.activities.length; i++) {
      if (!isAnswered(mod.activities[i])) {
        return false;
      }
    }
    return true;
  }

  function progressWidth() {
    var acts = allActivities();
    return acts.length ? Math.round(completedCount() * 100 / acts.length) : 0;
  }

  function encodedGrade() {
    var raw = scoreTotal();
    if (raw < 1 && completedCount() > 0) {
      raw = 1;
    }
    return raw;
  }

  function render() {
    updateNav();
    $("backBtn").className = currentView === "module" ? "icon-button" : "icon-button is-hidden";
    if (currentView === "home") renderHome();
    if (currentView === "learn") renderLearn();
    if (currentView === "module") renderModule();
    if (currentView === "progress") renderProgress();
    if (currentView === "final") renderFinal();
    if (forceTop) {
      forceTop = false;
      setTimeout(function () {
        try { window.scrollTo(0, 0); } catch (e) {}
      }, 0);
    }
  }

  function updateNav() {
    var buttons = document.querySelectorAll(".tabbar-item");
    for (var i = 0; i < buttons.length; i++) {
      var name = buttons[i].getAttribute("data-nav");
      buttons[i].className = "tabbar-item" + (name === currentView || (currentView === "module" && name === "learn") ? " is-active" : "");
    }
  }

  function renderHome() {
    var html = "";
    html += '<section class="hero">';
    html += '<div><div class="eyebrow">Secuencia didactica interactiva</div>';
    html += '<h2>De las partes al todo: una mirada sistemica para comprender la inmunidad</h2>';
    html += '<p>Plataforma ligera para secundaria basada en la secuencia de Ciencias de la Naturaleza, con teoria visual, simulaciones tactiles, autocorreccion, guardado local y cierre con nota codificada.</p>';
    html += '<div class="actions"><button class="button" type="button" data-action="start">Comenzar</button><button class="button secondary" type="button" data-action="continue">Continuar</button></div></div>';
    html += '<div class="score-ring"><div><strong>' + completedCount() + '/' + allActivities().length + '</strong><span>actividades</span><div class="progress"><span style="width:' + progressWidth() + '%"></span></div></div></div>';
    html += '</section>';
    html += '<section class="student-card">';
    html += '<label>Nombre estudiante 1<input id="student1" value="' + esc(state.students.s1) + '" placeholder="Escribe el nombre"></label>';
    html += '<label>Nombre estudiante 2<input id="student2" value="' + esc(state.students.s2) + '" placeholder="Trabajo en pareja"></label>';
    html += '</section>';
    html += '<section class="panel"><div class="eyebrow">Ruta de aprendizaje</div><div class="module-grid">';
    for (var i = 0; i < modules.length; i++) {
      html += moduleCard(modules[i], i);
    }
    html += '</div></section>';
    $("mainView").innerHTML = html;
    bindCommon();
    bindStudents();
  }

  function moduleCard(mod, index) {
    var done = moduleCompleted(mod);
    var html = '<article class="module-card">';
    html += '<button class="button ghost" type="button" data-module="' + index + '"><span class="eyebrow">Modulo ' + (index + 1) + '</span><h3>' + esc(mod.title) + '</h3></button>';
    html += '<p>' + esc(mod.focus) + '</p>';
    html += '<div class="badge-line"><span class="badge ' + (done ? "ok" : "warn") + '">' + (done ? "completado" : mod.activities.length + " actividades") + '</span><span class="pill">' + esc(mod.badge) + '</span></div>';
    html += '</article>';
    return html;
  }

  function renderLearn() {
    var html = '<section class="hero"><div><div class="eyebrow">Modulos tematicos</div><h2>Explora, practica y verifica tu avance</h2><p>Cada modulo combina mini diapositivas, ejemplos visuales, actividades interactivas, retroalimentacion y puntaje codificado.</p></div><div class="score-ring"><div><strong>' + encodedGrade() + '</strong><span>codigo actual</span></div></div></section>';
    html += '<section class="module-grid">';
    for (var i = 0; i < modules.length; i++) {
      html += moduleCard(modules[i], i);
    }
    html += '</section>';
    $("mainView").innerHTML = html;
    bindCommon();
  }

  function renderModule() {
    var mod = modules[currentModule];
    if (currentSlide >= mod.slides.length) currentSlide = 0;
    var slide = mod.slides[currentSlide];
    var html = '<section class="module-head">';
    html += '<div class="module-title"><div class="eyebrow">Modulo ' + (currentModule + 1) + '</div><h2>' + esc(mod.title) + '</h2><p>' + esc(mod.focus) + '</p></div>';
    html += '<div class="score-ring"><div><strong>' + moduleScore(mod) + '</strong><span>codigo modulo</span></div></div></section>';
    html += renderSlide(slide, currentSlide, mod.slides.length);
    for (var i = 0; i < mod.activities.length; i++) {
      html += renderActivity(mod.activities[i]);
    }
    $("mainView").innerHTML = html;
    bindActivityEvents();
  }

  function moduleScore(mod) {
    var s = 0;
    for (var i = 0; i < mod.activities.length; i++) s += scoreActivity(mod.activities[i]);
    return Math.round(s);
  }

  function renderSlide(slide, idx, total) {
    var html = '<section class="slide"><div class="slide-layout"><div><div class="eyebrow">Diapositiva ' + (idx + 1) + ' de ' + total + '</div><h3>' + esc(slide.title) + '</h3><div class="slide-points">';
    for (var i = 0; i < slide.tiles.length; i++) {
      html += '<div class="info-tile"><strong>' + esc(slide.tiles[i][0]) + '</strong><span>' + esc(slide.tiles[i][1]) + '</span></div>';
    }
    html += '</div></div><div class="visual">' + visual(slide.visual) + '</div></div>';
    html += '<div class="slide-controls" style="margin-top:12px"><button class="button secondary" type="button" data-slide="prev">Anterior</button><button class="button secondary" type="button" data-slide="next">Siguiente</button></div></section>';
    return html;
  }

  function visual(type) {
    if (type === "levels") {
      return '<div class="level-stack"><span>Organismo</span><span>Sistema</span><span>Organo</span><span>Tejido</span><span>Celula</span><span>Molecula</span></div>';
    }
    if (type === "mamushkas") {
      return '<figure class="mamushka-visual"><img src="assets/mamushkas.svg" alt="Munecas rusas o mamushkas de distintos tamanos"><figcaption>Analogía visual: cada nivel contiene al anterior, pero en biología aparecen propiedades nuevas.</figcaption></figure>';
    }
    if (type === "cells") {
      return '<div class="cell-field"><span>B</span><span>T</span><span>Ac</span><span>Ag</span></div>';
    }
    return '<div class="system-visual"></div>';
  }

  function renderActivity(activity) {
    var sc = formatScore(scoreActivity(activity));
    var done = isAnswered(activity);
    var nextId = getNextActivityId(activity.id);
    var html = '<section class="activity" id="' + activity.id + '"><div class="activity-head"><div><div class="eyebrow">' + esc(activityType(activity.type)) + '</div><h3>' + esc(activity.title) + '</h3><p>' + esc(activity.prompt) + '</p></div><span class="badge ' + (done ? "ok" : "warn") + '">' + sc + '/' + activity.points + '</span></div>';
    if (activity.type === "choice") html += renderChoice(activity);
    if (activity.type === "multi") html += renderMulti(activity);
    if (activity.type === "classify") html += renderClassify(activity);
    if (activity.type === "matching") html += renderMatching(activity);
    if (activity.type === "order") html += renderOrder(activity);
    if (activity.type === "fill") html += renderFill(activity);
    if (activity.type === "short") html += renderShort(activity);
    if (activity.type === "truefalse") html += renderTrueFalse(activity);
    html += '<div class="row-actions activity-actions"><button class="button verify" type="button" data-check="' + activity.id + '">Verificar</button>';
    if (nextId) {
      html += '<button class="button secondary next-action" type="button" data-next-activity="' + nextId + '">Siguiente actividad</button>';
    }
    html += '</div>';
    html += '<div class="feedback ' + (state.feedback[activity.id] ? "is-visible " + feedbackClass(activity) : "") + '">' + feedbackText(activity) + '</div></section>';
    return html;
  }

  function activityType(type) {
    var names = {
      choice: "seleccion multiple",
      multi: "seleccion multiple",
      classify: "clasificacion tactil",
      matching: "matching",
      order: "ordenar proceso",
      fill: "completar enunciado",
      short: "respuesta breve",
      truefalse: "verdadero/falso"
    };
    return names[type] || "actividad";
  }

  function renderChoice(activity) {
    var a = answer(activity.id);
    var html = '<div class="option-grid">';
    for (var i = 0; i < activity.options.length; i++) {
      html += '<button class="option ' + (a === i ? "is-selected" : "") + '" type="button" data-choice="' + activity.id + '" data-value="' + i + '">' + esc(activity.options[i][0]) + '</button>';
    }
    html += '</div>';
    return html;
  }

  function renderMulti(activity) {
    var a = answer(activity.id) || [];
    var html = '<div class="option-grid">';
    for (var i = 0; i < activity.options.length; i++) {
      html += '<button class="option ' + (a.indexOf(i) !== -1 ? "is-selected" : "") + '" type="button" data-multi="' + activity.id + '" data-value="' + i + '">' + esc(activity.options[i][0]) + '</button>';
    }
    html += '</div>';
    return html;
  }

  function renderClassify(activity) {
    var a = answer(activity.id) || {};
    var html = '<div class="classify-list">';
    for (var i = 0; i < activity.items.length; i++) {
      html += '<div class="classify-item"><strong>' + esc(activity.items[i][1]) + '</strong><div class="bin-buttons">';
      for (var j = 0; j < activity.bins.length; j++) {
        html += '<button type="button" class="tiny ' + (a[activity.items[i][0]] === activity.bins[j][0] ? "is-selected" : "") + '" data-classify="' + activity.id + '" data-item="' + esc(activity.items[i][0]) + '" data-bin="' + esc(activity.bins[j][0]) + '">' + esc(activity.bins[j][1]) + '</button>';
      }
      html += '</div></div>';
    }
    html += '</div>';
    return html;
  }

  function renderMatching(activity) {
    var a = answer(activity.id) || {};
    var options = [];
    for (var i = 0; i < activity.pairs.length; i++) options.push(activity.pairs[i][1]);
    var html = '<div class="match-list">';
    for (var j = 0; j < activity.pairs.length; j++) {
      html += '<label class="match-item"><span>' + esc(activity.pairs[j][0]) + '</span><select data-match="' + activity.id + '" data-key="' + esc(activity.pairs[j][0]) + '"><option value="">Elegir relacion</option>';
      for (var k = 0; k < options.length; k++) {
        html += '<option value="' + esc(options[k]) + '"' + (a[activity.pairs[j][0]] === options[k] ? " selected" : "") + '>' + esc(options[k]) + '</option>';
      }
      html += '</select></label>';
    }
    html += '</div>';
    return html;
  }

  function renderOrder(activity) {
    var a = answer(activity.id);
    if (!a) {
      a = initialOrder(activity);
      state.answers[activity.id] = a.slice(0);
      saveState();
    }
    var html = '<div class="option-grid">';
    for (var i = 0; i < a.length; i++) {
      html += '<div class="order-item"><strong>' + (i + 1) + '. ' + esc(a[i]) + '</strong><div class="order-controls"><button class="tiny move" type="button" data-order="' + activity.id + '" data-index="' + i + '" data-dir="-1">↑ Subir</button><button class="tiny move" type="button" data-order="' + activity.id + '" data-index="' + i + '" data-dir="1">↓ Bajar</button></div></div>';
    }
    html += '</div>';
    return html;
  }

  function renderFill(activity) {
    var a = answer(activity.id) || {};
    var html = '<div class="fill-grid"><div class="info-tile">';
    for (var i = 0; i < activity.blanks.length; i++) {
      html += esc(activity.parts[i]);
      html += '<select data-fill="' + activity.id + '" data-index="' + i + '"><option value="">...</option>';
      for (var j = 0; j < activity.blanks[i][1].length; j++) {
        var opt = activity.blanks[i][1][j];
        html += '<option value="' + esc(opt) + '"' + (a[i] === opt ? " selected" : "") + '>' + esc(opt) + '</option>';
      }
      html += '</select>';
    }
    html += esc(activity.parts[activity.parts.length - 1]) + '</div></div>';
    return html;
  }

  function renderShort(activity) {
    var a = answer(activity.id) || "";
    return '<label style="margin-top:10px">Respuesta breve: 20 a 150 palabras<textarea data-short="' + activity.id + '" placeholder="Escribe una respuesta cientifica breve">' + esc(a) + '</textarea><span class="helper">' + words(a) + ' palabras</span></label>';
  }

  function renderTrueFalse(activity) {
    var a = answer(activity.id) || {};
    var html = '<div class="option-grid"><button class="option ' + (a.value === true ? "is-selected" : "") + '" type="button" data-tf="' + activity.id + '" data-value="true">Verdadero</button>';
    html += '<button class="option ' + (a.value === false ? "is-selected" : "") + '" type="button" data-tf="' + activity.id + '" data-value="false">Falso</button></div>';
    html += '<label style="margin-top:10px">Justificacion breve: 20 a 150 palabras<textarea data-justify="' + activity.id + '" placeholder="Justifica con vocabulario cientifico">' + esc(a.justification || "") + '</textarea><span class="helper">' + words(a.justification) + ' palabras</span></label>';
    return html;
  }

  function feedbackClass(activity) {
    if (activity.type === "order") {
      return scoreActivity(activity) >= activity.points ? "ok" : "warn";
    }
    return scoreActivity(activity) >= activity.points * 0.65 ? "ok" : "warn";
  }

  function feedbackText(activity) {
    if (!state.feedback[activity.id]) return "";
    if (!isAnswered(activity)) {
      if (activity.type === "short" || activity.type === "truefalse") {
        return "Aun falta completar la actividad. Las respuestas abiertas requieren entre 20 y 150 palabras.";
      }
      if (activity.type === "order") {
        return "Aun falta ordenar todos los elementos de la secuencia.";
      }
      return "Aun falta completar la actividad.";
    }
    var sc = Math.round(scoreActivity(activity));
    if (activity.type === "order") {
      if (scoreActivity(activity) >= activity.points) {
        return esc("Correcto. " + (activity.feedback || "La secuencia esta organizada correctamente."));
      }
      return esc("Orden parcial: hay elementos fuera de lugar. " + (activity.feedback || "Revisa la secuencia antes de continuar."));
    }
    var base = sc >= activity.points * 0.65 ? "Buen avance. " : "Revisa la retroalimentacion y mejora tu respuesta. ";
    return esc(base + (activity.feedback || "La plataforma asigna puntaje parcial segun exactitud, coherencia y relacion tematica."));
  }

  function formatScore(value) {
    var rounded = Math.round(value);
    if (Math.abs(value - rounded) < 0.01) {
      return String(rounded);
    }
    return String(Math.round(value * 10) / 10);
  }

  function getNextActivityId(id) {
    var acts = allActivities();
    for (var i = 0; i < acts.length - 1; i++) {
      if (acts[i].id === id) return acts[i + 1].id;
    }
    return "";
  }

  function goToActivity(id) {
    for (var i = 0; i < modules.length; i++) {
      for (var j = 0; j < modules[i].activities.length; j++) {
        if (modules[i].activities[j].id === id) {
          currentModule = i;
          currentView = "module";
          render();
          setTimeout(function () {
            var target = document.getElementById(id);
            if (target && target.scrollIntoView) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, 0);
          return;
        }
      }
    }
  }

  function renderProgress() {
    var html = '<section class="hero"><div><div class="eyebrow">Panel de progreso</div><h2>Avance guardado automaticamente</h2><p>El progreso, las respuestas y el modo visual se conservan en este dispositivo mediante localStorage.</p></div><div class="score-ring"><div><strong>' + encodedGrade() + '</strong><span>nota codificada</span></div></div></section>';
    html += '<section class="summary-grid"><div class="summary-card"><strong>' + completedCount() + '</strong><span class="muted">actividades completadas</span></div><div class="summary-card"><strong>' + allActivities().length + '</strong><span class="muted">actividades obligatorias</span></div><div class="summary-card"><strong>' + scoreTotal() + '/' + totalPoints() + '</strong><span class="muted">resultado codificado</span></div></section>';
    html += '<section class="panel"><div class="progress"><span style="width:' + progressWidth() + '%"></span></div><div class="lock-list">';
    for (var i = 0; i < modules.length; i++) {
      html += '<div><strong>Modulo ' + (i + 1) + ': ' + esc(modules[i].title) + '</strong><br><span class="muted">' + (moduleCompleted(modules[i]) ? "Completado" : "Pendiente") + ' · codigo modulo ' + moduleScore(modules[i]) + '</span></div>';
    }
    html += '</div></section>';
    $("mainView").innerHTML = html;
  }

  function missingActivities() {
    var acts = allActivities();
    var missing = [];
    for (var i = 0; i < acts.length; i++) {
      if (!isAnswered(acts[i])) missing.push(acts[i]);
    }
    return missing;
  }

  function renderFinal() {
    var missing = missingActivities();
    var html = '<section class="hero"><div><div class="eyebrow">Pantalla final</div><h2>Resultados de la experiencia interactiva</h2><p>Estudiantes: <strong>' + esc(state.students.s1 || "Estudiante 1") + '</strong> y <strong>' + esc(state.students.s2 || "Estudiante 2") + '</strong></p></div><div class="score-ring"><div><strong>' + encodedGrade() + '</strong><span>nota codificada</span></div></div></section>';
    html += '<section class="summary-grid"><div class="summary-card"><strong>' + completedCount() + '/' + allActivities().length + '</strong><span class="muted">actividades</span></div><div class="summary-card"><strong>' + scoreTotal() + '/' + totalPoints() + '</strong><span class="muted">codigo acumulado</span></div><div class="summary-card"><strong>' + earnedBadges() + '</strong><span class="muted">insignias</span></div></section>';
    if (missing.length) {
      html += '<section class="panel"><div class="eyebrow">Finalizacion bloqueada</div><p>Faltan actividades obligatorias o respuestas breves con longitud valida.</p><div class="lock-list">';
      for (var i = 0; i < missing.length; i++) {
        html += '<div>' + esc(missing[i].title) + '</div>';
      }
      html += '</div></section>';
    } else {
      html += '<section class="panel"><div class="eyebrow">Cierre listo</div><p>La plataforma puede generar un reporte con nombres, progreso, actividades completadas y nota codificada.</p><div class="actions"><button class="button" type="button" data-action="pdf">Exportar PDF</button><button class="button secondary" type="button" data-action="print">Imprimir</button></div></section>';
    }
    $("mainView").innerHTML = html;
    bindCommon();
  }

  function earnedBadges() {
    var c = 0;
    for (var i = 0; i < modules.length; i++) {
      if (moduleCompleted(modules[i])) c++;
    }
    return c;
  }

  function bindCommon() {
    var start = document.querySelectorAll("[data-action]");
    for (var i = 0; i < start.length; i++) {
      start[i].onclick = function () {
        var action = this.getAttribute("data-action");
        if (action === "start") {
          currentView = "module";
          currentModule = 0;
          currentSlide = 0;
          forceTop = true;
          render();
        }
        if (action === "continue") {
          goContinue();
        }
        if (action === "pdf") {
          exportPdf();
        }
        if (action === "print") {
          preparePrint();
          window.print();
        }
      };
    }
    var cards = document.querySelectorAll("[data-module]");
    for (var j = 0; j < cards.length; j++) {
      cards[j].onclick = function () {
        currentModule = parseInt(this.getAttribute("data-module"), 10);
        currentSlide = 0;
        currentView = "module";
        forceTop = true;
        render();
      };
    }
  }

  function bindStudents() {
    var s1 = $("student1");
    var s2 = $("student2");
    if (s1) s1.oninput = function () { state.students.s1 = this.value; saveState(); };
    if (s2) s2.oninput = function () { state.students.s2 = this.value; saveState(); };
  }

  function bindActivityEvents() {
    var i;
    var slideBtns = document.querySelectorAll("[data-slide]");
    for (i = 0; i < slideBtns.length; i++) {
      slideBtns[i].onclick = function () {
        var dir = this.getAttribute("data-slide") === "next" ? 1 : -1;
        currentSlide += dir;
        if (currentSlide < 0) currentSlide = modules[currentModule].slides.length - 1;
        if (currentSlide >= modules[currentModule].slides.length) currentSlide = 0;
        render();
      };
    }
    bindButtons("[data-choice]", function (el) {
      state.answers[el.getAttribute("data-choice")] = parseInt(el.getAttribute("data-value"), 10);
    });
    bindButtons("[data-multi]", function (el) {
      var id = el.getAttribute("data-multi");
      var val = parseInt(el.getAttribute("data-value"), 10);
      var a = state.answers[id] || [];
      var ix = a.indexOf(val);
      if (ix === -1) a.push(val); else a.splice(ix, 1);
      state.answers[id] = a;
    });
    bindButtons("[data-classify]", function (el) {
      var id = el.getAttribute("data-classify");
      var a = state.answers[id] || {};
      a[el.getAttribute("data-item")] = el.getAttribute("data-bin");
      state.answers[id] = a;
    });
    bindButtons("[data-tf]", function (el) {
      var id = el.getAttribute("data-tf");
      var a = state.answers[id] || {};
      a.value = el.getAttribute("data-value") === "true";
      state.answers[id] = a;
    });
    bindButtons("[data-order]", function (el) {
      var id = el.getAttribute("data-order");
      var act = findActivity(id);
      var a = state.answers[id] || initialOrder(act);
      var ix = parseInt(el.getAttribute("data-index"), 10);
      var dir = parseInt(el.getAttribute("data-dir"), 10);
      var ni = ix + dir;
      if (ni >= 0 && ni < a.length) {
        var tmp = a[ix];
        a[ix] = a[ni];
        a[ni] = tmp;
      }
      state.answers[id] = a;
    });
    var selects = document.querySelectorAll("select[data-match], select[data-fill]");
    for (i = 0; i < selects.length; i++) {
      selects[i].onchange = function () {
        if (this.getAttribute("data-match")) {
          var id = this.getAttribute("data-match");
          var a = state.answers[id] || {};
          a[this.getAttribute("data-key")] = this.value;
          state.answers[id] = a;
        }
        if (this.getAttribute("data-fill")) {
          var fid = this.getAttribute("data-fill");
          var fa = state.answers[fid] || {};
          fa[this.getAttribute("data-index")] = this.value;
          state.answers[fid] = fa;
        }
        saveState();
        render();
      };
    }
    var areas = document.querySelectorAll("textarea[data-short], textarea[data-justify]");
    for (i = 0; i < areas.length; i++) {
      areas[i].oninput = function () {
        if (this.getAttribute("data-short")) {
          state.answers[this.getAttribute("data-short")] = this.value;
        }
        if (this.getAttribute("data-justify")) {
          var id = this.getAttribute("data-justify");
          var a = state.answers[id] || {};
          a.justification = this.value;
          state.answers[id] = a;
        }
        saveState();
      };
      areas[i].onblur = function () { render(); };
    }
    var checks = document.querySelectorAll("[data-check]");
    for (i = 0; i < checks.length; i++) {
      checks[i].onclick = function () {
        state.feedback[this.getAttribute("data-check")] = true;
        saveState();
        render();
      };
    }
    var nexts = document.querySelectorAll("[data-next-activity]");
    for (i = 0; i < nexts.length; i++) {
      nexts[i].onclick = function () {
        goToActivity(this.getAttribute("data-next-activity"));
      };
    }
  }

  function initialOrder(activity) {
    if (activity.start && activity.start.length === activity.items.length) {
      return activity.start.slice(0);
    }
    var copy = activity.items.slice(0);
    if (copy.length > 3) {
      return copy.slice(1).reverse().concat(copy[0]);
    }
    return copy.reverse();
  }

  function bindButtons(selector, handler) {
    var els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) {
      els[i].onclick = function () {
        handler(this);
        saveState();
        render();
      };
    }
  }

  function goContinue() {
    for (var i = 0; i < modules.length; i++) {
      if (!moduleCompleted(modules[i])) {
        currentModule = i;
        currentSlide = 0;
        currentView = "module";
        forceTop = true;
        render();
        return;
      }
    }
    currentView = "final";
    forceTop = true;
    render();
  }

  function preparePrint() {
    var html = '<h1>Reporte final: Inmunidad Sistemica</h1>';
    html += '<p><strong>Estudiante 1:</strong> ' + esc(state.students.s1 || "") + '</p>';
    html += '<p><strong>Estudiante 2:</strong> ' + esc(state.students.s2 || "") + '</p>';
    html += '<p><strong>Actividades completadas:</strong> ' + completedCount() + ' de ' + allActivities().length + '</p>';
    html += '<p><strong>Nota codificada:</strong> ' + encodedGrade() + ' de 70</p>';
    html += '<h2>Resumen por modulo</h2><ul>';
    for (var i = 0; i < modules.length; i++) {
      html += '<li>Modulo ' + (i + 1) + ': ' + esc(modules[i].title) + ' - codigo ' + moduleScore(modules[i]) + '</li>';
    }
    html += '</ul>';
    $("printSheet").innerHTML = html;
  }

  function exportPdf() {
    preparePrint();
    if (window.jspdf && window.jspdf.jsPDF) {
      var doc = new window.jspdf.jsPDF({ unit: "pt", format: "a4" });
      var y = 48;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("Reporte final: Inmunidad Sistemica", 42, y);
      y += 28;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      var lines = [
        "Estudiante 1: " + (state.students.s1 || ""),
        "Estudiante 2: " + (state.students.s2 || ""),
        "Actividades completadas: " + completedCount() + " de " + allActivities().length,
        "Nota codificada: " + encodedGrade() + " de 70",
        "Insignias: " + earnedBadges()
      ];
      for (var i = 0; i < lines.length; i++) {
        doc.text(lines[i], 42, y);
        y += 18;
      }
      y += 8;
      doc.setFont("helvetica", "bold");
      doc.text("Resumen por modulo", 42, y);
      y += 20;
      doc.setFont("helvetica", "normal");
      for (var j = 0; j < modules.length; j++) {
        doc.text("Modulo " + (j + 1) + ": " + modules[j].title + " - codigo " + moduleScore(modules[j]), 42, y);
        y += 17;
      }
      doc.save("reporte_inmunidad_sistemica.pdf");
    } else {
      window.print();
    }
  }

  function init() {
    setTheme(getTheme());
    $("themeBtn").onclick = function () {
      setTheme(document.body.className === "dark" ? "light" : "dark");
    };
    $("backBtn").onclick = function () {
      currentView = "learn";
      forceTop = true;
      render();
    };
    var navs = document.querySelectorAll(".tabbar-item");
    for (var i = 0; i < navs.length; i++) {
      navs[i].onclick = function () {
        var nav = this.getAttribute("data-nav");
        if (nav === "home") currentView = "home";
        if (nav === "learn") currentView = "learn";
        if (nav === "progress") currentView = "progress";
        if (nav === "final") currentView = "final";
        forceTop = true;
        render();
      };
    }
    forceTop = true;
    render();
  }

  init();
})();
