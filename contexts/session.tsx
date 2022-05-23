import useSessionContextState from 'hooks/useSessionContextState';
import type { FC } from 'react';
import React, { createContext } from 'react';
import type { SessionContextState } from 'types/contexts/Session';
import { initialContextSessionState } from 'utils/initialContextstates';

export const SessionContext = createContext<SessionContextState>(
  initialContextSessionState
);

export const SessionProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
