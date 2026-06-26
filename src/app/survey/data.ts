// ============================================================================
// "Tu Experiencia de Atención" — Banco de preguntas + gobernanza + lógica
// Plataforma de Patient Journey Intelligence (PREMs) para IPRESS del Perú.
// Datos ficticios para prototipo de demostración.
// ============================================================================

export type Answers = Record<string, string | string[]>;

export type RespondentType =
  | "paciente"
  | "padre"
  | "familiar"
  | "cuidador"
  | "representante"
  | "otro";

export type HospType =
  | "medica"
  | "quirurgica"
  | "uci"
  | "intermedios"
  | "pediatrica"
  | "otra"
  | "no_seguro";

export type QuestionType = "single" | "multi" | "scale";

export interface QuestionOption {
  value: string;
  label: string;
  description?: string;
}

export interface Question {
  id: string;
  domain: string;
  /** Etiqueta pequeña superior (categoría) */
  category: string;
  /** Sección de progreso a la que pertenece */
  section: SectionId;
  type: QuestionType;
  /** Texto para el paciente */
  question: string;
  /** Texto alternativo cuando responde un proxy (no el paciente) */
  proxyQuestion?: string;
  hint?: string;
  options?: QuestionOption[];
  /** ¿Es obligatoria para avanzar? */
  required?: boolean;
  /** Mostrar solo cuando esta condición se cumpla */
  when?: (a: Answers) => boolean;
  // ---- Gobernanza / handoff ----
  version?: string;
  indicator?: string;
  purpose?: string;
  alert?: string;
  improvement?: string;
}

export type SectionId =
  | "sobre-usted"
  | "experiencia"
  | "adaptativo"
  | "comentarios"
  | "contacto"
  | "finalizar";

export const SECTIONS: { id: SectionId; label: string }[] = [
  { id: "sobre-usted", label: "Sobre usted" },
  { id: "experiencia", label: "Su experiencia" },
  { id: "adaptativo", label: "Detalles de la atención" },
  { id: "comentarios", label: "Comentarios" },
  { id: "contacto", label: "Contacto" },
  { id: "finalizar", label: "Finalizar" },
];

// ---- Escalas reutilizables ----
const FREQ: QuestionOption[] = [
  { value: "siempre", label: "Siempre" },
  { value: "casi_siempre", label: "Casi siempre" },
  { value: "a_veces", label: "A veces" },
  { value: "nunca", label: "Nunca" },
  { value: "no_correspondia", label: "No correspondía" },
  { value: "prefiero_no", label: "Prefiero no responder" },
];

const SI_NO_NS: QuestionOption[] = [
  { value: "si", label: "Sí" },
  { value: "no", label: "No" },
  { value: "no_seguro", label: "No estoy seguro" },
];

// Una respuesta de frecuencia se considera "negativa" → puede activar seguimiento
export const isNegativeFreq = (v?: string | string[]) =>
  v === "a_veces" || v === "nunca";

// ---- Helpers de contexto ----
export const isProxy = (a: Answers) => a.respondent && a.respondent !== "paciente";
export const respondent = (a: Answers) => a.respondent as RespondentType | undefined;
export const hospType = (a: Answers) => a.hosp_type as HospType | undefined;

// ============================================================================
// IDENTIFICACIÓN DEL RESPONDIENTE / CONTEXTO
// ============================================================================
export const IDENTITY_QUESTIONS: Question[] = [
  {
    id: "respondent",
    domain: "Respondiente",
    category: "Para empezar",
    section: "sobre-usted",
    type: "single",
    question: "¿Quién está respondiendo?",
    required: true,
    options: [
      { value: "paciente", label: "Soy el paciente", description: "Recibí la atención" },
      { value: "padre", label: "Soy madre, padre o tutor de un menor" },
      { value: "familiar", label: "Soy familiar" },
      { value: "cuidador", label: "Soy cuidador", description: "Acompaño los cuidados" },
      { value: "representante", label: "Soy representante del paciente" },
      { value: "otro", label: "Otra persona" },
    ],
    purpose: "Adaptar el lenguaje y las preguntas al perfil del respondiente.",
    indicator: "Distribución de respondientes por perfil",
  },
  {
    id: "proxy_level",
    domain: "Validez de proxy",
    category: "Su participación",
    section: "sobre-usted",
    type: "single",
    question: "¿Cuánto pudo acompañar u observar la atención?",
    when: (a) => !!isProxy(a),
    required: true,
    options: [
      { value: "mayoria", label: "Estuve presente durante la mayor parte de la hospitalización" },
      { value: "algunos", label: "Estuve presente en algunos momentos" },
      { value: "info_frecuente", label: "Recibí información frecuente sobre la atención" },
      { value: "poca_info", label: "Tuve poca información sobre lo ocurrido" },
      { value: "prefiero_no", label: "Prefiero no responder" },
    ],
    purpose: "Interpretar la validez de la respuesta del proxy en el análisis.",
    indicator: "Nivel de exposición del proxy",
  },
  {
    id: "hosp_type",
    domain: "Contexto",
    category: "La hospitalización",
    section: "sobre-usted",
    type: "single",
    question: "¿Dónde recibió principalmente la atención?",
    proxyQuestion: "¿Dónde recibió el paciente principalmente la atención?",
    required: true,
    options: [
      { value: "medica", label: "Hospitalización médica" },
      { value: "quirurgica", label: "Hospitalización quirúrgica" },
      { value: "uci", label: "Unidad de cuidados intensivos" },
      { value: "intermedios", label: "Unidad de cuidados intermedios" },
      { value: "pediatrica", label: "Hospitalización pediátrica" },
      { value: "otra", label: "Otra área" },
      { value: "no_seguro", label: "No estoy seguro" },
    ],
    purpose: "Activar módulos adaptativos según el tipo de atención.",
    indicator: "Volumen por tipo de hospitalización",
  },
];

