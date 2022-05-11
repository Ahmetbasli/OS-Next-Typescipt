import type { FC } from 'react';
import React, { createContext, useMemo } from 'react';
import type Processes from 'types/components/utils/processDirectory';
import processDirectory from 'utils/processDirectory';

type ProcessContextState = {
  processes: Processes;
};

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
