// ============================================================================
// UI kit del prototipo — componentes de alta fidelidad, accesibles y mobile-first
// ============================================================================
import { ReactNode } from "react";
import { Check, ChevronLeft, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

// ---------------------------------------------------------------------------
// Screen — contenedor centrado, ancho máximo, padding lateral seguro
// ---------------------------------------------------------------------------
export function Screen({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[560px] px-5 ${className}`}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Demo badge — etiqueta permanente de modo demostración
// ---------------------------------------------------------------------------
export function DemoBadge() {
  return (
    <div className="flex items-center justify-center gap-2 bg-warning-100 px-4 py-1.5 text-center text-warning-700">
      <span className="text-[13px] leading-tight">
        Prototipo de demostración: no ingresar información real de pacientes.
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SecurityChip — indicador discreto "Información protegida"
// ---------------------------------------------------------------------------
export function SecurityChip({ label = "Información protegida" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-primary-700">
      <ShieldCheck className="size-4" aria-hidden />
      <span className="text-[13px]">{label}</span>
    </span>
  );
}

// ---------------------------------------------------------------------------
// ProgressBar — progreso por secciones
// ---------------------------------------------------------------------------
export function ProgressBar({
  sectionLabel,
  stepText,
  value,
}: {
  sectionLabel: string;
  stepText: string;
  value: number; // 0..100
}) {
  return (
    <div className="w-full">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[13px] uppercase tracking-wide text-primary-700">
          {sectionLabel}
        </span>
        <span className="text-[13px] text-neutral-500">{stepText}</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-neutral-200"
        role="progressbar"
        aria-valuenow={Math.round(value)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progreso: ${Math.round(value)} por ciento`}
      >
        <motion.div
          className="h-full rounded-full bg-primary-600"
          initial={false}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// QuestionHeader — categoría + pregunta + aclaración
// ---------------------------------------------------------------------------
export function QuestionHeader({
  category,
  question,
  hint,
}: {
  category?: string;
  question: string;
  hint?: string;
}) {
  return (
    <div className="mb-6">
      {category && (
        <p className="mb-2 text-[13px] uppercase tracking-wide text-primary-700">
          {category}
        </p>
      )}
      <h1 className="text-[22px] leading-[30px] text-neutral-950" style={{ fontWeight: 600 }}>
        {question}
      </h1>
      {hint && <p className="mt-2 text-[16px] leading-6 text-neutral-700">{hint}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// OptionCard — tarjeta de opción única (radio) con área táctil completa
// ---------------------------------------------------------------------------
export function OptionCard({
  label,
  description,
  selected,
  onSelect,
  multi = false,
  icon,
}: {
  label: string;
  description?: string;
  selected: boolean;
  onSelect: () => void;
  multi?: boolean;
  icon?: ReactNode;
}) {
  return (
    <button
      type="button"
      role={multi ? "checkbox" : "radio"}
      aria-checked={selected}
      onClick={onSelect}
      className={`group flex w-full items-center gap-3 rounded-[12px] border-2 bg-white px-4 py-3.5 text-left transition-colors duration-150 min-h-[56px]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        ${
          selected
            ? "border-primary-600 bg-primary-50"
            : "border-neutral-200 hover:border-primary-600/60 hover:bg-primary-50/40"
        }`}
    >
      {icon && (
        <span
          className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
            selected ? "bg-primary-100 text-primary-700" : "bg-neutral-100 text-neutral-700"
          }`}
          aria-hidden
        >
          {icon}
        </span>
      )}
      <span className="flex-1">
        <span className="block text-[16px] leading-6 text-neutral-950">{label}</span>
        {description && (
          <span className="mt-0.5 block text-[14px] leading-5 text-neutral-500">
            {description}
          </span>
        )}
      </span>
      <span
        className={`flex size-6 shrink-0 items-center justify-center border-2 transition-colors ${
          multi ? "rounded-[6px]" : "rounded-full"
        } ${
          selected
            ? "border-primary-600 bg-primary-600 text-white"
            : "border-neutral-300 bg-white"
        }`}
        aria-hidden
      >
        {selected && <Check className="size-4" strokeWidth={3} />}
      </span>
    </button>
  );
}

// ---------------------------------------------------------------------------
// RatingScale — 0..10 con botones grandes (no slider)
// ---------------------------------------------------------------------------
export function RatingScale({
  value,
  onSelect,
}: {
  value?: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <div
        className="grid grid-cols-6 gap-2"
        role="radiogroup"
        aria-label="Calificación de 0 a 10"
      >
        {Array.from({ length: 11 }, (_, i) => i).map((n) => {
          const sel = value === String(n);
          return (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={sel}
              aria-label={`${n}${n === 0 ? " (Muy mala)" : n === 10 ? " (Excelente)" : ""}`}
              onClick={() => onSelect(String(n))}
              className={`flex h-12 items-center justify-center rounded-[10px] border-2 text-[16px] transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1
                ${
                  sel
                    ? "border-primary-600 bg-primary-600 text-white"
                    : "border-neutral-200 bg-white text-neutral-800 hover:border-primary-600/60"
                }`}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div className="mt-2 flex justify-between text-[13px] text-neutral-500">
        <span>0 · Muy mala</span>
        <span>10 · Excelente</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Buttons
// ---------------------------------------------------------------------------
export function PrimaryButton({
  children,
  onClick,
  disabled,
  type = "button",
  full = true,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  full?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex min-h-[54px] items-center justify-center rounded-[12px] bg-primary-700 px-6 text-[16px] text-white transition-colors duration-150
        hover:bg-primary-600 active:bg-primary-900 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-500
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        ${full ? "w-full" : ""}`}
      style={{ fontWeight: 600 }}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  onClick,
  full = true,
}: {
  children: ReactNode;
  onClick?: () => void;
  full?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-h-[54px] items-center justify-center rounded-[12px] border-2 border-neutral-300 bg-white px-6 text-[16px] text-neutral-800 transition-colors duration-150
        hover:border-primary-600 hover:text-primary-700
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        ${full ? "w-full" : ""}`}
      style={{ fontWeight: 600 }}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-[8px] px-2 py-1 text-[16px] text-primary-700 underline underline-offset-4 transition-colors hover:text-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// BackButton
// ---------------------------------------------------------------------------
export function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1 rounded-[8px] py-2 pr-3 text-[15px] text-neutral-700 transition-colors hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <ChevronLeft className="size-5" aria-hidden />
      Volver
    </button>
  );
}

// ---------------------------------------------------------------------------
// NavFooter — barra inferior persistente con acción primaria al alcance del pulgar
// ---------------------------------------------------------------------------
export function NavFooter({
  onBack,
  onNext,
  nextLabel = "Continuar",
  nextDisabled,
  saveStatus,
}: {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  saveStatus?: ReactNode;
}) {
  return (
    <div className="sticky bottom-0 z-10 border-t border-neutral-200 bg-white/95 backdrop-blur">
      <Screen className="py-3">
        {saveStatus && <div className="mb-2 flex justify-center">{saveStatus}</div>}
        <div className="flex items-center gap-3">
          {onBack && (
            <div className="shrink-0">
              <BackButton onClick={onBack} />
            </div>
          )}
          {onNext && (
            <div className="flex-1">
              <PrimaryButton onClick={onNext} disabled={nextDisabled}>
                {nextLabel}
              </PrimaryButton>
            </div>
          )}
        </div>
      </Screen>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Banners
// ---------------------------------------------------------------------------
export function InfoBanner({
  children,
  tone = "info",
  icon,
}: {
  children: ReactNode;
  tone?: "info" | "warning" | "success" | "error";
  icon?: ReactNode;
}) {
  const tones = {
    info: "bg-info-100 text-info-700",
    warning: "bg-warning-100 text-warning-700",
    success: "bg-success-100 text-success-700",
    error: "bg-error-100 text-error-700",
  } as const;
  return (
    <div className={`flex items-start gap-3 rounded-[12px] px-4 py-3 ${tones[tone]}`}>
      {icon && <span className="mt-0.5 shrink-0" aria-hidden>{icon}</span>}
      <div className="text-[15px] leading-[22px]">{children}</div>
    </div>
  );
}