// ============================================================================
// NÚCLEO PREM
// ============================================================================
export const CORE_QUESTIONS: Question[] = [
  {
    id: "TRA-01",
    domain: "Trato y respeto",
    category: "Trato y respeto",
    section: "experiencia",
    type: "single",
    question: "¿Lo trataron con respeto durante la hospitalización?",
    proxyQuestion: "¿Trataron al paciente con respeto durante la hospitalización?",
    options: FREQ,
    required: true,
    indicator: 'Porcentaje de respuestas "Siempre" y "Casi siempre"',
    purpose: "Monitorear dignidad y trato en la atención.",
    improvement: "Capacitación en trato humanizado",
  },
  {
    id: "COM-01",
    domain: "Comunicación",
    category: "Comunicación",
    section: "experiencia",
    type: "single",
    question: "¿Las explicaciones del equipo de salud fueron fáciles de entender?",
    options: FREQ,
    required: true,
    indicator: 'Porcentaje de respuestas "Siempre" y "Casi siempre"',
    purpose: "Rediseño de educación y comunicación clínica.",
    improvement: "Material educativo en lenguaje claro",
  },
  {
    id: "PAR-01",
    domain: "Participación",
    category: "Participación",
    section: "experiencia",
    type: "single",
    question: "¿Pudo participar en las decisiones sobre la atención tanto como deseaba?",
    proxyQuestion:
      "¿Pudieron participar en las decisiones sobre la atención tanto como deseaban?",
    options: FREQ,
    required: true,
    indicator: 'Porcentaje "Siempre" / "Casi siempre"',
    purpose: "Promover decisiones compartidas.",
  },
  {
    id: "NEC-01",
    domain: "Respuesta a necesidades",
    category: "Atención oportuna",
    section: "experiencia",
    type: "single",
    question: "Cuando necesitó ayuda, ¿la recibió en un tiempo razonable?",
    proxyQuestion: "Cuando el paciente necesitó ayuda, ¿la recibió en un tiempo razonable?",
    options: FREQ,
    required: true,
    indicator: 'Porcentaje "Siempre" / "Casi siempre"',
    purpose: "Evaluar capacidad de respuesta del personal.",
  },
  {
    id: "COO-01",
    domain: "Coordinación",
    category: "Coordinación",
    section: "experiencia",
    type: "single",
    question: "¿Percibió que los profesionales estaban coordinados entre sí?",
    hint: "Por ejemplo, que conocían el plan de atención y no daban indicaciones contradictorias.",
    options: FREQ,
    required: true,
    indicator: 'Porcentaje "Siempre" / "Casi siempre"',
    purpose: "Detectar fallas de coordinación entre equipos.",
  },
  {
    id: "SEG-01",
    domain: "Seguridad percibida",
    category: "Seguridad",
    section: "experiencia",
    type: "single",
    question: "¿Se sintió seguro durante la atención recibida?",
    proxyQuestion: "¿Sintió que el paciente estuvo seguro durante la atención recibida?",
    options: FREQ,
    required: true,
    indicator: 'Porcentaje "Siempre" / "Casi siempre"',
    purpose: "Identificar oportunidades de mejora en seguridad del paciente.",
    alert: "Análisis agregado; activa seguimiento no acusatorio",
  },
  {
    id: "SEG-02",
    domain: "Seguridad percibida",
    category: "Seguridad",
    section: "experiencia",
    type: "single",
    question: "¿Qué situación le generó preocupación?",
    when: (a) => isNegativeFreq(a["SEG-01"]),
    options: [
      { value: "medicamentos", label: "Medicamentos" },
      { value: "caida", label: "Caída o riesgo de caída" },
      { value: "demora", label: "Demora en recibir ayuda" },
      { value: "info_contradictoria", label: "Información contradictoria" },
      { value: "procedimiento", label: "Procedimiento o tratamiento" },
      { value: "limpieza", label: "Limpieza o prevención de infecciones" },
      { value: "otra", label: "Otra situación" },
      { value: "prefiero_no", label: "Prefiero no responder" },
    ],
    purpose: "Clasificar el tipo de preocupación de seguridad para mejora de procesos.",
    improvement: "Priorización de iniciativas de seguridad",
  },
  {
    id: "MED-01",
    domain: "Medicación",
    category: "Medicamentos",
    section: "experiencia",
    type: "single",
    question:
      "Antes del alta, ¿le explicaron qué medicamentos debía continuar, cambiar o suspender?",
    proxyQuestion:
      "Antes del alta, ¿les explicaron qué medicamentos debía continuar, cambiar o suspender?",
    options: FREQ,
    when: (a) => a.hosp_type !== "no_seguro",
    indicator: 'Porcentaje "Siempre" / "Casi siempre"',
    purpose: "Evaluar educación sobre medicación al alta.",
  },
  {
    id: "ALT-01",
    domain: "Preparación para el alta",
    category: "Alta hospitalaria",
    section: "experiencia",
    type: "single",
    question: "Antes de salir, ¿se sintió preparado para continuar los cuidados en casa?",
    proxyQuestion:
      "Antes de salir, ¿se sintieron preparados para continuar los cuidados en casa?",
    options: FREQ,
    required: true,
    indicator: 'Porcentaje "Siempre" / "Casi siempre"',
    purpose: "Mejorar el proceso de alta y educación al egreso.",
  },
  {
    id: "ALT-02",
    domain: "Signos de alarma",
    category: "Alta hospitalaria",
    section: "experiencia",
    type: "single",
    question:
      "¿Le explicaron qué señales de alarma debía vigilar y qué hacer si aparecían?",
    proxyQuestion:
      "¿Les explicaron qué señales de alarma debían vigilar y qué hacer si aparecían?",
    options: FREQ,
    indicator: 'Porcentaje "Siempre" / "Casi siempre"',
    purpose: "Asegurar instrucciones de seguridad post-alta.",
  },
  {
    id: "CON-01",
    domain: "Continuidad",
    category: "Cuidado posterior",
    section: "experiencia",
    type: "single",
    question: "¿Sabía dónde y cuándo debía continuar su atención después del alta?",
    proxyQuestion:
      "¿Sabían dónde y cuándo debía continuar la atención después del alta?",
    options: FREQ,
    indicator: 'Porcentaje "Siempre" / "Casi siempre"',
    purpose: "Evaluar continuidad del cuidado.",
  },
  {
    id: "GLO-01",
    domain: "Experiencia global",
    category: "Valoración general",
    section: "experiencia",
    type: "scale",
    question: "En general, ¿cómo calificaría la atención recibida?",
    hint: "0 significa muy mala y 10 significa excelente.",
    required: true,
    indicator: "Promedio y % de promotores (9–10)",
    purpose: "Indicador global de experiencia.",
  },
];

