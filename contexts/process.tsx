import useProcessContextState from 'hooks/useProcessContextState';
import type { FC } from 'react';
import React, { createContext } from 'react';
import type {
  ProcessContextState,
  ProcessProviderProps,
} from 'types/contexts/Process';
import { initialContextProcessesState } from 'utils/initialContextstates';

export const ProcessContext = createContext<ProcessContextState>(
  initialContextProcessesState
);

export const ProcessProvider: FC<ProcessProviderProps> = ({
  children,
  startupProcesses,
}) => (
  <ProcessContext.Provider value={useProcessContextState(startupProcesses)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
