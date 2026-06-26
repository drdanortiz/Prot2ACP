// ============================================================================
// Documentación del prototipo: Design System, Mapa de navegación, Gobernanza
// de preguntas, Eventos de analítica y Rutas de prueba.
// ============================================================================
import { ReactNode, useState } from "react";
import { ChevronLeft, Play } from "lucide-react";
import { ALL_QUESTIONS, ANALYTICS_EVENTS, Answers } from "../survey/data";

type Tab = "ds" | "nav" | "gov" | "events" | "routes";

const TABS: { id: Tab; label: string }[] = [
  { id: "ds", label: "Design System" },
  { id: "nav", label: "Mapa de navegación" },
  { id: "gov", label: "Gobernanza" },
  { id: "events", label: "Analítica" },
  { id: "routes", label: "Rutas de prueba" },
];

const COLORS = [
  ["Primary 900", "#123A5A"],
  ["Primary 700", "#1C5278"],
  ["Primary 600", "#23658E"],
  ["Primary 100", "#E7F1F7"],
  ["Success 600", "#20806D"],
  ["Success 100", "#DFF3ED"],
  ["Neutral 950", "#17202A"],
  ["Neutral 500", "#697681"],
  ["Neutral 200", "#DEE3E7"],
  ["Error 700", "#A32A2A"],
  ["Warning 700", "#8A5A00"],
  ["Info 700", "#245A92"],
];

const TYPE_SCALE = [
  ["Display", "32 / 40 · semibold"],
  ["H1 mobile", "28 / 36 · semibold"],
  ["H2", "24 / 32 · semibold"],
  ["Question", "20 / 30 · semibold"],
  ["Body", "16 / 24 · regular"],
  ["Caption", "14 / 20 · regular"],
];

const NAV_FLOW = [
  "Landing / Invitación",
  "Privacidad (lenguaje claro)",
  "Aceptación para participar",
  "↳ Si no participa → Cierre respetuoso",
  "Identificación del respondiente",
  "↳ Si no es paciente → Nivel de participación del proxy",
  "Tipo de hospitalización",
  "Introducción al recorrido",
  "Núcleo PREM (trato, comunicación, participación, …)",
  "↳ Si seguridad negativa → Seguimiento de preocupación",
  "Rutas adaptativas (pediatría · UCI · cirugía · cuidador · post-alta)",
  "Comentarios abiertos",
  "Service recovery / solicitud de contacto",
  "↳ Si solicita contacto → Datos de contacto",
  "Revisión",
  "Confirmación y cierre",
  "Ruta transversal: Ayuda / emergencia (siempre disponible)",
];

export interface TestRoute {
  id: string;
  title: string;
  desc: string;
  answers: Answers;
}

export const TEST_ROUTES: TestRoute[] = [
  {
    id: "r1",
    title: "Ruta 1 · Paciente adulto, hospitalización médica satisfactoria",
    desc: "Experiencia positiva, sin solicitud de contacto.",
    answers: {
      respondent: "paciente",
      hosp_type: "medica",
      "TRA-01": "siempre",
      "COM-01": "siempre",
      "PAR-01": "casi_siempre",
      "NEC-01": "siempre",
      "COO-01": "casi_siempre",
      "SEG-01": "siempre",
      "MED-01": "siempre",
      "ALT-01": "casi_siempre",
      "ALT-02": "siempre",
      "CON-01": "siempre",
      "GLO-01": "9",
      contact_request: "no",
    },
  },
  {
    id: "r2",
    title: "Ruta 2 · Familiar de paciente en UCI con problema de comunicación",
    desc: "Comunicación deficiente en cuidados críticos.",
    answers: {
      respondent: "familiar",
      proxy_level: "mayoria",
      hosp_type: "uci",
      "TRA-01": "casi_siempre",
      "COM-01": "a_veces",
      "PAR-01": "a_veces",
      "NEC-01": "casi_siempre",
      "COO-01": "a_veces",
      "SEG-01": "casi_siempre",
      "UCI-01": "a_veces",
      "UCI-02": "nunca",
      contact_request: "no",
    },
  },
  {
    id: "r3",
    title: "Ruta 3 · Madre/padre de paciente pediátrico",
    desc: "Activa módulo de pediatría.",
    answers: {
      respondent: "padre",
      proxy_level: "mayoria",
      hosp_type: "pediatrica",
      "TRA-01": "siempre",
      "COM-01": "casi_siempre",
      "PED-01": "casi_siempre",
      "PED-02": "a_veces",
      "GLO-01": "8",
      contact_request: "no",
    },
  },
  {
    id: "r4",
    title: "Ruta 4 · Cuidador de adulto mayor que solicita contacto",
    desc: "Activa módulo de cuidador y service recovery.",
    answers: {
      respondent: "cuidador",
      proxy_level: "info_frecuente",
      hosp_type: "medica",
      "TRA-01": "casi_siempre",
      "ALT-01": "a_veces",
      "CUI-01": "a_veces",
      "CUI-02": "nunca",
      "POST-01": "si",
      "POST-02": ["medicamentos", "citas"],
      contact_request: "si",
      contact_name: "María (demo)",
      contact_phone: "999 000 000",
      contact_channel: "whatsapp",
      contact_time: "manana",
    },
  },
  {
    id: "r5",
    title: "Ruta 5 · Preocupación de seguridad → canales de ayuda",
    desc: "Seguridad negativa activa seguimiento.",
    answers: {
      respondent: "paciente",
      hosp_type: "quirurgica",
      "TRA-01": "casi_siempre",
      "COM-01": "a_veces",
      "SEG-01": "a_veces",
      "SEG-02": ["medicamentos", "demora"],
      "CIR-01": "casi_siempre",
      "CIR-02": "a_veces",
      contact_request: "si",
    },
  },
];

