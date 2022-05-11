import useProcessContextState from 'hooks/useProcessContextState';
import type { FC } from 'react';
import React, { createContext } from 'react';
import type { ProcessContextState } from 'types/components/contexts/process';

export const ProcessContext = createContext<ProcessContextState>({
  processes: {},
});

export const ProcessProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ProcessContext.Provider value={useProcessContextState()}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
