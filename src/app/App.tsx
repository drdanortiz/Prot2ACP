// ============================================================================
// "Tu Experiencia de Atención"
// Prototipo web mobile-first de Patient Journey Intelligence (PREMs)
// para IPRESS privadas del Perú. Datos ficticios — modo demostración.
// ============================================================================
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Answers,
  Question,
  IDENTITY_QUESTIONS,
  CORE_QUESTIONS,
  ADAPTIVE_QUESTIONS,
  SECTIONS,
  SectionId,
} from "./survey/data";
import { AppHeader, HelpModal, AccessibilityMenu } from "./components/AppChrome";
import { DemoBadge } from "./components/ui-kit";
import { QuestionScreen } from "./components/QuestionScreen";
import {
  LandingScreen,
  PrivacyScreen,
  ConsentScreen,
  DeclinedScreen,
  IntroScreen,
  CommentsScreen,
  ContactScreen,
  ReviewScreen,
  ConfirmationScreen,
  ChannelsScreen,
  LoadingScreen,
  OfflineBanner,
  ResumeBanner,
} from "./components/screens";
import { Reference, TestRoute } from "./components/Reference";

const STORAGE_KEY = "tea-prototype-v1";

// ---- Tipos de pasos del flujo lineal ----
type Step =
  | { kind: "question"; q: Question }
  | { kind: "intro" }
  | { kind: "comments" }
  | { kind: "contact" }
  | { kind: "review" };

// Construye el flujo activo según las respuestas (lógica adaptativa)
function buildFlow(answers: Answers): Step[] {
  const visible = (q: Question) => !q.when || q.when(answers);
  const steps: Step[] = [];
  IDENTITY_QUESTIONS.filter(visible).forEach((q) => steps.push({ kind: "question", q }));
  steps.push({ kind: "intro" });
  CORE_QUESTIONS.filter(visible).forEach((q) => steps.push({ kind: "question", q }));
  ADAPTIVE_QUESTIONS.filter(visible).forEach((q) => steps.push({ kind: "question", q }));
  steps.push({ kind: "comments" });
  steps.push({ kind: "contact" });
  steps.push({ kind: "review" });
  return steps;
}

function stepSection(step: Step): SectionId {
  if (step.kind === "question") return step.q.section === "sobre-usted" ? "sobre-usted" : step.q.section;
  if (step.kind === "intro") return "experiencia";
  if (step.kind === "comments") return "comentarios";
  if (step.kind === "contact") return "contacto";
  return "finalizar";
}

type Phase =
  | "loading"
  | "resume"
  | "landing"
  | "privacy"
  | "consent"
  | "declined"
  | "flow"
  | "confirmation"
  | "channels"
  | "reference";

