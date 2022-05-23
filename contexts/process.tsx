import useProcessContextState from 'hooks/useProcessContextState';
import type { FC } from 'react';
import React, { createContext } from 'react';
import type { ProcessContextState } from 'types/contexts/Process';
import { initialContextProcessesState } from 'utils/initialContextstates';

export const ProcessContext = createContext<ProcessContextState>(
  initialContextProcessesState
);

export const ProcessProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ProcessContext.Provider value={useProcessContextState()}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