// ============================================================================
// MÓDULOS ADAPTATIVOS
// ============================================================================
export const ADAPTIVE_QUESTIONS: Question[] = [
  // --- Pediatría ---
  {
    id: "PED-01",
    domain: "Pediatría",
    category: "Atención pediátrica",
    section: "adaptativo",
    type: "single",
    question:
      "¿Le explicaron de manera comprensible lo que ocurría con la salud del niño o adolescente?",
    when: (a) => a.respondent === "padre" || a.hosp_type === "pediatrica",
    options: FREQ,
    purpose: "Evaluar comunicación con cuidadores en pediatría.",
  },
  {
    id: "PED-02",
    domain: "Pediatría",
    category: "Atención pediátrica",
    section: "adaptativo",
    type: "single",
    question:
      "¿El niño o adolescente fue incluido en las explicaciones de acuerdo con su edad?",
    when: (a) => a.respondent === "padre" || a.hosp_type === "pediatrica",
    options: FREQ,
    purpose: "Promover atención centrada en el menor.",
  },
  // --- UCI / intermedios ---
  {
    id: "UCI-01",
    domain: "UCI / Intermedios",
    category: "Cuidados críticos",
    section: "adaptativo",
    type: "single",
    question: "¿Recibió información clara y consistente sobre el estado del paciente?",
    when: (a) => a.hosp_type === "uci" || a.hosp_type === "intermedios",
    options: FREQ,
    purpose: "Evaluar comunicación con familias en cuidados críticos.",
  },
  {
    id: "UCI-02",
    domain: "UCI / Intermedios",
    category: "Cuidados críticos",
    section: "adaptativo",
    type: "single",
    question: "¿Supo a quién acudir cuando necesitaba información?",
    when: (a) => a.hosp_type === "uci" || a.hosp_type === "intermedios",
    options: FREQ,
    purpose: "Identificar claridad de referentes de información.",
  },
  // --- Cirugía ---
  {
    id: "CIR-01",
    domain: "Cirugía",
    category: "Procedimiento quirúrgico",
    section: "adaptativo",
    type: "single",
    question:
      "Antes del procedimiento, ¿le explicaron qué se realizaría y qué podía esperar?",
    proxyQuestion:
      "Antes del procedimiento, ¿les explicaron qué se realizaría y qué podían esperar?",
    when: (a) => a.hosp_type === "quirurgica",
    options: FREQ,
    purpose: "Evaluar consentimiento informado y expectativas.",
  },
  {
    id: "CIR-02",
    domain: "Cirugía",
    category: "Procedimiento quirúrgico",
    section: "adaptativo",
    type: "single",
    question: "¿Le explicaron cómo manejar el dolor y cuándo solicitar ayuda?",
    when: (a) => a.hosp_type === "quirurgica",
    options: FREQ,
    purpose: "Evaluar manejo del dolor post-operatorio.",
  },
  // --- Cuidador ---
  {
    id: "CUI-01",
    domain: "Cuidador",
    category: "Apoyo al cuidador",
    section: "adaptativo",
    type: "single",
    question: "¿Recibió información suficiente para realizar los cuidados en casa?",
    when: (a) => a.respondent === "cuidador",
    options: FREQ,
    purpose: "Evaluar preparación del cuidador.",
  },
  {
    id: "CUI-02",
    domain: "Cuidador",
    category: "Apoyo al cuidador",
    section: "adaptativo",
    type: "single",
    question: "¿Pudo expresar si necesitaba apoyo adicional?",
    when: (a) => a.respondent === "cuidador",
    options: FREQ,
    purpose: "Detectar necesidades no cubiertas del cuidador.",
  },
  // --- Problema posterior al alta (filtro) ---
  {
    id: "POST-01",
    domain: "Post-alta",
    category: "Después del alta",
    section: "adaptativo",
    type: "single",
    question:
      "Después del alta, ¿ha tenido alguna dificultad relacionada con la atención recibida?",
    proxyQuestion:
      "Después del alta, ¿han tenido alguna dificultad relacionada con la atención recibida?",
    options: SI_NO_NS,
    purpose: "Detectar problemas de continuidad para service recovery agregado.",
  },
  {
    id: "POST-02",
    domain: "Post-alta",
    category: "Después del alta",
    section: "adaptativo",
    type: "multi",
    question: "¿Con qué se relacionó la dificultad?",
    hint: "Puede elegir más de una opción.",
    when: (a) => a["POST-01"] === "si",
    options: [
      { value: "medicamentos", label: "Medicamentos" },
      { value: "dolor", label: "Dolor o síntomas" },
      { value: "citas", label: "Citas o seguimiento" },
      { value: "instrucciones", label: "Instrucciones poco claras" },
      { value: "resultados", label: "Resultados pendientes" },
      { value: "comunicacion", label: "Dificultad para comunicarse" },
      { value: "otra", label: "Otra" },
    ],
    purpose: "Clasificar dificultades post-alta para mejora de procesos.",
  },
];

// Todas las preguntas (para gobernanza)
export const ALL_QUESTIONS: Question[] = [
  ...IDENTITY_QUESTIONS,
  ...CORE_QUESTIONS,
  ...ADAPTIVE_QUESTIONS,
];

// ============================================================================
// EVENTOS DE ANALÍTICA (handoff) — no se registran datos sensibles
// ============================================================================
export const ANALYTICS_EVENTS = [
  "landing_viewed",
  "survey_started",
  "privacy_opened",
  "consent_accepted",
  "respondent_type_selected",
  "section_started",
  "question_answered",
  "section_completed",
  "comment_started",
  "comment_completed",
  "contact_requested",
  "survey_abandoned",
  "survey_resumed",
  "survey_submitted",
  "error_displayed",
];
