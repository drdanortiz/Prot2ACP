// ============================================================================
// Chrome de la app: header institucional, menú de ayuda urgente y accesibilidad
// ============================================================================
import { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HeartPulse,
  LifeBuoy,
  Type,
  X,
  Phone,
  Stethoscope,
  AlertTriangle,
} from "lucide-react";
import { PrimaryButton, SecondaryButton, LinkButton, InfoBanner } from "./ui-kit";

// ---------------------------------------------------------------------------
// AppHeader
// ---------------------------------------------------------------------------
export function AppHeader({
  onHelp,
  onAccessibility,
}: {
  onHelp: () => void;
  onAccessibility: () => void;
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[560px] items-center justify-between gap-2 px-5 py-3">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Logotipo provisional / espacio editable para la marca */}
          <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary-700 text-white">
            <HeartPulse className="size-5" aria-hidden />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[15px] text-neutral-950" style={{ fontWeight: 600 }}>
              Tu Experiencia de Atención
            </span>
            <span className="block truncate text-[12px] text-neutral-500">
              Clínica San Bernardo · Demo
            </span>
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={onAccessibility}
            aria-label="Opciones de lectura"
            className="inline-flex size-11 items-center justify-center rounded-[10px] text-neutral-700 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Type className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={onHelp}
            className="inline-flex h-11 items-center gap-1.5 rounded-[10px] px-3 text-[14px] text-primary-700 transition-colors hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <LifeBuoy className="size-5" aria-hidden />
            <span className="hidden sm:inline">Ayuda</span>
          </button>
        </div>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Modal genérico (bottom-sheet en móvil)
// ---------------------------------------------------------------------------
export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <motion.div
            className="absolute inset-0 bg-neutral-950/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="relative w-full max-w-[560px] rounded-t-[24px] bg-white p-5 shadow-xl sm:rounded-[20px]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h2 className="text-[20px] text-neutral-950" style={{ fontWeight: 600 }}>
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="-mr-1 inline-flex size-10 shrink-0 items-center justify-center rounded-[10px] text-neutral-500 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------
// HelpModal — ayuda urgente / emergencia
// ---------------------------------------------------------------------------
export function HelpModal({
  open,
  onClose,
  onEmergency,
}: {
  open: boolean;
  onClose: () => void;
  onEmergency: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose} title="¿Necesita ayuda ahora?">
      <InfoBanner tone="warning" icon={<AlertTriangle className="size-5" />}>
        Esta encuesta no reemplaza una evaluación médica ni es un canal de emergencia.
      </InfoBanner>
      <div className="mt-4 space-y-3">
        <SecondaryButton onClick={onEmergency}>
          <span className="flex items-center gap-2">
            <Stethoscope className="size-5" aria-hidden />
            Ver canales de atención de la clínica
          </span>
        </SecondaryButton>
        <a
          href="tel:106"
          className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-[12px] border-2 border-error-700 bg-white px-6 text-[16px] text-error-700 transition-colors hover:bg-error-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ fontWeight: 600 }}
        >
          <Phone className="size-5" aria-hidden />
          Llamar a emergencia (106 SAMU)
        </a>
        <PrimaryButton onClick={onClose}>Continuar con la encuesta</PrimaryButton>
      </div>
      <p className="mt-3 text-center text-[13px] text-neutral-500">
        Demo: los números y canales son ficticios.
      </p>
    </Modal>
  );
}

// ---------------------------------------------------------------------------
// AccessibilityMenu — tamaño de texto y movimiento reducido
// ---------------------------------------------------------------------------
export function AccessibilityMenu({
  open,
  onClose,
  textScale,
  setTextScale,
}: {
  open: boolean;
  onClose: () => void;
  textScale: number;
  setTextScale: (n: number) => void;
}) {
  const sizes = [
    { v: 1, label: "Normal", sample: "16 px" },
    { v: 1.15, label: "Grande", sample: "18 px" },
    { v: 1.3, label: "Muy grande", sample: "21 px" },
  ];
  return (
    <Modal open={open} onClose={onClose} title="Opciones de lectura">
      <p className="mb-4 text-[15px] leading-[22px] text-neutral-700">
        Ajuste el tamaño del texto para leer con mayor comodidad. El cambio se aplica a
        toda la encuesta.
      </p>
      <div className="space-y-3">
        {sizes.map((s) => {
          const sel = textScale === s.v;
          return (
            <button
              key={s.v}
              type="button"
              onClick={() => setTextScale(s.v)}
              aria-pressed={sel}
              className={`flex w-full items-center justify-between rounded-[12px] border-2 px-4 py-3.5 text-left transition-colors min-h-[56px]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                ${sel ? "border-primary-600 bg-primary-50" : "border-neutral-200 bg-white hover:border-primary-600/60"}`}
            >
              <span style={{ fontSize: `${s.v * 16}px`, fontWeight: 600 }} className="text-neutral-950">
                {s.label}
              </span>
              <span className="text-[13px] text-neutral-500">{s.sample}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-[14px] leading-5 text-neutral-500">
        También puede usar el zoom de su navegador. La interfaz se adapta sin perder
        información. El movimiento reducido del sistema se respeta automáticamente.
      </p>
      <div className="mt-5">
        <PrimaryButton onClick={onClose}>Listo</PrimaryButton>
      </div>
    </Modal>
  );
}
