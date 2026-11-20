"use client";

import { useSyncExternalStore } from "react";
import type { NodeKind } from "./graph";

// One small shared store so the graph, the panel and the page sections stay in step.
type State = {
  selected: string | null; // opens the detail panel
  spotlight: string | null; // follows hover and scroll, lighter than a selection
  kind: NodeKind | null; // legend filter
  exploring: boolean; // touch devices: graph takes over the screen
};

let state: State = { selected: null, spotlight: null, kind: null, exploring: false };
const listeners = new Set<() => void>();

export function setState(patch: Partial<State>) {
  const next = { ...state, ...patch };
  if (Object.keys(patch).every((k) => next[k as keyof State] === state[k as keyof State])) return;
  state = next;
  listeners.forEach((l) => l());
}

export function getState() {
  return state;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const serverState = state;

export function useStore<T>(pick: (s: State) => T): T {
  return useSyncExternalStore(subscribe, () => pick(state), () => pick(serverState));
}