export function Reference({
  onBack,
  onLaunchRoute,
}: {
  onBack: () => void;
  onLaunchRoute: (r: TestRoute) => void;
}) {
  const [tab, setTab] = useState<Tab>("ds");
  return (
    <div className="mx-auto w-full max-w-[760px] px-5 py-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 rounded-[8px] py-2 pr-3 text-[15px] text-neutral-700 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ChevronLeft className="size-5" aria-hidden /> Volver a la encuesta
      </button>
      <h1 className="mt-2 text-[26px] leading-[34px] text-neutral-950" style={{ fontWeight: 600 }}>
        Documentación del prototipo
      </h1>
      <p className="mt-1 text-[15px] text-neutral-500">
        Patient Journey Intelligence · PREMs · Material para validación y handoff.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-full border px-4 py-2 text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              tab === t.id
                ? "border-primary-600 bg-primary-700 text-white"
                : "border-neutral-300 bg-white text-neutral-700 hover:border-primary-600"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === "ds" && <DesignSystem />}
        {tab === "nav" && <NavMap />}
        {tab === "gov" && <Governance />}
        {tab === "events" && <Events />}
        {tab === "routes" && <Routes onLaunchRoute={onLaunchRoute} />}
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-6 rounded-[16px] border border-neutral-200 bg-white p-5">
      <h2 className="mb-4 text-[18px] text-neutral-950" style={{ fontWeight: 600 }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function DesignSystem() {
  return (
    <>
      <Card title="Paleta de color">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {COLORS.map(([name, hex]) => (
            <div key={name} className="overflow-hidden rounded-[10px] border border-neutral-200">
              <div className="h-12" style={{ background: hex }} />
              <div className="px-3 py-2">
                <div className="text-[13px] text-neutral-950">{name}</div>
                <div className="text-[12px] text-neutral-500">{hex}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[13px] text-neutral-500">
          Contraste verificado para texto/fondo según WCAG 2.2 AA. El color nunca es el
          único indicador de estado.
        </p>
      </Card>
      <Card title="Tipografía (Inter)">
        <ul className="space-y-2">
          {TYPE_SCALE.map(([name, spec]) => (
            <li key={name} className="flex items-center justify-between border-b border-neutral-100 pb-2">
              <span className="text-[16px] text-neutral-950">{name}</span>
              <span className="text-[13px] text-neutral-500">{spec}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Card title="Tokens de radio y espaciado">
        <div className="flex flex-wrap gap-3">
          {[
            ["sm", 8],
            ["md", 12],
            ["lg", 16],
            ["xl", 24],
          ].map(([n, r]) => (
            <div key={n} className="text-center">
              <div
                className="size-16 border-2 border-primary-600 bg-primary-50"
                style={{ borderRadius: `${r}px` }}
              />
              <div className="mt-1 text-[12px] text-neutral-500">{n} · {r}px</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[13px] text-neutral-500">
          Espaciado en múltiplos de 4. Botón primario ≥ 54px de alto. Área táctil ≥ 44px.
        </p>
      </Card>
      <Card title="Componentes principales">
        <div className="flex flex-wrap gap-2">
          {[
            "AppHeader", "ProgressIndicator", "QuestionCard", "OptionCard", "RatingScale",
            "PrimaryButton", "SecondaryButton", "TextArea", "SelectField", "Accordion",
            "PrivacyNotice", "AlertBanner", "Modal", "BottomSheet", "AccessibilityMenu",
            "HelpMenu", "SaveStatus", "SkeletonLoader", "ReviewSummary", "ContactRequest",
          ].map((c) => (
            <span key={c} className="rounded-full bg-neutral-100 px-3 py-1 text-[13px] text-neutral-700">
              {c}
            </span>
          ))}
        </div>
      </Card>
    </>
  );
}

function NavMap() {
  return (
    <Card title="Mapa de navegación y ramificaciones">
      <ol className="space-y-2">
        {NAV_FLOW.map((s, i) => {
          const branch = s.startsWith("↳");
          return (
            <li
              key={i}
              className={`flex items-start gap-3 rounded-[10px] px-3 py-2.5 ${
                branch ? "ml-6 bg-warning-100/50" : "bg-neutral-50"
              }`}
            >
              {!branch && (
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-700 text-[12px] text-white">
                  {NAV_FLOW.slice(0, i + 1).filter((x) => !x.startsWith("↳")).length}
                </span>
              )}
              <span className={`text-[15px] ${branch ? "text-warning-700" : "text-neutral-800"}`}>
                {s}
              </span>
            </li>
          );
        })}
      </ol>
    </Card>
  );
}

function Governance() {
  return (
    <Card title="Gobernanza de preguntas (Question Governance)">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-[13px]">
          <thead>
            <tr className="border-b-2 border-neutral-200 text-neutral-500">
              <th className="py-2 pr-3">ID</th>
              <th className="py-2 pr-3">Dominio</th>
              <th className="py-2 pr-3">Pregunta</th>
              <th className="py-2 pr-3">Indicador</th>
              <th className="py-2 pr-3">Finalidad</th>
            </tr>
          </thead>
          <tbody>
            {ALL_QUESTIONS.filter((q) => /-\d/.test(q.id)).map((q) => (
              <tr key={q.id} className="border-b border-neutral-100 align-top">
                <td className="py-2 pr-3 text-neutral-950">{q.id}</td>
                <td className="py-2 pr-3 text-neutral-700">{q.domain}</td>
                <td className="py-2 pr-3 text-neutral-700">{q.question}</td>
                <td className="py-2 pr-3 text-neutral-500">{q.indicator || "—"}</td>
                <td className="py-2 pr-3 text-neutral-500">{q.purpose || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function Events() {
  return (
    <Card title="Eventos sugeridos para analítica">
      <p className="mb-4 text-[14px] text-neutral-700">
        No se registra texto libre, diagnósticos, números de historia, teléfono, correo ni
        contenido de respuestas sensibles.
      </p>
      <div className="flex flex-wrap gap-2">
        {ANALYTICS_EVENTS.map((e) => (
          <code key={e} className="rounded-[8px] bg-neutral-100 px-2.5 py-1 text-[13px] text-neutral-800">
            {e}
          </code>
        ))}
      </div>
    </Card>
  );
}

function Routes({ onLaunchRoute }: { onLaunchRoute: (r: TestRoute) => void }) {
  return (
    <Card title="Rutas de prueba clicables">
      <p className="mb-4 text-[14px] text-neutral-700">
        Cargue una ruta para revisar la confirmación con respuestas ficticias precargadas.
      </p>
      <ul className="space-y-3">
        {TEST_ROUTES.map((r) => (
          <li key={r.id} className="flex items-center justify-between gap-3 rounded-[12px] border border-neutral-200 p-4">
            <div>
              <div className="text-[15px] text-neutral-950">{r.title}</div>
              <div className="text-[13px] text-neutral-500">{r.desc}</div>
            </div>
            <button
              type="button"
              onClick={() => onLaunchRoute(r)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-[10px] bg-primary-700 px-3.5 py-2 text-[14px] text-white hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              style={{ fontWeight: 600 }}
            >
              <Play className="size-4" aria-hidden /> Cargar
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
