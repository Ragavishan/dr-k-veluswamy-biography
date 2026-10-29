
"use client";

import { useEffect, type ReactNode } from "react";

export default function ContentProtection({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    const isEditable = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;

      return Boolean(
        target.closest(
          'input, textarea, select, [contenteditable="true"], [data-allow-copy="true"]'
        )
      );
    };

    const blockContextMenu = (event: MouseEvent) => {
      if (!isEditable(event.target)) {
        event.preventDefault();
      }
    };

    const blockCopy = (event: ClipboardEvent) => {
      if (!isEditable(event.target)) {
        event.preventDefault();
      }
    };

    const blockShortcuts = (event: KeyboardEvent) => {
      if (isEditable(event.target)) return;

      const key = event.key.toLowerCase();
      const modifier = event.ctrlKey || event.metaKey;

      if (
        modifier &&
        ["c", "x", "s", "u", "p", "a"].includes(key)
      ) {
        event.preventDefault();
      }

      if (event.key === "PrintScreen") {
        // Best effort only; browsers may ignore this.
        event.preventDefault();
      }
    };

    const blockDrag = (event: DragEvent) => {
      if (!isEditable(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("copy", blockCopy);
    document.addEventListener("cut", blockCopy);
    document.addEventListener("keydown", blockShortcuts, true);
    document.addEventListener("dragstart", blockDrag);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("cut", blockCopy);
      document.removeEventListener("keydown", blockShortcuts, true);
      document.removeEventListener("dragstart", blockDrag);
    };
  }, []);

  return <div className="protected-content">{children}</div>;
}
