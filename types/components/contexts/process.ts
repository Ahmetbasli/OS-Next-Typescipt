import type { NextComponentType } from 'next';

export type Process = {
  Component: NextComponentType;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
};
