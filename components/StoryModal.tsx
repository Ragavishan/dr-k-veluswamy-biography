"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X } from "lucide-react";
import type { Language, StoryTopic } from "@/data/topics";

type Props = {
  topic: StoryTopic | null;
  language?: Language;
  onClose: () => void;
};

export default function StoryModal({ topic, language = "en", onClose }: Props) {
  useEffect(() => {
    if (!topic) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [topic, onClose]);

  if (!topic) return null;
  const translated = topic.translations[language] ?? topic.translations.en;

  const labels: Record<Language, { close: string; return: string }> = {
    en: { close: "Close story", return: "Return to biography" },
    ta: { close: "கதையை மூடு", return: "வாழ்க்கை வரலாற்றுக்குத் திரும்பு" },
    hi: { close: "कहानी बंद करें", return: "जीवनी पर वापस जाएँ" },
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#020914]/75 p-3 backdrop-blur-sm sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="story-modal-title"
        className="rise-in relative my-auto max-h-[92dvh] w-full max-w-2xl overflow-x-hidden overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >
        <div className="relative isolate h-52 w-full overflow-hidden bg-slate-100 sm:h-72">
          <Image
            src={topic.image}
            alt={translated.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08182c]/70 via-transparent to-transparent" />
          <button
            type="button"
            onClick={onClose}
            aria-label={labels[language].close}
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-slate-900 shadow transition hover:bg-[#ead8b2]"
          >
            <X size={20} />
          </button>
          <div className="pointer-events-none absolute bottom-5 left-6 right-6">
            <p className="mb-2 text-xs font-semibold tracking-[.22em] text-[#ead8b2]">{translated.eyebrow}</p>
            <p className="text-sm text-white/90">{translated.year}</p>
          </div>
        </div>
        <div className="relative z-0 p-6 sm:p-9">
          <div className="mb-4 h-0.5 w-12 bg-[#c9a96e]" />
          <h2 id="story-modal-title" className="serif text-3xl leading-tight text-[#08182c] sm:text-4xl">
            {translated.title}
          </h2>
          <p className="mt-5 whitespace-pre-line break-words text-justify text-base leading-8 text-slate-600">
            {translated.description}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="mt-7 rounded-full bg-[#08182c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#173451] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a96e]"
          >
            {labels[language].return}
          </button>
        </div>
      </section>
    </div>
  );
}
