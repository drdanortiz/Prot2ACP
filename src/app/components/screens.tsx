// ============================================================================
// Pantallas de contenido del flujo (no genéricas de pregunta)
// ============================================================================
import { ReactNode, useState } from "react";
import {
  ShieldCheck,
  Lock,
  ChevronDown,
  Clock,
  HeartHandshake,
  CheckCircle2,
  CircleHelp,
  MessageSquareText,
  PhoneCall,
  LogIn,
  Home,
  Activity,
  DoorOpen,
  Stethoscope,
  WifiOff,
  AlertCircle,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Screen,
  PrimaryButton,
  SecondaryButton,
  LinkButton,
  BackButton,
  NavFooter,
  SecurityChip,
  InfoBanner,
  OptionCard,
} from "./ui-kit";
import { Answers, isProxy } from "../survey/data";

// ---------------------------------------------------------------------------
// Campos de formulario sencillos y accesibles
// ---------------------------------------------------------------------------
function Field({
  id,
  label,
  hint,
  children,
  required,
}: {
  id: string;
  label: string;
  hint?: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[15px] text-neutral-800" style={{ fontWeight: 600 }}>
        {label} {!required && <span className="text-neutral-500" style={{ fontWeight: 400 }}>(opcional)</span>}
      </label>
      {hint && <p className="mb-1.5 text-[14px] text-neutral-500">{hint}</p>}
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-[12px] border-2 border-neutral-300 bg-white px-4 py-3 text-[16px] text-neutral-950 placeholder:text-neutral-500 transition-colors focus:border-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[52px]";

// ===========================================================================
// 1. LANDING
// ===========================================================================
export function LandingScreen({
  onStart,
  onPrivacy,
  onAccessibility,
}: {
  onStart: () => void;
  onPrivacy: () => void;
  onAccessibility: () => void;
}) {
  return (
    <Screen className="flex min-h-[calc(100vh-110px)] flex-col justify-center py-10">
      <div className="mb-7 flex justify-center">
        <span className="flex size-16 items-center justify-center rounded-[20px] bg-primary-100 text-primary-700">
          <HeartHandshake className="size-8" aria-hidden />
        </span>
      </div>
      <p className="text-center text-[13px] uppercase tracking-wide text-primary-700">
        Tu Experiencia de Atención
      </p>
      <h1 className="mt-2 text-center text-[28px] leading-[36px] text-neutral-950" style={{ fontWeight: 600 }}>
        Queremos conocer cómo fue su atención
      </h1>
      <p className="mx-auto mt-4 max-w-[440px] text-center text-[16px] leading-6 text-neutral-700">
        Sus respuestas nos ayudarán a identificar qué funcionó bien y qué debemos mejorar
        en la atención de pacientes y familias.
      </p>

      <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-[14px] text-neutral-700">
          <Clock className="size-4" aria-hidden /> Toma unos 4 minutos
        </span>
        <SecurityChip />
      </div>

      <p className="mx-auto mt-5 max-w-[440px] text-center text-[15px] text-neutral-500">
        Participar es voluntario y no afectará su atención.
      </p>

      <div className="mt-8 space-y-3">
        <PrimaryButton onClick={onStart}>Comenzar</PrimaryButton>
        <div className="flex flex-col items-center gap-1">
          <LinkButton onClick={onPrivacy}>Conocer cómo usamos la información</LinkButton>
          <LinkButton onClick={onAccessibility}>Opciones de lectura</LinkButton>
        </div>
      </div>
    </Screen>
  );
}

// ===========================================================================
// 2. PRIVACIDAD EN LENGUAJE CLARO
// ===========================================================================
function PrivacyRow({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary-600" aria-hidden />
      <span className="text-[16px] leading-6 text-neutral-800">{children}</span>
    </li>
  );
}

export function PrivacyScreen({
  onContinue,
  onBack,
}: {
  onContinue: () => void;
  onBack: () => void;
}) {
  const [openDetail, setOpenDetail] = useState(false);
  return (
    <>
      <Screen className="py-6">
        <div className="mb-4 flex items-center gap-2">
          <Lock className="size-5 text-primary-700" aria-hidden />
          <h1 className="text-[24px] leading-8 text-neutral-950" style={{ fontWeight: 600 }}>
            Su privacidad
          </h1>
        </div>

        <p className="text-[16px] leading-6 text-neutral-800">
          Usaremos sus respuestas para analizar y mejorar la atención. Algunas respuestas
          podrán relacionarse con información básica de la hospitalización para entender
          mejor la experiencia. Solo el personal autorizado podrá acceder a información
          identificable.
        </p>

        <ul className="mt-5 space-y-3 rounded-[16px] border border-neutral-200 bg-white p-5">
          <PrivacyRow>La información la recopila la clínica donde recibió la atención.</PrivacyRow>
          <PrivacyRow>El fin es analizar y mejorar la atención de pacientes y familias.</PrivacyRow>
          <PrivacyRow>Participar es voluntario; puede no responder cualquier pregunta.</PrivacyRow>
          <PrivacyRow>Sus respuestas reciben tratamiento confidencial.</PrivacyRow>
          <PrivacyRow>Si más adelante solicita contacto, esa parte dejará de ser anónima.</PrivacyRow>
        </ul>

        {/* Acordeón: información completa */}
        <div className="mt-4 overflow-hidden rounded-[12px] border border-neutral-200 bg-white">
          <button
            type="button"
            onClick={() => setOpenDetail((v) => !v)}
            aria-expanded={openDetail}
            className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-[16px] text-neutral-950 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{ fontWeight: 600 }}
          >
            Leer información completa
            <ChevronDown
              className={`size-5 shrink-0 text-neutral-500 transition-transform ${openDetail ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
          {openDetail && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="space-y-3 border-t border-neutral-200 px-4 py-4 text-[15px] leading-[22px] text-neutral-700">
                <p>
                  Los datos se almacenan de forma segura y se utilizan de manera agregada
                  para construir indicadores de experiencia, identificar tendencias y
                  priorizar mejoras. No se utilizan con fines comerciales ni se comparten
                  con terceros sin base legal.
                </p>
                <p>
                  Usted puede ejercer sus derechos de acceso, rectificación y cancelación
                  según la Ley N.° 29733 de Protección de Datos Personales del Perú.
                </p>
                <LinkButton>Ver política de privacidad completa</LinkButton>
              </div>
            </motion.div>
          )}
        </div>
      </Screen>
      <NavFooter onBack={onBack} onNext={onContinue} />
    </>
  );
}

// ===========================================================================
// 3. ACEPTACIÓN
// ===========================================================================
export function ConsentScreen({
  onYes,
  onNo,
}: {
  onYes: () => void;
  onNo: () => void;
}) {
  return (
    <Screen className="flex min-h-[calc(100vh-110px)] flex-col justify-center py-10">
      <h1 className="text-center text-[26px] leading-[34px] text-neutral-950" style={{ fontWeight: 600 }}>
        ¿Desea compartir su experiencia?
      </h1>
      <p className="mx-auto mt-3 max-w-[420px] text-center text-[16px] leading-6 text-neutral-700">
        Su decisión es libre y no afectará la atención que reciba ahora o en el futuro.
      </p>
      <div className="mt-8 space-y-3">
        <PrimaryButton onClick={onYes}>Sí, deseo continuar</PrimaryButton>
        <SecondaryButton onClick={onNo}>Prefiero no participar</SecondaryButton>
      </div>
    </Screen>
  );
}

export function DeclinedScreen({ onReconsider }: { onReconsider: () => void }) {
  return (
    <Screen className="flex min-h-[calc(100vh-110px)] flex-col justify-center py-10 text-center">
      <div className="mb-6 flex justify-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
          <HeartHandshake className="size-8" aria-hidden />
        </span>
      </div>
      <h1 className="text-[24px] leading-8 text-neutral-950" style={{ fontWeight: 600 }}>
        Gracias de todas formas
      </h1>
      <p className="mx-auto mt-3 max-w-[420px] text-[16px] leading-6 text-neutral-700">
        Respetamos su decisión de no participar. Puede cerrar esta página cuando lo desee.
        Si cambia de opinión, puede volver a comenzar.
      </p>
      <div className="mt-8">
        <SecondaryButton onClick={onReconsider}>Volver a comenzar</SecondaryButton>
      </div>
    </Screen>
  );
}

// ===========================================================================
// 7. INTRODUCCIÓN AL RECORRIDO
// ===========================================================================
export function IntroScreen({
  onContinue,
  onBack,
  answers,
}: {
  onContinue: () => void;
  onBack: () => void;
  answers: Answers;
}) {
  const proxy = isProxy(answers);
  const steps = [
    { icon: LogIn, label: "Ingreso" },
    { icon: Activity, label: "Atención" },
    { icon: DoorOpen, label: "Alta" },
    { icon: Home, label: "Cuidado posterior" },
  ];
  return (
    <>
      <Screen className="py-8">
        <h1 className="text-[24px] leading-8 text-neutral-950" style={{ fontWeight: 600 }}>
          Ahora queremos conocer {proxy ? "la experiencia del paciente" : "su experiencia"} durante la hospitalización
        </h1>
        <p className="mt-3 text-[16px] leading-6 text-neutral-700">
          No hay respuestas correctas o incorrectas. Responda según lo que usted vivió u
          observó.
        </p>

        <div className="mt-8 flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s.label} className="flex flex-1 flex-col items-center">
              <div className="flex w-full items-center">
                <span
                  className={`mx-auto flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-700 ${i === 0 ? "" : ""}`}
                >
                  <s.icon className="size-5" aria-hidden />
                </span>
              </div>
              <span className="mt-2 text-center text-[13px] leading-tight text-neutral-700">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </Screen>
      <NavFooter onBack={onBack} onNext={onContinue} />
    </>
  );
}

// ===========================================================================
// 12. COMENTARIOS ABIERTOS
// ===========================================================================
function CharCounter({ value, max }: { value: string; max: number }) {
  return (
    <p className={`mt-1 text-right text-[13px] ${value.length > max ? "text-error-700" : "text-neutral-500"}`}>
      {value.length} / {max}
    </p>
  );
}

export function CommentsScreen({
  best,
  improve,
  setBest,
  setImprove,
  onNext,
  onBack,
}: {
  best: string;
  improve: string;
  setBest: (v: string) => void;
  setImprove: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const MAX = 1000;
  return (
    <>
      <Screen className="py-6">
        <div className="mb-2 flex items-center gap-2">
          <MessageSquareText className="size-5 text-primary-700" aria-hidden />
          <h1 className="text-[24px] leading-8 text-neutral-950" style={{ fontWeight: 600 }}>
            Cuéntenos algo más sobre su experiencia
          </h1>
        </div>
        <p className="text-[16px] leading-6 text-neutral-700">
          Puede escribir solo lo que considere importante. Este espacio es opcional.
        </p>

        <div className="mt-6 space-y-6">
          <Field id="best" label="¿Qué fue lo mejor de la atención?">
            <textarea
              id="best"
              value={best}
              onChange={(e) => setBest(e.target.value)}
              maxLength={MAX}
              rows={4}
              placeholder="Por ejemplo: una explicación clara, el trato recibido o una ayuda que fue importante para usted."
              className={inputCls + " resize-y"}
            />
            <CharCounter value={best} max={MAX} />
          </Field>

          <Field id="improve" label="¿Qué debería mejorar?">
            <textarea
              id="improve"
              value={improve}
              onChange={(e) => setImprove(e.target.value)}
              maxLength={MAX}
              rows={4}
              placeholder="Por ejemplo: demoras, información poco clara, coordinación, limpieza o preparación para el alta."
              className={inputCls + " resize-y"}
            />
            <CharCounter value={improve} max={MAX} />
          </Field>

          <InfoBanner tone="info" icon={<ShieldCheck className="size-5" />}>
            Evite incluir información que no desee compartir, como datos de otras personas.
          </InfoBanner>
        </div>
      </Screen>
      <NavFooter onBack={onBack} onNext={onNext} nextLabel="Continuar" />
    </>
  );
}

// ===========================================================================
// 13. SERVICE RECOVERY / CONTACTO
// ===========================================================================
export function ContactScreen({
  answers,
  setField,
  onNext,
  onBack,
}: {
  answers: Answers;
  setField: (id: string, v: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const wants = answers.contact_request as string | undefined;
  const showForm = wants === "si";
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    if (!wants) {
      setError("Por favor elija una opción para continuar.");
      return;
    }
    if (showForm) {
      const name = (answers.contact_name as string) || "";
      const phone = (answers.contact_phone as string) || "";
      if (!name.trim() || !phone.trim()) {
        setError("Para que podamos comunicarnos, indique su nombre y un teléfono.");
        return;
      }
    }
    setError(null);
    onNext();
  };

  return (
    <>
      <Screen className="py-6">
        <div className="mb-2 flex items-center gap-2">
          <PhoneCall className="size-5 text-primary-700" aria-hidden />
          <h1 className="text-[24px] leading-8 text-neutral-950" style={{ fontWeight: 600 }}>
            ¿Necesita que la clínica se comunique con usted?
          </h1>
        </div>
        <p className="text-[16px] leading-6 text-neutral-700">
          Solicitar contacto es opcional. Si elige esta opción, necesitaremos algunos datos
          para poder comunicarnos.
        </p>

        <div className="mt-5 space-y-3">
          <OptionCard
            label="Sí, deseo que se comuniquen conmigo"
            selected={wants === "si"}
            onSelect={() => setField("contact_request", "si")}
          />
          <OptionCard
            label="No, solo deseo compartir mi experiencia"
            selected={wants === "no"}
            onSelect={() => setField("contact_request", "no")}
          />
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 rounded-[16px] border border-neutral-200 bg-neutral-50 p-5"
          >
            <InfoBanner tone="warning" icon={<AlertCircle className="size-5" />}>
              Al solicitar contacto, esta parte de su respuesta dejará de ser anónima.
              Sus datos serán tratados de forma confidencial.
            </InfoBanner>

            <div className="mt-5 space-y-5">
              <Field id="contact_name" label="Nombre" required>
                <input
                  id="contact_name"
                  className={inputCls}
                  value={(answers.contact_name as string) || ""}
                  onChange={(e) => setField("contact_name", e.target.value)}
                  placeholder="Nombre y apellido"
                  autoComplete="name"
                />
              </Field>
              <Field id="contact_phone" label="Teléfono" required>
                <input
                  id="contact_phone"
                  type="tel"
                  inputMode="tel"
                  className={inputCls}
                  value={(answers.contact_phone as string) || ""}
                  onChange={(e) => setField("contact_phone", e.target.value)}
                  placeholder="Ej. 999 999 999"
                  autoComplete="tel"
                />
              </Field>
              <Field id="contact_email" label="Correo">
                <input
                  id="contact_email"
                  type="email"
                  inputMode="email"
                  className={inputCls}
                  value={(answers.contact_email as string) || ""}
                  onChange={(e) => setField("contact_email", e.target.value)}
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                />
              </Field>
              <Field id="contact_channel" label="Canal preferido">
                <select
                  id="contact_channel"
                  className={inputCls}
                  value={(answers.contact_channel as string) || ""}
                  onChange={(e) => setField("contact_channel", e.target.value)}
                >
                  <option value="">Seleccione una opción</option>
                  <option value="llamada">Llamada telefónica</option>
                  <option value="whatsapp">WhatsApp / mensaje</option>
                  <option value="correo">Correo electrónico</option>
                </select>
              </Field>
              <Field id="contact_time" label="Horario preferido">
                <select
                  id="contact_time"
                  className={inputCls}
                  value={(answers.contact_time as string) || ""}
                  onChange={(e) => setField("contact_time", e.target.value)}
                >
                  <option value="">Seleccione una opción</option>
                  <option value="manana">Mañana (8am – 12pm)</option>
                  <option value="tarde">Tarde (12pm – 6pm)</option>
                  <option value="noche">Noche (6pm – 9pm)</option>
                </select>
              </Field>
              <Field id="contact_reason" label="Motivo general">
                <textarea
                  id="contact_reason"
                  rows={3}
                  className={inputCls + " resize-y"}
                  value={(answers.contact_reason as string) || ""}
                  onChange={(e) => setField("contact_reason", e.target.value)}
                  placeholder="Cuéntenos brevemente en qué podemos ayudarle."
                />
              </Field>
            </div>
          </motion.div>
        )}

        {error && (
          <div className="mt-4">
            <InfoBanner tone="error" icon={<AlertCircle className="size-5" />}>
              {error}
            </InfoBanner>
          </div>
        )}
      </Screen>
      <NavFooter onBack={onBack} onNext={handleNext} />
    </>
  );
}

// ===========================================================================
// 15. REVISIÓN
// ===========================================================================
export function ReviewScreen({
  sections,
  hasComment,
  contactRequested,
  onSubmit,
  onBack,
}: {
  sections: { label: string; count: number }[];
  hasComment: boolean;
  contactRequested: boolean;
  onSubmit: () => void;
  onBack: () => void;
}) {
  return (
    <>
      <Screen className="py-8">
        <h1 className="text-[26px] leading-[34px] text-neutral-950" style={{ fontWeight: 600 }}>
          Ya casi terminamos
        </h1>
        <p className="mt-3 text-[16px] leading-6 text-neutral-700">
          Revise un resumen antes de enviar. No es obligatorio revisar todas las respuestas.
        </p>

        <ul className="mt-6 space-y-3">
          {sections.map((s) => (
            <li
              key={s.label}
              className="flex items-center justify-between rounded-[12px] border border-neutral-200 bg-white px-4 py-3.5"
            >
              <span className="flex items-center gap-2.5 text-[16px] text-neutral-950">
                <CheckCircle2 className="size-5 text-success-600" aria-hidden />
                {s.label}
              </span>
              <span className="text-[14px] text-neutral-500">
                {s.count} {s.count === 1 ? "respuesta" : "respuestas"}
              </span>
            </li>
          ))}
          <li className="flex items-center justify-between rounded-[12px] border border-neutral-200 bg-white px-4 py-3.5">
            <span className="flex items-center gap-2.5 text-[16px] text-neutral-950">
              <MessageSquareText className="size-5 text-neutral-500" aria-hidden />
              Comentario
            </span>
            <span className="text-[14px] text-neutral-500">{hasComment ? "Agregado" : "Sin comentario"}</span>
          </li>
          <li className="flex items-center justify-between rounded-[12px] border border-neutral-200 bg-white px-4 py-3.5">
            <span className="flex items-center gap-2.5 text-[16px] text-neutral-950">
              <PhoneCall className="size-5 text-neutral-500" aria-hidden />
              Solicitud de contacto
            </span>
            <span className="text-[14px] text-neutral-500">
              {contactRequested ? "Solicitada" : "No solicitada"}
            </span>
          </li>
        </ul>
      </Screen>
      <NavFooter onBack={onBack} onNext={onSubmit} nextLabel="Enviar mi experiencia" />
    </>
  );
}

// ===========================================================================
// 16. CONFIRMACIÓN
// ===========================================================================
export function ConfirmationScreen({
  contactRequested,
  refNumber,
  onRestart,
  onChannels,
}: {
  contactRequested: boolean;
  refNumber: string;
  onRestart: () => void;
  onChannels: () => void;
}) {
  return (
    <Screen className="flex min-h-[calc(100vh-110px)] flex-col justify-center py-10 text-center">
      <div className="mb-6 flex justify-center">
        <motion.span
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex size-16 items-center justify-center rounded-full bg-success-100 text-success-700"
        >
          <CheckCircle2 className="size-9" aria-hidden />
        </motion.span>
      </div>
      <h1 className="text-[26px] leading-[34px] text-neutral-950" style={{ fontWeight: 600 }}>
        Gracias por compartir su experiencia
      </h1>
      <p className="mx-auto mt-3 max-w-[440px] text-[16px] leading-6 text-neutral-700">
        Sus respuestas serán analizadas junto con las de otros pacientes y familias para
        identificar oportunidades de mejora.
      </p>

      <div className="mx-auto mt-6 w-full max-w-[440px]">
        <InfoBanner tone={contactRequested ? "info" : "success"}>
          {contactRequested ? (
            <>
              Hemos registrado su solicitud de contacto. El equipo responsable utilizará el
              canal que indicó.
            </>
          ) : (
            <>No se realizará contacto individual a partir de esta respuesta.</>
          )}
        </InfoBanner>
      </div>

      <p className="mt-5 text-[14px] text-neutral-500">
        Número de referencia: <span className="text-neutral-800">{refNumber}</span>
      </p>

      <div className="mx-auto mt-8 w-full max-w-[440px] space-y-3">
        <PrimaryButton onClick={onRestart}>Finalizar</PrimaryButton>
        <LinkButton onClick={onChannels}>Ver canales de atención de la clínica</LinkButton>
      </div>
    </Screen>
  );
}

// ===========================================================================
// CANALES DE ATENCIÓN (acceso desde ayuda / cierre)
// ===========================================================================
export function ChannelsScreen({ onBack }: { onBack: () => void }) {
  const items = [
    { icon: PhoneCall, label: "Central telefónica", value: "(01) 555 0000" },
    { icon: Stethoscope, label: "Emergencias", value: "106 · SAMU" },
    { icon: MessageSquareText, label: "Atención al paciente", value: "experiencia@clinica.demo" },
  ];
  return (
    <Screen className="py-8">
      <BackButton onClick={onBack} />
      <h1 className="mt-2 text-[24px] leading-8 text-neutral-950" style={{ fontWeight: 600 }}>
        Canales de atención
      </h1>
      <p className="mt-2 text-[15px] text-neutral-500">
        Datos ficticios para la demostración.
      </p>
      <ul className="mt-6 space-y-3">
        {items.map((i) => (
          <li key={i.label} className="flex items-center gap-3 rounded-[12px] border border-neutral-200 bg-white px-4 py-4">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
              <i.icon className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block text-[15px] text-neutral-500">{i.label}</span>
              <span className="block text-[16px] text-neutral-950">{i.value}</span>
            </span>
          </li>
        ))}
      </ul>
    </Screen>
  );
}

// ===========================================================================
// ESTADOS EXCEPCIONALES
// ===========================================================================
export function LoadingScreen() {
  return (
    <Screen className="py-10">
      <div className="space-y-4">
        <div className="h-2 w-1/3 animate-pulse rounded-full bg-neutral-200" />
        <div className="h-7 w-3/4 animate-pulse rounded-[8px] bg-neutral-200" />
        <div className="h-5 w-1/2 animate-pulse rounded-[8px] bg-neutral-100" />
        <div className="mt-6 space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-14 w-full animate-pulse rounded-[12px] bg-neutral-100" />
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-[14px] text-neutral-500">Cargando su encuesta…</p>
    </Screen>
  );
}

export function OfflineBanner({ online }: { online: boolean }) {
  if (online) return null;
  return (
    <div className="bg-neutral-800 px-4 py-2 text-center text-[13px] text-white">
      <span className="inline-flex items-center gap-2">
        <WifiOff className="size-4" aria-hidden />
        Sin conexión. Sus respuestas se guardan en este dispositivo y se enviarán al
        reconectar.
      </span>
    </div>
  );
}

export function ResumeBanner({
  onResume,
  onRestart,
}: {
  onResume: () => void;
  onRestart: () => void;
}) {
  return (
    <Screen className="flex min-h-[calc(100vh-110px)] flex-col justify-center py-10 text-center">
      <div className="mb-6 flex justify-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-primary-100 text-primary-700">
          <CircleHelp className="size-8" aria-hidden />
        </span>
      </div>
      <h1 className="text-[24px] leading-8 text-neutral-950" style={{ fontWeight: 600 }}>
        Encontramos respuestas guardadas
      </h1>
      <p className="mx-auto mt-3 max-w-[420px] text-[16px] leading-6 text-neutral-700">
        Dejó una encuesta a medio responder en este dispositivo. ¿Desea continuar donde la
        dejó?
      </p>
      <div className="mt-8 space-y-3">
        <PrimaryButton onClick={onResume}>Continuar donde quedé</PrimaryButton>
        <SecondaryButton onClick={onRestart}>Comenzar de nuevo</SecondaryButton>
      </div>
    </Screen>
  );
}
