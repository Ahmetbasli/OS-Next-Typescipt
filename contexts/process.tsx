import useProcessContextState from 'hooks/useProcessContextState';
import type { FC } from 'react';
import React, { createContext } from 'react';
import type {
  ProcessContextState,
  ProcessProviderProps,
} from 'types/contexts/Process';
import { initialContextProcessesState } from 'utils/initialContextstates';

export const { Provider, Consumer } = createContext<ProcessContextState>(
  initialContextProcessesState
);

export const ProcessProvider: FC<ProcessProviderProps> = ({
  children,
  startupProcesses,
}) => (
  <Provider value={useProcessContextState(startupProcesses)}>
    {children}
  </Provider>
);

export const ProcessConsumer = Consumer;