export default function App() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [answers, setAnswers] = useState<Answers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  const [a11yOpen, setA11yOpen] = useState(false);
  const [textScale, setTextScale] = useState(1);
  const [online, setOnline] = useState(true);
  const [channelsReturn, setChannelsReturn] = useState<Phase>("confirmation");
  const [refNumber] = useState(
    () => "TEA-" + Math.random().toString(36).slice(2, 7).toUpperCase()
  );
  const reducedMotion = useReducedMotion();

  const flow = useMemo(() => buildFlow(answers), [answers]);
  const current = flow[Math.min(stepIndex, flow.length - 1)];

  // --- Carga inicial: detectar progreso guardado ---
  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const saved = JSON.parse(raw);
          if (saved?.phase === "flow" && saved.answers) {
            setAnswers(saved.answers);
            setStepIndex(saved.stepIndex || 0);
            setPhase("resume");
            return;
          }
        }
      } catch {
        /* ignore corrupt storage */
      }
      setPhase("landing");
    }, 650);
    return () => clearTimeout(t);
  }, []);

  // --- Persistencia (guardado temporal de demostración) ---
  useEffect(() => {
    if (phase === "flow") {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ phase, answers, stepIndex })
        );
      } catch {
        /* storage may be unavailable */
      }
    }
  }, [phase, answers, stepIndex]);

  // --- Escala de texto (accesibilidad) ---
  useEffect(() => {
    document.documentElement.style.fontSize = `${16 * textScale}px`;
    return () => {
      document.documentElement.style.fontSize = "";
    };
  }, [textScale]);

  // --- Estado de conexión ---
  useEffect(() => {
    const up = () => setOnline(true);
    const down = () => setOnline(false);
    window.addEventListener("online", up);
    window.addEventListener("offline", down);
    setOnline(navigator.onLine);
    return () => {
      window.removeEventListener("online", up);
      window.removeEventListener("offline", down);
    };
  }, []);

  // --- Helpers de respuestas ---
  const setAnswer = (id: string, v: string | string[]) =>
    setAnswers((a) => ({ ...a, [id]: v }));

  const startFresh = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAnswers({});
    setStepIndex(0);
  };

  const goNext = () => setStepIndex((i) => Math.min(i + 1, flow.length - 1));
  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

  const submit = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPhase("confirmation");
  };

  const launchTestRoute = (r: TestRoute) => {
    setAnswers(r.answers);
    setRefAndConfirm();
  };
  const setRefAndConfirm = () => setPhase("confirmation");

  // --- Progreso por secciones ---
  const progressInfo = useMemo(() => {
    const presentSections = SECTIONS.filter((s) =>
      flow.some((st) => stepSection(st) === s.id)
    );
    const curSection = current ? stepSection(current) : "sobre-usted";
    const sectionLabel =
      SECTIONS.find((s) => s.id === curSection)?.label ?? "";
    const sectionOrdinal =
      presentSections.findIndex((s) => s.id === curSection) + 1;
    const value = flow.length ? ((stepIndex + 1) / flow.length) * 100 : 0;
    return {
      sectionLabel,
      stepText: `Paso ${sectionOrdinal} de ${presentSections.length}`,
      value,
    };
  }, [flow, current, stepIndex]);

  // --- Datos derivados para revisión/confirmación ---
  const contactRequested = answers.contact_request === "si";
  const reviewSections = useMemo(() => {
    const groups: Record<string, number> = {};
    flow.forEach((st) => {
      if (st.kind === "question" && answers[st.q.id] !== undefined) {
        const label = SECTIONS.find((s) => s.id === st.q.section)?.label ?? "Otras";
        groups[label] = (groups[label] || 0) + 1;
      }
    });
    return Object.entries(groups).map(([label, count]) => ({ label, count }));
  }, [flow, answers]);
  const hasComment = !!(answers.best || answers.improve);

  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: "easeOut" as const };

  // -------------------------------------------------------------------------
  // Render del cuerpo según la fase
  // -------------------------------------------------------------------------
  const showChrome = !["loading"].includes(phase);

  const renderBody = () => {
    switch (phase) {
      case "loading":
        return <LoadingScreen />;
      case "resume":
        return (
          <ResumeBanner
            onResume={() => setPhase("flow")}
            onRestart={() => {
              startFresh();
              setPhase("landing");
            }}
          />
        );
      case "landing":
        return (
          <LandingScreen
            onStart={() => setPhase("privacy")}
            onPrivacy={() => setPhase("privacy")}
            onAccessibility={() => setA11yOpen(true)}
          />
        );
      case "privacy":
        return (
          <PrivacyScreen
            onContinue={() => setPhase("consent")}
            onBack={() => setPhase("landing")}
          />
        );
      case "consent":
        return (
          <ConsentScreen
            onYes={() => {
              startFresh();
              setPhase("flow");
            }}
            onNo={() => setPhase("declined")}
          />
        );
      case "declined":
        return <DeclinedScreen onReconsider={() => setPhase("landing")} />;
      case "channels":
        return <ChannelsScreen onBack={() => setPhase(channelsReturn)} />;
      case "reference":
        return (
          <Reference
            onBack={() => setPhase("landing")}
            onLaunchRoute={launchTestRoute}
          />
        );
      case "confirmation":
        return (
          <ConfirmationScreen
            contactRequested={contactRequested}
            refNumber={refNumber}
            onRestart={() => {
              startFresh();
              setPhase("landing");
            }}
            onChannels={() => {
              setChannelsReturn("confirmation");
              setPhase("channels");
            }}
          />
        );
      case "flow":
        if (!current) return null;
        if (current.kind === "intro")
          return (
            <IntroScreen answers={answers} onContinue={goNext} onBack={goBack} />
          );
        if (current.kind === "comments")
          return (
            <CommentsScreen
              best={(answers.best as string) || ""}
              improve={(answers.improve as string) || ""}
              setBest={(v) => setAnswer("best", v)}
              setImprove={(v) => setAnswer("improve", v)}
              onNext={goNext}
              onBack={goBack}
            />
          );
        if (current.kind === "contact")
          return (
            <ContactScreen
              answers={answers}
              setField={setAnswer}
              onNext={goNext}
              onBack={goBack}
            />
          );
        if (current.kind === "review")
          return (
            <ReviewScreen
              sections={reviewSections}
              hasComment={hasComment}
              contactRequested={contactRequested}
              onSubmit={submit}
              onBack={goBack}
            />
          );
        // pregunta
        return (
          <QuestionScreen
            question={current.q}
            answers={answers}
            value={answers[current.q.id]}
            onChange={(v) => setAnswer(current.q.id, v)}
            onNext={goNext}
            onBack={stepIndex > 0 ? goBack : undefined}
            progress={progressInfo}
          />
        );
      default:
        return null;
    }
  };

  // Clave de animación: cambia con cada pantalla
  const animKey =
    phase === "flow" && current
      ? current.kind === "question"
        ? current.q.id
        : current.kind + stepIndex
      : phase;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <DemoBadge />
      <OfflineBanner online={online} />
      {showChrome && (
        <AppHeader
          onHelp={() => setHelpOpen(true)}
          onAccessibility={() => setA11yOpen(true)}
        />
      )}

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={animKey}
            initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : -10 }}
            transition={transition}
          >
            {renderBody()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Pie discreto con acceso a documentación del prototipo */}
      {(phase === "landing" || phase === "declined") && (
        <footer className="border-t border-neutral-200 py-4 text-center">
          <button
            type="button"
            onClick={() => setPhase("reference")}
            className="text-[13px] text-neutral-500 underline underline-offset-4 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Ver documentación del prototipo (Design System · Gobernanza · Rutas)
          </button>
        </footer>
      )}

      <HelpModal
        open={helpOpen}
        onClose={() => setHelpOpen(false)}
        onEmergency={() => {
          setHelpOpen(false);
          setChannelsReturn(phase);
          setPhase("channels");
        }}
      />
      <AccessibilityMenu
        open={a11yOpen}
        onClose={() => setA11yOpen(false)}
        textScale={textScale}
        setTextScale={setTextScale}
      />
    </div>
  );
}
