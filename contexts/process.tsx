import type { FC } from 'react';
import React, { createContext, useMemo } from 'react';
import type { ProcessContextState } from 'types/components/contexts/process';
import processDirectory from 'utils/processDirectory';

export const ProcessContext = createContext<ProcessContextState>({
  processes: {},
});

export const ProcessProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const processes = useMemo(() => ({ processes: processDirectory }), []);

  return (
    <ProcessContext.Provider value={processes}>
      {children}
    </ProcessContext.Provider>
  );
};

export const ProcessConsumer = ProcessContext.Consumer;
