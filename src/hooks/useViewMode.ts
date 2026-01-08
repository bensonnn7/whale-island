import { useState } from "react";

export type ViewMode = "MAP" | "ISLAND";

export function useViewMode() {
  const [mode, setMode] = useState<ViewMode>("MAP");

  const enterIsland = () => setMode("ISLAND");
  const exitIsland = () => setMode("MAP");

  return { mode, enterIsland, exitIsland };
}
