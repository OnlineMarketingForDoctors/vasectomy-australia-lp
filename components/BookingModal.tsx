"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { clinics, site } from "@/lib/content";

const BookingContext = createContext<{ open: () => void }>({ open: () => {} });

/** `const { open } = useBooking()` from any client component. */
export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusTo = useRef<HTMLElement | null>(null);

  const open = useCallback(() => {
    returnFocusTo.current = document.activeElement as HTMLElement;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    returnFocusTo.current?.focus();
  }, []);

  // Escape to close, and keep Tab inside the dialog while it is open.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Move focus into the dialog once it has painted.
    const t = window.setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLElement>("button, a[href]")
        ?.focus();
    }, 20);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(t);
    };
  }, [isOpen, close]);

  return (
    <BookingContext.Provider value={{ open }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
        >
          <button
            type="button"
            aria-label="Close booking options"
            onClick={close}
            className="absolute inset-0 h-full w-full cursor-default bg-teal-deep/55 backdrop-blur-[3px]"
            style={{ animation: "fadeIn .2s ease both" }}
          />

          <div
            ref={panelRef}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-paper p-6 shadow-2xl sm:rounded-3xl sm:p-8"
            style={{ animation: "panelIn .28s cubic-bezier(.16,1,.3,1) both" }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="u-eyebrow">Book online</p>
                <h2 id="booking-title" className="u-display mt-1 text-2xl sm:text-3xl">
                  Which clinic suits you?
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="-mr-1 -mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink-soft transition hover:bg-sand hover:text-ink"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <ul className="space-y-2">
              {clinics.map((c) => (
                <li key={c.suburb}>
                  <a
                    href={c.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-bone/60 p-4 transition hover:border-teal/35 hover:bg-bone"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="font-semibold text-ink">{c.suburb}</span>
                        {c.flagship && (
                          <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal">
                            Main centre
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block truncate text-sm text-ink-soft">
                        {c.name}
                      </span>
                    </span>
                    <svg
                      width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"
                      className="shrink-0 text-teal transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-5 border-t border-line pt-4 text-sm text-ink-soft">
              Not sure yet? Book a{" "}
              <a
                href={site.phoneConsult}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal underline underline-offset-2"
              >
                free phone consult
              </a>{" "}
              or call{" "}
              <a href={site.phoneHref} className="font-semibold text-teal underline underline-offset-2">
                {site.phoneLabel}
              </a>
              .
            </p>
          </div>

          <style>{`
            @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
            @keyframes panelIn {
              from { opacity: 0; transform: translateY(14px) scale(.985) }
              to   { opacity: 1; transform: none }
            }
            @media (prefers-reduced-motion: reduce) {
              [style*="panelIn"], [style*="fadeIn"] { animation: none !important }
            }
          `}</style>
        </div>
      )}
    </BookingContext.Provider>
  );
}
