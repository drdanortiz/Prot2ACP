// ============================================================================
// Pantalla genérica de pregunta — patrón conversacional reutilizable
// ============================================================================
import { useState } from "react";
import { AlertCircle } from "lucide-react";
import {
  Screen,
  QuestionHeader,
  OptionCard,
  RatingScale,
  NavFooter,
  InfoBanner,
} from "./ui-kit";
import { Question, Answers, isProxy } from "../survey/data";

export function QuestionScreen({
  question,
  answers,
  value,
  onChange,
  onNext,
  onBack,
  progress,
}: {
  question: Question;
  answers: Answers;
  value: string | string[] | undefined;
  onChange: (v: string | string[]) => void;
  onNext: () => void;
  onBack?: () => void;
  progress: { sectionLabel: string; stepText: string; value: number };
}) {
  const [error, setError] = useState<string | null>(null);
  const proxy = isProxy(answers);
  const text = proxy && question.proxyQuestion ? question.proxyQuestion : question.question;

  const handleNext = () => {
    const empty =
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0);
    if (question.required && empty) {
      setError("Por favor seleccione una opción para continuar.");
      return;
    }
    setError(null);
    onNext();
  };

  const toggleMulti = (v: string) => {
    const cur = Array.isArray(value) ? value : [];
    onChange(cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]);
  };

  return (
    <>
      <Screen className="py-5">
        <div className="mb-6">
          {/* progreso superior */}
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[13px] uppercase tracking-wide text-primary-700">
              {progress.sectionLabel}
            </span>
            <span className="text-[13px] text-neutral-500">{progress.stepText}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-primary-600 transition-[width] duration-300"
              style={{ width: `${progress.value}%` }}
            />
          </div>
        </div>

        <QuestionHeader category={question.category} question={text} hint={question.hint} />

        {question.type === "scale" ? (
          <RatingScale value={value as string} onSelect={onChange} />
        ) : (
          <div
            className="space-y-3"
            role={question.type === "multi" ? "group" : "radiogroup"}
            aria-label={text}
          >
            {question.options?.map((opt) => {
              const selected =
                question.type === "multi"
                  ? Array.isArray(value) && value.includes(opt.value)
                  : value === opt.value;
              return (
                <OptionCard
                  key={opt.value}
                  label={opt.label}
                  description={opt.description}
                  selected={selected}
                  multi={question.type === "multi"}
                  onSelect={() =>
                    question.type === "multi" ? toggleMulti(opt.value) : onChange(opt.value)
                  }
                />
              );
            })}
          </div>
        )}

        {error && (
          <div className="mt-4">
            <InfoBanner tone="error" icon={<AlertCircle className="size-5" />}>
              {error}
            </InfoBanner>
          </div>
        )}
      </Screen>
      <NavFooter
        onBack={onBack}
        onNext={handleNext}
        saveStatus={
          <span className="text-[13px] text-neutral-500">Sus respuestas se guardan automáticamente</span>
        }
      />
    </>
  );
}
