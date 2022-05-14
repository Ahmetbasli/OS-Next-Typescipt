import type { NextComponentType } from 'next';

export type Process = {
  Component: NextComponentType;
  hasWindow: boolean;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
};
